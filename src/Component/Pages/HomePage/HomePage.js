import { memo } from "react";
import "./homepage.css";
import "../../../Grid/grid.css";
import Header from "../../Header/Header";
import User from "../../Users/User";
import Suggestions from "../../Suggestions/Suggestions";

function HomePage() {
  // ========================= Return ==============================
  return (
    <>
      <Header />
      <div className="layout grid">
        <div className="layout_wrap">
          <div className="layout_container row">
            <div className="col l-7 content_left">
              <User />
            </div>
            <div className="col l-5 content_right">
              <div className="layout_suggestion">
                <Suggestions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(HomePage);
