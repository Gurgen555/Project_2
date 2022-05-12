import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMainProdAsync,
  selectProd,
} from "../../Redux/mainProductSlice/mainProductSlice";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../MainProduct/MainProd.scss"
export default function MainProd() {
  const prods = useSelector(selectProd);
  const newProd = prods?.slice(14, 17);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainProdAsync());
  }, []);

  return (
    <div className="prods">
      <div className="title">
        <h2>New Season</h2>
        <div className="line"></div>
      </div>
      <div className="mainProd">
        {newProd?.map((item, i) => {
          return (
            <div key={i} className="product">
              <div className="imgDiv">
                <img src={item.image}></img>
                <div className="option">
                  <div className="optionDiv">
                    <p>SELECT OPTIONS </p>
                    <NavigateNextIcon />
                  </div>
                </div>
              </div>
              <div className="nameDivs">
                <h3>{item.title}</h3>
                <span>${item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
