import React, { Component } from "react";
import Header from "./Header";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "React Start-up",
      titleUrl: "/",
      links: [
        {
          label: "Home",
          url: "/Home"
        },
        {
          label: "Contacts",
          url: "/contacts"
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
