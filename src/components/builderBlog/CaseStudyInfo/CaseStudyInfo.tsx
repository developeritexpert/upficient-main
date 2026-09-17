import Complexcity from "@/components/Icons/Complexcity";
import Dilever from "@/components/Icons/Dilever";
import Focus from "@/components/Icons/Focus";
import Hours from "@/components/Icons/Hours";
import React from "react";

const CaseStudyInfo: React.FC<{ data: any }> = ({ data }) => {
  const {
    title = "",
    description = "",
    focus = "",
    delivered = "",
    complexity = "",
    hours = "",
  } = data || {};
  const styles = data.styles || {}; // Safely default `styles` to an empty object
  return (
    <>
      <section
        className="caseInfo"
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
          <div className="row mx-0 align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <h3>{title}</h3>
                {description ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: String(description) }}
                  ></div>
                ) : (
                  <p>No description available.</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="infoByCat d-flex">
                <div className="singleInfo d-flex">
                  <div className="icon">
                    <Focus />
                  </div>
                  <div className="texts">
                    <h4>Focus:</h4>
                    <p>{focus}</p>
                  </div>
                </div>
                <div className="singleInfo d-flex">
                  <div className="icon">
                    <Dilever />
                  </div>
                  <div className="texts">
                    <h4>Delivered:</h4>
                    <p>{delivered}</p>
                  </div>
                </div>
                <div className="singleInfo d-flex">
                  <div className="icon">
                    <Complexcity />
                  </div>
                  <div className="texts">
                    <h4>Complexity:</h4>
                    <p>{complexity}</p>
                  </div>
                </div>
                <div className="singleInfo d-flex">
                  <div className="icon">
                    <Hours />
                  </div>
                  <div className="texts">
                    <h4>Hours:</h4>
                    <p>{hours}</p>
                  </div>
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
  name: "CaseStudyInfo",
  fields: [
    { key: "title", label: "Title", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "focus", label: "Focus", type: "text" },
    { key: "delivered", label: "Delivered", type: "text" },
    { key: "complexity", label: "Complexity", type: "text" },
    { key: "hours", label: "Hours", type: "text" },
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

export default CaseStudyInfo;
