import logo from "../assets/logo.png";
import rocket from "../assets/rocket.png";
import structure1 from "../assets/structure1.png";
import structure2 from "../assets/structure2.png";
import star from "../assets/star2.png";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <section className="font-roboto text-white  min-h-full">
      {/* <div className="flex items-center justify-center pt-5 pb-3 backdrop-blur-md shadow-md bg-white/10 "></div> */}

      <div className="pt-10 relative">
        {/* content */}
        <div className=" relative">
          <motion.img
            initial={{ y: -10 }} // Start above the original position
            animate={{ y: 10 }} // Animate down 100 pixels
            transition={{
              type: "tween", // Use "tween" for smooth transition
              ease: "easeInOut", // Easing function for smoothness
              duration: 2, // Duration of one animation cycle (up and down)
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Reverse back to the start after each cycle
            }}
            className="absolute w-1/2 top-0 -left-1/3 z-0"
            src={structure1}
            alt="Structure"
          />
          <div className="space-y-4 text-center px-2 md:px-10 z-10 relative">
            <div className="flex mb-10 text-3xl items-center justify-center">
              <img className="w-10 " src={logo} alt="" />
              <h1 className=" font-bold ">The AR Digital</h1>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold relative">
              We Developed <br />
              <span className="relative">
                <span className="relative inline-block">
                  <img
                    src={rocket}
                    className="w-10 absolute -left-12 top-1/2 transform -translate-y-1/2"
                    alt="rocket"
                  />
                  <span className="text-main mr-4">Amazing </span>
                </span>
                website
              </span>
              <br />
              For Your Business{" "}
              <span className=" inline-block">
                <motion.img
                  className="w-10 absolute top-1/2 transform -translate-y-1/2 z-10"
                  src={star}
                  alt="star"
                  animate={{ rotate: 360 }} // Rotate the image
                  transition={{
                    repeat: Infinity, // Loop infinitely
                    duration: 5, // Time it takes for one full rotation
                    ease: "linear", // Smooth continuous spin
                  }}
                />
              </span>
            </h3>

            <p>
              Developed websites with fully customizable designs and
              functionality, crafted by an expert team to meet your business
              needs.{" "}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <btn className=" font-semibold hover:scale-105 ease-in-out duration-300  border-main hover:text-black border-none rounded-none hover:bg-white bg-transparent  btn   text-white ">
                <FaCalendarAlt /> Book a Appointment
              </btn>

              <div className=" flex  gap-3 border-white p-3 rounded-md backdrop-blur-md bg-white/20">
                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>

                <div className="flex ">
                  <p className="text-3xl  text-white mr-2">
                    <CountUp end={99} duration={2} />+
                  </p>
                  <p className="text-sm mt-2 text-gray-200">
                    Worldwide Happy Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.img
          className="top-0 absolute w-1/12 right-0"
          src={structure2}
          alt="spring"
          animate={{ y: [0, -30, 0] }} // Moves the image up and down
          transition={{
            duration: 20, // Controls how fast the animation runs
            ease: "easeInOut", // Smooth easing
            repeat: Infinity, // Loops infinitely
            repeatType: "loop", // Continuous loop
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
