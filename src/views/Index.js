/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import SectionWorkExperience from "views/index-sections/SectionWorkExperience.js"
import SectionProjects from "views/index-sections/SectionProjects";
import SectionFooter from "views/index-sections/SectionFooter.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div id="workexperience">
        <SectionWorkExperience/>
        </div>
        <div id="propjects">
        <SectionProjects />
        </div>
        <div id="contactme">
        <SectionFooter />
        </div>
      </div>
    </>
  );
}

export default Index;
