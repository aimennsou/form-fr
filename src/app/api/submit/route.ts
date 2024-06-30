import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../utils/prisma';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }

  try {
    const { name, email, phone, page2, page3, page4 } = await req.json();

    const newResponse = await prisma.formResponse.create({
      data: {
        name,
        email,
        phone,
        page2,
        page3,
        page4,
      },
    });

    console.log('Form response created:', newResponse);

    return NextResponse.json({ message: 'Form response created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating form response:', error);
    return NextResponse.json({ error: 'Failed to create form response' }, { status: 500 });
  }
}
