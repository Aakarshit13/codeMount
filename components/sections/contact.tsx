"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useToast } from "@/hooks/use-toast"

import { 
  Mail, 
  MessageCircle, 
  Phone, 
  Send 
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const name = values.name.trim();
    const email = values.email.trim();
    const phone = values.phone ? values.phone.trim() : "";
    const service = values.service.trim();
    const message = values.message.trim();
    const reqBody = {name: name, email: email, phone: phone, service: service, message: message};
   
    fetch('/api/contact',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers:{
        'Content-Type': 'application/json',
      }
     })
    .then((res) => {
        setIsSubmitting(false);
      if (!res.ok) {
        setIsSuccess(false);
        throw new Error("Network response was not ok");
      }
      setIsSuccess(true);
       toast({
          title: 'Success!',
          variant: 'default'
        });
      form.reset();
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }).catch((err) => {
        toast({
          title: 'Submission failed',
          variant: 'destructive'
        })
      })
  }

  return (
    <section id="contact" className="py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
              Fill out the form, and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <a 
                    href="mailto:hello@nexustech.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@nexustech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <a 
                    href="tel:+14155550123" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (415) 555-0123
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-muted-foreground">
                    Available Monday to Friday, 9AM to 6PM EST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background border border-border rounded-xl p-6 md:p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="web-development">Web Development</SelectItem>
                                <SelectItem value="mobile-development">Mobile Development</SelectItem>
                                <SelectItem value="custom-software">Custom Software</SelectItem>
                                <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                <SelectItem value="cloud-services">Cloud Services</SelectItem>
                                <SelectItem value="consulting">Tech Consulting</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              className="min-h-32" 
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}