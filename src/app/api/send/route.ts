import EmailTemplate from '@/component/EmailTemplate/page';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();
const resend = new Resend(process.env.SENDING_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Body :', body);
    const { name, email, subject, message } = body;
    const emailContent = await EmailTemplate({ firstName: name, email: email,  subject: subject, message: message });
    
    const { data } = await resend.emails.send({
      from: `${name} <${email}>`,
      to: 'takumiFahriR@gmail.com',
      subject: subject,
      react: emailContent,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
    }
  }
}