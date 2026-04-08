import MotionWrapper from '../components/MotionWrapper';
import FAQAccordion from '../components/FAQAccordion';

export default function FAQ() {
  const faqGroups = [
    {
      title: "Orders & Process",
      items: [
        { id: "op1", q: "What is your minimum order quantity?", a: "Our minimum order quantity is 50 units per design. This ensures we can maintain our quality standards while offering competitive pricing." },
        { id: "op2", q: "How long does the whole process take?", a: "Typically 14-21 days from sample approval to final delivery, depending on the complexity and size of the order." },
        { id: "op3", q: "Do I need to provide the design?", a: "You can provide your own design files (preferably vector formats like AI, EPS, or PDF), or our in-house team can help create or refine a design for you." },
        { id: "op4", q: "Can I change my order after approving the sample?", a: "Once the sample is approved and full production begins, changes cannot be made. This is why we emphasize the importance of the physical sample phase." }
      ]
    },
    {
      title: "Samples & Quality",
      items: [
        { id: "sq1", q: "Do you provide physical samples?", a: "Yes, we provide a physical sample within 48 hours of brief approval. We never ask you to approve full production based on a digital mockup alone." },
        { id: "sq2", q: "What if I don't like the sample?", a: "We will revise it until you are satisfied. Full production only begins after your final approval." },
        { id: "sq3", q: "How do you ensure quality?", a: "Because we handle everything in-house, we control the quality at every stage. Every garment is inspected for flaws, loose threads, and print consistency before packaging." }
      ]
    },
    {
      title: "Pricing & Payments",
      items: [
        { id: "pp1", q: "How do I get a quote?", a: "Send us a WhatsApp or email with your product type, quantity, deadline, and design. We will send you an itemized quote within 24 hours." },
        { id: "pp2", q: "What are your payment terms?", a: "We require a 50% deposit to begin production, with the remaining 50% balance due upon delivery." },
        { id: "pp3", q: "Are there any hidden fees?", a: "No. Our quotes are comprehensive and include the cost of the garment, printing/embroidery, and standard packaging." }
      ]
    },
    {
      title: "Production & Delivery",
      items: [
        { id: "pd1", q: "Do you deliver outside Addis Ababa?", a: "Yes, we deliver across Ethiopia and can coordinate shipping for regional and export orders." },
        { id: "pd2", q: "Can you handle rush orders?", a: "Rush orders are evaluated on a case-by-case basis depending on our current production capacity. Please contact us directly to discuss." },
        { id: "pd3", q: "How are the items packaged?", a: "Standard packaging includes folding and bulk packing. Individual polybagging or custom packaging is available upon request." }
      ]
    },
    {
      title: "Materials & Printing",
      items: [
        { id: "mp1", q: "What printing methods do you offer?", a: "We offer screen printing, embroidery, sublimation, and heat transfer. We will recommend the best method based on your design and fabric choice." },
        { id: "mp2", q: "Can I mix and match printing methods?", a: "Yes, for example, you can have an embroidered logo on the front and a screen-printed design on the back." },
        { id: "mp3", q: "Will the print fade after washing?", a: "We use high-quality inks and curing processes. If care instructions are followed, the print will last the lifetime of the garment." },
        { id: "mp4", q: "Do you offer eco-friendly fabrics?", a: "We can source organic cotton and recycled polyester blends upon request." }
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" hold>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
              FAQ
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance !text-white">
              The questions clients ask before they place their first order.
            </h1>
          </MotionWrapper>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          {faqGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16 last:mb-0">
              <MotionWrapper animation="fade-up-lg">
                <h3 className="text-2xl font-bold mb-6 text-heading">{group.title}</h3>
              </MotionWrapper>
              <FAQAccordion faqs={group.items} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance !text-white">
              Still Have Questions?
            </h2>
            <a 
              href="https://wa.me/251911149383?text=Hi%2C+I+have+a+question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Ask Us on WhatsApp
            </a>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
