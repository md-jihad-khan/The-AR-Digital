import Card from "../components/card/Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import dentistImage from "../assets/dentist.jpg";
import trophy from "../assets/diana.png";
import { motion } from "framer-motion";
import bakery from "../assets/bakery.jpg";
import realestate from "../assets/realestate.jpg";
import fashion from "../assets/fashion.jpg";

const clientSuccessStories = [
  {
    heading: "Helping a Dentist Get More Organized",
    title:
      "Enhancing Efficiency for a Dental Clinic with a Custom Appointment System",
    story:
      "We developed a custom web app for a busy dental clinic, integrating online bookings and patient management. This solution reduced no-shows by 40% and boosted operational efficiency by 30%, allowing the clinic to focus more on patient care.",
    color: "#1A1A2E",
    src: dentistImage,
  },
  {
    heading: "Making a Bakery's Website Super Easy to Use",
    title: "Transforming a Local Bakery's Online Presence",
    story:
      "We built a responsive website for a local bakery with an easy-to-use online ordering system and SEO optimization. Within three months, they saw a 150% increase in orders, expanding their customer base beyond the local area.",
    color: "#1A1A2E",
    src: bakery,
  },
  {
    heading: "Helping a Real Estate Agency Get More Customers",
    title: "Real Estate Agency's Lead Surge",
    story:
      "We revamped a real estate agency's website, adding advanced property search and lead capture features. The agency saw a 200% increase in qualified leads within two months, turning their site into a lead generation powerhouse.",
    color: "#252542",
    src: realestate,
  },
  {
    heading: "Boosting Sales for a Fashion Brand",
    title: "E-Commerce Success for Fashion Brand",
    story:
      "For an emerging fashion brand, we developed a sleek e-commerce platform with seamless navigation and integrated payments. Post-launch, the brand saw a 50% rise in sales, positioning them for expansion into new markets.",
    color: "#2E2E52",
    src: fashion,
  },
];

const ClientStories = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="relative text-white mt-[10vh] pb-10">
      <h3 className="text-5xl text-center md:text-7xl font-bold relative">
        <span className="text-main mr-4">Client</span>Success Stories
      </h3>
      <div className="flex justify-center ">
        <motion.img
          src={trophy}
          className="w-20"
          alt="diana"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1.1, 1],
            opacity: 1,
            rotate: [0, 3, -3, 0], // Small back and forth tilting
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity, // Infinite looping for continuous movement
            repeatType: "reverse", // Reverses the animation for smoother looping
          }}
          whileHover={{ scale: 1.3, rotate: 15 }} // Hover interaction
          whileTap={{ scale: 0.9 }} // Tap interaction
        />
      </div>

      {clientSuccessStories?.map((project, i) => {
        const targetScale = 1 - (clientSuccessStories.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default ClientStories;
