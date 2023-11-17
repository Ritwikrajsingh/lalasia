import React from "react";
import "../../styles/Footer.css";
import { footer as footerData } from "../../database";

export default function Footer() {
  footerData.map((header) =>
    header.map((title, index) => console.log(title, index))
  );
  return (
    <footer>
      <div className="left">
        <img src="./logo.svg" />
        <p>
          Lalasia is digital agency that help you make better experience iaculis
          cras in.
        </p>
      </div>
      <div className="right">
        {footerData.length &&
          footerData.map((item) => (
            <div className="items">
              <ul>
                {item.length &&
                  item.map((title, index) =>
                    index !== 0 ? (
                      <li>{title}</li>
                    ) : (
                      <li>
                        <b>{title}</b>
                      </li>
                    )
                  )}
              </ul>
            </div>
          ))}
      </div>
    </footer>
  );
}
