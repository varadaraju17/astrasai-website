type Msg = { role:'user'|'assistant', content:string }
const WEBSITE_KB = `Astras AI: Next-Gen Intelligence, Next-Level You.
We build AI-powered ecosystems that help startups scale faster, businesses grow smarter, and people achieve more.

Mission: Strategic partner with proprietary AI + human expertise.

Brahmastra AI (For Businesses & Startups):
- AI-powered websites and applications with real-time personalization
- Startup MVP development with AI acceleration
- Conversational AI and WhatsApp bots for customer engagement
- Predictive analytics and BI dashboards
- AI-driven SEO, content creation, and marketing automation

Sudarshana Chakra (For Individuals & Professionals):
- AI research and academic intelligence tools
- Resume and LinkedIn optimization
- Interview coaching and mock AI evaluations
- Skill pathways and learning automation
- Personal AI mentors for career growth

Technology: Next.js, advanced AI/ML models, cloud infrastructure, privacy-first architecture.

Vision: Democratize AI technology while maintaining highest standards of ethics and transparency. We aim to be a strategic partner that combines proprietary AI with human expertise to create meaningful impact.

Contact: services@astrasai.in or +91 8197489255`
export async function astrasResponder(history: Msg[]): Promise<string> {
  const last = history[history.length-1]?.content ?? ''
  if(!process.env.GEMINI_API_KEY){ 
    console.log('GEMINI_API_KEY not found, using fallback')
    return fallbackAnswer(last) 
  }
  
  const system = `You are Astra, the friendly and helpful AI assistant for Astras AI. Your role is to help users learn about Astras AI's services and solutions.

Guidelines:
- Be conversational, friendly, and enthusiastic
- Answer questions using ONLY the knowledge base provided below
- Keep responses concise but informative (2-4 sentences typically)
- If asked about something not in the knowledge base, politely suggest they email services@astrasai.in for more information
- Always be helpful and positive
- Use emojis sparingly and appropriately (👋 for greetings)
- For greetings, introduce yourself as Astra from Astras AI

Knowledge Base:
${WEBSITE_KB}

Remember: Answer naturally and conversationally, as if you're a knowledgeable team member helping a potential client.`
  
  try{
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not set')
      return fallbackAnswer(last)
    }

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method:'POST', 
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ 
        contents:[{ role:'user', parts:[{ text:last }]}], 
        systemInstruction:{ role:'system', parts:[{ text: system }]},
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    })
    
    if(!res.ok) {
      const errorText = await res.text().catch(() => 'Unable to read error response')
      console.error('Gemini API error:', res.status, errorText)
      // Don't throw, just return fallback
      return fallbackAnswer(last)
    }
    
    const data = await res.json().catch((parseError) => {
      console.error('Error parsing Gemini API response:', parseError)
      return null
    })
    
    // Check for API errors in response
    if (data.error) {
      console.error('Gemini API returned error:', data.error)
      return fallbackAnswer(last)
    }
    
    // Check for safety ratings that blocked the response
    if (data.promptFeedback?.blockReason) {
      console.warn('Gemini API blocked content:', data.promptFeedback.blockReason)
      return fallbackAnswer(last)
    }
    
    if (!data || !data.candidates || data.candidates.length === 0) {
      console.warn('Gemini API returned empty response')
      return fallbackAnswer(last)
    }
    
    const candidate = data.candidates[0]
    
    // Check if candidate was blocked
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
  }catch(error){
    console.error('Error calling Gemini API:', error instanceof Error ? error.message : error)
    return fallbackAnswer(last)
  }
}
function fallbackAnswer(q:string): string {
  const lower = q.toLowerCase().trim()
  
  // Handle greetings
  if(lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
    return `Hello! 👋 I'm Astra, your AI assistant from Astras AI. Astras AI: Next-Gen Intelligence, Next-Level You. We build AI-powered ecosystems that help startups scale faster, businesses grow smarter, and people achieve more. How can I help you today?`
  }
  
  // Handle company/about questions
  if(lower.includes('what is astras') || lower.includes('who is astras') || lower.includes('about astras')) {
    return `Astras AI: Next-Gen Intelligence, Next-Level You. We build AI-powered ecosystems that help startups scale faster, businesses grow smarter, and people achieve more. We're a strategic partner combining proprietary AI with human expertise. We offer Brahmastra AI for businesses and Sudarshana Chakra for individuals.`
  }
  
  // Handle services questions
  if(lower.includes('service') || lower.includes('what are') || lower.includes('offer') || lower.includes('provide')) {
    return `We offer two main service categories:

**Brahmastra AI** (For Businesses & Startups):
AI-powered websites, startup MVPs, conversational AI & WhatsApp bots, predictive analytics, and AI-driven marketing.

**Sudarshana Chakra** (For Individuals & Professionals):
AI research tools, career acceleration, resume optimization, interview coaching, and personalized AI mentors.

For more details, email us at services@astrasai.in or call +91 8197489255.`
  }
  
  // Handle Brahmastra questions
  if(lower.includes('brahmastra')) {
    return `Brahmastra AI is our service for businesses and startups. We build AI-powered websites & apps, accelerate startup MVPs, deploy WhatsApp AI bots, provide predictive analytics, and offer AI-driven marketing (content, ads, SEO).`
  }
  
  // Handle Sudarshana questions
  if(lower.includes('sudarshana') || lower.includes('career')) {
    return `Sudarshana Chakra accelerates people: AI-assisted research & academic work, resume/LinkedIn optimization, interview simulations, branding, and guided AI upskilling. Perfect for individuals, students, and professionals.`
  }
  
  // Default response
  return `Astras AI: Next-Gen Intelligence, Next-Level You. We build AI-powered ecosystems that help startups scale faster, businesses grow smarter, and people achieve more. 

We offer Brahmastra AI for businesses and Sudarshana Chakra for individuals. Feel free to ask about our services, or contact us at services@astrasai.in for more information!`
}
