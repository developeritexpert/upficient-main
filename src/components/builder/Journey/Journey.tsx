import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./JourneySection.scss";

// Define types for the journey phases
interface JourneyItemProps {
  phase: string;
  title: string;
  icon: string;
  link: string;
  headingColor: any;
  subHeadingColor: any;
}

const JourneyItem: React.FC<JourneyItemProps> = ({
  phase,
  title,
  icon,
  link,
  headingColor,
  subHeadingColor,
}) => {
  return (
    <div className="singleJourney">
      <Link href={link}>
        <div className="icon">
          <Image
            src={getImagePath("bgsec1img.webp", icon)}
            alt={title}
            width={600}
            height={400}
            className="img-contain"
            loading="lazy"
            unoptimized
          />
        </div>
        <div className="subTitle">
          <p
            style={{
              color: subHeadingColor || undefined,
            }}
          >
            {phase}
          </p>
        </div>
        <div className="title">
          <h5
            style={{
              color: headingColor || undefined,
            }}
          >
            {title}
          </h5>
        </div>
      </Link>
    </div>
  );
};

interface JourneySectionProps {
  data: {
    title: string;
    phases: { phase: string; title: string; icon: string; link: string }[];
  };
}

const JourneySection: React.FC<{ data: any }> = ({ data }) => {
  const { title = "Our Journey with ClickUp", phases = [] } = data;
  const styles = data.styles || {}; // Safely default `styles` to an empty object

  return (
    <>
      <section
        className="journey"
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
          <div
            className="row mx-0 align-items-center"
            style={{ marginBottom: "60px" }}
          >
            <div className="col-lg-12">
              <div className="heading text-center">
                <h2
                  style={{
                    color: styles.headingColor || undefined,
                  }}
                >
                  {title.trim() || "Our Journey with ClickUp"}
                </h2>
              </div>
            </div>
          </div>

          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="mainJourney d-flex align-items-center">
                {phases
                  ? phases.map((journeyItem: any, index: any) => (
                      <JourneyItem
                        key={index}
                        phase={journeyItem.phase}
                        title={journeyItem.title}
                        icon={journeyItem.icon}
                        link={journeyItem.link}
                        headingColor={styles.headingColor}
                        subHeadingColor={styles.subHeadingColor}
                      />
                    ))
                  : "no phases"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Metadata for editing
export const meta = {
  name: "JourneySection",
  fields: [
    { key: "title", label: "Title", type: "text" },
    {
      key: "phases",
      type: "repeater",
      fields: [
        { key: "phase", label: "Phase", type: "text" },
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
    {
      key: "headingColor",
      label: "Heading Color",
      type: "color",
    },
    {
      key: "subHeadingColor",
      label: "Sub Heading Color",
      type: "color",
    },
  ],
};

export default JourneySection;
