'use client'

import { useState, useRef, useEffect } from 'react'

type Msg = {
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'assistant', content: '👋 Hello! I’m Astra, your AI assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    const text = input.trim()
    if (!text) return

    setInput('')
    const next: Msg[] = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(-6) }),
      })

      const data = await res.json()
      const reply =
        data.reply ||
        "I'm having a little trouble reaching the AI engine right now. Please try again shortly."
      setMessages((m) => [...m, { role: 'assistant', content: reply }])
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: '⚠️ There was an error. Please try again later.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send()
  }

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div className="card-aura w-[350px] h-[480px] glass-card backdrop-blur-lg border border-mystic-300/20 rounded-2xl flex flex-col overflow-hidden shadow-xl">
        {/* Chat Area */}
        <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`px-4 py-2 max-w-[80%] rounded-xl text-sm leading-snug font-sans ${
                msg.role === 'user'
                  ? 'bg-mystic-900/50 text-cosmic-100 self-end rounded-br-lg border border-mystic-300/20'
                  : 'bg-gradient-to-r from-trishul-500 to-mystic-500 text-white font-medium self-start rounded-bl-lg'
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="self-start bg-trishul-500/10 text-trishul-300 text-sm font-sans font-medium px-4 py-2 rounded-xl animate-pulse border border-trishul-500/20">
              Thinking<span className="dots">...</span>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-mystic-300/20 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-grow bg-mystic-900/50 border border-mystic-300/20 rounded-full px-4 py-2 text-cosmic-100 placeholder-white/50 outline-none focus:ring-2 focus:ring-trishul-500 focus:border-trishul-500 transition-all font-sans"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <button
            onClick={send}
            className="bg-gradient-to-r from-trishul-500 via-mystic-500 to-chakra-500 text-white font-display font-bold rounded-full px-4 py-2 shadow-md hover:scale-105 transition-transform"
            disabled={loading}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  )
}
