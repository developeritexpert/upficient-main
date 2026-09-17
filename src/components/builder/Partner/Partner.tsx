import PartnerBox from "@/components/miscellaneous/PartnerBox/PartnerBox";
import React from "react";
import "./Partner.scss";

interface PartnerBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  linkText: string;
}

interface ExpertiseProps {
  data: {
    mainHeading?: string;
    partnerboxes?: PartnerBoxProps[];
  };
}

const Partner: React.FC<{ data: any }> = ({ data }) => {
  const { mainHeading = "Default Heading", partnerboxes = [] } = data;
  const styles = data.styles || {}; // Safely default `styles` to an empty object
  const {
    padding = {},
    margin = {},
    borderRadius = {},
    backgroundColor,
  } = styles;

  return (
    <>
      {/* Main Heading Section */}
      <section
        className="partner-main-wrapper"
        style={{
          padding: `${padding.top || 0}px ${padding.right || 0}px ${padding.bottom || 0}px ${
            padding.left || 0
          }px`,
          margin: `${margin.top || 0}px ${margin.right || 0}px ${margin.bottom || 0}px ${
            margin.left || 0
          }px`,
          borderRadius: `${borderRadius.top || 0}px ${
            borderRadius.right || 0
          }px 0px 0px`,
          background:
            "linear-gradient(359.91deg, #E6E2FF 0.09%, #FFFFFF 75.75%)",
        }}
      >
        <section
          className="mainHead"
          style={{
            paddingBottom: "40px",
          }}
        >
          <div className="container">
            <div className="row mx-0">
              <div className="col-lg-12">
                <div className="heading text-center">
                  <h2
                    style={{
                      color: styles.headingColor || undefined,
                    }}
                  >
                    {mainHeading.trim()}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Boxes Section */}
        <section
          className="Efficiency"
          style={{
            padding: `0px ${padding.right || 0}px ${
              padding.bottom || 0
            }px ${padding.left || 0}px`,
            margin: `0px ${margin.right || 0}px ${
              margin.bottom || 0
            }px ${margin.left || 0}px`,
            borderRadius: `0px 0px ${borderRadius.left || 0}px ${
              borderRadius.bottom || 0
            }px`,
            backgroundColor: styles.backgroundColor || undefined,
          }}
        >
          <div className="container">
            <div className="row mx-0">
              {partnerboxes.length > 0 ? (
                partnerboxes.map((box: any, index: number) => (
                  <PartnerBox
                    key={index}
                    imageSrc={box.imageSrc || ""}
                    imageAlt={box.imageAlt || "Default Alt Text"}
                    title={box.title.trim() || "Default Title"}
                    description={
                      box.description.trim() || "Default Description"
                    }
                    link={box.link || "#"}
                    linkText={box.linkText.trim() || "Learn More"}
                    boxbackgroundColor={styles.boxbackgroundColor}
                    boxShadow={styles.boxShadow}
                    headingColor={styles.headingColor}
                    textColor={styles.textColor}
                    buttonColor={styles.buttonColor}
                    buttonTextColor={styles.buttonTextColor}
                  />
                ))
              ) : (
                <div className="col-lg-12 text-center">
                  <p>No partners available at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export const meta = {
  name: "Partner",
  fields: [
    { key: "mainHeading", label: "Main Heading", type: "text" },
    {
      key: "partnerboxes",
      type: "repeater",
      fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "imageSrc", label: "Image Source", type: "file" },
        { key: "imageAlt", label: "Image Alt Text", type: "text" },
        { key: "link", label: "Link", type: "url" },
        { key: "linkText", label: "Link Text", type: "text" },
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

export default Partner;
