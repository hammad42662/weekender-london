import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { IoMdStar } from "react-icons/io";
const reviewer = [
  {
    image: "../public/images/avatar/avatar1.jpg",
    name: "Alice Johnson",
    review:
      "I was impressed with the wide selection of bags available on this website. I was able to find the perfect bag for my needs and the price was very reasonable. The shipping was also fast and free.",
    id: 1,
    rating: 5,
  },
  {
    image: "../public/images/avatar/avatar2.jpg",
    name: "Olivia Smith",
    review:
      "I've ordered several bags from this website and I've always been happy with the quality of the products and the service. The website is easy to use and the shipping is always fast and free. I highly recommend this website to anyone looking for a new bag.",
    id: 2,
    rating: 5,
  },
  {
    image: "../public/images/avatar/avatar3.jpg",
    name: "Isabella Williams",
    review:
      "I was skeptical about ordering a bag online, but I was very impressed with this website. The ordering process was easy and the bag arrived quickly and well-packaged. The bag is of excellent quality and I'm very happy with my purchase.",
    id: 3,
    rating: 5,
  },
  {
    image: "../public/images/avatar/avatar4.jpg",
    name: "Noah Brown",
    review:
      "I recently ordered a new bag from this website and I'm very happy with it. The bag is well-made and the price was very reasonable. The shipping was also fast and free. I would definitely recommend this website to others.",
    id: 4,
    rating: 5,
  },
  {
    image: "../public/images/avatar/avatar5.jpg",
    name: "Liam Jones",
    review:
      "I'm a big fan of this online bag store. They have a great selection of bags and the prices are very reasonable. The shipping is also fast and free. I've ordered several bags from this website and I've been very happy with all of them. I highly recommend this website to anyone looking for a new bag.",
    id: 5,
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className={styles.slider}>
      <h1>Testimonials</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 50,
          stretch: 5,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        keyboard={{
          enabled: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
      >
        {reviewer.map((review) => (
          <SwiperSlide key={review.id} className={styles.swiperSlide}>
            <img src={review.image} />
            <span>
              {Array.from({ length: review.rating }, (_, index) => (
                <IoMdStar color="#e4572e" size="1.3rem" key={index} />
              ))}
            </span>
            <p>{review.review}</p>

            <BiSolidQuoteLeft color="#F5F5F5" size="1.3rem" />
            <h2>{review.name}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
