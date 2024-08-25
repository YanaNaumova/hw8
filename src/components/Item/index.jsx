import React from "react";
import PropTypes from "prop-types";

function Item({ title }) {
  return <li>{title}</li>;
}

Item.propTypes = {
  title: PropTypes.string,
};

export default Item;
