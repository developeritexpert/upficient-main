import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import React from "react";
import "./CaseStudyHead.scss";

const CaseStudyHead: React.FC<{ data: any }> = ({ data }) => {
  const { imageSrc, imageAlt, title, heighlights } = data;
  const styles = data.styles || {}; // Safely default `styles` to an empty object

  return (
    <>
      <section
        className="singleCaseAbout"
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
        }}
      >
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-6">
              <div className="singleImg">
                <Image
                  src={getImagePath("bgsec1img.webp", imageSrc ? imageSrc : "")}
                  alt={imageAlt ? imageAlt : "case studie"}
                  height={600}
                  width={800}
                  className="img-contain"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="singleCaseContent">
                <div className="title">
                  <h2>{title}</h2>
                </div>
                <div className="text">
                  {heighlights?.map((highlight: any, index: number) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: highlight.highlight }}
                    ></p>
                  ))}

                  {/* <p>
                    <span>Delivered:</span> 03 April, 2024
                  </p>
                  <p>
                    <span>Delivered:</span> 03 April, 2024
                  </p> */}
                </div>
                <div className="btn">
                  <a href={data?.btnurl || "#"}>
                    {data?.btntext || "Read More"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const meta = {
  name: "CaseStudyHead",
  fields: [
    { key: "imageSrc", label: "Image Source", type: "file" },
    { key: "imageAlt", label: "Alt Text", type: "text" },
    { key: "title", label: "Title", type: "text" },
    {
      key: "heighlights",
      label: "Highlights",
      type: "repeater",
      fields: [{ key: "highlight", label: "Highlight", type: "text" }],
    },
    { key: "btntext", label: "Button Text", type: "text" },
    { key: "btnurl", label: "Button Url", type: "url" },
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
  ],
};

export default CaseStudyHead;
