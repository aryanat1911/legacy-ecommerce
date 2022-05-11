import React from "react";
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@material-ui/core";

import useStyles from "./style";

const CartItem = ({ item, onUpdateCartQty, onRemoveCartQty }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        style={{ backgroundSize: "contain" }}
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveCartQty(item.id, item.quantity - 1)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
