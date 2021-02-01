import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElement = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ));

  return <nav>{linksElement}</nav>;
  // {/* display an <a> tag for each link here */}
  
}

export default NavBar;
