import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vi är mycket nöjda med fotona och hemsidan är i stort sett färdig. Tack för ett bra jobb.",
      author: "Darrell Aycock",
      title: "privatkund"
    },
    {
      quote: "Den levererade 3D modellen har möjliggjort för oss att visualisera planerad bebyggelse på ett effektivt och smidigt sätt. Vi är mycket nöjda med materialet och utförandet. Kan varmt rekommendera APstudios när det kommer till 3D modellering och visualisering.",
      author: "Torbjörn Nilsson",
      title: "Terra Development"
    },
    {
      quote: "Great experience overall. I emailed all the drone photography agencies in Stockholm I could find. APstudios came back very quick with the most competative price. After I had paid there was one more edit I wanted to the pictures, this was quickly and professionally taken care off as well. Excellent after sales service. Would warmly recommend APstudios for drone photography.",
      author: "Pieter van der Meijden",
      title: "privatkund"
    },
    {
      quote: "Stort tack, du är så proffsigt! Du impade på Lars och Spotscale också och vi vill jobba mer med dig framöver.",
      author: "Jesper Tordenlid",
      title: "Combitech"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Vad våra kunder säger</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white h-full">
              <CardContent className="p-8 relative h-full flex flex-col justify-center">
                <Quote className="absolute top-6 left-6 text-primary/10 w-12 h-12" />
                <div className="pl-12">
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
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
