import React, { useState } from "react";
import "./navbar.scss";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [show, setShow] = useState(false);
  console.log(show);

  return (
    <div className="container-navbar">
      <div className="div-hamburger">
        {show
          ? <FiX 
            onClick={() => {
            setShow(!show);
          }}
          />
          : <FiMenu
              onClick={() => {
                setShow(!show);
              }}
            />}
      </div>

      <div className="div-logo">
        <h1>
          <span>&lt;</span> Samantha <span>/&gt;</span>
        </h1>
      </div>
      <div className="menu">
        <div>
          <a href="/">
            <p>Quem sou</p>
          </a>
        </div>
        <div>
          <a href="/">
            <p>Projetos</p>
          </a>
        </div>
        <div>
          <a href="/">
            <p>Conhecimento</p>
          </a>
        </div>
        <div>
          <a href="/">
            <p>Contato</p>
          </a>
        </div>
      </div>
      <div className={show ? "menu-mobile" : "menu-mobile-disable"}>
        <div>
          <a href="/">
            <p>Quem sou</p>
          </a>
        </div>
        <div>
          <a href="/">
            <p>Projetos</p>
          </a>
        </div>
        <div>
          <a href="/">
            <p>Conhecimento</p>
          </a>
        </div>
        <div>
          <a href="/">
            <p>Contato</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
