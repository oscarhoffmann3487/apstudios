import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServicePageProps {
  title: string;
  description?: string;
}

const ServicePage = ({ title, description }: ServicePageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="pt-20 px-4">
          <div className="max-w-7xl mx-auto py-16">
            <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
            {description && <p className="text-gray-300">{description}</p>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;