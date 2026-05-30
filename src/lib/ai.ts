type Msg = { role: 'user' | 'assistant', content: string }

const WEBSITE_KB = `Astras AI: Next-Gen Intelligence, Next-Level You.
We build AI-powered ecosystems that help startups scale faster, businesses grow smarter, and people achieve more.
Headquarters: Bangalore, Karnataka, India. Serving clients globally (US, UK, UAE, Singapore).
Contact Email: services@astrasai.in
Contact Phone/WhatsApp: +91 8197489255

SERVICES & PRICING PLANS (All websites are fully responsive, built on Next.js 14, and highly optimized):

1. AI Websites (Brahmastra AI Business Suite):
- Price: Starts from ₹15,000. Standard AI business sites range from ₹25,000 to ₹60,000. Complex enterprise platforms range from ₹75,000 to ₹2,00,000+.
- Timeline: Typically 2 to 6 weeks. Standard sites take 2-3 weeks; complex enterprise web applications take 4-8 weeks.

2. Mobile App Development (Brahmastra AI Business Suite):
- Scope: High-end cross-platform iOS & Android mobile apps built on Flutter and React Native.
- Price: Customized based on request.
- Timeline: 6 to 12 weeks. Basic builds take 6-8 weeks; custom voice, AI models, or real-time databases take 10-16 weeks.

3. Custom AI Agents (Brahmastra AI Business Suite):
- Scope: Autonomous customer support agents, automated sales pipelines, leads qualification bots, custom LangChain integrations.
- Benefit: Reduces corporate operational costs by up to 60% and guarantees 24/7 autonomous task execution.

4. Startup MVP Acceleration (Brahmastra AI Business Suite):
- Price: Starts at ₹50,000.
- Timeline: 3 to 6 weeks. Helps founders go from conceptual idea to fully working, investor-ready prototypes.

5. AI Digital Marketing & SEO (Brahmastra AI Business Suite):
- Scope: Full technical SEO, active keyword parsing, custom AI content calendars, Google Ads optimization.
- Timeline: Measures high Page 1 search authority ranking improvements within 60 to 90 days.

6. Sudarshana Chakra (Personal & Academic Acceleration):
- Scope: IEEE/Springer academic project implementation, viva preparation support, ATS-optimized resume building, LinkedIn profile refinement, and active AI-evaluation career mentorship.

PAYMENT POLICY:
Standard 50% advance payment, and 50% upon final delivery. EMI arrangements are available for large custom builds. 30 days of free post-launch support included; ongoing maintenance starts at ₹5,000/month.`;

export async function astrasResponder(history: Msg[]): Promise<string> {
  const last = history[history.length - 1]?.content ?? ''
  if (!process.env.GEMINI_API_KEY) {
    console.log('GEMINI_API_KEY not found, using fallback')
    return fallbackAnswer(last)
  }

  const system = `You are Astra, the friendly and helpful AI assistant for Astras AI. Your role is to help users learn about Astras AI's services and solutions.

Guidelines:
- Be conversational, friendly, and enthusiastic
- Answer questions using ONLY the knowledge base provided below
- Keep responses concise but highly informative, referencing exact prices, timelines, or services
- If asked about something not in the knowledge base, politely suggest they email services@astrasai.in or WhatsApp +91 8197489255
- Always be helpful and positive
- Use emojis sparingly and appropriately (👋 for greetings)
- For greetings, introduce yourself as Astra from Astras AI

Knowledge Base:
${WEBSITE_KB}

Remember: Answer naturally and conversationally, as if you're a knowledgeable team member helping a potential client.`

  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not set')
      return fallbackAnswer(last)
    }

    // Convert internal message format to Gemini API format
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: contents,
        systemInstruction: { role: 'system', parts: [{ text: system }] },
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    })

    if (!res.ok) {
      const errorText = await res.text().catch(() => 'Unable to read error response')
      console.error('Gemini API error:', res.status, errorText)
      return fallbackAnswer(last)
    }

    const data = await res.json().catch((parseError) => {
      console.error('Error parsing Gemini API response:', parseError)
      return null
    })

    if (data?.error) {
      console.error('Gemini API returned error:', data.error)
      return fallbackAnswer(last)
    }

    if (data?.promptFeedback?.blockReason) {
      console.warn('Gemini API blocked content:', data.promptFeedback.blockReason)
      return fallbackAnswer(last)
    }

    if (!data || !data.candidates || data.candidates.length === 0) {
      console.warn('Gemini API returned empty response')
      return fallbackAnswer(last)
    }

    const candidate = data.candidates[0]

    if (candidate.finishReason === 'SAFETY' || candidate.finishReason === 'RECITATION') {
      console.warn('Gemini API blocked response due to safety/recitation:', candidate.finishReason)
      return fallbackAnswer(last)
    }

    const responseText = candidate?.content?.parts?.[0]?.text
    if (!responseText || responseText.trim().length === 0) {
      console.warn('Gemini API returned empty text in response')
      return fallbackAnswer(last)
    }

    return responseText.trim()
  } catch (error) {
    console.error('Error calling Gemini API:', error instanceof Error ? error.message : error)
    return fallbackAnswer(last)
  }
}

