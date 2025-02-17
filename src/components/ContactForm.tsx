
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
      className="py-16 relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/lovable-uploads/bd5f21a1-67a7-4f0d-87eb-6ec0631d4bf0.png')",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          {language === 'sv' ? 'Kontakta oss' : 'Contact us'}
        </h2>
        <p className="text-center mb-12 text-gray-100">
          {language === 'sv' 
            ? 'Har du frågor eller vill diskutera ett projekt? Fyll i formuläret nedan så återkommer vi så snart som möjligt.'
            : 'Have questions or want to discuss a project? Fill out the form below and we\'ll get back to you as soon as possible.'}
        </p>
        
        <form className="space-y-6 max-w-xl mx-auto">
          <div>
            <Label htmlFor="name" className="text-white">
              {language === 'sv' ? 'Namn' : 'Name'}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="bg-white/10 border-white/20 text-white backdrop-blur-md"
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
              className="bg-white/10 border-white/20 text-white backdrop-blur-md"
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
              className="bg-white/10 border-white/20 text-white backdrop-blur-md"
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
              className="bg-white/10 border-white/20 text-white min-h-[150px] backdrop-blur-md"
            />
          </div>
          
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-8"
            >
              {language === 'sv' ? 'Skicka meddelande' : 'Send message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
