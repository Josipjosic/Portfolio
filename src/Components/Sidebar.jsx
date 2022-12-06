import React from "react";
import { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-scroll";

function Sidebar() {
  const [id, setId] = useState(1);

  console.log(id);
  return (
    <section className="sidebar">
      <div className="sidebar-content">
        <Link
          to="hero"
          onClick={() => {
            setId(1);
          }}
          style={{ backgroundColor: id === 1 ? "#c10232" : "" }}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        ></Link>
        <Link
          to="about"
          onClick={() => {
            setId(2);
          }}
          style={{ backgroundColor: id === 2 ? "#c10232" : "" }}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        ></Link>
        <Link
          to="skills"
          onClick={() => {
            setId(3);
          }}
          style={{ backgroundColor: id === 3 ? "#c10232" : "" }}
          spy={true}
          smooth={true}
          offset={-15}
          duration={500}
        ></Link>
      </div>
    </section>
  );
}

export default Sidebar;
