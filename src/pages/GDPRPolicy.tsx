import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GDPRPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-3xl mx-auto py-16">
          <h1 className="text-4xl font-bold mb-8">APstudios Integritetspolicy</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Behandling av personuppgifter</h2>
            <p>Denna dag (2019-09-09) har följande policy upprättats för APstudios (org nr 990203-6475).</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Syfte</h2>
            <p>Vi värnar om din integritet. Du ska kunna känna dig trygg när du anförtror oss dina personuppgifter. Därför har vi upprättat den här policyn. Den utgår från gällande dataskyddslagstiftning och förtydligar hur vi jobbar för att ta tillvara dina rättigheter och din integritet. Syftet med den här policyn är att du ska få veta hur vi behandlar dina personuppgifter, vad vi använder dem till, vilka som får ta del av dem och under vilka förutsättningar samt hur du kan ta tillvara dina rättigheter.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Bakgrund</h2>
            <p>Vi behandlar dina personuppgifter främst för att fullfölja våra förpliktelser mot dig. Vår utgångspunkt är att inte behandla fler personuppgifter än vad som behövs för ändamål, och vi strävar alltid efter att använda de minst integritetskänsliga uppgifterna. Vi behöver också dina personuppgifter för att ge dig bra service exempelvis vad gäller marknadsföring, uppföljning, fakturering och information.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Riktlinjer</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Vilka personuppgifter behandlar vi?</h3>
            <p>Vi behandlar endast personuppgifter när vi har laglig grund. Vi behandlar inte personuppgifter i annat fall än när de behövs för att fullgöra förpliktelser enligt avtal och lag.</p>
            
            <p className="mt-4">Här följer exempel på personuppgifterna vi behandlar:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Namn</li>
              <li>Adress</li>
              <li>E-postadress</li>
              <li>Telefonnummer</li>
            </ul>
            
            <ul className="list-disc pl-6 mt-4">
              <li>Uppgifter som du registrerade självmant och frivilligt uppger</li>
              <li>Innehåll som du själv publicerar, s.k. användargenererat innehåll</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">Hur får vi tillgång till dina personuppgifter?</h3>
            <p>Vid beställning av uppdrag hos oss samtycker ni att vi behandlar era personuppgifter.</p>
            <p className="mt-4">Du har när som helst rätt att återkalla ditt samtycke. Vi kommer då inte längre att behandla dina personuppgifter eller inhämta nya, under förutsättning att det inte behövs för att fullgöra våra skyldigheter enligt avtal eller lag. Tänk på att återkallelse av samtycke kan innebära att vi inte kan fullgöra de skyldigheter vi har i förhållande till dig.</p>

            <p className="mt-4">Vi får också tillgång till dina personuppgifter på följande sätt:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Uppgifter som du tillhandahåller oss direkt</li>
              <li>Uppgifter som vi får när du anlitar en av våra medarbetare</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">Vilken information ger vi till dig?</h3>
            <p>När vi samlar in dina personuppgifter lagras detta i vårt faktureringssystem. Ansvarig för personuppgiftsbehandlingen är Oscar Hoffmann och du kan alltid kontakta oss om du har frågor eller behöver lämna en begäran eller förfrågan som avser dina personuppgifter och/eller rättigheter. Ring 072-5448860 eller maila till <a href="mailto:info@apstudios.se" className="text-blue-600 hover:underline">info@apstudios.se</a></p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Behandlas dina personuppgifter på ett betryggande sätt?</h3>
            <p>Vi har rutiner och arbetssätt för att dina personuppgifter ska hanteras på ett säkert sätt. Utgångspunkten är att endast arbetstagare och andra personer inom organisationen som behöver personuppgifterna för att utföra sina arbetsuppgifter ska ha tillgång till dem. Vi överför inte personuppgifter i andra fall än de som uttryckligen anges i denna policy.</p>

            <h3 className="text-xl font-semibold mt-8 mb-3">När lämnar vi ut dina personuppgifter?</h3>
            <p>Vår utgångspunkt är att inte lämna ut dina personuppgifter till tredje part om du inte har samtyckt till det eller om det inte är nödvändigt för att uppfylla våra förpliktelser enligt avtal eller lag.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Ansvar</h2>
            <p>APstudios är personuppgiftsansvarig, vilket innebär att vi är ansvariga för hur dina personuppgifter behandlas och att dina rättigheter tas tillvara.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GDPRPolicy;