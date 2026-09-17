import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./CaseStudyHero.scss";

const CaseStudyHero: React.FC<{ data: any }> = ({ data }) => {
  const {
    imageSrc,
    imageAlt,
    tags,
    title,
    rating,
    delivered,
    country,
    duration,
    complexityLevel,
    btnText,
    btnUrl,
    backLink,
  } = data;
  const styles = data.styles || {};

  // Complexity bar width: beginner=25%, intermediate=58%, advanced=92%
  const complexityMap: Record<string, number> = {
    beginner: 25,
    intermediate: 58,
    advanced: 92,
  };
  const complexityKey = (complexityLevel || "intermediate").toLowerCase();
  const barWidth = complexityMap[complexityKey] ?? 58;

  // Stars: rating out of 5
  const ratingNum = parseFloat(rating) || 4;

  return (
    <section
      className="cs-hero"
      style={{
        padding: styles.padding
          ? `${styles.padding.top || 0}px ${styles.padding.right || 0}px ${styles.padding.bottom || 0}px ${styles.padding.left || 0}px`
          : undefined,
        margin: styles.margin
          ? `${styles.margin.top || 0}px ${styles.margin.right || 0}px ${styles.margin.bottom || 0}px ${styles.margin.left || 0}px`
          : undefined,
      }}
    >
      <div className="container">
        {/* Back link */}
        <div className="cs-hero__back">
          <Link href={backLink || "/case-studies"}>
            <span className="cs-hero__back-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Case Studies
            </span>
          </Link>
        </div>

        <div className="row mx-0 align-items-center">
          {/* Left: Image */}
          <div className="col-lg-6 col-md-6">
            <div className="cs-hero__image-wrap">
              <Image
                src={getImagePath("bgsec1img.webp", imageSrc ? imageSrc : "")}
                alt={imageAlt || "Case Study"}
                width={620}
                height={500}
                className="cs-hero__image"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 col-md-6">
            <div className="cs-hero__content">
              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="cs-hero__tags">
                  {tags.map((tag: any, i: number) => (
                    <span
                      key={i}
                      className={`cs-hero__tag ${tag.filled === true || tag.filled === "true" ? "cs-hero__tag--filled" : ""}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="cs-hero__title">{title}</h1>

              {/* Stars */}
              <div className="cs-hero__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`cs-hero__star ${star <= Math.round(ratingNum) ? "cs-hero__star--filled" : ""}`}
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Meta rows */}
              <div className="cs-hero__meta">
                {delivered && (
                  <div className="cs-hero__meta-row">
                    <span className="cs-hero__check">
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#4CAF50"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12l3 3 5-5"
                          stroke="#4CAF50"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>
                      <strong>Delivered:</strong> {delivered}
                    </span>
                  </div>
                )}
                {country && (
                  <div className="cs-hero__meta-row">
                    <span className="cs-hero__check">
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#4CAF50"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12l3 3 5-5"
                          stroke="#4CAF50"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>
                      <strong>Country:</strong> {country}
                    </span>
                  </div>
                )}
                {duration && (
                  <div className="cs-hero__meta-row">
                    <span className="cs-hero__check">
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#4CAF50"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12l3 3 5-5"
                          stroke="#4CAF50"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>
                      <strong>Duration:</strong> {duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Complexity Level */}
              <div className="cs-hero__complexity">
                <p className="cs-hero__complexity-label">Complexity Level</p>
                <div className="cs-hero__bar-wrap">
                  <div className="cs-hero__bar-track">
                    <div
                      className="cs-hero__bar-fill"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                  <div className="cs-hero__bar-ticks">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {btnText && (
                <div className="cs-hero__cta">
                  <a href={btnUrl || "#"} className="cs-hero__btn">
                    {btnText}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
