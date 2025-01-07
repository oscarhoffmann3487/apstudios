import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "FLYGFOTO",
    description: "Högkvalitativa flygfoton för marknadsföring och dokumentation",
    image: "/lovable-uploads/d9e1cc79-4b3f-4a58-ac2d-325dee4d8e40.png",
    link: "/tjanster/foto"
  },
  {
    title: "FILM",
    description: "Professionell filmning för olika ändamål",
    image: "/lovable-uploads/film.png",
    link: "/tjanster/film"
  },
  {
    title: "360-BILDER",
    description: "Interaktiva 360-bilder för en unik upplevelse",
    image: "/lovable-uploads/360.png",
    link: "/tjanster/360-bilder"
  },
  {
    title: "YTMODELLER",
    description: "Skapande av ytmodeller för olika projekt",
    image: "/lovable-uploads/ytmodeller.png",
    link: "/tjanster/ytmodeller"
  },
  {
    title: "3D-MODELLER",
    description: "Avancerade 3D-modeller för visualisering och analys",
    image: "/lovable-uploads/3dmodeller.png",
    link: "/tjanster/3d-modeller"
  },
  {
    title: "ORTOFOTON",
    description: "Högupplösta ortofoton för kartläggning",
    image: "/lovable-uploads/ortofoton.png",
    link: "/tjanster/ortofoton"
  },
  {
    title: "VOLYMBERÄKNINGAR",
    description: "Exakta volymberäkningar för byggprojekt",
    image: "/lovable-uploads/volymberakningar.png",
    link: "/tjanster/volymberakningar"
  },
  {
    title: "INSPEKTIONER",
    description: "Professionella inspektioner av byggnader och områden",
    image: "/lovable-uploads/inspektioner.png",
    link: "/tjanster/inspektioner"
  },
  {
    title: "INMATNINGAR",
    description: "Datahantering och inmatningar för projekt",
    image: "/lovable-uploads/inmatningar.png",
    link: "/tjanster/inmatningar"
  }
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      {services.map((service, index) => (
        <Link
          key={index}
          to={service.link}
          className="group relative rounded-lg overflow-hidden h-[400px] transition-transform hover:scale-105"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <h3 className="text-2xl font-bold text-white z-10">
              {service.title}
            </h3>
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {service.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceCards;
