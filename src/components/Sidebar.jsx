import React from "react";
import {categories} from "../utils/constants";
import {sidebar} from "../const/const";

const Categories = ({selectedCat, setSelectedCat}) => (
    <div
        style={sidebar.stack}
        className={'category-container'}
    >
        {categories.map((cat) => (
            <div
                className="category-btn"
                onClick={() => {
                    setSelectedCat(cat.name)
                }}
                style={{
                    ...sidebar.button,
                    background: cat.name === selectedCat && "#ED1A3D",
                }}
                key={cat.name}
            >
        <span style={{...sidebar.span, color: cat.name === selectedCat ? "white" : "#ED1A3D",}}>
          {cat.icon}
        </span>
                <span style={{opacity: cat.name === selectedCat ? "1" : "0.8"}}>
          {cat.name}
        </span>
            </div>
        ))}
    </div>
);

export default Categories;
