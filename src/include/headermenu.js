import { Link } from 'react-router-dom';
import './headermenu.css';

function Headermenu(){
  return(
    <div id='Headermenu_list'>
      <Link to='/htmlboard'><button id='Headermenu_list_btn'>비트코인</button></Link>
    </div>
  )
}

export default Headermenu;
