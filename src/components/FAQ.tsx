import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What programs do you offer?",
    answer: "We offer a wide range of programs including STEM, Arts, Languages, and Professional Development courses.",
  },
  {
    question: "How do online classes work?",
    answer: "Our online classes are conducted through our interactive learning platform, with live sessions and on-demand content.",
  },
  {
    question: "What are the admission requirements?",
    answer: "Admission requirements vary by program. Please contact our admissions team for specific details.",
  },
  {
    question: "Are there any scholarships available?",
    answer: "Yes, we offer various scholarships based on merit and need. Applications are reviewed on a rolling basis.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-school-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-school-primary mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;