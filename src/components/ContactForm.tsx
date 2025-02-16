
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
    <section className="py-16 bg-[#222324] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === 'sv' ? 'Kontakta oss' : 'Contact us'}
        </h2>
        <p className="text-center mb-12 text-gray-300">
          {language === 'sv' 
            ? 'Har du frågor eller vill diskutera ett projekt? Fyll i formuläret nedan så återkommer vi så snart som möjligt.'
            : 'Have questions or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible.'}
        </p>
        
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div>
            <Label htmlFor="name" className="text-white">
              {language === 'sv' ? 'Namn' : 'Name'}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="bg-white/10 border-white/20 text-white"
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
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-white">
              {language === 'sv' ? 'Telefon' : 'Phone'}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="service" className="text-white">
              {language === 'sv' ? 'Tjänst' : 'Service'}
            </Label>
            <select
              id="service"
              name="service"
              className="w-full rounded-md p-2 bg-white/10 border border-white/20 text-white"
              required
            >
              <option value="">
                {language === 'sv' ? 'Välj tjänst' : 'Select service'}
              </option>
              <option value="Flygfoto">
                {language === 'sv' ? 'Flygfoto' : 'Aerial Photography'}
              </option>
              <option value="Videoproduktion">
                {language === 'sv' ? 'Videoproduktion' : 'Video Production'}
              </option>
              <option value="Ytmodeller">
                {language === 'sv' ? 'Ytmodeller' : 'Surface Models'}
              </option>
              <option value="3D-Modeller">
                {language === 'sv' ? '3D-Modeller' : '3D Models'}
              </option>
              <option value="Volymberäkningar">
                {language === 'sv' ? 'Volymberäkningar' : 'Volume Calculations'}
              </option>
              <option value="Inspektioner">
                {language === 'sv' ? 'Inspektioner' : 'Inspections'}
              </option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-white">
              {language === 'sv' ? 'Meddelande' : 'Message'}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-white/10 border-white/20 text-white min-h-[150px]"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
          >
            {language === 'sv' ? 'Skicka meddelande' : 'Send message'}
          </Button>
        </form>
      </div>
    </section>
  );
}
