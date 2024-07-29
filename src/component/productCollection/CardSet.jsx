import React, { useState } from "react";
import { Card } from "react-bootstrap";
// import { products } from "./productsData";
import StarRating from "./StarRating";
import MainIncons from "./MainIcons";
import '../../css_style/card.css'

const CardSet = ({ products, width, height, wrap }) => {
  const [productStates, setProductStates] = useState(
    products.map((product) => ({
      selectedColorIndex: 0,
      hovered: false,
    }))
  );

  const handleThumbnailClick = (productIndex, index) => {
    setProductStates((prevProductStates) => {
      const updatedProductStates = [...prevProductStates];
      updatedProductStates[productIndex].selectedColorIndex = index;
      return updatedProductStates;
    });
  };

  const handleColorVariantClick = (productIndex, index) => {
    setProductStates((prevProductStates) => {
      const updatedProductStates = [...prevProductStates];

      updatedProductStates[productIndex].selectedColorIndex = index;
      return updatedProductStates;
    });
  };

  const handleAddToCart = (product) => {
    console.log("Added to Cart:", product);
  };

  const handleAddToWishlist = (product) => {
    console.log("Added to Wishlist:", product);
  };

  return (
    <div
      className="card-set-container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: wrap,
      }}
    >
      {products.map((product, index) => (
        <Card
          style={{
            // width: "247px",
            // height: "450px",
            width: width,
            height: height,
            marginBottom: "15px",
            marginRight: "20px",
          }}
          key={product.id}
          // className="card-set "
          onMouseEnter={() => {
            setProductStates((prevProductStates) => {
              const updatedProductStates = [...prevProductStates];
              updatedProductStates[index].hovered = true;
              return updatedProductStates;
            });
          }}
          onMouseLeave={() =>
            setProductStates((prevProductStates) => {
              const updatedProductStates = [...prevProductStates];
              updatedProductStates[index].hovered = false;
              return updatedProductStates;
            })
          }
        >
          <div>
            <div>
              <div className="main-image">
                <img
                  src={product.images[productStates[index].selectedColorIndex]}
                  alt="Main"
                  className="main-img"
                />
                <div className="thumbnails">
                  {product.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Thumbnail ${idx}`}
                      className={`thumbnail ${idx === productStates[index].selectedColorIndex
                        ? "active"
                        : ""
                        }`}
                      onClick={() => handleThumbnailClick(index, idx)}
                    />
                  ))}
                </div>

                <div
                  className={`icon-wrapper ${productStates[index].hovered ? "hovered" : ""
                    }`}
                >
                  {productStates[index].hovered && (
                    <MainIncons
                      addToCart={handleAddToCart}
                      addToWishlist={handleAddToWishlist}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <StarRating />
          </div>

          <div className="pname">{product.name}</div>

          <span className="price">
            ${product.price}{" "}
            {<del className="oldprice">${product.oldPrice}</del>}
          </span>
          <div>
            <ul className="color-variants">
              {product.colors.map((color, idx) => (
                <li
                  key={idx}
                  className={`color-variant , color ${idx === productStates[index].selectedColorIndex
                    ? "active"
                    : ""
                    }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorVariantClick(index, idx)}
                ></li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardSet;
