import { motion } from 'framer-motion';

const transformations = [
  {
    name: "David K.",
    time: "6 Months",
    result: "-45 lbs",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
},
  {
    name: "Sarah L.",
    time: "1 Year",
    result: "+12 lbs Muscle",
    before: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2070&auto=format&fit=crop"
},
  {
    name: "Mike T.",
    time: "3 Months",
    result: "Body Recomp",
    before: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    after: "/websites/GYM_WEBSITE/websites/GYM_WEBSITE/assets/mike_t.png"
}
];

export default function TransformationGallery() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">The <span className="text-primary">Hall of Fame</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Witness the incredible transformations of our members. Hard work, consistency, and the right environment lead to these results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <img
                  src={t.after}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4 bg-primary text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {t.time} Transformation
                </div>
                
                <div className="absolute bottom-6 left-6">
                  <div className="text-2xl font-display font-black text-white">{t.name}</div>
                  <div className="text-primary font-bold uppercase tracking-widest text-sm">{t.result}</div>
                </div>
              </div>
              
              <div className="flex gap-4 items-center justify-center">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Before</div>
                <div className="h-[1px] flex-grow bg-white/10" />
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary">After</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
