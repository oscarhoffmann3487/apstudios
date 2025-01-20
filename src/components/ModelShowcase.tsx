import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ModelShowcase = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="bg-[#222324] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">3D modeller direkt i webbläsaren</h2>
        </div>
        <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden relative mb-8">
          {!isLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <Button
                onClick={() => setIsLoaded(true)}
                variant="outline"
                size="lg"
                className="gap-2 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 border-white"
              >
                <Play className="w-6 h-6" />
                Load 3D Model
              </Button>
            </div>
          ) : (
            <iframe 
              src="https://cloud.agisoft.com/embedded/projects/fea9b912-5d02-4004-9061-7765e96eb4ad/2b40c78d-0ec2-479f-accf-83e8fd3ce06e/?autoplay=1&name=0&mode=Full&scroll=0" 
              className="w-full h-full"
              allow="clipboard-write" 
              allowFullScreen
              style={{ border: 0 }} 
              title="3D Model"
              scrolling="no"
            />
          )}
        </div>
        <div className="text-center">
          <Link to="/services/Modeller3D">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 bg-white text-black hover:bg-gray-100 hover:text-black border-white"
            >
              <ExternalLink className="w-4 h-4" />
              Se fler 3D-modeller
            </Button>
          </Link>
        </div>

        <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

      </div>
    </section>
  );
};

export default ModelShowcase;