import React, { Component } from "react";
import Header from "./Header";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "React Start-up",
      titleUrl: process.env.PUBLIC_URL + "/",
      links: [
        {
          label: "Acasa",
          url: "/acasa"
        },
        {
          label: "Informatii Elevi",
          url: "/informatii-elevi"
        },
        {
          label: "Anunturi",
          url: "/anunturi"
        },
        {
          label: "Contact",
          url: "/contact"
        }
      ]
    };
  }

  render() {
    const { title, titleUrl, links } = this.state;
    return <Header title={title} titleUrl={titleUrl} links={links} />;
  }
}

export default HeaderContainer;
