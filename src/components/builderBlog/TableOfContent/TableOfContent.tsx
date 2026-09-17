import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import "./TableOfContent.scss";

// function TableOfContent() {

const TableOfContent: React.FC<{ data: any }> = ({ data }) => {
  const { title = "Table Of Contents", phases = [] } = data;
  const styles = data.styles || {};
  return (
    <>
      <section
        className="blogTableTitles"
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
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="tableTitle text-center">
                <h3>{title.trim()}</h3>
              </div>
              <div className="tableMainComponents d-flex">
                {phases
                  ? phases.map((journeyItem: any, index: any) => (
                      <div className="tableComponent" key={index}>
                        <div className="titleImg">
                          <Image
                            className="img-contain"
                            src={getImagePath(
                              "bgsec1img.webp",
                              journeyItem?.icon,
                            )}
                            alt=""
                            width={150}
                            height={150}
                            loading="lazy"
                            unoptimized
                          />
                        </div>
                        <div className="title">
                          <a href={journeyItem.link}>{journeyItem.title}</a>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const meta = {
  name: "tableOfContent",
  fields: [
    { key: "title", label: "Title", type: "text" },
    {
      key: "phases",
      type: "repeater",
      fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "icon", label: "Icon", type: "file" },
        { key: "link", label: "Section Link", type: "text" },
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
  ],
};

export default TableOfContent;
