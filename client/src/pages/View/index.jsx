import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../../services/getContactService";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";

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
        let { id, ...userData } = res;
        setData(userData);
      })
      .catch((er) => console.log(er));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IoPersonCircleOutline className="view_profile" />
      <div className="view_info">
        {Object.keys(data).map((key) => (
          <div className="view_info-item" key={key}>
            {icons[key]}
            <span>{data[key]}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default View;
