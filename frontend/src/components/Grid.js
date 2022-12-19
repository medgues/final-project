import React from "react";
import { Grid, Fade, Slug } from "mauerwerk";

import Product from "./product";
import ProductPage from "../components/productPage/pages/ProductPage";

const ProductsGrid = ({ data, handelPopUpOpen, disactivateToggleIsTrue }) => {
  const info = { data, disactivateToggleIsTrue };
  return (
    <div className="  bg-slate-300">
      <Grid
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={info.data || []}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={(d) => d._id}
        // Can be a fixed value or an individual data accessor
        heights={500}
        lockScroll={true}
        transitionMount={true}
        // Number of columns
        columns={5}
        margin={10}
      >
        {(data, open, toggle) => (
          <div className=" rounded-md" style={{ backgroundImage: data.css }}>
            <div className="flex justify-between px-2"></div>
            {open && (
              <div className="flex justify-center ">
                <ProductPage data={data} toggle={toggle} />

                <div className="circle " style={{ background: data.css }} />
              </div>
            )}
            {!open && (
              <Product
                disactivateToggleIsTrue={disactivateToggleIsTrue}
                handelPopUpOpen={handelPopUpOpen}
                createdAt={data.createdAt}
                toggle={toggle}
                key={data._id}
                id={data._id}
                title={data.title}
                image={data.img}
                postedBy={data.postedBy}
                // price={product.amount}
                // rating={product.rating}
              />
            )}
            {/* <button onClick={toggle}>{open ? "Close" : "Open"}</button> */}
          </div>
        )}
      </Grid>
    </div>
  );
};

export default ProductsGrid;
