import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
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
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Rabit, you agree to be bound by these Terms of Service and all applicable 
                    laws and regulations. If you do not agree with any part of these terms, you may not use our service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Different rules apply based on your account type:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Students:</strong> Must be registered by their school with a valid Massar number. You are responsible for maintaining the confidentiality of your OTP codes.</li>
                    <li><strong>Schools:</strong> Must verify their institution and are responsible for all data imported to the platform.</li>
                    <li><strong>Partners:</strong> Must provide accurate business information and comply with all offer validation requirements.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. User Conduct</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Use the platform for any illegal or unauthorized purpose</li>
                    <li>Share or sell your account credentials</li>
                    <li>Attempt to gain unauthorized access to other accounts or platform systems</li>
                    <li>Upload malicious code, viruses, or harmful content</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Manipulate the points system or engage in fraudulent redemptions</li>
                    <li>Scrape or extract data from the platform without permission</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Points System</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Points are earned by redeeming valid offers. Points have no cash value and cannot be transferred 
                    between accounts. Rabit reserves the right to adjust or revoke points if fraudulent activity is detected. 
                    Points may expire based on school or platform policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Offers and Redemptions</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>For Students:</strong> Offers are subject to availability and validation by schools. 
                    Redemption codes must be used within the specified validity period. Partners may refuse service 
                    if terms are violated.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>For Partners:</strong> All offers must be submitted for school validation before going live. 
                    You must honor all redemptions during the offer validity period. Misleading or false offers may result 
                    in account suspension.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. School Control and Policies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Schools have complete authority to control what content their students see. Schools may reject, 
                    remove, or modify offers at any time. Rabit acts as a platform provider and is not responsible for 
                    school policy decisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, trademarks, and data on Rabit, including but not limited to software, databases, text, 
                    graphics, icons, and logos, are the property of Rabit or its content suppliers and are protected by 
                    international copyright and trademark laws. You may not reproduce, distribute, or create derivative 
                    works without explicit permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Rabit is provided "as is" without warranties of any kind, either express or implied. We do not 
                    guarantee that the service will be uninterrupted, secure, or error-free. We are not responsible 
                    for the quality, safety, or legality of offers provided by partners.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Rabit shall not be liable for any indirect, incidental, 
                    special, consequential, or punitive damages resulting from your use of the platform. This includes 
                    loss of data, profits, or business opportunities.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to suspend or terminate your account at any time for violation of these terms 
                    or for any other reason we deem necessary. Upon termination, you lose access to your account and 
                    accumulated points.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms are governed by and construed in accordance with the laws of Morocco. Any disputes 
                    shall be resolved in the courts of Casablanca, Morocco.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may modify these terms at any time. Users will be notified of significant changes via email or 
                    platform notifications. Continued use of Rabit after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Email:</strong> legal@rabit.ma<br />
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

export default Terms;
