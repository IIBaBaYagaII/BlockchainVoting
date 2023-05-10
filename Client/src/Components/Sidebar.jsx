import "../css/SidebarStyle.css";
import { SidebarData, WebsiteDetails } from "../Data/SidebarData";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [data, setData] = useState(SidebarData);

  function handleClick(title) {
    let tmp = data;
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].title === title) {
        tmp[i].id = "active";
      } else {
        tmp[i].id = "";
      }
    }
    setData(tmp);
  }

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="website__details">
            <div className="website__logo">
              <img src="https://neighbors.columbia.edu/sites/default/files/styles/cu_crop/public/content/Vote_with_check_for_v.svg_.png?itok=4ujAI-ok"  style={{width:"120%"}} alt="Website Logo" />
            </div>
            <div className="website__title" style={{marginLeft:"10px",color:"#1b1b1b"}}>System</div>
          </div>
          <hr />
          <ul className="sidebar__items">
            {data.map((item, index) => {
              return (
                <Link to={item.link} key={index}>
                  <li
                    id={item.id}
                    onClick={() => handleClick(item.title)}
                    key={index}
                    className="row"
                  >
                    <div id="icon">{item.icon}</div>
                    <div id="title">{item.title}</div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
