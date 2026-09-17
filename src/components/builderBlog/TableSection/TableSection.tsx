import "./TableSection.scss";
export default function TableSection() {
  return (
    <>
      <section className="BlogTable">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-12">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>ClickUp</th>
                      <th>Smartsheet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Feature">Pricing</td>
                      <td data-label="ClickUp">
                        Free plan available; More features in affordable plans
                        starting at $7 per user/month
                      </td>
                      <td data-label="Smartsheet">
                        Free trial available; Paid plans start at $7 per
                        user/month but lack the extensive features of ClickUp
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Design & Functionality</td>
                      <td data-label="ClickUp">
                        Intuitive drag-and-drop functionality; Easy onboarding
                        for all skill levels
                      </td>
                      <td data-label="Smartsheet">
                        Requires spreadsheet familiarity; Can feel rigid and
                        less user-friendly
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Feature">Customizations</td>
                      <td data-label="ClickUp">
                        Extensive: Multiple views, automations, dashboards, and
                        templates to fit any need
                      </td>
                      <td data-label="Smartsheet">
                        Limited customizations confined to its grid-based
                        structure
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Feature">User Feedback</td>
                      <td data-label="ClickUp">
                        Actively incorporated into updates, consistently
                        enhancing usability and features
                      </td>
                      <td data-label="Smartsheet">
                        Updates focus primarily on spreadsheet-related
                        improvements with limited innovation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export const meta = {
  name: "tableSection",
  fields: [
    {
      key: "tableHeadings",
      type: "repeater",
      fields: [{ key: "title", label: "Table Heading", type: "text" }],
    },
    {
      key: "tableRows",
      type: "repeater",
      fields: [
        { key: "description", label: "Table Description", type: "textarea" },
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
