import ServiceBox from "@/components/miscellaneous/ServiceBox/ServiceBox";
import React from "react";
import "./Service.scss";

interface ServiceBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  linkText: string;
  boxbackgroundColor?: string;
}

interface ServiceProps {
  data: {
    subTitle: string;
    mainHeading: string;
    servicesboxes: ServiceBoxProps[];
  };
}

const Service: React.FC<{ data: any }> = ({ data }) => {
  // Destructure data for easy access
  const {
    subTitle = "OUR SERVICES",
    mainHeading = "Our Services",
    servicesboxes = [],
  } = data;
  const styles = data.styles || {}; // Safely default `styles` to an empty object

  return (
    <>
      {/* Main Heading Section */}
      <section id="main-service">
        <section
          className="mainHead bg-purple"
          style={{
            padding: styles.padding
              ? `${styles.padding.top || 0}px ${
                  styles.padding.right || 0
                }px 50px ${styles.padding.left || 0}px`
              : undefined,
            margin: styles.margin
              ? `${styles.margin.top || 0}px ${styles.margin.right || 0}px 0px ${
                  styles.margin.left || 0
                }px`
              : undefined,
            borderRadius: styles.borderRadius
              ? `${styles.borderRadius.top || 0}px ${
                  styles.borderRadius.right || 0
                }px 0px 0px`
              : undefined,
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <div className="container">
            <div className="row mx-0">
              <div className="col-lg-12">
                {subTitle?.trim() && (
                  <div className="subHead text-center">
                    <p>{subTitle.trim()}</p>
                  </div>
                )}

                <div className="heading text-center">
                  <h2 style={{ color: styles.headingColor || undefined }}>
                    {mainHeading.trim() || "Our Services"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Boxes Section */}
        <section
          className="services"
          style={{
            padding: styles.padding
              ? `0px ${styles.padding.right || 0}px ${
                  styles.padding.bottom || 0
                }px ${styles.padding.left || 0}px`
              : undefined,
            margin: styles.margin
              ? `0px ${styles.margin.right || 0}px ${
                  styles.margin.bottom || 0
                }px ${styles.margin.left || 0}px`
              : undefined,
            borderRadius: styles.borderRadius
              ? `0px 0px ${styles.borderRadius.left || 0}px ${
                  styles.borderRadius.bottom || 0
                }px`
              : undefined,
            backgroundColor: "#fff",
          }}
        >
          <div className="container">
            <div className="row mx-0">
              {servicesboxes.length > 0 ? (
                servicesboxes.map((box: ServiceBoxProps, index: number) => (
                  <ServiceBox
                    key={index}
                    imageSrc={box.imageSrc?.trim() || ""}
                    imageAlt={box.imageAlt?.trim() || "Service image"}
                    title={box.title?.trim() || "Default Service Title"}
                    description={
                      box.description?.trim() || "Default Service Description"
                    }
                    link={box.link?.trim() || "#"}
                    linkText={box.linkText?.trim() || "Read More"}
                    boxbackgroundColor={box.boxbackgroundColor || undefined}
                    boxHeadingColor={styles.boxHeadingColor || undefined}
                    buttonColor={styles.buttonColor || undefined}
                    buttonTextColor={styles.buttonTextColor || undefined}
                    textColor={styles.textColor || undefined}
                  />
                ))
              ) : (
                <p>No services available</p>
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

// Metadata for editing
export const meta = {
  name: "Service",
  fields: [
    { key: "subTitle", label: "Subtitle", type: "text" },
    { key: "mainHeading", label: "Main Heading", type: "text" },
    {
      key: "servicesboxes",
      type: "repeater",
      fields: [
        { key: "title", label: "Service Title", type: "text" },
        { key: "description", label: "Service Description", type: "textarea" },
        { key: "imageSrc", label: "Image Source", type: "file" },
        { key: "imageAlt", label: "Image Alt Text", type: "text" },
        { key: "link", label: "Link", type: "url" },
        { key: "linkText", label: "Link Text", type: "text" },
        {
          key: "boxbackgroundColor",
          label: "Box Background Color",
          type: "color",
        },
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
      key: "boxHeadingColor",
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

export default Service;
