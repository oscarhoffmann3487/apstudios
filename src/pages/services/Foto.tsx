import ServicePage from "@/components/ServicePage";
const sections = [{
  title: "UTSIKTSFOTO",
  description: "Visa utsikten i nyproduktion genom att låta drönaren flyga upp till den planerade balkongens höjd och ta bilder. Ett balkongräcke kan även monteras i bilden för en mer verklighetstrogen känsla. Bilderna kan tas i olika väderstreck.",
  imageSrc: "/lovable-uploads/377669bc-fd80-4eac-b04a-a352e8866b3e.png"
}, {
  title: "FOTOMONTAGE",
  description: "Fotomontage lämpar sig, precis som utsiktsfoton, vid planerad bebyggelse av olika slag. Det är ofta användbart att se hur ny bebyggelse kommer passa in i miljön redan i förväg. Fotomontage är ett bra alternativ till 3D-modeller då det är enklare och lämpar sig bättre för stora områden.",
  imageSrc: "/lovable-uploads/b065a950-b094-475f-a30c-10c67af34f4c.png"
}, {
  title: "FASTIGHETSFOTO",
  description: "Vi fotograferar alla typer av kommersiella och privata fastigheter, både från drönare och från marken. Vi kan lyfta det ni tycker är viktiga nyckelpunkter för fastigheten såsom infrastruktur, kommunikationer och läge.",
  imageSrc: "/lovable-uploads/8f2538f8-49c9-45b3-b28b-9f42d56838d9.png"
}, {
  title: "MÄKLARFOTO",
  description: "Drönarbilder lämpar sig utmärkt för mäklare. Vi kan dokumentera en bostad både inifrån och utifrån med drönare och vanlig kamera. Vi kan även skapa digitala floorplans med 360 tours för att på ett interaktivt sätt kunna visa upp bostaden.",
  imageSrc: "/lovable-uploads/d3daeb2a-5100-485e-b15d-9324a92ff1f0.png"
}, {
  title: "EVENEMANG",
  description: "Vi kan hjälpa till med fotografering av ditt evenemang så att det förevigas. Vi kan både fotografera från marken och från drönare.",
  imageSrc: "/lovable-uploads/50c1a4e4-1c78-482b-8f2d-ea8d422dc5c3.png"
}, {
  title: "LANDSKAPSFOTO",
  description: "Har du ett vackert motiv du vill fotografera? Vi fotar landskap och arkitektur på beställning.",
  imageSrc: "/lovable-uploads/d1c31bcf-d6a7-4ed7-8e5d-bcc048891161.png"
}];
const Foto = () => {
  return <ServicePage title="FOTO" description="Med drönarbilder kan du skildra olika motiv från ett helt nytt perspektiv. Detta öppnar upp möjligheter i en mängd olika branscher. I fastighetsbranschen är drönarbilder väldigt relevant då man får ett helhetsintryck av både tomt och byggnad. Genom att ta utsiktsfoton kan man vid nyproduktion marknadsföra balkongutsikter från olika våningsplan. Vi kan även fota interiör från marken för att komplettera drönarbilderna, vilket passar perfekt för exempelvis mäklare." images={["/lovable-uploads/14c55413-16d4-41fa-9b29-4fe1e1aae90a.png", "/lovable-uploads/f84651d6-c6ac-40ba-b19d-44d0e6800832.png", "/lovable-uploads/b6a00063-356f-4af0-98b6-bf641c7def8d.png", "/lovable-uploads/7da84fa7-af98-4786-b8ae-0486a9d49c10.png"]}>
      <div className="bg-white w-screen relative left-1/2 right-1/2 -mx-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12">
            {sections.map((section, index) => <div key={index} className="bg-white rounded-lg shadow-xl p-8 mx-[42px] px-[41px]">
                <div className="grid md:grid-cols-2 gap-8 items-center my-0 py-0">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                    <p className="text-gray-700">{section.description}</p>
                  </div>
                  <div className="aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-lg">
                    <img src={section.imageSrc} alt={section.title} className="w-full h-full object-cover " />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </ServicePage>;
};
export default Foto;