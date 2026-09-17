import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the props for the PartnerBox component
interface ServiceBoxProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  boxbackgroundColor: any;
  boxHeadingColor: any;
  buttonColor: any;
  buttonTextColor: any;
  textColor: any;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  linkText,
  boxbackgroundColor,
  boxHeadingColor,
  buttonColor,
  buttonTextColor,
  textColor,
}) => {
  if (title?.trim() === "Management & Maintenance") {
    return null;
  }
  return (
    <div className="col-lg-6 col-md-12 servicesBoxmain">
      <div
        className="servicesBox text-center"
        style={{ background: boxbackgroundColor }}
      >
        <div className="icon">
          <Image
            src={getImagePath("serv.webp", imageSrc)}
            alt={imageAlt}
            width={600} // Adjust the dimensions as needed
            height={400}
            className="img-contain"
            loading="lazy"
            unoptimized
          />
        </div>
        <div className="title">
          <h4 style={{ color: boxHeadingColor }}>{title}</h4>
        </div>
        <div
          className="para"
          dangerouslySetInnerHTML={{
            __html: description.trim() || "",
          }}
          style={{ color: textColor }}
        ></div>
        <div className="btn">
          <Link
            href={link}
            style={{ color: buttonTextColor, background: buttonColor }}
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
