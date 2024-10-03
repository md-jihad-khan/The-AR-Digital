import Marquee from "react-fast-marquee";
import ring from "../assets/ring.png";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="text-center py-5  overflow-x-hidden  font-roboto">
      <h2 className="font-bold relative text-6xl text-main">
        <span className="text-main">Reviews </span>
        <span className=" inline-block">
          <motion.img
            className="w-16 absolute top-0 transform -translate-y-1/2 z-10"
            src={ring}
            alt="oval"
            initial={{ y: 0, rotate: 0, opacity: 1 }} // Starts at normal position
            animate={{
              y: [0, -10, 0], // Subtle vertical movement (up and down by 10px)
              rotate: [0, -15, 15, 0], // Gentle rotation back and forth
              scale: [1, 1.1, 1], // Slight scaling to give a pulsating effect
              opacity: 1, // Opacity stays constant
            }}
            transition={{
              duration: 5, // Longer duration for a smoother, slower effect
              ease: "easeInOut", // Smooth easing effect
              repeat: Infinity, // Infinite loop
              repeatType: "mirror", // Reverses after each cycle for smooth looping
            }}
          />
        </span>
      </h2>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)] relative z-10  mx-auto my-10">
        <Marquee>
          <div className="flex z-10 relative justify-between items-stretch text-center gap-10 mr-10">
            <div className="backdrop-blur-md bg-white/20 text-white shadow-md rounded-lg transition container flex flex-col w-full max-w-lg p-6 mx-auto divide-y divide-gray-300">
              <div className="flex justify-center pb-4 items-center space-x-4">
                <div>
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p>
                  Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                  dictum lectus consequat vitae. Etiam ut dolor id justo
                  fringilla finibus.
                </p>
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/20 text-white shadow-md rounded-lg transition container flex flex-col w-full max-w-lg p-6 mx-auto divide-y divide-gray-300">
              <div className="flex justify-center pb-4 items-center space-x-4">
                <div>
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p>
                  Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                  dictum lectus consequat vitae. Etiam ut dolor id justo
                  fringilla finibus.
                </p>
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/20 text-white shadow-md rounded-lg transition container flex flex-col w-full max-w-lg p-6 mx-auto divide-y divide-gray-300">
              <div className="flex justify-center pb-4 items-center space-x-4">
                <div>
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p>
                  Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                  dictum lectus consequat vitae. Etiam ut dolor id justo
                  fringilla finibus.
                </p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Reviews;
