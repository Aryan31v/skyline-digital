import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
    alert('Message sent successfully!');
    form.reset();
  }

  return (
    <section id="contact" className="py-32 bg-[#0f0f0f] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">Get in Touch</h2>
            <h3 className="text-4xl md:text-6xl font-black font-display leading-none mb-8 tracking-tight">
              Let's build <br />
              something <span className="text-accent">legendary</span>.
            </h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
              Currently accepting new projects for Q3 2024. Let's discuss how we can take your product to the next level.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                  <div className="text-lg font-bold">hello@jasonk.design</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                  <div className="text-lg font-bold">+1 (555) 000-0000</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass p-8 md:p-12 rounded-3xl border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-accent text-white" {...field} />
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
                      <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-accent text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:border-accent text-white resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full rounded-xl h-16 bg-accent hover:bg-accent/90 text-white font-bold text-lg shadow-[0_0_30px_rgba(255,78,0,0.3)] transition-all hover:scale-[1.02]">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
