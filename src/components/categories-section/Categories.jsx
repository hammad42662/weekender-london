import Button from "../ReusableComponents/Button";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
const categories = [
  {
    id: 11,
    names: "Men Bags",
    path: "/images/men-bag.jpg",
  },
  {
    id: 22,
    names: "Women Bags",
    path: "/images/women-bag.jpg",
  },
  {
    id: 33,
    names: "Accessories",
    path: "/images/accessory.jpg",
  },
];
const getCategoryLink = (categoryId) => {
  switch (categoryId) {
    case 11:
      return "/menbags";
    case 22:
      return "/womenbags";
    default:
      return "/accessories";
  }
};
function Categories() {
  return (
    <section className={styles.categoryCon}>
      <h1 className={styles.title}>Categories</h1>
      <ul className={styles.categoriesListContainer}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoriesList}>
            <img src={category.path} alt="categories image" />

            <p>{category.names}</p>
            <Link to={getCategoryLink(category.id)}>
              <Button margin="10px 0px 0px 0px" color="#412234  ">
                {category.id === 11
                  ? "Shop Men's Bags"
                  : category.id === 22
                  ? "Shop Women's Bags"
                  : "Shop Accessories"}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Categories;
