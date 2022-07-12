import React from "react";
import "./Directory.scss";
import CategoryItem from "../components/category-item/CategoryItem";

const Directory = ({ categoriesMenu }) => {
  return (
    <div className="directories-container">
      {categoriesMenu.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
