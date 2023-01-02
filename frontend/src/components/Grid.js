import React, { useEffect, useRef, useState } from "react";
import { Grid } from "mauerwerk";
import Product from "./product";
import ProductPage from "../components/productPage/pages/ProductPage";
import useWindowDimensions from "../hooks/useWindowDimensions ";

const ProductsGrid = ({ data, handelPopUpOpen, disactivateToggleIsTrue }) => {
  const { width } = useWindowDimensions();

  console.log("height", data);
  const columns =
    Math.floor(width) <= 480
      ? 3
      : 480 < Math.floor(width) && Math.floor(width) <= 768
      ? 4
      : 5;
  return (
    <Grid
      // Arbitrary data, should contain keys, possibly heights, etc.
      data={data || []}
      // Key accessor, instructs grid on how to fet individual keys from the data set
      keys={(d) => d._id}
      // Can be a fixed value or an individual data accessor
      heights={465}
      lockScroll={true}
      transitionMount={true}
      // Number of columns
      columns={columns}
      margin={10}
    >
      {(data, open, toggle) => (
        <div
          className="h-auto rounded-md border border-black"
          style={{ backgroundImage: data.css }}
        >
          <div className="flex justify-between px-2"></div>
          {open && (
            <div className="  first-letter: flex justify-center ">
              <div className="circle " style={{ background: data.css }} />
              <ProductPage data={data} toggle={toggle} />
            </div>
          )}
          {!open && (
            <Product
              disactivateToggleIsTrue={disactivateToggleIsTrue}
              handelPopUpOpen={handelPopUpOpen}
              css={data.css}
              createdAt={data.createdAt}
              toggle={toggle}
              key={data._id}
              id={data._id}
              title={data.title}
              img={data.img}
              postedBy={data.postedBy}
              // price={product.amount}
              // rating={product.rating}
            />
          )}
        </div>
      )}
    </Grid>
  );
};

// import "../grid.css";
// import React, { Component, Fragment } from "react";
// import { render } from "react-dom";
// import lodash from "lodash";
// import { Grid, Slug, Fade } from "mauerwerk";
// import SubHeader from "./SubHeader";
// // import data from "../gradients";

// const Cell = ({ toggle, name, height, description, css, maximized }) => (
//   <div
//     className="cell"
//     style={{ backgroundImage: css, cursor: !maximized ? "pointer" : "auto" }}
//     onClick={!maximized ? toggle : undefined}
//   >
//     <Fade show={maximized} delay={maximized ? 400 : 0}>
//       <div className="details">
//         <Slug delay={600}>
//           <div className="circle" style={{ background: css }} />
//           <div className="close">
//             {/* <Icon type="close" style={{ cursor: "pointer" }} onClick={toggle} /> */}
//           </div>
//           <h1>{name}</h1>
//           <p>{description}</p>
//         </Slug>
//       </div>
//     </Fade>
//     <Fade
//       show={!maximized}
//       from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
//       enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
//       leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
//       delay={maximized ? 0 : 400}
//     >
//       <div className="default">{name}</div>
//     </Fade>
//   </div>
// );

// class ProductsGrid extends Component {
//   render() {
//     return (
//       <div className="main">
//         <Grid
//           className="grid"
//           // Arbitrary data, should contain keys, possibly heights, etc.
//           data={this.props.data}
//           // Key accessor, instructs grid on how to fet individual keys from the data set
//           keys={(d) => d._id}
//           // Can be a fixed value or an individual data accessor
//           heights={400}
//           // Number of columns
//           columns={5}
//           // Space between elements
//           margin={10}
//           // Removes the possibility to scroll away from a maximized element
//           lockScroll={false}
//           // Delay when active elements (blown up) are minimized again
//           closeDelay={400}
//         >
//           {(data, maximized, toggle) => (
//             <Cell {...data} maximized={maximized} toggle={toggle} />
//           )}
//         </Grid>
//       </div>
//     );
//   }
// }

export default ProductsGrid;
