"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // 1. Save the form reference immediately
    const form = e.currentTarget; 
    
    // 2. Use the saved reference to get the data
    const formData = new FormData(form); 
    
    const { error } = await supabase.from("leads").insert([
      {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });
      
      setStatus("success");
      // 3. Use the saved reference to reset the fields
      form.reset(); 
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input name="name" type="text" required placeholder="Name" className="w-full p-2 border rounded" />
      <input name="email" type="email" required placeholder="Email" className="w-full p-2 border rounded" />
      <input name="phone" type="tel" required placeholder="Phone Number" className="w-full p-2 border rounded" />
      <textarea name="message" required placeholder="Project Details" className="w-full p-2 border rounded h-32" />
      
      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full bg-blue-600 text-white p-2 rounded font-semibold disabled:bg-gray-400"
      >
        {status === "submitting" ? "Sending..." : "Get a Quote"}
      </button>
      
      {status === "success" && <p className="text-green-600 text-sm">Quote request sent successfully!</p>}
      {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
}