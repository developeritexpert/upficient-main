import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import React from "react";
import "./Expertise.scss";
import Link from "next/link";

interface ExpertBox {
  subTitle: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sectionid: string;
}

interface ExpertiseProps {
  data: {
    mainHeading: string;
    expertboxes: ExpertBox[];
  };
}

const Expertise: React.FC<{ data: any }> = ({ data }) => {
  const { mainHeading = "", expertboxes = [] } = data;

  const styles = data.styles || {}; // Safely get styles or default to an empty object

  return (
    <>
      {/* Main Heading Section */}
      {mainHeading.trim() !== "" && (
        <section
          className="mainHead"
          style={{
            ...(styles.padding
              ? {
                  padding: `${styles.padding.top || 0}px ${
                    styles.padding.right || 0
                  }px ${styles.padding.bottom || 0}px ${
                    styles.padding.left || 0
                  }px`,
                }
              : {}),
            ...(styles.margin
              ? {
                  margin: `${styles.margin.top || 0}px ${
                    styles.margin.right || 0
                  }px ${styles.margin.bottom || 0}px ${
                    styles.margin.left || 0
                  }px`,
                }
              : {}),
            ...(styles.borderRadius
              ? {
                  borderRadius: `${styles.borderRadius.top || 0}px ${
                    styles.borderRadius.right || 0
                  }px ${styles.borderRadius.bottom || 0}px ${
                    styles.borderRadius.left || 0
                  }px`,
                }
              : {}),
            ...(styles.backgroundColor
              ? { backgroundColor: styles.backgroundColor }
              : {}),
            position: "relative",
          }}
        >
          <div className="container">
            <div className="row mx-0">
              <div className="col-lg-12">
                <div className="heading text-center">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: mainHeading.trim() || "Our Default Heading",
                    }}
                    style={{
                      ...(styles.headingColor
                        ? { color: styles.headingColor }
                        : {}),
                    }}
                  ></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expertise Content Section */}
      {expertboxes.length > 0 ? (
        expertboxes.map((box: any, index: any) => (
          <section
            key={index}
            className="innerExpertise"
            {...(box?.sectionid?.trim() && { id: box.sectionid.trim() })}
            style={{
              ...(styles.rowpadding
                ? {
                    padding: `${styles.rowpadding.top || 0}px ${
                      styles.rowpadding.right || 0
                    }px ${styles.rowpadding.bottom || 0}px ${
                      styles.rowpadding.left || 0
                    }px`,
                  }
                : {}),
              ...(styles.rowmargin
                ? {
                    margin: `${styles.rowmargin.top || 0}px ${
                      styles.rowmargin.right || 0
                    }px ${styles.rowmargin.bottom || 0}px ${
                      styles.rowmargin.left || 0
                    }px`,
                  }
                : {}),
            }}
          >
            <div className="container">
              <div className="row mx-0 align-items-center">
                {/* Content Section */}
                <div className="col-lg-6 col-md-6 content">
                  <div className="expertiseContent">
                    <div className="subHead">
                      {box?.subTitle?.trim() && <p>{box.subTitle.trim()}</p>}
                    </div>
                    <div className="title">
                      <h3
                        style={{
                          ...(styles.rowheadingColor
                            ? { color: styles.rowheadingColor }
                            : {}),
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: box.title?.trim() || "Default Title",
                          }}
                        />
                        {box?.titleImage && (
                          <span className="title-icon">
                            <Image
                              src={getImagePath("", box.titleImage)}
                              alt="icon"
                              width={34}
                              height={34}
                              style={{
                                objectFit: "contain",
                                objectPosition: "bottom",
                                marginLeft: "10px",
                              }}
                              unoptimized
                            />
                          </span>
                        )}
                      </h3>
                    </div>
                    <div
                      className="para"
                      dangerouslySetInnerHTML={{
                        __html: box.description.trim() || "Default Description",
                      }}
                      style={{
                        ...(styles.textColor
                          ? { color: styles.textColor }
                          : {}),
                      }}
                    ></div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 col-md-6 image">
                  <div className="expertiseImg">
                    <Image
                      src={getImagePath("expert.webp", box.imageSrc)}
                      alt={box.imageAlt.trim() || "Default Alt Text"}
                      width={600}
                      height={400}
                      className="img-contain"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="innerExpertise">
          <div className="container">
            <div className="row mx-0">
              <div className="col-lg-12 text-center">
                <p>No expertise data available.</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const meta = {
  name: "Expertise",
  fields: [
    { key: "mainHeading", label: "Main Heading", type: "text" },
    {
      key: "expertboxes",
      type: "repeater",
      fields: [
        { key: "subTitle", label: "Subtitle", type: "text" },
        { key: "title", label: "Title", type: "text" },
        { key: "titleImage", label: "Title Image", type: "file" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "imageSrc", label: "Image Source", type: "file" },
        { key: "imageAlt", label: "Image Alt Text", type: "text" },
        { key: "sectionid", label: "Section Id", type: "text" },
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
      key: "rowpadding",
      label: "Row Padding",
      type: "box",
      fields: [
        { key: "top", label: "Top", type: "number" },
        { key: "right", label: "Right", type: "number" },
        { key: "bottom", label: "Bottom", type: "number" },
        { key: "left", label: "Left", type: "number" },
      ],
    },
    {
      key: "rowmargin",
      label: "Row Margin",
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
      key: "rowheadingColor",
      label: "Row Heading Color",
      type: "color",
    },
    {
      key: "textColor",
      label: "Row Text Color",
      type: "color",
    },
  ],
};

export default Expertise;
