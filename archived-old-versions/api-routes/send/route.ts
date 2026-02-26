import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Setup:
// 1. Sign up free at https://resend.com
// 2. Go to API Keys → Create API Key
// 3. Create a .env.local file in the project root and add:
//    RESEND_API_KEY=re_your_api_key_here
// 4. Verify your domain (loopsuitai.com) in Resend → Domains
//    (or use onboarding@resend.dev as the "from" address while testing)

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, experience } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: 'LoopSuit Lead Gen <onboarding@resend.dev>', // Change to: noreply@loopsuitai.com after domain is verified
            to: ['support@loopsuitai.com'],
            replyTo: email,
            subject: `🔥 New Strategy Call Lead — ${name || email}`,
            html: `
                <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
                    <h2 style="font-size: 24px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0;">
                        New Lead — Strategy Call Inquiry
                    </h2>
                    <p style="color: #64748b; margin: 0 0 24px 0; font-size: 14px;">
                        Someone just signed up via the LoopSuit website.
                    </p>

                    <div style="background: #ffffff; border-radius: 8px; padding: 24px; border: 1px solid #e2e8f0;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">Name</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; font-weight: 500;">${name || '—'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; font-weight: 500;">
                                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Experience</td>
                                <td style="padding: 10px 0; color: #0f172a; font-size: 15px; font-weight: 500;">${experience || '—'}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 3px solid #2563eb;">
                        <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 500;">
                            💡 Reply directly to this email to respond to ${name || 'this lead'} at ${email}
                        </p>
                    </div>

                    <p style="margin-top: 24px; color: #94a3b8; font-size: 12px; text-align: center;">
                        Sent automatically from loopsuitai.com
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('[Resend Error]', error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('[Send Route Error]', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
