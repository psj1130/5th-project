// import Headermenu from "./headermenu";
// import Header from "./header";
import Searchbar from "./searchbar";
import { Link } from "react-router-dom";
import './board.css';
function Boarder(){

  return(
    <>
      <div id="Headermenu">
        <div id="main_top_main">
          <div id="main_top">
            <Link to='/htmlboard'><h1>쩐의 전쟁 커뮤니티 게시판</h1></Link>
            <div>
              <Searchbar/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Boarder;