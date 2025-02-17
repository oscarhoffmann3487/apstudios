
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section 
      className="py-16 min-h-[600px] relative bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png')"
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          {language === 'sv' ? 'Kontakta oss' : 'Contact us'}
        </h2>
        <p className="text-center mb-12 text-gray-100">
          {language === 'sv' 
            ? 'Har du frågor eller vill diskutera ett projekt? Fyll i formuläret nedan så återkommer vi så snart som möjligt.'
            : 'Have questions or want to discuss a project? Fill out the form below and we\'ll get back to you as soon as possible.'}
        </p>
        
        <form
  method="POST"
  name="contact"
  data-netlify="true"
  className="space-y-6"
>
  {/* This hidden field is required for Netlify to process the submission */}
  <input type="hidden" name="form-name" value="contact" />

  {/* Optionally, add a honeypot field */}
  <p className="hidden">
    <label>
      Don’t fill this out if you're human: <input name="bot-field" />
    </label>
  </p>

  <div>
    <Label htmlFor="name" className="text-white">
      {language === 'sv' ? 'Namn' : 'Name'}
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
      {language === 'sv' ? 'E-post' : 'Email'}
    </Label>
    <Input
      id="email"
      name="email"
      type="email"
      required
      className="bg-white border-white text-black"
    />
  </div>
  
  <div>
    <Label htmlFor="phone" className="text-white">
      {language === 'sv' ? 'Telefon (valfritt)' : 'Phone (optional)'}
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
      {language === 'sv' ? 'Meddelande' : 'Message'}
    </Label>
    <Textarea
      id="message"
      name="message"
      required
      className="bg-white border-white text-black min-h-[150px]"
    />
  </div>

  <input type="hidden" name="form-name" value="contact" />

  
  <div className="flex justify-center">
    <Button
      type="submit"
      className="bg-accent hover:bg-accent/90 text-white backdrop-blur-md px-8"
    >
      {language === 'sv' ? 'Skicka meddelande' : 'Send message'}
    </Button>
  </div>
</form>
      </div>
    </section>
  );
}
