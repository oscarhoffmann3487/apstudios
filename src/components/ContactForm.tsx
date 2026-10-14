import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language].contactForm;
  const location = useLocation();
  const presetSubject = new URLSearchParams(location.search).get("subject") ?? "";
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
      className="py-16 min-h-[600px] relative scroll-mt-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png')",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">{t.title}</h2>
        <p className="text-center mb-12 text-gray-100">{t.intro}</p>

        <form
          onSubmit={handleSubmit}
          method="POST"
          name="contact"
          data-netlify="true"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <Label htmlFor="name" className="text-white">{t.name}</Label>
            <Input id="name" name="name" type="text" required className="bg-white border-white text-black" />
          </div>

          <div>
            <Label htmlFor="email" className="text-white">{t.email}</Label>
            <Input id="email" name="email" type="email" required className="bg-white border-white text-black" />
          </div>

          <div>
            <Label htmlFor="subject" className="text-white">{t.subject}</Label>
            <Input id="subject" name="subject" type="text" required key={presetSubject} defaultValue={presetSubject} className="bg-white border-white text-black" />
          </div>

          <div>
            <Label htmlFor="phone" className="text-white">{t.phone}</Label>
            <Input id="phone" name="phone" type="tel" className="bg-white border-white text-black" />
          </div>

          <div>
            <Label htmlFor="message" className="text-white">{t.message}</Label>
            <Textarea id="message" name="message" required className="bg-white border-white text-black min-h-[150px]" />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              value="ja"
              className="mt-1 h-4 w-4"
            />
            <Label htmlFor="consent" className="text-white leading-snug">
              {t.consent}{" "}
              <Link to="/gdpr" className="underline">
                {t.consentLink}
              </Link>
              .
            </Label>
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-white backdrop-blur-md px-8">
              {t.send}
            </Button>
          </div>
          <p className="text-center">
            <a href="mailto:info@apstudios.se" className="text-white underline underline-offset-4">
              {t.mailto}
            </a>
          </p>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg border-2 border-black text-center text-black">
            <h2 className="text-xl font-bold mb-2">{t.thanksTitle}</h2>
            <p>{t.thanksText}</p>
          </div>
        </div>
      )}
    </section>
  );
}
