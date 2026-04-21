import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 7-day free pass for all new members to experience our facilities, classes, and coaching before committing to a membership."
},
  {
    question: "What are your opening hours?",
    answer: "We are open 24/7 for all members. Our staff is on-site from 6:00 AM to 10:00 PM daily to assist with any needs."
},
  {
    question: "Are group classes included in the membership?",
    answer: "Group classes are included in our Pro and Elite membership plans. Basic members can join classes for a small drop-in fee."
},
  {
    question: "Do you have personal trainers?",
    answer: "Absolutely. We have a team of world-class certified personal trainers specializing in everything from weight loss to competitive bodybuilding."
},
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, we offer month-to-month plans with no long-term contracts. You can cancel your membership with a 30-day notice."
},
  {
    question: "Is there a parking facility?",
    answer: "Yes, we have a large private parking lot for all members, free of charge."
}
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">Common <span className="text-primary">Questions</span></h2>
            <p className="text-muted-foreground">
              Everything you need to know about IronPulse Fitness.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-surface border border-surface-accent rounded-[20px] px-6 overflow-hidden mb-4"
              >
                <AccordionTrigger className="text-left font-bold uppercase tracking-widest text-sm py-6 hover:text-primary hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
