import "./Navbar.css";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";

const Navbar = () => {
  const [data, setData] = React.useState(undefined);

  const [clicked, setClicked] = React.useState(false);

  const fetchMe = fetch("https://tracktik-challenge.staffr.com/me")
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });

  React.useEffect(() => {
    fetchMe
      .then((resdata) => {
        setData(resdata);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const menuItems = [
    {
      title: "Home",
      url: "#",
      att: "nav-links",
    },
    {
      title: "Products",
      url: "#",
      att: "nav-links",
    },
    {
      title: "Services",
      url: "#",
      att: "nav-links",
    },
    {
      title: "Contact Us",
      url: "#",
      att: "nav-links",
    },
  ];

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar-items">
      <h1 className="navbar-header">Scheduling</h1>
      <div
        className="menu-icon"
        onClick={() => {
          handleClick();
        }}
      >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.att} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="navbar-right-icons">
        <div>
          <BsGrid3X3GapFill />
        </div>
        <div className="avatar">
          {data && data.username && data.username.charAt(0)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
