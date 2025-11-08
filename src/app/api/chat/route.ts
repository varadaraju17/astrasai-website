import { NextRequest, NextResponse } from 'next/server'
import { astrasResponder } from '@/lib/ai'
export async function POST(req: NextRequest) {
  try { const { messages } = await req.json(); const reply = await astrasResponder(messages ?? []); return NextResponse.json({ reply }) }
  catch (e) { console.error(e); return NextResponse.json({ reply: 'Sorry, something went wrong.' }, { status: 200 }) }
}
