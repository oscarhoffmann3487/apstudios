import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.testimonials.quotes.map((testimonial, index) => (
            <Card key={index} className="bg-white h-full">
              <CardContent className="p-8 relative h-full flex flex-col justify-center">
                <Quote className="absolute top-6 left-6 text-primary/10 w-12 h-12" />
                <div className="pl-12">
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500 capitalize">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;