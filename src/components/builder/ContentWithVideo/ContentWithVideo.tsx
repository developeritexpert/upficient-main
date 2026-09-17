import VideoWrapper from "@/components/miscellaneous/VideoWrapper/VideoWrapper";
import { getImagePath } from "@/services/common.service";
import "./ContentWithVideo.scss";
import Image from "next/image";
import Link from "next/link";
const ContentWithVideo: React.FC<{ data: any }> = ({ data }) => {
  const styles = data?.styles || {}; // Default to an empty object if styles is undefined
  const padding = styles.padding || {};
  const margin = styles.margin || {};
  const borderRadius = styles.borderRadius || {};

  return (
    <section
      className="content-with-video"
      style={{
        position: "relative",
        padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
        margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
        borderRadius: `${borderRadius.top}px ${borderRadius.right}px ${borderRadius.bottom}px ${borderRadius.left}px`,
        backgroundColor: styles.backgroundColor || "transparent",
      }}
    >
      <div className="content-with-video-wrapper">
        <div className="container">
          <div className="row mx-0 align-items-center">
            <div className="col-lg-6">
              <div className="content-with-video-content-wrapper">
                <div className="content-video-head">
                  <h2>{data?.heading?.trim() || "What is ClickUp?"}</h2>
                </div>
                <div
                  className="content-video-text"
                  dangerouslySetInnerHTML={{
                    __html: data?.description?.trim() || "This is Text",
                  }}
                ></div>
              </div>
            </div>

            <div className="col-lg-6">
              <VideoWrapper
                imageSrc={getImagePath("", data.thumbnail)}
                videoLink={data?.videoUrl?.trim() || ""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="categoryboxes">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="d-flex categoryboxes-main">
                {data?.cetagories?.map((category: any, index: number) => (
                  <div className="categorybox" key={index}>
                    {/* <Link href={category.link?.trim() || "javascript:void(0)"}>
                      <Image
                        src={getImagePath("", category.image)}
                        alt="category image"
                        width={800}
                        height={600}
                        className="img-contain"
                        loading="lazy"
                        unoptimized
                      />
                      <h3>{category.title?.trim() || "Category Title"}</h3>
                    </Link> */}
                    {category.link?.trim() ? (
                      <Link href={category.link?.trim()}>
                        <Image
                          src={getImagePath("", category.image)}
                          alt="category image"
                          width={800}
                          height={600}
                          className="img-contain"
                          loading="lazy"
                          unoptimized
                        />
                        <h3>{category.title?.trim() || "Category Title"}</h3>
                      </Link>
                    ) : (
                      <div className="childcatbox">
                        <Image
                          src={getImagePath("", category.image)}
                          alt="category image"
                          width={800}
                          height={600}
                          className="img-contain"
                          loading="lazy"
                          unoptimized
                        />
                        <h3>{category.title?.trim() || "Category Title"}</h3>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Metadata for editing
export const meta = {
  name: "ContentWithVideo",
  fields: [
    { key: "heading", label: "Heading", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "thumbnail", label: "Thumbnail", type: "file" },
    { key: "videoUrl", label: "Video ID", type: "text" },
    {
      key: "cetagories",
      type: "repeater",
      fields: [
        { key: "link", label: "Link", type: "text" },
        { key: "image", label: "Image", type: "file" },
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

export default ContentWithVideo;
