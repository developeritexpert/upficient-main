import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import React from "react";
import "./Team.scss";

interface TeamMemberProps {
  name: string;
  designation: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface TeamProps {
  data: {
    mainHeading: string;
    members: TeamMemberProps[];
  };
}

const Team: React.FC<TeamProps> = ({ data }) => {
  const { mainHeading = "Talented Team", members = [] } = data;

  return (
    <section className="teamSec">
      <div className="container">
        <div className="row mx-0">
          <div className="col-lg-12">
            <div className="heading">
              <h2>{mainHeading.trim() || "Talented Team"}</h2>
            </div>
            <div className="teamMain d-flex flex-wrap justify-content-center">
              {members.length > 0 ? (
                members.map((member: TeamMemberProps, index: number) => (
                  <div className="team" key={index}>
                    <div className="empImage">
                      <Image
                        className="img-contain"
                        src={getImagePath(
                          "default-team-member.png",
                          member.imageSrc,
                        )}
                        height={800}
                        width={800}
                        alt={member.imageAlt?.trim() || "Team member image"}
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <div className="empName">
                      <h4>{member.name?.trim() || "Team Member Name"}</h4>
                    </div>
                    <div className="empDesignation">
                      <p>{member.designation?.trim() || "Designation"}</p>
                    </div>
                    <div
                      className="empText"
                      dangerouslySetInnerHTML={{
                        __html:
                          member.description?.trim() ||
                          "<p>Team member description</p>",
                      }}
                    ></div>
                  </div>
                ))
              ) : (
                <p>No team members available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Metadata for editing
export const meta = {
  name: "Team",
  fields: [
    { key: "mainHeading", label: "Main Heading", type: "text" },
    {
      key: "members",
      type: "repeater",
      fields: [
        { key: "name", label: "Name", type: "text" },
        { key: "designation", label: "Designation", type: "text" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "imageSrc", label: "Image Source", type: "file" },
        { key: "imageAlt", label: "Image Alt Text", type: "text" },
      ],
    },
  ],
};

export default Team;
