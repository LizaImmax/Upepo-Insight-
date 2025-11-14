import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { email, name, source = 'website' } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await prisma.subscription.findFirst({
      where: { email }
    });

    if (existing) {
      if (existing.active) {
        return NextResponse.json(
          { message: 'Already subscribed!' },
          { status: 200 }
        );
      } else {
        // Reactivate subscription
        await prisma.subscription.update({
          where: { id: existing.id },
          data: { active: true }
        });
        return NextResponse.json(
          { message: 'Welcome back! Subscription reactivated.' },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    await prisma.subscription.create({
      data: {
        email,
        source,
        active: true
      }
    });

    // TODO: Send welcome email
    // TODO: Add to email marketing platform (Mailchimp, ConvertKit, etc.)

    return NextResponse.json(
      { message: 'Successfully subscribed to Upepo Pulse!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
