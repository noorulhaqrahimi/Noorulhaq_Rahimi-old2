import ContactF from "./ContactF";
import EndF from "./EndF";
import FullFLG from "./FullFLG";
import PersonalInfoF from "./PersonalInfoF";
import ProductsF from "./ProductsF";
import QuickLink from "./QuickLink";
import SocialLinks from "./SocialLinks";


const Footer = function () {
  return (
    <>
      <PersonalInfoF />
      <SocialLinks />
      <QuickLink />
      <ProductsF />
      <ContactF/>
      <FullFLG/>
      <EndF />
    </>
  );
};

export default Footer;