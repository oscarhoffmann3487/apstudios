import { Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">OM OSS</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Vi är specialister på drönartjänster och har många års erfarenhet av att identifiera användningsområden och ta fram lösningar till kunder. Vi innehar alla nödvändiga tillstånd och försäkringar som krävs för att flyga drönare och tar alltid hänsyn till regler och risker.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/80657fb0-a28a-4802-96f9-f7cee84e4c7d.png" 
              alt="AP Studios Logo" 
              className="h-20 mb-4"
            />
            <p className="text-sm text-gray-400">© 2015 APstudios - Org nr: 990203-6475</p>
          </div>
          <a 
            href="https://youtube.com/@apstudios1335?si=qW6bvDQydIKf7IIL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 hover:text-accent transition-colors"
          >
            <Youtube size={24} />
          </a>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">INFO</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p>Adress: Kunskapslänken 94</p>
            <p>Postadress: 583 28 Linköping</p>
            <p>Email: <a href="mailto:info@apstudios.se" className="hover:underline">info@apstudios.se</a></p>
            <p>Tel: 072-544 88 60</p>
            <div className="pt-4">
              <a href="/gdpr" className="hover:underline">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;