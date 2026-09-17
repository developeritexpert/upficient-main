import ClutchIcon from "@/components/Icons/ClutchIcon";
import LinkdinIcon from "@/components/Icons/LinkdinIcon";
import ListItems from "@/components/miscellaneous/listItems/ListItems";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import "./footer.scss";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";

const Footer = async () => {
  const menuItemsServices = [
    { name: "Workspace Architecture", href: "/clickup-onboarding-service" },
    { name: "Operating Systems", href: "/clickup-templates/product-category/operating-systems/" },
    { name: "Automation & Integrations", href: "/clickup-integrations" },
    { name: "ClickUp Consulting", href: "/clickup-consultants" },
  ];

  const menuTemplates = [
    { name: "Premium Plus", href: "/clickup-templates/subscriber/" },
    { name: "By organisation", href: "/clickup-templates/product-category/organizations/" },
    { name: "By function", href: "/clickup-templates/product-category/function/" },
    { name: "Operating systems", href: "/clickup-templates/product-category/operating-systems/" },
  ];

  const menuItemsCompare = [
    { name: "ClickUp vs Asana", href: "/clickup-guides/clickup-vs-asana" },
    { name: "ClickUp vs Monday", href: "/clickup-guides/clickup-vs-monday" },
    { name: "ClickUp vs Trello", href: "/clickup-guides/clickup-vs-trello" },
    { name: "ClickUp vs Notion", href: "/clickup-guides/clickup-vs-notion" },
  ];

  const menuItemsCompany = [
    { name: "About us", href: "/about-upficient-experts" },
    { name: "Case studies", href: "/case-study" },
    { name: "Guides", href: "/clickup-guides" },
    { name: "FAQs", href: "/faq" },
  ];

  const menuItemsLegal = [
    { name: "Privacy", href: "/clickup-templates/privacy-policy/", newTab: true },
    { name: "Terms", href: "/clickup-templates/terms-conditions-of-purchase/", newTab: true },
    { name: "Refunds", href: "/clickup-templates/refund-returns/", newTab: true },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ── Top CTA strip ─────────────────────────────── */}
        <div className="footer-top">
          <div className="footer-top-copy">
            <h2>Turn chaos into a system your team runs on.</h2>
            <p>Book a free consultation, or browse the template store.</p>
          </div>
          <div className="footer-top-actions">
            <Link
              className="btn-solid"
              target="_blank"
              href="https://calendly.com/upficient_christopher-day/template-store"
            >
              Book a free call
            </Link>
            <Link className="btn-outline" href="#templates">
              Browse templates
            </Link>
          </div>
        </div>

        <div className="footer-divider" />

        {/* ── Brand + link columns ──────────────────────── */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo">
              <Image
                src={getImagePath("footer-logo.png")}
                width={500}
                height={500}
                alt="Upficient logo"
                className="img-contain"
                loading="lazy"
                unoptimized
              />
            </div>
            <p className="brand-desc">
              Holistic ClickUp system design. Architecture, automation, AI enablement, and
              operating system builds - for teams that take their ClickUp setup seriously.
            </p>
            <div className="socialIcons d-flex">
              <Link href="https://clutch.co/profile/upficient" target="_blank" aria-label="Clutch link">
                <ClutchIcon />
              </Link>
              <Link href="https://www.linkedin.com/company/upficient" target="_blank" aria-label="LinkedIn link">
                <LinkdinIcon />
              </Link>
              <Link href="https://www.youtube.com/@Upficient" target="_blank" aria-label="YouTube link">
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Services</h4>
              <ListItems items={menuItemsServices} />
            </div>
            <div className="footer-col">
              <h4>Templates</h4>
              <ListItems items={menuTemplates} />
            </div>
            <div className="footer-col">
              <h4>Compare</h4>
              <ListItems items={menuItemsCompare} />
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ListItems items={menuItemsCompany} />
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* ── Newsletter row ─────────────────────────────── */}
        <div className="footer-newsletter">
          <div className="newsletter-copy">
            <h3>Join the Upficient insider club</h3>
            <p>ClickUp tips, new guides, and 10% off your first template order.</p>
          </div>
          <form className="newsletter-form">
            <input type="email" name="email" placeholder="you@company.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-divider" />

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="copyright">© 2026 Upficient LLC · Dover, Delaware</span>
            {menuItemsLegal.map((item, i) => (
              <Link key={i} href={item.href} target={item.newTab ? "_blank" : undefined}>
                {item.name}
              </Link>
            ))}
          </div>
          <span className="partner-badge">ClickUp Solutions Partner</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;