import FooterLinks from "./footer-links";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full ">
      <div className="relative border-t-2 border-brown-200 h-footer w-full flex justify-center items-center gap-10 px-[2.6rem]">
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
