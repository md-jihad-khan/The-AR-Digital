import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  src,
  story,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 text-white font-roboto"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col -top-1/4 h-[500px] w-[1000px] rounded-2xl overflow-hidden p-3 md:p-8 lg:p-12 transform-origin-top transition-transform "
      >
        {/* <h2 className="text-2xl text-main font-bold text-center">{title}</h2> */}
        <div className="flex flex-col items-center sm:flex-row gap-2 md:gap-8 mt-12 h-full  ">
          {/* Description Section */}

          <div className="sm:w-2/5   sm:top-10 ">
            <h2 className="lg:text-2xl md:text-xl text-lg text-main font-bold mb-3">
              {title}
            </h2>

            <p className="text-xs md:text-base lg:text-base leading-relaxed bg-white/10 backdrop-blur-md rounded-2xl p-2">
              {story}
              <span className="text-3xl font-title first-letter:font-extrabold first-letter:mr-1">
                {/* This is for the first letter styling */}
              </span>
            </p>
          </div>

          {/* Image Section */}
          <div className="relative h-1/2 sm:h-auto rounded-2xl sm:w-3/5   overflow-hidden">
            <motion.div className=" " style={{ scale: imageScale }}>
              <img
                src={src}
                alt="image"
                className="object-cover   md:w-full "
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
