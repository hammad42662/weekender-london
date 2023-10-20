import styles from "./MenProductListing.module.css";
const menBags = [
  {
    id: 1,
    name: "His Carry All",
    image1: "../public/images/menbags/his-carry-all.jpg",
    image2: "../public/images/menbags/his-carry-all-inside.jpg",
    image3: "../public/images/menbags/his-carry-all-close.jpg",
    image4: "../public/images/menbags/his-carry-all-front.jpg",
    price: "£50",
  },
  {
    id: 2,
    name: " Leather backpack",
    image1: "../public/images/menbags/backpack-back.jpg",
    image2: "../public/images/menbags/backpack-inside.jpg",
    image3: "../public/images/menbags/backpack-close.jpg",
    image4: "../public/images/menbags/backpack-front.jpg",
    price: "£40",
  },
  {
    id: 3,
    name: "Premium Weekend Bag",
    image1: "../public/images/menbags/premium-weekend-bag.jpg",
    image2: "../public/images/menbags/premium-weekend-bag-inside.jpg",
    image3: "../public/images/menbags/premium-weekend-bag-close.jpg",
    image4: "../public/images/menbags/premium-weekend-bag-front.jpg",
    price: "£60",
  },
];
function MenProductListing() {
  return (
    <>
      <Heading />
      <ul className={styles.cardContainer}>
        {menBags.map((bag) => (
          <li key={bag.id} className={styles.card}>
            <img src={bag.image1} alt="bag image" />
            <span className={styles.arrowLeft}>&#10095;</span>
            <span className={styles.arrowRight}>&#10094;</span>
            <p>{bag.price}</p>
            <h3>{bag.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
function Heading() {
  return (
    <div>
      <h1>Men's Bags</h1>
      <p>
        From the office to the gym to weekends away, look sleek on every
        occasion with a piece from our collection of men's bags. Choose from
        rucksacks in water-resistant materials with convenient laptop pockets
        and classic leather messenger bags in a timeless brown or black. Our
        bumbags give you maximum security for your essentials, whether
        jet-setting or heading to the shops
      </p>
    </div>
  );
}
export default MenProductListing;
