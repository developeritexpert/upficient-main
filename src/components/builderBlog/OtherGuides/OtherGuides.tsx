import GuidesMain from "@/components/miscellaneous/GuidesMain/GuidesMain";
import "./OtherGuides.scss";

function OtherGuides({ data }: any) {
  return (
    <>
      <div className="otherGuides">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <h2>Other Guides</h2>
            </div>
          </div>
        </div>
        <GuidesMain
          type={data.type ? data.type : "blog"}
          itemsPerPage={4}
          excludeSlug={data.excludeSlug}
        />
      </div>
    </>
  );
}

export const meta = {
  name: "otherGuides",
  fields: [
    { key: "type", label: "Type", type: "text" },
    { key: "excludeSlug", label: "Exclude Slug", type: "text" },
  ],
};

export default OtherGuides;
