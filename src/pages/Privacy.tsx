import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Rabit. We respect your privacy and are committed to protecting your personal data. 
                    This privacy policy explains how we collect, use, and safeguard your information when you use 
                    our platform. This policy applies to students, parents, schools, and business partners.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect different types of information depending on your role:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Students:</strong> Massar number, name, date of birth, class level, school, city, phone number (for OTP authentication), and redemption history.</li>
                    <li><strong>Schools:</strong> School name, administrator contact details, school code, and policy configurations.</li>
                    <li><strong>Partners:</strong> Business name, contact information, business category, and offer details.</li>
                    <li><strong>Usage Data:</strong> Log data, device information, and interaction patterns to improve our service.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your information is used for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>To provide personalized offer recommendations based on school-approved policies</li>
                    <li>To enable OTP-based authentication and account security</li>
                    <li>To track and award points for offer redemptions</li>
                    <li>To generate analytics and reports for schools and partners (anonymized and aggregated)</li>
                    <li>To communicate important platform updates and notifications</li>
                    <li>To improve our services and user experience</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell your personal data. We only share information in the following cases:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>With Schools:</strong> Schools have access to student data they provided and engagement metrics.</li>
                    <li><strong>With Partners:</strong> Partners receive anonymized, aggregated statistics only. Individual student identities are never shared.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data, including encryption, 
                    secure servers, and regular security audits. However, no method of transmission over the internet 
                    is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, contact us at privacy@rabit.ma
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                    and maintain security. You can control cookie preferences through your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform is designed for students aged 15 and above. For younger students, parental or 
                    school consent is required. We comply with applicable laws regarding children's data protection.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy from time to time. We will notify users of significant changes 
                    via email or platform notifications. The "Last updated" date at the top indicates the most recent revision.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions or concerns about this privacy policy or our data practices, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Email:</strong> privacy@rabit.ma<br />
                    <strong>Address:</strong> Rabit, Casablanca, Morocco
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
