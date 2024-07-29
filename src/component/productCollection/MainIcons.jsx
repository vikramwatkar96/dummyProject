import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

// import "./prod1.css";

export default function MainIncons({ addToCart, addToWishlist }) {
  const IconComponent = React.memo(({ icon, onClick }) => (
    <div className="icon" onClick={onClick}>
      {icon}
    </div>
  ));

  return (
    <div>
      <div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconComponent
            icon={<FaShoppingCart size={14} />}
            onClick={addToCart}
          />

          <IconComponent
            icon={<BsFillSuitHeartFill size={14} />}
            onClick={addToWishlist}
          />

          <IconComponent icon={<IoSearch size={14} />} onClick={() => {}} />
          <IconComponent
            icon={<FaCodeCompare size={14} />}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
