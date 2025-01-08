import ServicePage from "@/components/ServicePage";

const images = [
  "/lovable-uploads/14c55413-16d4-41fa-9b29-4fe1e1aae90a.png",
  "/lovable-uploads/25c39bf7-0647-46ed-b016-87f9b1dc6a64.png",
  "/lovable-uploads/27ebd10e-4dee-45bf-99e1-b4267b6b7764.png",
  "/lovable-uploads/377669bc-fd80-4eac-b04a-a352e8866b3e.png",
  "/lovable-uploads/508c6e20-88e8-4a10-bc07-83449675c045.png",
  "/lovable-uploads/50c1a4e4-1c78-482b-8f2d-ea8d422dc5c3.png",
  "/lovable-uploads/50c45d71-bc8c-431f-bb8f-77f2b8eb8cf1.png",
  "/lovable-uploads/6c8a31ee-ec6d-4bea-ac7e-168bf23d9d88.png",
  "/lovable-uploads/7da84fa7-af98-4786-b8ae-0486a9d49c10.png",
  "/lovable-uploads/8f2538f8-49c9-45b3-b28b-9f42d56838d9.png",
  "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
  "/lovable-uploads/b065a950-b094-475f-a30c-10c67af34f4c.png",
  "/lovable-uploads/b6a00063-356f-4af0-98b6-bf641c7def8d.png",
  "/lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png",
  "/lovable-uploads/ce2ca53e-a1e4-4c43-a1eb-32f662a7f450.png",
  "/lovable-uploads/d1c31bcf-d6a7-4ed7-8e5d-bcc048891161.png",
  "/lovable-uploads/d3daeb2a-5100-485e-b15d-9324a92ff1f0.png",
  "/lovable-uploads/d9e1cc79-4b3f-4a58-ac2d-325dee4d8e40.png",
  "/lovable-uploads/f84651d6-c6ac-40ba-b19d-44d0e6800832.png"
];

const Foto = () => {
  return (
    <ServicePage
      title="FLYGFOTO"
      description="Med bilder från drönare får du ett helt nytt perspektiv. Fastigheter är ett utmärkt motiv att skildra från ovan. Bilder från balkonghöjder för att visa utsikten redan innan en byggnad är uppförd är ett bra användningsområde. Eller varför inte göra ett fotomontage för att visa hur planerad bebyggelse passar in i landskapet?"
      images={images}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={image}
              alt={`Flygfoto ${index + 1}`}
              className="w-[70%] mx-auto h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </ServicePage>
  );
};

export default Foto;