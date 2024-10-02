import { motion } from "framer-motion";
import question from "../assets/question.png";
import bulb from "../assets/bulb.png";
const Faq = () => {
  return (
    <section className="py-10 text-white font-roboto  md:w-11/12 mx-auto">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between">
        {/* content */}
        <div className="md:w-1/2 px-3 md:ml-10 space-y-4 lg:space-y-5 xl:space-y-10">
          <h4 className="text-3xl lg:text-4xl xl:text-5xl font-bold  mt-5 md:mt-0">
            Answers to Your Most Asked{" "}
            <span className="text-main">Questions</span>
          </h4>
          <div className="join join-vertical w-full  ">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What services does your agency provide?
              </div>
              <div className="collapse-content">
                <p>
                  We specialize in building fully customized websites for
                  businesses, from design to development. Our services include
                  website design, development, e-commerce integration, website
                  redesigns, SEO optimization, and ongoing support and
                  maintenance.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Will my website be mobile-friendly?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we prioritize responsive design, ensuring that your
                  website looks great and functions perfectly on all devices,
                  including smartphones, tablets, and desktops.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Will I get support after the website is launched?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer ongoing support and maintenance packages to
                  ensure your website remains up-to-date, secure, and performing
                  well. We’re here to help with any technical issues or updates
                  you may need.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How do I get started with your agency?{" "}
              </div>
              <div className="collapse-content">
                <p>
                  You can get started by contacting us via our website or
                  booking a consultation. We’ll discuss your business goals,
                  project requirements, and provide a detailed plan to move
                  forward.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="md:w-1/2  relative p-5">
          {/* Cloud with Question Mark */}
          <motion.img
            src={question}
            alt="Question"
            className=""
            initial={{ y: 0, rotate: 0, opacity: 1 }} // Make sure opacity starts at 1
            animate={{ y: [0, -20, 0], rotate: [0, -1, 2, 0], opacity: 1 }} // Ensure opacity is set to 1
            transition={{
              duration: 3, // Slower, smooth movement
              ease: "easeInOut", // Smooth easing
              repeat: Infinity, // Infinite loop
              repeatType: "mirror", // Reverses smoothly after each cycle
            }}
          />

          <motion.img
            src={bulb}
            alt="Light Bulb"
            className="absolute w-1/3 left-0 top-0"
            initial={{ y: 0, scale: 1 }} // Start in position with normal size
            animate={{
              y: [0, -10, 0], // Subtle float effect, moving up and down smoothly
              scale: [1, 1.05, 1], // Gentle pulsing effect (slightly enlarges and shrinks)
            }}
            transition={{
              duration: 2, // Slower, smoother animation
              ease: "easeInOut",
              repeat: Infinity, // Loop the animation infinitely
              repeatType: "loop", // Continuously loop
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
