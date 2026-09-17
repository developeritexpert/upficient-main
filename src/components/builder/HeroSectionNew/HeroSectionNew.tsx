import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./HeroSectionNew.scss";

const HeroSectionNew: React.FC<{ data: any }> = ({ data }) => {
  const styles = data?.styles || {}; // Default to an empty object if styles is undefined
  const padding = styles.padding || {};
  const margin = styles.margin || {};
  const btnMargin = styles.btnMargin || {};
  const borderRadius = styles.borderRadius || {};

  return (
    <section
      {...(data?.sectionid?.trim() && { id: data.sectionid.trim() })}
      className="HeroSectionNew d-flex align-items-center position-relative"
      style={{
        position: "relative",
        padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
        margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
        borderRadius: `${borderRadius.top}px ${borderRadius.right}px ${borderRadius.bottom}px ${borderRadius.left}px`,
        backgroundColor: styles.backgroundColor || "transparent",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {data?.BadgeImage && (
          <Image
            src={getImagePath("", data.BadgeImage)}
            alt="Badge"
            className="BadgeImage"
            width={500}
            height={500}
            unoptimized
          />
        )}
        <div className="row mx-0 align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="heroContent">
              <div className="heading">
                <h1 style={{ color: styles.headingColor || "inherit" }}>
                  {data?.heading?.trim() ||
                    "Scale Your Business with Optimised ClickUp Workspaces"}
                </h1>
              </div>
              {data?.description?.trim() && (
                <div
                  className="para"
                  style={{ color: styles.textColor || "inherit" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.description?.trim() ||
                      "Upficient helps agencies work more efficiently with custom-built ClickUp systems and automations that give you more time for what matters while focusing on growing your business.",
                  }}
                ></div>
              )}
              {data?.buttonText && (
                <div
                  className="btn"
                  style={{
                    margin: `${btnMargin.top || 0}px ${
                      btnMargin.right || 0
                    }px ${btnMargin.bottom || 0}px ${btnMargin.left || 0}px`,
                  }}
                >
                  <Link
                    target="_blank"
                    href="https://calendly.com/upficient-consultation/clickup-consulting"
                    className="btn-link"
                    style={{
                      backgroundColor: styles.buttonColor || undefined,
                      color: styles.buttonTextColor || undefined,
                    }}
                  >
                    {data?.buttonText?.trim() || "Free Consultation"}
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 hero-img-parent">
            {data?.image && (
              <div className="heroImg">
                <Image
                  src={getImagePath("hero_front.webp", data.image)}
                  alt="banner image"
                  width={1400}
                  height={1400}
                  className="img-contain"
                  priority
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Metadata for editing
export const meta = {
  name: "HeroSectionNew",
  fields: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "BadgeImage", label: "Badge Image", type: "file" },
    { key: "image", label: "Hero Image URL", type: "file" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonLink", label: "Button Link", type: "text" },
    { key: "sectionid", label: "Section Id", type: "text" },
  ],
  style: [
    {
      key: "padding",
      label: "Padding",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "margin",
      label: "Margin",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "btnMargin",
      label: "Button Margin",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "borderRadius",
      label: "Border Radius",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "boxShadow",
      label: "Box Shadow",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "backgroundColor",
      label: "Background Color",
      type: "color",
    },
    {
      key: "headingColor",
      label: "Heading Color",
      type: "color",
    },
    {
      key: "textColor",
      label: "Text Color",
      type: "color",
    },
    {
      key: "buttonColor",
      label: "Button Color",
      type: "color",
    },
    {
      key: "buttonTextColor",
      label: "Button Text Color",
      type: "color",
    },
  ],
};

export default HeroSectionNew;
