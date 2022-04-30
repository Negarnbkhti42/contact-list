import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../../services/getContactService";

function View() {
  const params = useParams();
  const [data, setData] = useState({});

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
    <div className="view_container">
      {Object.keys(data).map((key) => (
        <div key={key}>
          <span>{key}</span>
          <span>{data[key]}</span>
        </div>
      ))}
    </div>
  );
}

export default View;
