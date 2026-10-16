import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const GDPRPolicy = () => {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.gdpr;
  const seo = copy.seo.gdpr;

  return (
    <div className="min-h-screen bg-white">
      <Seo title={seo.title} description={seo.description} path="/gdpr" />
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-3xl mx-auto py-16">
          <h1 className="text-4xl font-bold mb-8">{t.pageTitle}</h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.section1Title}</h2>
            <p>{t.section1Text}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.purposeTitle}</h2>
            <p>{t.purposeText}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.backgroundTitle}</h2>
            <p>{t.backgroundText}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.guidelinesTitle}</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">{t.whatDataTitle}</h3>
            <p>{t.whatDataText}</p>

            <p className="mt-4">{t.whatDataListIntro}</p>
            <ul className="list-disc pl-6 mt-2">
              {t.whatDataList.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <ul className="list-disc pl-6 mt-4">
              {t.whatDataList2.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">{t.howAccessTitle}</h3>
            <p>{t.howAccess1}</p>
            <p className="mt-4">{t.howAccess2}</p>

            <p className="mt-4">{t.howAccess3}</p>
            <ul className="list-disc pl-6 mt-2">
              {t.howAccessList.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">{t.infoToYouTitle}</h3>
            <p>
              {t.infoToYouText}
              <a href="mailto:info@apstudios.se" className="text-blue-600 hover:underline">info@apstudios.se</a>
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">{t.secureTitle}</h3>
            <p>{t.secureText}</p>

            <h3 className="text-xl font-semibold mt-8 mb-3">{t.shareTitle}</h3>
            <p>{t.shareText}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t.responsibilityTitle}</h2>
            <p>{t.responsibilityText}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GDPRPolicy;
