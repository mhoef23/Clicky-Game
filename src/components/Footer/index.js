import React from "react";
import "./style.css";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="bottom">Clicky Game! <img alt="react" src={require("../../images/react.svg")}/></div>
        </footer>
    );

}

export default Footer;
