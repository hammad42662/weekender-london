import styles from "./testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const reviewer = [
  {
    image: "../public/images/avatar/avatar1.jpg",
    name: "Alice Johnson",
    review:
      "I was impressed with the wide selection of bags available on this website. I was able to find the perfect bag for my needs and the price was very reasonable. The shipping was also fast and free.",
    id: 1,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: "../public/images/avatar/avatar2.jpg",
    name: "Olivia Smith",
    review:
      "I've ordered several bags from this website and I've always been happy with the quality of the products and the service. The website is easy to use and the shipping is always fast and free. I highly recommend this website to anyone looking for a new bag.",
    id: 2,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: "../public/images/avatar/avatar3.jpg",
    name: "Isabella Williams",
    review:
      "I was skeptical about ordering a bag online, but I was very impressed with this website. The ordering process was easy and the bag arrived quickly and well-packaged. The bag is of excellent quality and I'm very happy with my purchase.",
    id: 3,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: "../public/images/avatar/avatar4.jpg",
    name: "Noah Brown",
    review:
      "I recently ordered a new bag from this website and I'm very happy with it. The bag is well-made and the price was very reasonable. The shipping was also fast and free. I would definitely recommend this website to others.",
    id: 4,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: "../public/images/avatar/avatar5.jpg",
    name: "Liam Jones",
    review:
      "I'm a big fan of this online bag store. They have a great selection of bags and the prices are very reasonable. The shipping is also fast and free. I've ordered several bags from this website and I've been very happy with all of them. I highly recommend this website to anyone looking for a new bag.",
    id: 5,
    rating: "⭐⭐⭐⭐⭐",
  },
];

// function Testimonials() {
//   return (
//     <>
//       <section className={styles.testimonialsContainer}>
//         {reviewer.map((review) => (
//           <article key={review.id} className={styles.testimonial}>
//             <img src={review.image} alt="review image" />
//             <span>{review.rating}</span>
//             <h3>{review.name}</h3>
//             <p>"{review.review}"</p>
//           </article>
//         ))}
//         <button className={styles.leftBtn}>&larr;</button>
//         <button className={styles.rightBtn}>&rarr;</button>
//       </section>
//       <Dots />
//     </>
//   );
// }
// function Dots() {
//   return (
//     <div className={styles.dotDiv}>
//       <span className={styles.dot}></span>
//       <span className={styles.dot}></span>
//       <span className={styles.dot}></span>
//       <span className={styles.dot}></span>
//       <span className={styles.dot}></span>
//     </div>
//   );
// }
function Testimonials() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviewer.map((review) => (
          <SwiperSlide key={review.id}>
            <li className={styles.testimonial}>
              <img src={review.image} />
              <span>{review.rating}</span>
              <p>{review.review}</p>
              <h2>{review.name}</h2>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Testimonials;
