import React from "react";
import "./StudentInfo.scss";

export default class StudentInfo extends React.Component {
  render() {
    return (
      <div className="student-info-page">
        <div>Orare</div>
        <div>Biblioteca (cursuri sub format word sau QR code ?)</div>
        <div>Planicarea tezelor</div>
        <div>Cadre didactice/organigrama</div>
      </div>
    );
  }
}
