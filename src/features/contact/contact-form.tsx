"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/src/shared/ui/button";
import { Input } from "@/src/shared/ui/input";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Submitting:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccess(true);
    reset();
  };

  const [success, setSuccess] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {success && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-200 text-sm">
          Inquiry submitted successfully. A representative will contact you shortly.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">Full Name</label>
          <Input {...register("name")} placeholder="Jane Doe" />
          {errors.name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">Email Address</label>
          <Input {...register("email")} type="email" placeholder="jane@enterprise.com" />
          {errors.email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">Company Name</label>
        <Input {...register("company")} placeholder="Enterprise LLC" />
        {errors.company && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.company.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">Inquiry Details</label>
        <textarea
          {...register("message")}
          className="flex min-h-[120px] w-full rounded-lg border border-outline-variant/30 dark:border-dark-outline-variant/30 bg-surface dark:bg-dark-surface px-3 py-2 text-sm text-foreground dark:text-dark-foreground placeholder:text-muted-foreground dark:placeholder:text-dark-muted-foreground focus-visible:outline-none focus-visible:border-accent focus-visible:ring-0 transition-colors"
          placeholder="Please specify volumes, product types, and destination..."
        />
        {errors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <Button variant="primary" type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
