'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Zap, Cpu, Minimize2, User } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import botAvatar from '../../public/3d_ai_bot_avatar.png'

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
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping duration-[3s]" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-600/40 blur-md group-hover:blur-lg transition-all duration-500" />

            {/* Button Content */}
            <div className="relative w-full h-full rounded-full bg-black border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] transition-all duration-500 flex items-center justify-center">
              <Image
                src={botAvatar}
                alt="Astra AI"
                fill
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                      <Image
                        src={botAvatar}
                        alt="Astra AI"
                        fill
                        className="object-cover"
                      />
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
                        <Image
                          src={botAvatar}
                          alt="Astra AI"
                          fill
                          className="object-cover"
                        />
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
                      <Image
                        src={botAvatar}
                        alt="Astra AI"
                        fill
                        className="object-cover"
                      />
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