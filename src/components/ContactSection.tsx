import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(200),
  email: z.string().trim().min(1, "Please enter your email").email("Enter a valid email").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Tell us a little about your business").max(2000),
});

type ContactValues = z.infer<typeof contactSchema>;

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL as string | undefined;
const CONTACT_LEAD_NOTIFY_URL = CHAT_API_URL?.replace(/\/api\/site-chat\/message$/, "/api/contact-lead");

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    const { error } = await supabase.from("leads").insert({
      name: values.name,
      email: values.email,
      phone: values.phone || null,
      message: values.message,
      source: "contact_form",
    });

    if (error) {
      toast.error("Something went wrong sending that — please try WhatsApp instead.");
      return;
    }

    // Best-effort: the lead is already saved above regardless of whether
    // this succeeds, so a failure here shouldn't block the visitor's
    // confirmation — it only affects whether the team gets pinged.
    if (CONTACT_LEAD_NOTIFY_URL) {
      fetch(CONTACT_LEAD_NOTIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).catch(() => {});
    }

    setSubmitted(true);
    form.reset();
    toast.success("Got it — we'll be in touch shortly.");
  };

  return (
    <section id="contact" className="section-paper">
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <div className="eyebrow text-muted-foreground mb-6 text-center">Prefer email?</div>
          <h2
            className="font-heading font-extrabold text-center leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", letterSpacing: "-0.04em" }}
          >
            Tell us about your business.
          </h2>
          <p className="text-muted-foreground text-center mt-4 mb-12" style={{ lineHeight: 1.7 }}>
            Leave your details and we'll follow up to book your free strategy call.
          </p>

          {submitted ? (
            <div className="text-center py-12 border border-border rounded-2xl">
              <p className="font-heading font-bold text-xl mb-2">Thanks — message sent.</p>
              <p className="text-muted-foreground">We'll get back to you shortly.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                        <Input type="email" placeholder="you@yourbusiness.com" {...field} />
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
                      <FormLabel>Phone (optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="082 123 4567" {...field} />
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
                      <FormLabel>What's eating up your time?</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="e.g. missed calls, slow follow-ups, booking admin..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-signal hover:bg-signal hover:brightness-110 text-white rounded-full py-6 text-[15px] font-medium"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
