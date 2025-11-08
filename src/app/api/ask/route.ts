import { NextResponse } from 'next/server'
import { astrasResponder } from '@/lib/ai'

export async function POST(req: Request) {
  try {
    let body
    try {
      body = await req.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON', response: 'Please provide a valid request.' },
        { status: 400 }
      )
    }
    
    const { query } = body
    
    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Invalid query', response: 'Please provide a valid question.' },
        { status: 400 }
      )
    }
    
    const trimmedQuery = query.trim()
    
    // Check for empty queries
    if (trimmedQuery.length === 0) {
      return NextResponse.json({ 
        response: 'Hello! 👋 I\'m Astra, your AI assistant from Astras AI. How can I help you today?' 
      })
    }
    
    // Use Gemini API to generate response
    // Create a message history with just the user's query
    const messages = [
      { role: 'user' as const, content: trimmedQuery }
    ]
    
    // Get response from Gemini API
    const response = await astrasResponder(messages)
    
    if (!response || response.trim().length === 0) {
      return NextResponse.json({
        response: 'Sorry, I couldn\'t generate a response. Please try again or contact us at services@astrasai.in'
      })
    }
    
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error in /api/ask:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { 
        error: 'Internal server error',
        response: 'Sorry, I encountered an error. Please try again or contact us at services@astrasai.in' 
      },
      { status: 500 }
    )
  }
}