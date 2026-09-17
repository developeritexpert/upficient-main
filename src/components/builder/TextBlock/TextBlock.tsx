import React from "react";

const TextBlock: React.FC<{ data: any }> = ({ data }) => {
  const { description = "This is Description" } = data;
  const styles = data.styles || {};
  return (
    <>
      <section
        className="colorbgSec text-block"
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
            <div
              className="col-lg-12"
              dangerouslySetInnerHTML={{
                __html: description.trim() || "",
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};
export const meta = {
  name: "textBlock",
  fields: [{ key: "description", label: "Text", type: "textarea" }],
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
export default TextBlock;
