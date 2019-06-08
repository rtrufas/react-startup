import React from "react";
import "./FooterContact.scss";

export default class FooterContact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-left">
          <div className="title">Contact</div>
          <a href="http://cjextm.ro/" className="row">
            aaa
          </a>
          <a href="http://cjextm.ro/" className="row">
            bbb
          </a>
          <a href="http://cjextm.ro/" className="row">
            ccc
          </a>
        </div>

        <div className="contact-right">
          <div className="title">Legaturi utile</div>
          <a href="http://cjextm.ro/" className="row">
            Centru judetean de excelenta
          </a>
          <a href="https://www.ccd-timis.ro/" className="row">
            CCD Timis
          </a>
          <a href="http://www.isj.tm.edu.ro/" className="row">
            ISJ Timis
          </a>
          <a href="https://www.edu.ro/" className="row">
            Ministerul Educatiei Nationale
          </a>
          <a href="https://www.salvaticopiii.ro/" className="row">
            Salvati Copiii
          </a>
        </div>
      </div>
    );
  }
}
