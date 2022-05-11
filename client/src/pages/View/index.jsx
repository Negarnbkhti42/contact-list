import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getContact } from "../../services/getContactService";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import PopupMenu from "../../components/PopupMenu";

import "./view.scss";
import { updateContact } from "../../services/updateContactService";

function View() {
  const params = useParams();
  const [data, setData] = useState({});
  const [favorite, setFavorite] = useState(false);

  const icons = {
    phone: <FiPhone />,
    email: <FiMail />,
  };

  const changeFavorite = () => {
    updateContact(params.id, { favorite: !favorite });
    setFavorite(!favorite);
  };

  useEffect(() => {
    getContact(params.id)
      .then((res) => {
        setData(res.data);
        setFavorite(res.favorite);
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
        <span onClick={changeFavorite}>
          {favorite ? (
            <AiFillStar className="header_icon header_icon-favorite" />
          ) : (
            <AiOutlineStar className="header_icon" />
          )}
        </span>
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
