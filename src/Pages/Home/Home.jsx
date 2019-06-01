import React from "react";
import "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1>
          Universitatea "Ioan Slavici" din Timisoara a luat fiinta in cadrul
          Fundatiei cu acelasi nume, in iarna anului 2000, din dorinta unui grup
          de personalitati din invatamantul superior timisorean de a crea o
          institutie in sistem privat,care sa aseze mai presus de orice formarea
          intelectuala a tinerilor cu o larga deschidere culturala, buna
          pregatire profesionala si cu o mare capacitate de integrare in
          societate.
        </h1>

        <div>
          Buni cunoscatori, atat ai starii actuale a tinerei generatii, cat si a
          prognozelor de dezvoltare a Romaniei moderne, cele peste 50 de cadre
          didactice, cu titlul de DOCTOR in diferite domenii ale stiintelor, isi
          unesc eforturile in punerea in aplicare a experientei si
          profesionalismului in construirea unei strategii instructiv
          educationale performante.
        </div>
      </div>
    );
  }
}
