import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import "./SectionWithoutBg.scss";

interface SectionWithourBgProps {
  data: {
    bgSrc?: string;
    imageSrc?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

const SectionWithoutBg: React.FC<{ data: any }> = ({ data }) => {
  const {
    imageSrc = "bgsec1img.webp",
    title = "Default Title: Boost Your Business with ClickUp!",
    description = "Default Description: Unlock your team's potential with our ClickUp expertise. Take the first step toward efficiency and growth today.",
    buttonText,
    buttonLink = "#",
  } = {
    imageSrc: data?.imageSrc?.trim() || "bgsec1img.webp",
    title:
      data?.title?.trim() || "Default Title: Boost Your Business with ClickUp!",
    description:
      data?.description?.trim() ||
      "Default Description: Unlock your team's potential with our ClickUp expertise. Take the first step toward efficiency and growth today.",
    buttonText: data?.buttonText?.trim(),
    buttonLink: data?.buttonLink?.trim() || "#",
  };
  const styles = data.styles || {}; // Safely default `styles` to an empty object
  return (
    <section
      className="colorwithoutbgSec"
      style={{
        background: "linear-gradient(4.45deg, #E6E2FF 3.47%, #FFFFFF 82.53%)",
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
        position: "relative",
      }}
    >
      <div className="container">
        <div
          className={`row mx-0 ${
            styles?.alignIteam == "flex-end"
              ? "align-items-end"
              : "align-items-center"
          }`}
          style={{
            flexDirection:
              styles.alignment == "right" ? "row-reverse" : undefined,
          }}
        >
          <div className="col-lg-7 col-md-12">
            <div
              className="img"
              style={
                styles?.imageHeight?.height
                  ? { height: (styles?.imageHeight?.height || "") + "px" }
                  : {}
              }
            >
              <Image
                src={getImagePath("bgsec1img.webp", data?.imageSrc)}
                alt={title}
                width={1100}
                height={1100}
                className="img-contain"
                style={{
                  objectPosition: styles.imagePosition || undefined,
                }}
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="content">
              <div className="heading">
                {styles.headingTag === "h1" ? (
                  <h1 style={{ color: styles.headingColor }}>{title}</h1>
                ) : styles.headingTag === "h2" ? (
                  <h2 style={{ color: styles.headingColor }}>{title}</h2>
                ) : (
                  <h2 style={{ color: styles.headingColor }}>{title}</h2>
                )}

                {/* <h2 style={{ color: styles.headingColor }}>{title}</h2> */}
              </div>

              <div
                className="para"
                style={{ color: styles.textColor }}
                dangerouslySetInnerHTML={{
                  __html: description.trim() || "",
                }}
              ></div>
              {buttonText && (
                <div
                  className="btn"
                  // style={{
                  //   margin: `${styles?.btnMargin?.top || 0}px ${
                  //     styles?.btnMargin?.right || 0
                  //   }px ${styles?.btnMargin?.bottom || 0}px ${
                  //     styles?.btnMargin?.left || 0
                  //   }px`,
                  // }}
                >
                  <Link
                    href={buttonLink}
                    style={{
                      color: styles.buttonTextColor,
                      backgroundColor: styles.buttonColor,
                    }}
                  >
                    {buttonText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const meta = {
  name: "SectionWithBg",
  fields: [
    { key: "imageSrc", label: "Image Source", type: "file" },
    { key: "title", label: "Title", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonLink", label: "Button Link", type: "url" },
  ],
  style: [
    {
      key: "imageHeight",
      label: "Image Height",
      type: "box",
      fields: [{ key: "height", label: "Height", type: "number" }],
    },
    {
      key: "headingTag",
      label: "Heading Tag",
      type: "radioOptions",
      fields: [
        { key: "h1", label: "H1", type: "radio" },
        { key: "h2", label: "H2", type: "radio" },
      ],
    },
    {
      key: "alignIteam",
      label: "Section Verticle Alignment",
      type: "radioOptions",
      fields: [
        { key: "center", label: "Center", type: "radio" },
        { key: "flex-end", label: "Flex End", type: "radio" },
      ],
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
      key: "alignment",
      label: "Section Alignment",
      type: "radioOptions",
      fields: [
        { key: "right", label: "Right", type: "radio" },
        { key: "left", label: "Left", type: "radio" },
      ],
    },
    {
      key: "imagePosition",
      label: "Image position",
      type: "radioOptions",
      fields: [
        { key: "top", label: "Top", type: "radio" },
        { key: "bottom", label: "Bottom", type: "radio" },
        { key: "center", label: "Center", type: "radio" },
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

export default SectionWithoutBg;
