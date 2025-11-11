import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = {
    students: [
      {
        question: "How do I earn points?",
        answer: "You earn points by redeeming offers from our partner businesses. Each offer displays the number of points you'll receive. Points are automatically added to your account when you complete a redemption.",
      },
      {
        question: "Why am I seeing specific offers?",
        answer: "Every offer you see includes a 'why' explanation. You might see offers based on your class level, city, age group, or interests. Your school controls what appears in your feed using transparent policy rules.",
      },
      {
        question: "Is my data safe?",
        answer: "Yes. Your personal data is protected and only used to show relevant offers. Schools have complete control over what information is shared with partners. We never sell your data to third parties.",
      },
      {
        question: "Can my parents see my activity?",
        answer: "Parents can be granted access to view your points balance and redemption history if your school enables this feature. They cannot access your personal messages or profile details.",
      },
    ],
    schools: [
      {
        question: "How do we control what students see?",
        answer: "Schools use policy rules to define exactly what content reaches students. You can filter by class level, age, location, category, and more. All offers must be validated before they go live.",
      },
      {
        question: "How do we import student data?",
        answer: "Student data is imported via Excel files containing Massar numbers and basic information. The system validates all data and provides detailed reports of successful and failed imports.",
      },
      {
        question: "Can we remove or reject offers?",
        answer: "Absolutely. Schools have full authority to reject, remove, or hide any offer at any time. Partners are notified when offers are rejected with optional feedback.",
      },
      {
        question: "What reports are available?",
        answer: "Schools have access to comprehensive analytics including student engagement rates, popular offer categories, redemption patterns, and partner activity. All data is anonymized and aggregated.",
      },
    ],
    partners: [
      {
        question: "How do we create offers?",
        answer: "Partners submit offers through the partner portal by filling out a simple form with offer details, target audience, validity period, and point rewards. All offers must be validated by schools before going live.",
      },
      {
        question: "How do we target specific students?",
        answer: "You can target students by class level, city, age range, and interests. Schools maintain final control over which offers reach their students based on their own policies.",
      },
      {
        question: "How are redemptions tracked?",
        answer: "Each redemption generates a unique code that students present at your business. You can verify codes through the partner portal and track engagement through real-time analytics.",
      },
      {
        question: "What are the costs?",
        answer: "Rabit operates on a subscription model for partners based on reach and features. Contact our sales team for detailed pricing information tailored to your business needs.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about using Rabit
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">For Students</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.students.map((faq, index) => (
                  <AccordionItem key={index} value={`student-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">For Schools</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.schools.map((faq, index) => (
                  <AccordionItem key={index} value={`school-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">For Partners</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.partners.map((faq, index) => (
                  <AccordionItem key={index} value={`partner-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                We're here to help. Get in touch with our support team.
              </p>
              <Button onClick={() => navigate("/contact")}>
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
