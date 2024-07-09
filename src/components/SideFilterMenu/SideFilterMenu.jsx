import React, { useState } from "react";
import "./SideFilterMenu.scss";
import CTA from '../../components/CTA/CTA';

const SideFilterMenu = ({ isOpen, onClose }) => {
  const [maxPrice, setMaxPrice] = useState(1000);

  const [sort, setSort] = useState(null);

  return (
    <>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`side-filter-menu ${isOpen ? "open" : ""}`}>
        <div className="filter-header">
          <h3> Filters </h3>
          <button className="side-filter-menu__close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="sort">
          <h2> Sort by </h2>
          <div className="sortContainer">
            <div>
              <input type="radio" id="popular"/>
              <label htmlFor="popular"> Most Popular </label>
            </div>
            <div>
              <input type="radio" id="highest"/>
              <label htmlFor="highest"> Price: High to Low </label>
            </div>
            <div>
              <input type="radio" id="rating"/>
              <label htmlFor="rating"> Customer Rating </label>
            </div>
            <div>
              <input type="radio" id="lowest"/>
              <label htmlFor="lowest"> Price: Low to High </label>
            </div>  
            <div>
              <input type="radio" id="newest"/>
              <label htmlFor="newest"> Newest </label>
            </div>
          </div>
        </div>
        <div className="category">
          <h2> Category </h2>
          <div>
            <input type="radio" id="women" />
            <label htmlFor="women"> Women </label>
          </div>
          <div>
            <input type="radio" id="men" />
            <label htmlFor="women"> Men </label>
          </div>
          <div>
            <input type="radio" id="kids" />
            <label htmlFor="women"> Kids </label>
          </div>
        </div>

        <hr />

        <div className="size">
          <h2> Size </h2>
          <div className="sizeContainer">
            <div>
              <input type="radio" id="XS" />
              <label htmlFor="XS"> XS </label>
            </div>
            <div>
              <input type="radio" id="S" />
              <label htmlFor="S"> S </label>
            </div>
            <div>
              <input type="radio" id="M" />
              <label htmlFor="M"> M </label>
            </div>
            <div>
              <input type="radio" id="L" />
              <label htmlFor="L"> L </label>
            </div>
            <div>
              <input type="radio" id="XL" />
              <label htmlFor="XL"> XL </label>
            </div>
            <div>
              <input type="radio" id="XXL" />
              <label htmlFor="XXL"> XXL </label>
            </div>
          </div>
        </div>

        <hr />

        <div className="price">
          <h2>Price Range</h2>
          <div className="priceItem">
            <input
              type="range"
              min="0"
              max="1000"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <div className="priceValue">
              <span>$25</span>
              <span>${maxPrice}</span>
            </div>
          </div>

          <div className="priceContainer">
            <div>
              <input type="radio" id="all" />
              <label htmlFor="all"> All Prices </label>
            </div>
            <div>
              <input type="radio" id="20" />
              <label htmlFor="20"> Under $20 </label>
            </div>
            <div>
              <input type="radio" id="100" />
              <label htmlFor="100"> $25 to $100 </label>
            </div>
            <div>
              <input type="radio" id="above" />
              <label htmlFor="above"> Above $100 </label>
            </div>
          </div>
        </div>

        <hr />

        <div className="color">
          <h2>Color</h2>
          <div className="colorContainer">
            <div className="colorItem">
              <input type="radio" id="red" name="color" value="red" />
              <label htmlFor="red" className="colorLabel">
                {" "}
                Red{" "}
              </label>
            </div>
            <div className="colorItem">
              <input type="radio" id="yellow" name="color" value="yellow" />
              <label htmlFor="yellow" className="colorLabel">
                {" "}
                Yellow{" "}
              </label>
            </div>
            <div className="colorItem">
              <input type="radio" id="blue" name="color" value="blue" />
              <label htmlFor="blue" className="colorLabel">
                {" "}
                Blue{" "}
              </label>
            </div>
            <div className="colorItem">
              <input type="radio" id="green" name="color" value="green" />
              <label htmlFor="green" className="colorLabel">
                {" "}
                Green{" "}
              </label>
            </div>
            <div className="colorItem">
              <input type="radio" id="white" name="color" value="white" />
              <label htmlFor="white" className="colorLabel">
                {" "}
                White{" "}
              </label>
            </div>
            <div className="colorItem">
              <input type="radio" id="black" name="color" value="black" />
              <label htmlFor="black" className="colorLabel">
                {" "}
                Black{" "}
              </label>
            </div>
          </div>
        </div>

        <div className="btns">
          <CTA text="Reset" style={{
            backgroundColor: 'transparent',
            color: 'var(--primary-color)',
            border: '0.8px solid var(--primary-color)',
            }}
            />
          <CTA text="Apply"/>
        </div>
      </div>
    </>
  );
};

export default SideFilterMenu;
