import { NextResponse, type NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const redirectUrl = searchParams.get('url')

  if (!redirectUrl) {
    return new Response('URL parameter is required', { status: 400 })
  }

  return NextResponse.redirect(new URL(redirectUrl, request.nextUrl), 302)
}
