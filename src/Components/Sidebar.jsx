import React from "react";
import { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-scroll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Sidebar() {
  const [id, setId] = useState(1);

  console.log(id);
  return (
    <section className="sidebar d-none d-sm-block">
      <div className="sidebar-content">
        <Link
        className="fs-5 arrow"
          to="hero"
          onClick={() => {
            setId(1);
          }}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        ><ArrowForwardIcon></ArrowForwardIcon> </Link>
      </div>
    </section>
  );
}

export default Sidebar;
