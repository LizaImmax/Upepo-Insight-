import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { email, name, reportId } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    if (!reportId) {
      return NextResponse.json(
        { error: 'Report ID is required' },
        { status: 400 }
      );
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: name || null
        }
      });
    }

    // Check if report exists
    const report = await prisma.report.findUnique({
      where: { id: reportId }
    });

    if (!report) {
      return NextResponse.json(
        { error: 'Report not found' },
        { status: 404 }
      );
    }

    // Check if already downloaded
    const existingDownload = await prisma.download.findFirst({
      where: {
        userId: user.id,
        reportId: reportId
      }
    });

    if (!existingDownload) {
      // Create download record
      await prisma.download.create({
        data: {
          userId: user.id,
          reportId: reportId
        }
      });

      // Increment download count
      await prisma.report.update({
        where: { id: reportId },
        data: {
          downloads: {
            increment: 1
          }
        }
      });
    }

    // TODO: Generate signed download URL (if using S3)
    // TODO: Send email with download link
    // TODO: Track in analytics

    return NextResponse.json(
      {
        message: 'Download ready!',
        downloadUrl: report.fileUrl || '/reports/placeholder.pdf'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to process download. Please try again.' },
      { status: 500 }
    );
  }
}
