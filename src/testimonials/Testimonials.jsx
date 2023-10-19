import styles from "./testimonials.module.css";
const reviews = [
  { image: "../public/images/avatar/avatar1.jpg", name: "", review: "", id: 1 },
  { image: "../public/images/avatar/avatar1.jpg", name: "", review: "", id: 2 },
  { image: "../public/images/avatar/avatar1.jpg", name: "", review: "", id: 3 },
  { image: "../public/images/avatar/avatar1.jpg", name: "", review: "", id: 4 },
  { image: "../public/images/avatar/avatar1.jpg", name: "", review: "", id: 5 },
];

function Testimonials() {
  return (
    <section className={styles.testimonialsContainer}>
      {reviews.map((review) => (
        <article key={review.id} className={styles.testimonial}>
          <img src={review.image} alt="review image" />
          <h3>{review.name}</h3>
          <p></p>
        </article>
      ))}
    </section>
  );
}
export default Testimonials;
