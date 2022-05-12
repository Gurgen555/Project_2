import "./Main.scss";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import img1 from "../../Photos/2.png";
import { NavLink } from "react-router-dom";


export default function Main() {
  return (
    <>
      <div className="bigDiv">
        <img src={img1} />
      <div className="mainDiv">
        <h2>Less but better</h2>
        <p>Less but is one of our guiding principles. Focus on the most 
          important elements of each garmend and let go of everthing superfluous.
        </p>
        <div>
          <button className="btn"> <NavLink className={"shopBtn"} to={"/products"}>SHOP NOW</NavLink> <NavigateNextIcon  className="icon" /></button>
        </div>
    </div>
    </div>
    </>
  );
}
