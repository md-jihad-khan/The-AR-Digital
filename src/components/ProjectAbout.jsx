import laptop from "../assets/laptop.png";
import phone from "../assets/phone.png";
import ball from "../assets/ball.png";
import star from "../assets/star.png";
import { motion } from "framer-motion";

const ProjectAbout = () => {
  return (
    <div className="flex font-roboto overflow-hidden  flex-col mt-10 md:flex-row items-center gap-5 relative">
      <div className="md:w-1/2 flex relative items-center justify-center md:justify-between group">
        <div className=" w-3/4 relative z-20">
          <img className="" src={laptop} alt="" />
          <motion.img
            className="absolute top-0"
            src={phone}
            alt="Phone"
            initial={{ y: 0, rotate: 0, opacity: 1 }} // Make sure opacity starts at 1
            animate={{ y: [0, -20, 0], rotate: [0, -2, 2, 0], opacity: 1 }} // Ensure opacity is set to 1
            transition={{
              duration: 3, // Slower, smooth movement
              ease: "easeInOut", // Smooth easing
              repeat: Infinity, // Infinite loop
              repeatType: "mirror", // Reverses smoothly after each cycle
            }}
          />
          <motion.img
            animate={{ rotate: 360 }} // Rotate the image
            transition={{
              repeat: Infinity, // Loop infinitely
              duration: 25, // Time it takes for one full rotation
              ease: "linear", // Smooth continuous spin
            }}
            className="absolute w-1/3 sm:w-1/5 md:w-1/4 lg:w-1/5  left top-0 z-0"
            src={star}
            alt=""
          />
        </div>
        <div className="w-[70%] -z-0   right-0 border-2 absolute gradient-border hidden md:flex "></div>
        <span className="p-2 border-4 bg-white  z-10 hidden border-fuchsia-500 md:flex rounded-full"></span>
      </div>
      {/* info */}
      <div className="md:w-1/2 p-4 relative space-y-3">
        <h3 className="text-white z-10 relative text-5xl  mb-3 md:text-5xl font-bold">
          Your <span className="text-main">Vision </span> <br /> Brought to Life
        </h3>
        <p className="text-sm relative text-gray-300 mb-2 z-10">
          At The AR Digital, we turn your ideas into beautifully crafted, fully
          responsive websites that stand out on any device. Whether viewed on a
          desktop, tablet, or mobile screen, our custom-tailored designs ensure
          your brand shines through in every detail.
        </p>
        <div>
          <div className="space-y-2 text-sm text-gray-400">
            <h4 className="text-base font-semibold text-white">
              Explore Our Expertise:
            </h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <p>
                  Seamless User Experience: Designed to engage, captivate, and
                  convert.
                </p>
              </li>
              <li>
                <p>
                  Modern & Clean Design: Aesthetics that align with your brand's
                  identity.
                </p>
              </li>
              <li>
                <p>
                  Fully Customizable Features: Functionality built to meet your
                  unique needs.
                </p>
              </li>

              <li>
                <p>
                  Optimized for All Devices: Pixel-perfect designs for every
                  screen size.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <motion.img
          animate={{ rotate: 360 }} // Rotate the image
          transition={{
            repeat: Infinity, // Loop infinitely
            duration: 20, // Time it takes for one full rotation
            ease: "linear", // Smooth continuous spin
          }}
          className="absolute w-1/3 sm:w-1/5 md:w-1/4 lg:w-1/5  -right-10 top-0 z-0"
          src={ball}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectAbout;
