import React from "react";
import "./SideContact.scss";

export default class SideContact extends React.Component {
  render() {
    return (
      <div className="side-contact">
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
    );
  }
}
