import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Våra projekt</h1>
          {/* Project content will go here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;