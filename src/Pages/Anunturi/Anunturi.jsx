import React from "react";
import "./Anunturi.scss";
import QR from "../../Assets/Images/frame.png";

export default class Anunturi extends React.Component {
  render() {
    return (
      <div className="anunturi-page">
        <div>
          <p>Club de ştiinţe aplicate la Slavici cu Ştiinţescu </p>
          <p>
            Intre 6 mai si 14 iunie vom experimenta împreuna urmatoarele module:
          </p>
          <ul>
            M1 Ştiinţe clasice in viaţa de zi cu zi :
            <li>
              A – studiul efectelor curentului electric si aplicaţiile sale
              fizico-chimice
            </li>
            <li>B – termodinamica si chimie M2</li>
          </ul>
          <ul>
            Ştiinţe ale pamantului :
            <li>A – studiul efectelor poluarii in zona urbana</li>
            <li>B – analiza schimbarilor climatic</li>
          </ul>
          <ul>
            M3 Ştiinţe moderne – electronica aplicata :
            <li>A - colectarea datelor de la senzori si interpretarea lor</li>
            <li>B – mecanica unu rover</li>
          </ul>
          <p>
            La final va avea loc Targul de ştiinţe de la Slavici cu premii
            pentru toţi participanţii!{" "}
          </p>

          <ul>
            <li>
              BAC 2019 – REZULTATE – Proba C) de evaluare a competenţelor
              lingvistice într-o limbă de circulaţie internaţională14 iunie,
              2019
            </li>
            <li>
              Rezultate la proba D – PROBA de evaluare a competenţelor
              digitale12 iunie, 2019
            </li>
            <li>
              BAC 2019 – PROBA C – PROBA DE EVALUARE A COMPETENŢELOR LINGVISTICE
              ÎNTR-O LIMBĂ DE CIRCULAŢIE INTERNAŢIONALĂ PROBA ORALĂ 13 IUNIE
              201912 iunie, 2019
            </li>
            <li>
              BAC 2019 – PROBA C) DE EVALUARE A COMPETENŢELOR LINGVISTICE ÎNTR-O
              LIMBĂ DE CIRCULAŢIE INTERNAŢIONALĂ11 iunie, 2019
            </li>
            <li>
              BAC 2019 – PROBA D: Evaluarea competențelor digitale 7, 10 și 11
              iunie6 iunie, 2019
            </li>
            <li>
              BAC 2019 – REZULTATE – PROBA A – proba de evaluare a competențelor
              lingvistice de comunicare orală în limba română4 iunie, 2019
            </li>
            <li>
              BACALAUREAT 2019 – Proba: A – Evaluarea competenţelor lingvistice
              de comunicare orală în limba română – 3, 4 MAI 201931 mai, 2019
            </li>
          </ul>
        </div>

        <p>
          Scaneazã codul de bare.Citeşte o carte din biblioteca aleasã, apoi
          acordã-i un calificativ.Ce lecturã a fost mai interesantã?
        </p>
        <img src={QR} alt="QR Code" className="qr-code" />
      </div>
    );
  }
}
