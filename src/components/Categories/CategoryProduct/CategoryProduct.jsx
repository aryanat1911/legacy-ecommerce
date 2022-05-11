import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { commerce } from "../../../lib/commerce";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./style";
import ClipLoader from "react-spinners/ClipLoader";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const override = `css
  display: block;
  margin: 0 auto;
  border-color: black;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
`;

const CategoryProduct = ({ onAddToCart }) => {
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const [categories, setCategories] = useState([]);

  let query = useQuery();

  const fetchCategories = () => {
    commerce.products
      .list({ category_slug: [query.get("type")] })
      .then((response) => {
        const data = response.data;
        setCategories(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, [loading]);

  return (
    <>
      <ClipLoader loading={loading} size={50} css={override} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
          {categories.map((category) => (
            <Grid key={category.id} item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.root}>
                <CardMedia
                  style={{ backgroundSize: "contain" }}
                  className={classes.media}
                  image={category ? category.image.url : ""}
                  title={category ? category.name : ""}
                />
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                      {category ? category.name : ""}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {category ? category.price.formatted_with_symbol : ""}
                    </Typography>
                  </div>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: category ? category.description : "",
                    }}
                    variant="body2"
                    color="textSecondary"
                  />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton
                    aria-label="Add to Cart"
                    onClick={() => {
                      onAddToCart(category.id, 1);
                    }}
                  >
                    <AddShoppingCart />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default CategoryProduct;
