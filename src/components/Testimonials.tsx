import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const testimonials = [
    {
      quote: {
        sv: "Den levererade 3D modellen har möjliggjort för oss att visualisera planerad bebyggelse på ett effektivt och smidigt sätt. Vi är mycket nöjda med materialet och utförandet. Kan varmt rekommendera APstudios när det kommer till 3D modellering och visualisering.",
        en: "The delivered 3D model has enabled us to visualize planned development in an efficient and smooth way. We are very satisfied with the material and execution. Can warmly recommend APstudios when it comes to 3D modeling and visualization."
      },
      author: "Torbjörn Nilsson",
      title: {
        sv: "VD, Terra Development",
        en: "CEO, Terra Development"
      }
    },
    {
      quote: {
        sv: "Fantastisk upplevelse överlag. Jag mejlade alla drönare-fotograferingsbyråer i Stockholm jag kunde hitta. APstudios svarade mycket snabbt med det mest konkurrenskraftiga priset. Efter att jag hade betalat ville jag ha ytterligare en redigering av bilderna, detta ordnades snabbt och professionellt. Utmärkt efterförsäljningsservice. Skulle varmt rekommendera APstudios för drönare-fotografering.",
        en: "Great experience overall. I emailed all the drone photography agencies in Stockholm I could find. APstudios came back very quick with the most competitive price. After I had paid there was one more edit I wanted to the pictures, this was quickly and professionally taken care off as well. Excellent after sales service. Would warmly recommend APstudios for drone photography."
      },
      author: "Pieter van der Meijden",
      title: {
        sv: t.testimonials.customer,
        en: t.testimonials.customer
      }
    },
    {
      quote: {
        sv: "Vi är mycket nöjda med fotona och hemsidan är i stort sett färdig. Tack för ett bra jobb.",
        en: "We are very satisfied with the photos and the website is almost complete. Thanks for a great job."
      },
      author: "Darrell Aycock",
      title: {
        sv: t.testimonials.customer,
        en: t.testimonials.customer
      }
    },
    {
      quote: {
        sv: "Stort tack, du är så proffsigt! Du impade på Lars och Spotscale också och vi vill jobba mer med dig framöver.",
        en: "Thank you so much, you are so professional! You impressed Lars and Spotscale too and we want to work more with you in the future."
      },
      author: "Jesper Tordenlid",
      title: {
        sv: "Project Manager WASP WARA-PS, Combitech AB",
        en: "Project Manager WASP WARA-PS, Combitech AB"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white h-full">
              <CardContent className="p-8 relative h-full flex flex-col justify-center">
                <Quote className="absolute top-6 left-6 text-primary/10 w-12 h-12" />
                <div className="pl-12">
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.quote[language]}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title[language]}</p>
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