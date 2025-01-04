import { Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">OM OSS</h3>
          <p className="text-sm text-gray-300">
            Vi är specialister på drönartjänster och har många års erfarenhet av att identifiera användningsområden och ta fram lösningar till kunder. Vi innehar alla nödvändiga tillstånd och försäkringar som krävs för att flyga drönare och tar alltid hänsyn till regler och risker.
          </p>
        </div>
        
        <div className="text-center">
          <img 
            src="/lovable-uploads/80657fb0-a28a-4802-96f9-f7cee84e4c7d.png" 
            alt="AP Studios Logo" 
            className="h-12 mx-auto mb-4"
          />
          <p className="text-sm text-gray-400">© 2015 APstudios - Org nr: 990203-6475</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">INFO</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Adress: Kunskapslänken 94</p>
            <p>Postadress: 583 28 Linköping</p>
            <p>Email: info@apstudios.se</p>
            <p>Tel: 072-544 88 60</p>
            <div className="flex items-center justify-between mt-4">
              <a href="/gdpr" className="hover:underline">GDPR</a>
              <a href="https://youtube.com" className="hover:text-accent transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;