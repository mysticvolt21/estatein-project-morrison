import { contactHeroCard, contactHeroData, contactLetsConnectData, contactLetsConnectFormData } from "../data/Contact/ContactData.jsx";
import ContactExploreWorld from "../sections/Contact/ContactExploreWorld.jsx";
import Features from "../sections/sharedSections/Features.jsx";
import ContactForm from "../sections/Contact/ContactForm.jsx";
import OurOfficeSection from "../sections/Contact/OurOfficeSection.jsx";
import HeaderHero from "../sections/sharedSections/HeaderHero.jsx";
const Contact = () => {
  return <div className="space-y-20 md:space-y-30 xl:space-y-37.5">
      <div>
        <HeaderHero title={contactHeroData.title} description={contactHeroData.description} />
        <Features data={contactHeroCard} />
      </div>
      <ContactForm title={contactLetsConnectData.title} description={contactLetsConnectData.description} data={contactLetsConnectFormData.conactForm} areaText={contactLetsConnectFormData.areaText} />
      <OurOfficeSection />
      <ContactExploreWorld />
    </div>;
};
export default Contact;
