import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Clé API Resend pour l'envoi d'emails
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_Qap85aDY_ALGnpTND6d9QtN1W2HGtUraN';
const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    // Envoi de l'email à Euroforma RDC
    const { data, error } = await resend.emails.send({
      from: 'Euroforma RDC <onboarding@resend.dev>',
      to: ['contact@euroforma-rdc.com'],
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d9488 0%, #115e59 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nouveau message de contact</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #0d9488; margin-top: 0;">Détails du message</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Nom :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #0d9488;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Sujet :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #0d9488;">Message :</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          <div style="background: #0d9488; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              Euroforma RDC Digital - Former les leaders d'aujourd'hui
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message.' },
        { status: 500 }
      );
    }

    // Envoi d'un email de confirmation à l'expéditeur
    await resend.emails.send({
      from: 'Euroforma RDC <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirmation de réception - Euroforma RDC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d9488 0%, #115e59 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Merci pour votre message !</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb;">
            <p>Bonjour <strong>${name}</strong>,</p>
            <p>Nous avons bien reçu votre message concernant "<strong>${subject}</strong>".</p>
            <p>Notre équipe vous répondra dans les plus brefs délais.</p>
            <p style="margin-top: 30px;">Cordialement,<br><strong>L'équipe Euroforma RDC</strong></p>
          </div>
          <div style="background: #0d9488; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              67 BLVD du 30 juin, Gombe, Kinshasa, RDC<br>
              <a href="https://euroforma-rdc.com" style="color: white;">euroforma-rdc.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur.' },
      { status: 500 }
    );
  }
}

