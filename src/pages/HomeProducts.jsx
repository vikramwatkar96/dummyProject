import React, { useState } from "react";
import { products as product1Data } from '../data/productsData';
import { products as product2Data } from '../data/furnitureData';
import '../css_style/home.css'
import CardSet from '../component/productCollection/CardSet'
const half = product1Data.slice(0, 4);

function HomeProducts() {
  const [selectedProducts, setSelectedProducts] = useState(product1Data);

  const handleLabelClick = (products) => {
    setSelectedProducts(products)
  };

  return (
    <div className="App">
      <div className="section-t-space">
        <p className="offername">Special Offer</p>
        <h2 className="title-inner1">top collection</h2>
        <hr />
        <p
          style={{
            marginLeft: "320px",
            maxWidth: "700px",
            color: '#777',
            fontSize: '16px'
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>

      <CardSet products={half} width='352px' height="552px" wrap="nowrap" />
      <p className="offername">Exclusive Products</p>
      <h2 className="title-inner1">Special Products</h2>
      <hr />

      <div className="productclick">
        <div
          className="clickable"
          onClick={() => {
            handleLabelClick(product1Data)
          }
          }
        >
          NEW ARRIVAL

        </div>
        <div
          className="clickable"
          onClick={() => handleLabelClick(product2Data)}
        >
          FEATURED
        </div>
        <div
          className="clickable"
          onClick={() => handleLabelClick(product2Data)}
        >
          SPECIAL
        </div>
      </div>

      <CardSet products={selectedProducts}
        width='288px'
        height='480px'
        wrap='wrap' />

    </div>
  );
}

export default HomeProducts;
