import { NextResponse } from 'next/server'
import { astrasResponder } from '@/lib/ai'

export async function POST(req: Request) {
  try {
    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON', response: 'Please provide a valid request.' },
        { status: 400 }
      )
    }

    const { messages, query } = body

    // Handle both new format (messages array) and legacy format (single query)
    let history = messages
    if (!history && query) {
      history = [{ role: 'user', content: query }]
    }

    if (!history || !Array.isArray(history) || history.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request', response: 'Please provide a valid question.' },
        { status: 400 }
      )
    }

    // Get response from Gemini API using full history
    const response = await astrasResponder(history)

    if (!response || response.trim().length === 0) {
      return NextResponse.json({
        response: 'Sorry, I couldn\'t generate a response. Please try again or contact us at services@astrasai.in'
      })
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error in /api/ask:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        response: 'Sorry, I encountered an error. Please try again or contact us at services@astrasai.in'
      },
      { status: 500 }
    )
  }
}