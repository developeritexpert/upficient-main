import ImageSlide from "@/components/miscellaneous/ImageSlide/ImageSlide";
import React from "react";

const ImageSlider: React.FC<{ data: any }> = ({ data }) => {
  const { mainHeading, itemsPerRow, imageSlider } = data;
  const styles = data.styles || {}; // Safely default `styles` to an empty object
  return (
    <>
      <section
        className="imageSlider"
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
          backgroundColor: styles.backgroundColor || "",
        }}
      >
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="imageSlider">
                <h3
                  className="text-center"
                  style={{
                    marginBottom: "30px",
                  }}
                >
                  {mainHeading?.trim() || ""}
                </h3>
                {imageSlider?.length > 0 && (
                  <div className="slider-main">
                    <ImageSlide
                      images={imageSlider}
                      itemsPerRow={itemsPerRow?.trim() || 1}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const meta = {
  name: "ImageSlider",
  fields: [
    { key: "mainHeading", label: "Main Heading", type: "text" },
    { key: "itemsPerRow", label: "Iteam Per Row", type: "text" },
    {
      key: "imageSlider",
      type: "repeater",
      fields: [
        { key: "image", label: "Image", type: "file" },
        { key: "alt", label: "Alt Text", type: "text" },
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
      key: "backgroundColor",
      label: "Background Color",
      type: "color",
    },
  ],
};
export default ImageSlider;
