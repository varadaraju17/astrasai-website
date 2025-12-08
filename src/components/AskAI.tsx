'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Zap, Cpu, Minimize2 } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: 'Hello! 👋 I\'m Astra, your AI assistant. How can I help you today?'
}

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleOpen = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      setMessages([WELCOME_MESSAGE])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    const userQuery = query.trim()
    setIsLoading(true)

    const newMessages = [...messages, { role: 'user' as const, content: userQuery }]
    setMessages(newMessages)
    setQuery('')

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const data = await response.json()
      if (data.error) throw new Error(data.error)

      const assistantResponse = data.response || 'Sorry, I couldn\'t generate a response. Please try again.'
      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }])
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
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 w-20 h-20 rounded-full z-50 group flex items-center justify-center"
            aria-label="Ask AI Assistant"
            style={{ marginBottom: 'env(safe-area-inset-bottom, 0)' }}
          >
            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-hologram-cyan/20 animate-ping duration-[3s]" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-hologram-cyan/40 to-hologram-purple/40 blur-md group-hover:blur-lg transition-all duration-500" />

            {/* Button Content */}
            <div className="relative w-full h-full rounded-full bg-black/80 backdrop-blur-xl border border-hologram-cyan/30 overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] transition-all duration-500 flex items-center justify-center">
              <Image
                src="/3d_ai_bot_avatar.png"
                alt="Astra AI"
                fill
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hologram-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full sm:max-w-[450px] h-[85vh] sm:h-[700px] bg-black/95 backdrop-blur-2xl rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
            >
              {/* Premium Glass Background - Gradient Removed */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-hologram-cyan/30 bg-black shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center relative">
                      <Image
                        src="/3d_ai_bot_avatar.png"
                        alt="Astra AI"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-hologram-cyan/10 mix-blend-overlay" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                      Astra AI <Sparkles className="w-4 h-4 text-hologram-cyan animate-pulse" />
                    </h2>
                    <p className="text-[10px] text-hologram-cyan/80 font-mono tracking-widest flex items-center gap-1">
                      <Zap className="w-3 h-3" /> ONLINE • NEURAL LINK ACTIVE
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors group"
                >
                  <Minimize2 className="w-5 h-5 group-hover:scale-90 transition-transform" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent relative z-10">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-hologram-cyan/30 bg-black mr-3 flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(0,240,255,0.2)] flex items-center justify-center relative">
                        <Image
                          src="/3d_ai_bot_avatar.png"
                          alt="Astra AI"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-hologram-cyan/10 mix-blend-overlay" />
                      </div>
                    )}
                    <div className={`max-w-[85%] p-4 rounded-2xl font-sans text-sm leading-relaxed shadow-lg backdrop-blur-md ${msg.role === 'user'
                      ? 'bg-gradient-to-br from-hologram-cyan/20 to-hologram-purple/20 border border-white/10 text-white rounded-tr-none shadow-[0_0_15px_rgba(0,240,255,0.05)]'
                      : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                      }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-hologram-cyan/30 bg-black mr-3 flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(0,240,255,0.2)] flex items-center justify-center relative">
                      <Image
                        src="/3d_ai_bot_avatar.png"
                        alt="Astra AI"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-hologram-cyan/10 mix-blend-overlay" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 rounded-tl-none backdrop-blur-md">
                      <div className="flex gap-1.5">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 rounded-full bg-hologram-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-hologram-purple shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 rounded-full bg-hologram-pink shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-black/80 backdrop-blur-xl border-t border-white/10 relative z-10">
                <form onSubmit={handleSubmit} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-hologram-cyan/30 via-hologram-purple/30 to-hologram-cyan/30 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="relative flex items-center bg-black rounded-xl border border-white/10 overflow-hidden">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ask anything..."
                      className="flex-1 px-5 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none font-sans"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !query.trim()}
                      className="p-3 mr-2 rounded-lg text-hologram-cyan hover:bg-hologram-cyan/10 disabled:opacity-50 disabled:hover:bg-transparent transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3 flex items-center justify-center gap-2">
                  <Cpu className="w-3 h-3 text-gray-600" />
                  <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">Powered by Astras Neural Core</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}