'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Zap, Cpu, Minimize2, User, Bot } from 'lucide-react'
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
          <>
            {/* Floating WhatsApp Trigger */}
            <motion.a
              href="https://wa.me/918197489255"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-[5.5rem] right-6 w-14 h-14 rounded-full z-50 group flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] transition-all duration-300"
              aria-label="Chat on WhatsApp"
              style={{ marginBottom: 'env(safe-area-inset-bottom, 0)' }}
            >
              {/* Pulsing Green Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping duration-[2s] pointer-events-none" />
              
              {/* Icon Container (Official WhatsApp Green/White Style) */}
              <div className="relative w-full h-full rounded-full bg-[#25D366] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.2 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </motion.a>

            {/* Chatbot Toggle Trigger */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="fixed bottom-6 right-6 w-14 h-14 rounded-full z-50 group flex items-center justify-center shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.5)] transition-all duration-300"
              aria-label="Ask AI Assistant"
              style={{ marginBottom: 'env(safe-area-inset-bottom, 0)' }}
            >
              {/* Pulsing Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping duration-[2.5s] pointer-events-none" />
              
              {/* Button Content (Official AI Cyan/Blue Gradient Style) */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Bot className="w-7 h-7 text-white" />
              </div>
            </motion.button>
          </>
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
              className="relative w-full sm:max-w-[450px] h-[85vh] sm:h-[700px] bg-black/40 backdrop-blur-3xl rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col pointer-events-auto"
            >
              {/* Premium Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

              {/* Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/5 relative z-10 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-cyan-500/30 bg-black shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center relative">
                      <Bot className="w-6 h-6 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                      Astra AI <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    </h2>
                    <p className="text-[10px] text-cyan-400/80 font-mono tracking-widest flex items-center gap-1">
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
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500/30 bg-black mr-3 flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(0,240,255,0.2)] flex items-center justify-center relative">
                        <Bot className="w-5 h-5 text-cyan-400" />
                      </div>
                    )}
                    <div className={`max-w-[85%] p-4 rounded-2xl font-sans text-sm leading-relaxed shadow-lg backdrop-blur-md ${msg.role === 'user'
                      ? 'bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/20 text-white rounded-tr-none shadow-[0_0_15px_rgba(0,240,255,0.05)]'
                      : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                      }`}>
                      {msg.content}
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500/30 bg-black ml-3 flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(168,85,247,0.2)] flex items-center justify-center relative">
                        <User className="w-4 h-4 text-purple-400" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500/30 bg-black mr-3 flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(0,240,255,0.2)] flex items-center justify-center relative">
                      <Bot className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/5 rounded-tl-none backdrop-blur-md">
                      <div className="flex gap-1.5">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-black/60 backdrop-blur-xl border-t border-white/10 relative z-10">
                <form onSubmit={handleSubmit} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-600/30 to-cyan-500/30 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="relative flex items-center bg-black/40 rounded-xl border border-white/10 overflow-hidden">
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
                      className="p-3 mr-2 rounded-lg text-cyan-400 hover:bg-cyan-500/10 disabled:opacity-50 disabled:hover:bg-transparent transition-all duration-300"
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