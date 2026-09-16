"use client";
import { getImagePath } from "@/services/common.service";
import {
  faBars,
  faUser,
  faBuilding,
  faGear,
  faBolt,
  faMessage,
  faUserTie,
  faRocket,
  faHeartPulse,
  faUsers,
  faBullhorn,
  faHeadset,
  faFlag,
  faBullseye,
  faLayerGroup,
  faGraduationCap,
  faChartColumn,
  faCircleQuestion,
  faBook,
  faSitemap,
  faFileLines,
  faRobot,
  faCompass,
  faArrowRight,
  faLandmark,
  faTicket,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./header.scss";

const Header = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const accountRef2 = useRef<HTMLDivElement>(null);

  // ── Hamburger / overlay / mobile accordion ──────────────────
  useEffect(() => {
    let overlay = document.querySelector(".menu-overlay") as HTMLElement | null;
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "menu-overlay";
      document.body.appendChild(overlay);
    }

    const hamburger = document.querySelector(".hamburger-menu");
    const headerMenu = document.querySelector(".headerMenu") as HTMLElement | null;
    const closeMenuBtn = document.querySelector(".close-menu");

    const openMenu = () => {
      if (overlay) {
        overlay.style.display = "block";
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            overlay!.classList.add("visible");
            headerMenu?.classList.add("active");
          });
        });
      }
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      headerMenu?.classList.remove("active");
      overlay?.classList.remove("visible");
      document.body.style.overflow = "";
    };

    hamburger?.addEventListener("click", openMenu);
    closeMenuBtn?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);

    const dropdowns = document.querySelectorAll<HTMLElement>(".has-mega-menu");

    const handleDropdownClick = (e: Event) => {
      if (window.innerWidth > 992) return;

      const link = (e.target as HTMLElement).closest("a.menu-link");
      if (!link) return;

      e.preventDefault();
      const li = link.closest<HTMLElement>("li.dropdown");
      if (!li) return;

      const isOpen = li.classList.contains("mobile-open");
      dropdowns.forEach((d) => d.classList.remove("mobile-open"));
      if (!isOpen) li.classList.add("mobile-open");
    };

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", handleDropdownClick as EventListener);
    });

    return () => {
      hamburger?.removeEventListener("click", openMenu);
      closeMenuBtn?.removeEventListener("click", closeMenu);
      overlay?.removeEventListener("click", closeMenu);
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleDropdownClick as EventListener);
      });
      document.body.style.overflow = "";
    };
  }, []);

  // ── Close account dropdown on outside click ─────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedInsideAnyDropdown = !!(e.target as HTMLElement)?.closest(
        ".account-dropdown-wrapper"
      );
      if (!clickedInsideAnyDropdown) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Menu data, matching the live WordPress mega menus ───────
  const menuItems = [
    {
      name: "Services",
      href: "/our-services/",
      type: "grid" as const,
      sectionLabel: "Our Services",
      cards: [
        {
          icon: faLandmark,
          color: "purple",
          title: "Workspace Architecture",
          description: "New workspace or full restructure —hierarchy, fields, dashboards, training.",
          href: "/clickup-workspace-optimization/",
          badge: "Most Requested",
        },
        {
          icon: faGear,
          color: "slate",
          title: "ClickUp for Operating Systems",
          description: "EOS®, OKRs, Scaling Up® — built properly in ClickUp.",
          href: "/clickup-templates/product-category/operating-systems/",
        },
        {
          icon: faBolt,
          color: "pink",
          title: "Automation & Integrations",
          description: "Make.com, Zapier, native ClickUp — eliminate manual work.",
          href: "/clickup-integrations/",
        },
        {
          icon: faMessage,
          color: "amber",
          title: "ClickUp Consulting",
          description: "Audits, strategy, AI setup, training — on your schedule.",
          href: "/clickup-consultants/",
        },
      ],
    },
    {
      name: "Clickup Templates",
      href: "/clickup-templates/",
      type: "sidebar" as const,
      sidebarTitle: "Browse by",
      sidebarGroups: [
        {
          title: "Organisation",
          items: [
            { icon: faBuilding, label: "Agencies", href: "/clickup-templates/product-category/organizations/creative-agencies/" },
            { icon: faUserTie, label: "Professional services", href: "/clickup-templates/product-category/organizations/professional-services/" },
            { icon: faRocket, label: "Startups tech", href: "/clickup-templates/product-category/organizations/startups-tech-teams/" },
            { icon: faHeartPulse, label: "Healthcare", href: "/clickup-templates/product-category/organizations/healthcare-services/" },
          ],
        },
        {
          title: "Function",
          items: [
            { icon: faUsers, label: "Client delivery", href: "/clickup-templates/product-category/categories/client-fulfilment/" },
            { icon: faBolt, label: "Operations", href: "/clickup-templates/product-category/categories/operations/" },
            { icon: faBullhorn, label: "Marketing", href: "/clickup-templates/product-category/categories/marketing/" },
            { icon: faHeadset, label: "Support tickets", href: "/clickup-templates/product-category/function/support/" },
          ],
        },
        {
          title: "Operating systems",
          items: [
            { icon: faFlag, label: "EOS®", href: "/clickup-templates/product/scaling-up-rockefeller-method-2-0/" },
            { icon: faBullseye, label: "OKRs", href: "/clickup-templates/product-category/operating-systems/objective-key-results-okr/" },
            { icon: faLayerGroup, label: "+ much more", href: "/clickup-templates/product-category/operating-systems/" },
          ],
        },
      ],
      sidebarFooterLink: { label: " All templates →", href: "/clickup-templates/" },
      listTitle: "Featured Templates",
      listType: "template" as const,
      listItems: [
        {
          icon: faGraduationCap,
          color: "purple",
          title: "ClickUp Onboarding Training",
          description: "Train your team on ClickUp with a structured onboarding system and documented SOPs.",
          tag: "Onboarding",
          href: "/clickup-onboarding-service/",
        },
        {
          icon: faBullseye,
          color: "green",
          title: "OKR System",
          description: "Quarterly objectives, key results, check-ins, and leadership dashboards.",
          tag: "Operating system",
          href: "/clickup-workspace-optimization/",
        },
        {
          icon: faBullhorn,
          color: "pink",
          title: "Digital Marketing Agency — Client Delivery",
          description: "Folder-per-client structure with scoped views and automation layer.",
          tag: "Agency",
          href: "/clickup-templates/product-category/categories/marketing/",
        },
        {
          icon: faTicket,
          color: "pinkpurple",
          title: "Support Tickets Hub",
          description: "Centralise, triage, and resolve internal and external tickets.",
          tag: "Function",
          href: "/clickup-templates/product-category/function/support/",
        },
      ],
    },
    {
      name: "Guides",
      href: "/clickup-guides",
      type: "sidebar" as const,
      sidebarTitle: "Browse by type",
      sidebarSimpleItems: [
        { icon: faBook, label: "All guides", count: 7, href: "/clickup-guides" },
        { icon: faSitemap, label: "Architecture", count: 1, href: "/clickup-guides/how-to-design-clickup-dashboards" },
        { icon: faFileLines, label: "Template guides", count: 1, href: "/clickup-guides/clickup-in-2025-the-ultimate-guide" },
        { icon: faRobot, label: "ClickUp AI", count: 1, href: "/clickup-guides/clickup-in-2025-the-ultimate-guide" },
        { icon: faCompass, label: "OS guides", count: 1, href: "/clickup-guides/how-to-use-clickup-full-clickup-tutorial" },
      ],
      sidebarFooterLink: { label: "All guides", href: "/clickup-guides" },
      listTitle: "Featured Guides",
      listType: "template" as const,
      listItems: [
        {
          icon: faSitemap,
          color: "purple",
          title: "The ClickUp Hierarchy Explained",
          description: "Workspaces, Spaces, Folders, Lists, Tasks — what they mean and how to design them right.",
          tag: "Tutorial · 12 min",
          href: "/clickup-guides/how-to-use-clickup-full-clickup-tutorial",
        },
        {
          icon: faRobot,
          color: "blue",
          title: "ClickUp Brain: A Practical Setup Guide",
          description: "What Brain actually does, what your workspace needs before it works, how to prompt effectively.",
          tag: "ClickUp AI · 15 min",
          href: "/clickup-guides/clickup-in-2025-the-ultimate-guide",
        },
        {
          icon: faFileLines,
          color: "pink",
          title: "How to Design ClickUp Dashboards That Actually Get Used",
          description: "Dashboard-first design principle, widget selection, and data prerequisites.",
          tag: "Architecture · 13 min",
          href: "/clickup-guides/how-to-design-clickup-dashboards",
        },
        {
          icon: faFlag,
          color: "green",
          title: "How to Implement EOS® in ClickUp",
          description: "All six EOS® components built in ClickUp — a complete architecture guide.",
          tag: "OS guide · 18 min",
          href: "/clickup-guides/how-to-implement-eos-in-clickup",
        },
      ],
    },
    {
      name: "About",
      href: "/about-upficient-experts",
      type: "sidebar" as const,
      sidebarTitle: "Company",
      sidebarSimpleItems: [
        { icon: faUsers, label: "About Upficient", href: "/about-upficient-experts" },
        { icon: faChartColumn, label: "Case studies", href: "/case-study" },
        { icon: faCircleQuestion, label: "FAQs", href: "/faq" },
      ],
      listTitle: "Featured Case Studies",
      listType: "caseStudy" as const,
      listItems: [
        {
          avatarText: "Le",
          color: "green",
          title: "Lento Agency",
          description: "Creative agency · Argentina · 5 engagements",
          tag: "EOS® Implementation",
          href: "/lento-agency",
        },
        {
          avatarText: "ML",
          color: "slate",
          title: "Moms for Liberty",
          description: "Political org · United States · 6 engagements",
          tag: "Workspace Architecture",
          href: "/moms-for-liberty",
        },
        {
          avatarText: "Ba",
          color: "purple",
          title: "Battalions",
          description: "Field operations · South Africa · 8 sprints",
          tag: "Automation & Integrations",
          href: "/the-company-films",
        },
        {
          avatarText: "Mm",
          color: "navy",
          title: "Marmalade Marketing",
          description: "Marketing agency · UK · 1 engagement",
          tag: "Workspace Architecture",
          href: "/the-ola-agency",
        },
      ],
    },
  ];

  // ── Renderers ────────────────────────────────────────────────
  const renderGridMenu = (item: any) => (
    <div className="mega-menu mega-menu--grid">
      <p className="mega-eyebrow">{item.sectionLabel}</p>
      <div className="mega-grid">
        {item.cards.map((card: any, index: number) => (
          <Link href={card.href} className={`mega-card`} key={index}>
            {card.badge && <span className="mega-badge">{card.badge}</span>}
            <span className={`mega-card-icon icon-${card.color}`}>
              <FontAwesomeIcon icon={card.icon} />
            </span>
            <span className="mega-card-body">
              <span className="mega-card-title">{card.title}</span>
              <span className="mega-card-desc">{card.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );

  const renderSidebarMenu = (item: any) => (
    <div className="mega-menu mega-menu--sidebar">
      <div className="mega-sidebar">
        <p className="mega-eyebrow">{item.sidebarTitle}</p>

        {item.sidebarGroups &&
          item.sidebarGroups.map((group: any, gIndex: number) => (
            <div className="mega-sidebar-group" key={gIndex}>
              <p className="mega-sidebar-group-title">{group.title}</p>
              <ul className="list-none">
                {group.items.map((link: any, lIndex: number) => (
                
                  <li key={lIndex}>
                    <Link href={link.href} className="mega-sidebar-link">
                      <FontAwesomeIcon icon={link.icon} />
                      {link.label}
                    </Link>
                  </li>
                 
                ))}
              </ul>
              <div className="sidebar-menu-group__divider"></div>
            </div>
          ))}

        {item.sidebarSimpleItems && (
          <ul className="list-none mega-sidebar-simple">
            {item.sidebarSimpleItems.map((link: any, lIndex: number) => (
              <li key={lIndex}>
                <Link href={link.href} className="mega-sidebar-link">
                  <FontAwesomeIcon icon={link.icon} />
                  {link.label}
                  {typeof link.count === "number" && (
                    <span className="mega-sidebar-count">{link.count}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {item.sidebarFooterLink && (
          <Link href={item.sidebarFooterLink.href} className="mega-sidebar-footer">
            <FontAwesomeIcon icon={faGrip} />
            {item.sidebarFooterLink.label}
          </Link>
        )}
      </div>

      <div className="mega-list">
        <p className="mega-eyebrow">{item.listTitle}</p>
        <ul className="list-none">
          {item.listItems.map((row: any, rIndex: number) => (
            <li key={rIndex}>
              <Link href={row.href} className="mega-list-row">
                {item.listType === "caseStudy" ? (
                  <span className={`mega-avatar icon-${row.color}`}>{row.avatarText}</span>
                ) : (
                  <span className={`mega-list-icon icon-${row.color}`}>
                    <FontAwesomeIcon icon={row.icon} />
                  </span>
                )}
                <span className="mega-list-body">
                  <span className="mega-list-title">{row.title}</span>
                  <span className="mega-list-desc">{row.description}</span>
                  <span
                    className={`mega-tag ${
                      item.listType === "caseStudy" ? "mega-tag--green" : "mega-tag--purple"
                    }`}
                  >
                    {row.tag}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderMegaMenu = (item: any) =>
    item.type === "grid" ? renderGridMenu(item) : renderSidebarMenu(item);

  return (
    <>

      <header id="header">
        <div className="header-wrapper">
          <Link className="headerLogo" href={"/"}>
            <Image
              src={getImagePath("mainlogo.png")}
              width={154}
              height={41}
              alt="Logo"
              className="img-contain"
              loading="lazy"
              unoptimized
            />
          </Link>

          <button className="hamburger-menu" aria-label="Open menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button className="close-menu" aria-label="Close menu">
            X
          </button>
          <nav className="nav-list headerMenu">
            <ul className="menu list-none d-flex">
              {menuItems.map((item, index) => (
                <li className="dropdown has-mega-menu" key={index}>
                  <Link href={item.href} className="menu-link">
                    {item.name}
                    <span aria-hidden="true" className="chev"></span>
                  </Link>
                  {renderMegaMenu(item)}
                </li>
              ))}
            </ul>
          </nav>

          <Link className="book-a-call" target="_blank" href="https://calendly.com/upficient_christopher-day/intro">
            Book a free call
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;