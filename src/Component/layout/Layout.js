import "../Grid/grid.css";
import "./Layout.css";
import Story from "../Story/Story";
import Post from "../Posts/Post";
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
          <div className="layout_post">
            <Post />
          </div>
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
