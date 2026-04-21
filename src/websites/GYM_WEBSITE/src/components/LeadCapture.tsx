import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Checkbox } from '../components/ui/checkbox';
import { Send, Sparkles } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  terms: z.boolean().refine((val) => val === true, { message: "You must accept the terms." }),
});

export default function LeadCapture() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      terms: false,
},
});

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Trial Booked! We will contact you shortly.");
    form.reset();
}

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-surface border border-surface-accent rounded-[20px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Content */}
            <div className="p-10 lg:p-16 bg-[#ccff00] text-black">
              <Sparkles className="w-12 h-12 mb-8" />
              <h2 className="text-4xl md:text-6xl mb-6 leading-[0.9] tracking-tighter">
                Claim<br />
                <span className="text-black">7-Day Pass</span>
              </h2>
              <p className="text-lg font-bold mb-10 text-black leading-relaxed">
                Start your transformation today with no obligation. Experience the future of fitness.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  "Full access to all facilities",
                  "1 Personal training assessment",
                  "Unlimited group classes",
                  "No commitment required"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-black uppercase tracking-wider text-[11px] text-black">
                    <div className="w-5 h-5 rounded-full bg-black text-primary flex items-center justify-center">
                      <Send className="w-2.5 h-2.5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Form */}
            <div className="p-10 lg:p-16">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-[10px] font-black text-white/50">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 bg-background border-surface-accent rounded-[4px] focus:border-primary transition-all text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-[10px] font-black text-text-dim">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-12 bg-background border-surface-accent rounded-[4px] focus:border-primary transition-all text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-[10px] font-black text-text-dim">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" className="h-12 bg-background border-surface-accent rounded-[4px] focus:border-primary transition-all text-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-14 rounded-[4px] bg-black text-[#ccff00] font-black uppercase tracking-widest text-base hover:bg-zinc-900 transition-all">
                    Get My Pass
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
