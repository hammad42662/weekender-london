import Button from "../Reusable Components/Button";
import styles from "./Categories.module.css";
const categories = [
  {
    id: 11,
    names: "Men Bags",
    path: "../public/images/men-bag.jpg",
  },
  {
    id: 22,
    names: "Women Bags",
    path: "../public/images/women-bag.jpg",
  },
  {
    id: 33,
    names: "Accessories",
    path: "../public/images/accessory.jpg",
  },
];
function Categories() {
  return (
    <main>
      <h1>Categories</h1>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li key={category.id}>
            <img src={category.path} alt="categories image" />
            <p>{category.names}</p>
            <Button>
              {category.id === 11
                ? "Shop Men"
                : category.id === 22
                ? "Shop Women"
                : "Shop Accessories"}
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Categories;
