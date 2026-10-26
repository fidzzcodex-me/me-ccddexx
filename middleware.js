import { NextResponse } from 'next/server'

const blockedPaths =
  /(^|\/)(\.[^/]+|node_modules|package(-lock)?\.json|vercel\.json|next\.config\.m?js|wp-admin|wp-login\.php|xmlrpc\.php|phpmyadmin)(\/|$)|\.(env|git|sql|bak|log|map|php|asp|aspx|jsp|ini|ya?ml)$/i

const blockedAgents =
  /(curl|wget|python-requests|scrapy|httpclient|go-http-client|aiohttp|libwww|okhttp|headlesschrome|phantomjs|httrack)/i

export function middleware(request) {
  const { pathname } = request.nextUrl
  const agent = request.headers.get('user-agent') || ''

  if (!agent || blockedAgents.test(agent) || blockedPaths.test(pathname)) {
    return NextResponse.rewrite(new URL('/guard-denied', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.svg).*)'],
}
