import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import "./IconBox.scss";

const IconBox: React.FC<{ data: any }> = ({ data }) => {
  const { title = "This is Title", iconBoxes = [] } = data;
  console.log(data);
  const styles = data.styles || {}; // Safely default `styles` to an empty object
  return (
    <>
      <section
        className="iconBox"
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
          backgroundColor: styles.backgroundColor,
        }}
        {...(styles.sectionId ? { id: styles.sectionId } : {})}
      >
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="iconHeading text-center">
                <h2
                  style={{
                    color: styles.headingColor,
                  }}
                >
                  {title.trim() || "Our Journey with ClickUp"}
                </h2>
              </div>
              <div className="iconBoxLists d-flex">
                {iconBoxes.map((item: any, index: number) => (
                  <div className="boxIcon d-flex" key={index}>
                    <div className="icon">
                      <Image
                        src={getImagePath("bgsec1img.webp", item.imageSrc)}
                        alt={item.imageAlt}
                        width={600}
                        height={400}
                        className="img-contain"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <div className="iconContent">
                      <div className="title">
                        <h3
                          style={{
                            color: styles.headingColor,
                          }}
                        >
                          {item.title.trim() || "Our Journey with ClickUp"}
                        </h3>
                      </div>
                      <div
                        className="text"
                        style={{
                          color: styles.textColor ? styles.textColor : "#fff",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item.description.trim() || "",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
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
    { key: "title", label: "Section Title", type: "text" },
    {
      key: "iconBoxes",
      type: "repeater",
      fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "imageSrc", label: "Image Source", type: "file" },
        { key: "imageAlt", label: "Image Alt Text", type: "text" },
      ],
    },
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

export default IconBox;
