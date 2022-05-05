import { useEffect, useState } from "react";
import "./Recent.css";
import axios from "axios";
import { BsX } from "react-icons/bs";

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

  //handleDeleteRecent
  const handleDeleteRecent = (id) => {
    const newRecent = showRecent.filter((recent) => recent.id !== id);
    setShowRecent(newRecent);
  };

  //handleDeleteAll
  const handleDeleteAll = (e) => {
    e.preventDefault()
    setShowRecent([])
  };

  return (
    <>
      <div className="box">
        <div className="recent_wrap">
          <div className="recent_header">
            <h4 className="recent_text">Recent</h4>
            <div className="clear_all_btn" onClick={handleDeleteAll}>
              <h4 className="recent_text_clear">Clear All</h4>
            </div>
          </div>
          {showRecent
            .filter((recent) =>
              recent.user_Name.toLowerCase().includes(openRecent)
            )
            .map((recent, key) => (
              <div className="list_recent_container" key={key}>
                <a className="recent_link" href="#">
                  <li className="recent_list_item">
                    <div>
                      <img src={recent.userAvatar} className="recent_avatar" />
                    </div>
                    <div className="recent_name_container">
                      <div>
                        <h5>{recent.user_Name}</h5>
                        <h6>{recent.userEmail}</h6>
                      </div>
                      <div
                        className="recent_delete"
                        onClick={() => handleDeleteRecent(recent.id)}
                      >
                        <BsX />
                      </div>
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
