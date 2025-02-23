import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function ContactForm() {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const urlParams = new URLSearchParams();
    formData.forEach((value, key) => {
      urlParams.append(key, value as string);
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlParams.toString(),
    })
      .then(() => {
        form.reset();
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
      })
      .catch((error) => alert(error));
  };

  return (
    <section
      id="contact"
      className="py-16 min-h-[600px] relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png')",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          {language === "sv" ? "Kontakta oss" : "Contact us"}
        </h2>
        <p className="text-center mb-12 text-gray-100">
          {language === "sv"
            ? "Har du frågor eller vill diskutera ett projekt? Fyll i formuläret nedan så återkommer vi så snart som möjligt."
            : "Have questions or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible."}
        </p>

        <form
          onSubmit={handleSubmit}
          method="POST"
          name="contact"
          data-netlify="true"
          className="space-y-6"
        >
          {/* Hidden field for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field */}
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <Label htmlFor="name" className="text-white">
              {language === "sv" ? "Namn" : "Name"}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="bg-white border-white text-black"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white">
              {language === "sv" ? "E-post" : "Email"}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-white border-white text-black"
            />
          </div>

          {/* New "ämne" (subject) input */}
          <div>
            <Label htmlFor="ämne" className="text-white">
              {language === "sv" ? "Ämne" : "Subject"}
            </Label>
            <Input
              id="ämne"
              name="ämne"
              type="text"
              required
              className="bg-white border-white text-black"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-white">
              {language === "sv" ? "Telefon (valfritt)" : "Phone (optional)"}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              className="bg-white border-white text-black"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-white">
              {language === "sv" ? "Meddelande" : "Message"}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-white border-white text-black min-h-[150px]"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white backdrop-blur-md px-8"
            >
              {language === "sv" ? "Skicka meddelande" : "Send message"}
            </Button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg border-2 border-black text-center text-black">
            <h2 className="text-xl font-bold mb-2">
              {language === "sv" ? "Tack!" : "Thank You!"}
            </h2>
            <p>
              {language === "sv"
                ? "Ditt meddelande har skickats. Vi återkommer så snart vi kan."
                : "Your message has been received. We will get back to you soon."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
