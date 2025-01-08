import ServicePage from "@/components/ServicePage";

const videos = [
  "Fv0v4tLW1P8",
  "T_EyDPrXtI0",
  "yrbiW0VQkmY",
  "NUzeYX3o8zo",
  "Wy2UeGV86Ls",
  "NVjkYpaXQb8",
  "03VGquYAuf0",
  "RzyE5kg0hCY",
  "Ve3x7bd2nfw"
];

const Film = () => {
  return (
    <ServicePage 
      title="VIDEOPRODUKTION"
      description="Vi kan marknadsföra ert varumärke eller fastighet med uppseendeväckande flygfilmer. Vi kan ansvara för hela produktionen och lägga till musik, grafik och logotyper. Resultatet kan anpassas efter marknadsföringskanaler såsom sociala medier, webb och storbildsskärmar. Vi kan även vara ett steg i en större produktion och bidra med flygfilm. Materialet kan levereras direkt i RAW-kvalité. Flygfilm lämpar sig väl till de flesta sorters produktioner och kan ofta vara ett bra sätt att skapa omväxling för tittaren. Utöver flygfilm jobbar vi även med vanlig filmproduktion från marken och använder då gimbal-stabilisering för att uppnå ett bra resultat."
    >
      <div className="w-full h-[60vh] bg-gray-900 mb-16">
        <video
          className="w-full h-full object-cover"
          src="/lovable-uploads/showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="bg-white text-black p-8">
        <h2 className="text-2xl font-bold mb-8">Våra Produktioner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((videoId, index) => (
            <div key={index} className="aspect-video w-full shadow-lg rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </ServicePage>
  );
};

export default Film;