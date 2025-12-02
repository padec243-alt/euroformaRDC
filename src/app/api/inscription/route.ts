import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Clé API Resend pour l'envoi d'emails
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_Qap85aDY_ALGnpTND6d9QtN1W2HGtUraN';
const resend = new Resend(RESEND_API_KEY);

// Mapping des codes pays vers les noms
const countryNames: Record<string, string> = {
  "CD": "République Démocratique du Congo (RDC)",
  "CG": "République du Congo (Congo-Brazzaville)",
  "AF": "Afghanistan",
  "ZA": "Afrique du Sud",
  "AL": "Albanie",
  "DZ": "Algérie",
  "DE": "Allemagne",
  "FR": "France",
  "BE": "Belgique",
  "CA": "Canada",
  "US": "États-Unis",
  "GB": "Royaume-Uni",
  "CH": "Suisse",
  // Ajoutez d'autres pays si nécessaire
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, country, formation, module } = body;

    // Validation
    if (!firstName || !lastName || !email || !country || !formation) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    const countryName = countryNames[country] || country;
    const fullName = `${firstName} ${lastName}`;

    // Envoi de l'email à Euroforma RDC
    const { data, error } = await resend.emails.send({
      from: 'Euroforma RDC <onboarding@resend.dev>',
      to: ['contact@euroforma-rdc.com'],
      replyTo: email,
      subject: `[Inscription] Nouvelle demande - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d9488 0%, #115e59 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">🎓 Nouvelle demande d'inscription</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #0d9488; margin-top: 0;">Informations du candidat</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 150px;">Prénom :</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Nom :</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email :</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #0d9488;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Pays de résidence :</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${countryName}</td>
              </tr>
            </table>
            
            <h2 style="color: #0d9488; margin-top: 30px;">Formation souhaitée</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px 0;"><strong>Formation :</strong> ${formation}</p>
              ${module ? `<p style="margin: 0;"><strong>Module :</strong> ${module}</p>` : ''}
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
        { error: 'Erreur lors de l\'envoi de la demande.' },
        { status: 500 }
      );
    }

    // Envoi d'un email de confirmation au candidat
    await resend.emails.send({
      from: 'Euroforma RDC <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirmation d\'inscription - Euroforma RDC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0d9488 0%, #115e59 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">🎉 Inscription reçue !</h1>
          </div>
          <div style="padding: 30px; background: #f9fafb;">
            <p>Bonjour <strong>${firstName}</strong>,</p>
            <p>Nous avons bien reçu votre demande d'inscription à la formation "<strong>${formation}</strong>"${module ? ` (module: ${module})` : ''}.</p>
            
            <div style="background: #0d9488; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">📋 Prochaines étapes</h3>
              <ol style="margin: 0; padding-left: 20px;">
                <li>Notre équipe examinera votre demande</li>
                <li>Vous recevrez un email avec les détails de la formation</li>
                <li>Un conseiller vous contactera pour finaliser votre inscription</li>
              </ol>
            </div>
            
            <p>Si vous avez des questions, n'hésitez pas à nous contacter à <a href="mailto:contact@euroforma-rdc.com" style="color: #0d9488;">contact@euroforma-rdc.com</a>.</p>
            
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

