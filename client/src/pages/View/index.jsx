import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getContact } from "../../services/getContactService";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiPhone, FiMail, FiStar } from "react-icons/fi";
import PopupMenu from "../../components/PopupMenu";

import "./view.scss";

function View() {
  const params = useParams();
  const [data, setData] = useState({});

  const icons = {
    phone: <FiPhone />,
    email: <FiMail />,
  };

  useEffect(() => {
    getContact(params.id)
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => console.log(er));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="view_header">
        <PopupMenu>
          <ul className="menu_ul">
            <li>
              <Link to={`/edit/${params.id}`}>edit</Link>
            </li>
            <li>remove</li>
          </ul>
        </PopupMenu>
        <button className="header-button">
          <FiStar />
        </button>
      </div>
      <div className="view_contact">
        <IoPersonCircleOutline className="view_profile" />
        <div className="view_info">
          {Object.keys(data).map((key) => (
            <div className="view_info-item" key={key}>
              {icons[key]}
              <span>{data[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default View;
