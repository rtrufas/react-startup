import React from "react";
import "./Contacts.scss";
import FooterContact from "../../Components/FooterContact/FooterContact";

export default class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts-page">
        <div className="contacts-page__container">
          <div className="contacts-page__left">
            <h1>
              Pentru orice informatii solicitate va stam la dispozitie,
              contactati-ne prin urmatoarele mijloace.
            </h1>
            <ul>
              <li>
                <span>Str. Paunescu Podeanu Nr. 144 Timisoara, Romania</span>
              </li>
              <li>
                <span>Tel:+40 (256) 213 108</span>
              </li>
              <li>
                <span>Tel: +40 (745) 521 710</span>
              </li>
              <li>
                <span>
                  Email:{" "}
                  <a href="mailto: secretariat@islavici.ro">
                    secretariat@islavici.ro
                  </a>
                </span>
              </li>
              <li>
                <div>
                  <b>Secretariat - Universitate (Parter)</b>
                </div>
                <div>Luni – Vineri: 13:00 – 19:00</div>
                <div>Sambata: 08:00 – 13:00</div>
              </li>
              <li>
                <div>
                  <b>Secretariat - Liceu (Sala D04)</b>
                </div>
                <div>Luni – Vineri: 08:00 – 14:00</div>
              </li>
            </ul>
          </div>

          <div className="contacts-page__right">
            <div className="contacts-page__maps">
              <iframe
                title="googlemaps"
                width="400"
                height="220"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=liceul%20ioan%20slavici&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
            <div className="contacts-page__maps3d">
              <iframe
                title="googlemaps3d"
                width="400"
                height="218"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.ro/maps?f=q&amp;source=embed&amp;hl=ro&amp;geocode=&amp;q=liceul+%22Ioan+Slavici%22&amp;aq=&amp;sll=45.745171,21.252601&amp;sspn=0.007697,0.021136&amp;ie=UTF8&amp;hq=liceul+%22Ioan+Slavici%22&amp;ll=45.744542,21.25214&amp;spn=0.015573,0.032015&amp;t=m&amp;layer=c&amp;cbll=45.744742,21.251964&amp;panoid=dNmk9Rzeb2IH7crCNl3OEw&amp;cbp=13,109.59,,0,-5.21&amp;output=svembed"
              />
            </div>
          </div>
        </div>
        <FooterContact />
      </div>
    );
  }
}
