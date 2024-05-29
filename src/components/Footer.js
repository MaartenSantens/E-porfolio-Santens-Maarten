import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "footer": {
    "line_one": "Built & designed by",
    "copyright_line": "All rights reserved."
  },

  * "line_one": "First line in footer message"
  * "copyright_line": "Second line in footer message"
   
  NOTE: line_one will use the first, middle and last name declared in the general section of json file. If you dont have a middle name you can leave it as a blank ""

*/

const Footer = () => {
  const general = contentData.general;

  return (
    <Fade triggerOnce={true} direction="up">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  {contentData.footer.line_one}{" "}
                  <a href={contentData.general.navbar_social_links.github}>
                    <strong>
                      {general.first_name} {" "}
                      {general.last_name}
                    </strong>
                  </a>
                  .
                </p>
                <div className="credits">
                  {contentData.footer.copyright_line} &copy;
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
