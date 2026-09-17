"use client";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
interface SectionWithBgClient {
  data: {
    bgSrc?: string;
    imageSrc?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

const SectionWithBgClient: React.FC<{ data: any }> = ({ data }) => {
  const {
    bgSrc = "",
    beforeSrc = "",
    sectionClass = "",
    imageSrc = "",
    title = "Default Title: Boost Your Business with ClickUp!",
    description,
    buttonText,
    buttonLink = "#",
  } = {
    bgSrc: data?.bgSrc?.trim() || "",
    beforeSrc: data?.beforeSrc?.trim() || "",
    imageSrc: data?.imageSrc?.trim() || "",
    sectionClass: data?.sectionClass?.trim() || "",
    title:
      data?.title?.trim() || "Default Title: Boost Your Business with ClickUp!",
    description: data?.description?.trim() || "",
    buttonText: data?.buttonText?.trim(),
    buttonLink: data?.buttonLink?.trim() || "#",
  };
  const styles = data.styles || {}; // Safely default `styles` to an empty object
  return (
    <section
      className={`colorbgSec ${sectionClass}`}
      style={{
        backgroundImage: `url(${getImagePath("", bgSrc)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
      {beforeSrc && (
        <>
          <style jsx global>{`
            .colorbgSec {
              position: relative;
            }
            .colorbgSec::before {
              content: "";
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: -10%;
              z-index: 0;
            }
            @media (max-width: 767px) {
              .${sectionClass} .img {
                height: 360px;
              }
              .${sectionClass}::before {
                background-position: top left;
              }
            }
            @media (max-width: 567px) {
              .${sectionClass} .img {
                height: 200px;
              }
            }
          `}</style>
          <style jsx global>{`
            .${sectionClass}::before {
              background-image: url(${getImagePath("", beforeSrc)});
            }
          `}</style>
        </>
      )}

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
              {data.imageSrc?.trim() && (
                <Image
                  src={getImagePath("", data?.imageSrc)}
                  alt={title}
                  width={1200}
                  height={1200}
                  className="img-contain"
                  style={{
                    objectPosition: styles.imagePosition || undefined,
                  }}
                  loading="lazy"
                  unoptimized
                />
              )}
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
export default SectionWithBgClient;