function fallbackAnswer(q: string): string {
  const lower = q.toLowerCase().trim()

  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
    return `Hello! 👋 I'm Astra, your AI assistant from Astras AI. How can I help you today? We specialize in AI-powered website development (starting from ₹15,000), custom mobile apps, business-grade AI agents, and career mentorship services.`
  }

  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('charge')) {
    return `Our AI website development services start at ₹15,000 for basic layouts. Standard AI business websites cost ₹25,000–₹60,000, while complex enterprise platforms range between ₹75,000–₹2,00,000+. Startup MVPs start at ₹50,000. Standard payment is 50% advance and 50% on delivery. EMI options are available!`
  }

  if (lower.includes('time') || lower.includes('timeline') || lower.includes('how long') || lower.includes('duration')) {
    return `Building an AI-powered website typically takes 2–6 weeks. A standard business website takes 2–3 weeks, while custom enterprise platforms and database systems take 4–8 weeks. Our mobile app development timeline is 6–12 weeks.`
  }

  if (lower.includes('agent') || lower.includes('automation') || lower.includes('bot')) {
    return `Astras AI builds custom autonomous AI agents that work 24/7 to handle support, orders, emails, and data synchronization. Our bots reduce operational overhead by up to 60% and improve business productivity.`
  }

  if (lower.includes('mobile') || lower.includes('app') || lower.includes('flutter') || lower.includes('react native')) {
    return `We develop high-performance cross-platform iOS and Android mobile apps using Flutter and React Native. Timelines range from 6 to 12 weeks, depending on whether you need custom fine-tuned voice or AI models.`
  }

  if (lower.includes('student') || lower.includes('academic') || lower.includes('career') || lower.includes('resume') || lower.includes('sudarshana')) {
    return `Our Sudarshana Chakra program supports individuals! We provide professional IEEE/Springer academic project implementation, ATS-shredding resumes, LinkedIn profile refinement, and mock AI evaluations to secure high-paying jobs.`
  }

  if (lower.includes('where') || lower.includes('located') || lower.includes('bangalore') || lower.includes('office') || lower.includes('address')) {
    return `Astras AI is headquartered in Bangalore, Karnataka, India. While we are based in Bangalore, we serve startups and enterprise clients globally, including in the US, UK, UAE, and Singapore.`
  }

  if (lower.includes('seo') || lower.includes('marketing') || lower.includes('google')) {
    return `Yes! We provide full technical SEO, Google Ads (SEM), social media management, and custom content generation. Our technical SEO optimizations typically rank your key assets on Page 1 of Search and AI engines in 60–90 days.`
  }

  return `I'm Astra from Astras AI! We build premium AI websites (starting at ₹15,000 in 2–6 weeks), custom mobile apps, corporate AI agents, digital marketing, and academic project support. Contact us directly at services@astrasai.in or WhatsApp +91 8197489255 for custom scopes!`
}
