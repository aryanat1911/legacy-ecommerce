import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Shoe1 from "../../assets/shooe-1.jpeg";
import Jacket from "../../assets/jacket.jpeg";
import Tech from "../../assets/Apple-iPhone13-Pro.jpg";
import "./Category.css";

const Category = () => {
  return (
    <>
      <Typography
        variant="h2"
        style={{ textAlign: "center", padding: "50px 0" }}
        gutterBottom
      >
        Shop by Categories
      </Typography>
      <Grid container justifyContent="center" spacing={0}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Link to="/category?type=shoes">
            <div className="category-overlay">
              <p className="category-text">Shoes</p>
              <img className="category-img" src={Shoe1} />
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Link to="/category?type=jackets">
            <div className="category-overlay">
              <p className="category-text">Jackets</p>
              <img className="category-img" src={Jacket} />
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Link to="/category?type=tech">
            <div className="category-overlay">
              <p className="category-text">Tech</p>
              <img className="category-img" src={Tech} />
            </div>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Category;
