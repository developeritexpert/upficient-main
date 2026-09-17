import ClutchIcon from "@/components/Icons/ClutchIcon";
import LinkdinIcon from "@/components/Icons/LinkdinIcon";
import ListItems from "@/components/miscellaneous/listItems/ListItems";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import "./footer.scss";
import LazyMap from "@/components/miscellaneous/LazyMap/LazyMap";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";
import FooterClient from "./footerClient";


const Footer = async () => {
  const menuItems = [
    { name: "ClickUp Onboarding", href: "/clickup-onboarding-service" },
    { name: "Workspace Optimization", href: "/clickup-workspace-optimization" },
    { name: "ClickUp Integrations", href: "/clickup-integrations" },
    { name: "ClickUp Consulting", href: "/clickup-consultants" },
  ];
  const menuTemplates = [
    { name: "Templates by Organisation", href: "/clickup-templates/product-category/organizations/" },
    { name: "Template by Function", href: "/clickup-templates/product-category/function/" },
    { name: "Operating Systems", href: "/clickup-templates/product-category/operating-systems/" },
    { name: "Annual Subscription", href: "/clickup-templates/subscriber/" },
  ];
  const menuItemsCompare = [
    { name: "ClickUp vs. Asana", href: "/clickup-guides/clickup-vs-asana" },
    { name: "ClickUp vs. Monday.com", href: "/clickup-guides/clickup-vs-monday" },
    { name: "ClickUp vs. Trello", href: "/clickup-guides/clickup-vs-trello" },
    { name: "ClickUp vs. Notion", href: "/clickup-guides/clickup-vs-notion" },
  ];
  const menuItemsConnect = [
    { name: "Contact Us", href: "/contact" },
    {
      name: "Free Consultation",
      href: "https://calendly.com/upficient-consultation/30min-free-consultation?month=2025-01",
    },
  ];
  const menuItemsLegal = [
    {
      name: "Privacy Policy",
      href: "/clickup-templates/privacy-policy/",
      newTab: true,
    },
    {
      name: "Terms & Conditions",
      href: "/clickup-templates/terms-conditions-of-purchase/",
      newTab: true,
    },
    {
      name: "Refund Policy",
      href: "/clickup-templates/refund-returns/",
      newTab: true,
    },
    {
      name: "Cookie Settings",
      href: "",
      newTab: false,
    },
  ];
  const menuItemsLearn = [
    { name: "About Us", href: "/about-upficient-experts" },
    { name: "Guides", href: "/clickup-guides" },
    { name: "Case Studies", href: "/case-study" },
    {
      name: "ClickUp in 2025: The Ultimate Guide",
      href: "/clickup-guides/clickup-in-2025-the-ultimate-guide",
    },
    {
      name: "How to Use ClickUp: Full ClickUp Tutorial",
      href: "/clickup-guides/how-to-use-clickup-full-clickup-tutorial",
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row mx-0">
            <div className="column column-40">
              <div className="logo">
                <Image
                  src={getImagePath("logomain.webp")}
                  width={500}
                  height={500}
                  alt="Upficient logo"
                  className="img-contain"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className="para">
                <p>
                  Solutions architecture agency specialising in ClickUp workspace building, ClickUp
                  optimization and workflow automation.
                </p>
              </div>
              <div className="footerText">
                <h4>Our Networks</h4>
              </div>
              <div className="socialIcons d-flex">
                <Link
                  href="https://clutch.co/profile/upficient"
                  target="_blank"
                  aria-label="Clutch link"
                >
                  <ClutchIcon />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/upficient"
                  target="_blank"
                  aria-label="LinkedIn link"
                >
                  <LinkdinIcon />
                </Link>
                <Link
                  href="https://www.youtube.com/@Upficient"
                  target="_blank"
                  aria-label="YouTube link"
                >
                  <YoutubeIcon />
                </Link>
              </div>
            </div>

            <div className="column column-20">
              <div className="listbox">
                <h3>Services</h3>
                <ListItems items={menuItems} />
              </div>
              <div className="listbox">
                <h3>Templates</h3>
                <ListItems items={menuTemplates} />
              </div>
            </div>

            <div className="column column-20">
              <div className="listbox">
                <h3>Compare</h3>
                <ListItems items={menuItemsCompare} />
              </div>
              <div className="listbox">
                <h3>Connect</h3>
                <ListItems items={menuItemsConnect} />
                {/* Newsletter Signup rendered as interactive client button */}
                <FooterClient />
              </div>
              <div className="listbox">
                <h3>Legal</h3>
                <ListItems items={menuItemsLegal} />
              </div>
            </div>

            <div className="column column-20">
              <div className="listbox">
                <h3>Learn</h3>
                <ListItems items={menuItemsLearn} />
              </div>
              <div className="col text-center footerlogos">
                <Image
                  src={getImagePath("verified-Ambassador-v3-3.png")}
                  width={500}
                  height={500}
                  alt="Verified Ambassador badge"
                  className="img-contain"
                  loading="lazy"
                  unoptimized
                />
                <Image
                  src={getImagePath("verifieldclickup.png")}
                  width={500}
                  height={500}
                  alt="Verified ClickUp badge"
                  className="img-contain"
                  loading="lazy"
                  unoptimized
                />
                <Image
                  src={getImagePath("certificate-wt34kk2dgmun-1753795545-1-1-1.png")}
                  width={500}
                  height={500}
                  alt="ClickUp certificate"
                  className="img-contain"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
