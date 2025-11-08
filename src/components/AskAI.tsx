'use client'

import { useState } from 'react'
import { MessageSquare, Send, X } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: 'Hello! 👋 I\'m Astra, your AI assistant from Astras AI. How can I help you today?'
}

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [isLoading, setIsLoading] = useState(false)
  
  // Reset to welcome message when modal is opened for the first time
  const handleOpen = () => {
    setIsOpen(true)
    // Only reset if messages array is empty (shouldn't happen, but safety check)
    if (messages.length === 0) {
      setMessages([WELCOME_MESSAGE])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    const userQuery = query.trim()
    setIsLoading(true)
    setMessages(prev => [...prev, { role: 'user', content: userQuery }])
    setQuery('') // Clear input immediately

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userQuery })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      let data
      try {
        data = await response.json()
      } catch (parseError) {
        console.error('Error parsing response:', parseError)
        throw new Error('Failed to parse response from server')
      }
      
      if (data.error) {
        console.error('API returned error:', data.error)
        throw new Error(data.error)
      }

      const assistantResponse = data.response || 'Sorry, I couldn\'t generate a response. Please try again.'
      if (assistantResponse && assistantResponse.trim()) {
        setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }])
      } else {
        throw new Error('Empty response from server')
      }
    } catch (error) {
      console.error('Error in AskAI:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact us at services@astrasai.in'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-trishul-500 via-mystic-500 to-chakra-500 text-white shadow-lg hover:shadow-trishul-500/25 transition-all duration-300 z-40"
        aria-label="Ask AI Assistant"
        style={{ marginBottom: 'env(safe-area-inset-bottom, 0)' }}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-2xl h-[600px] glass-card backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-mystic-300/20 flex items-center justify-between bg-gradient-to-r from-trishul-500/20 via-mystic-500/20 to-chakra-500/20">
              <h2 className="text-xl font-display text-cosmic-100">Ask Astra AI</h2>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-lg hover:bg-white/10 transition-colors">
                <X className="w-5 h-5 text-cosmic-100" />
              </button>
            </div>

            <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl font-sans ${msg.role === 'user' ? 'bg-gradient-to-r from-trishul-500 to-mystic-500 text-white' : 'bg-mystic-900/50 text-cosmic-100/90 border border-mystic-300/20'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl bg-mystic-900/50 text-cosmic-100/90 border border-mystic-300/20">
                    <span className="inline-flex gap-1 font-sans">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-4 bg-cosmic-900/80 backdrop-blur-sm border-t border-mystic-300/20">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about our services, technology, or company..."
                  className="w-full px-4 py-2 pr-12 bg-mystic-900/50 border border-mystic-300/20 rounded-lg text-cosmic-100 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-trishul-500 focus:border-trishul-500 transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cosmic-100 hover:text-trishul-300 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}