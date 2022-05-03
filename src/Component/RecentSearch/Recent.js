import { useEffect, useState } from "react";
import "./Recent.css";
import axios from "axios";

function Recent(props) {
  const { openRecent } = props;
  const [showRecent, setShowRecent] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `https://6266a22263e0f3825684de8d.mockapi.io/api/users`
        );
        openRecent ? setShowRecent(res.data) : setShowRecent([]);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div className="box">
        <div className="recent_wrap">
          {showRecent
            .filter((recent) =>
              recent.user_Name.toLowerCase().includes(openRecent)
            )
            .map((recent, key) => (
              <div className="list_recent_container" key={key}>
                <a className="recent_link" href="#">
                  <li className="recent_list_item">
                    <img src={recent.userAvatar} className="recent_avatar" />
                    <div className="recent_name_container">
                      <h5>{recent.user_Name}</h5>
                      <h6>{recent.userEmail}</h6>
                    </div>
                  </li>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Recent;
