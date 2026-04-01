import { NextResponse } from 'next/server';

/**
 * Legacy admin route — redirige vers /adminos
 */
export async function GET() {
  return NextResponse.json({ message: 'Utilisez /api/adminos/pages' }, { status: 301 });
}
