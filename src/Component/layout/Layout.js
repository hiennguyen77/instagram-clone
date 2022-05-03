import "../Grid/grid.css";
import "./Layout.css";
import User from "../Users/User";
import Story from "../Storys/Story"
import Suggestions from "../Suggestions/Suggestions";
import { memo } from "react";
function Layout() {


// ======================== Return ==============================    
  return (
    <div className="layout grid">
      <div className="layout_container row">
        <div className="col l-7 content_left">
        <div className="layout_story">
                    <Story />
        </div>
          <User/>
        </div>
        <div className="col l-5 content_right">
          <div className="layout_suggestion">
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Layout);
