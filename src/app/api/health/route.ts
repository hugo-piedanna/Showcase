import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Vérifier que l'application est opérationnelle
    const timestamp = new Date().toISOString();
    
    return NextResponse.json({
      status: 'ok',
      timestamp,
    }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({
      status: 'error',
      error: message,
    }, { status: 500 });
  }
}
