import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import React from "react";
import "./TextWithImage.scss";

const TextWithImage: React.FC<{ data: any }> = ({ data }) => {
  const { title, description = "This is Description" } = data;
  const styles = data.styles || {}; // Safely default `styles` to an empty object
  return (
    <>
      <section
        className="aboutBlog"
        style={{
          padding: styles.padding
            ? `${styles.padding.top || 0}px ${styles.padding.right || 0}px ${
                styles.padding.bottom || 0
              }px ${styles.padding.left || 0}px`
            : undefined,
          margin: styles.margin
            ? `${styles.margin.top || 0}px ${styles.margin.right || 0}px ${
                styles.margin.bottom || 0
              }px ${styles.margin.left || 0}px`
            : undefined,
          borderRadius: styles.borderRadius
            ? `${styles.borderRadius.top || 0}px ${
                styles.borderRadius.right || 0
              }px ${styles.borderRadius.left || 0}px ${
                styles.borderRadius.bottom || 0
              }px`
            : undefined,
          backgroundColor: styles.backgroundColor || "#A66AEB",
        }}
        {...(styles.sectionId ? { id: styles.sectionId } : {})}
      >
        <div className="container">
          <div
            className="row mx-0"
            style={{
              flexDirection:
                styles.alignment == "right" ? "row-reverse" : undefined,
              alignItems:
                styles.alignAlignment == "center" ? "center" : undefined,
            }}
          >
            <div className="col-lg-6">
              <div
                className="aboutBlogImg"
                style={{
                  position:
                    styles.alignAlignment == "sticky" ? "sticky" : undefined,
                  top: styles.alignAlignment == "sticky" ? "90px" : undefined,
                }}
              >
                <Image
                  src={getImagePath("bgsec1img.webp", data?.imageSrc)}
                  width={1200}
                  height={1200}
                  alt={data?.imageAlt || ""}
                  className="img-contain"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blogAbContent">
                <div className="heading">
                  <h3
                    style={{
                      color: styles.headingColor ? styles.headingColor : "#fff",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: (title || "").trim(),
                    }}
                  ></h3>
                </div>
                <div
                  className="content"
                  style={{
                    color: styles.textColor ? styles.textColor : "#fff",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: description.trim() || "",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const meta = {
  name: "SectionWithBg",
  fields: [
    { key: "imageSrc", label: "Image Source", type: "file" },
    { key: "imageAlt", label: "Alt Text", type: "text" },
    { key: "title", label: "Title", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
  ],
  style: [
    {
      key: "sectionId",
      label: "Section Id",
      type: "text",
    },
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
      key: "alignment",
      label: "Section Alignment",
      type: "radioOptions",
      fields: [
        { key: "right", label: "Right", type: "radio" },
        { key: "left", label: "Left", type: "radio" },
      ],
    },
    {
      key: "alignAlignment",
      label: "Verticle Alignment",
      type: "radioOptions",
      fields: [
        { key: "sticky", label: "Sticky", type: "radio" },
        { key: "center", label: "center", type: "radio" },
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
  ],
};

export default TextWithImage;
