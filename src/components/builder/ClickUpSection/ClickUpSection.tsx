import ClickBox from "@/components/miscellaneous/ClickBox/ClickBox";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./ClickUpSection.scss";

// Define types for the boxes
interface Box {
  imageSrc: string;
  title: string;
}

const ClickUpSection: React.FC<{ data: any }> = ({ data }) => {
  const {
    title = "What is ClickUp Project Management Software?",
    description = `
      ClickUp is a groundbreaking project management software that offers customizable workflows, seamless integrations with thousands of tools, and powerful AI features for automating tasks and enhancing productivity.
      <br/>
      It supports efficient team collaboration through shared documents and real-time editing, aiming for continuous innovation to meet the evolving needs of project management.
      <br/>
      Thousands of businesses are migrating to ClickUp from legacy tools, so should you!`,
    buttonText = "",
    buttonLink = "/learn-more",
    boxes = [],
  } = data;
  const styles = data.styles || {}; // Safely default `styles` to an empty object

  return (
    <>
      <section
        className="clickup"
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
          backgroundColor: styles.backgroundColor || undefined,
        }}
      >
        <div className="container">
          <div className="row mx-0 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="content">
                <div className="heading">
                  <h2
                    style={{
                      color: styles.headingColor || undefined,
                    }}
                  >
                    {title.trim() ||
                      "What is ClickUp Project Management Software?"}
                  </h2>
                </div>
                <div
                  className="para"
                  style={{
                    color: styles.textColor || undefined,
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      description.trim() ||
                      `
      ClickUp is a groundbreaking project management software that offers customizable workflows, seamless integrations with thousands of tools, and powerful AI features for automating tasks and enhancing productivity.
      <br/>
      It supports efficient team collaboration through shared documents and real-time editing, aiming for continuous innovation to meet the evolving needs of project management.
      <br/>
      Thousands of businesses are migrating to ClickUp from legacy tools, so should you!`,
                  }}
                ></div>
                {buttonText.trim() != "" && (
                  <div className="btn">
                    <Link
                      href={buttonLink.trim() || "#"}
                      className="btn-link"
                      style={{
                        backgroundColor: styles.buttonColor || undefined,
                        color: styles.buttonTextColor || undefined,
                      }}
                    >
                      {buttonText.trim() || "Learn More"}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="servBoxes">
                {boxes.length > 0 ? (
                  boxes.map((box: Box, index: number) => (
                    <ClickBox
                      key={index}
                      imageSrc={box.imageSrc?.trim() || ""}
                      title={box.title?.trim() || "Default Box Title"}
                      boxbackgroundColor={
                        styles.boxbackgroundColor || undefined
                      }
                      BoxHeadingColor={styles.BoxHeadingColor || undefined}
                    />
                  ))
                ) : (
                  <p>No boxes available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rating">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8">
              <div className="ratingImg">
                <Link href={getImagePath("newservice.webp")}>
                  <Image
                    src={getImagePath("newservice.webp")}
                    alt="banner image"
                    width={800}
                    height={600}
                    className="img-contain"
                    loading="lazy"
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Metadata for editing
export const meta = {
  name: "ClickUpSection",
  fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonLink", label: "Button Link", type: "text" },
    {
      key: "boxes",
      type: "repeater",
      fields: [
        { key: "imageSrc", label: "Image Source", type: "file" },
        { key: "title", label: "Title", type: "text" },
      ],
    },
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
      key: "boxbackgroundColor",
      label: "Box Background Color",
      type: "color",
    },
    {
      key: "headingColor",
      label: "Heading Color",
      type: "color",
    },
    {
      key: "BoxHeadingColor",
      label: "Box Heading Color",
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

export default ClickUpSection;
