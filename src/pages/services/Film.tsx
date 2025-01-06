import ServicePage from "@/components/ServicePage";

const Film = () => {
  return (
    <ServicePage 
      title="VIDEOPRODUKTION"
      description="Vi kan marknadsföra ert varumärke eller fastighet med uppseendeväckande flygfilmer. Vi kan ansvara för hela produktionen och lägga till musik, grafik och logotyper. Resultatet kan anpassas efter marknadsföringskanaler såsom sociala medier, webb och storbildsskärmar. Vi kan även vara ett steg i en större produktion och bidra med flygfilm. Materialet kan levereras direkt i RAW-kvalité. Flygfilm lämpar sig väl till de flesta sorters produktioner och kan ofta vara ett bra sätt att skapa omväxling för tittaren. Utöver flygfilm jobbar vi även med vanlig filmproduktion från marken och använder då gimbal-stabilisering för att uppnå ett bra resultat."
    >
      <div className="bg-white text-black p-8">
        <h2 className="text-2xl font-bold mb-8">Våra Produktioner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video gallery placeholders - will be replaced with actual YouTube embeds */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video {index}</p>
            </div>
          ))}
        </div>
      </div>
    </ServicePage>
  );
};

export default Film;