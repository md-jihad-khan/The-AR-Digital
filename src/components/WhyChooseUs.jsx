import {
  FaPalette,
  FaCogs,
  FaHeadset,
  FaDollarSign,
  FaLaptopCode,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="w-full font-roboto p-10 text-white">
      <h2 className="text-6xl font-bold text-center mb-8">
        <span className="text-main">Why Choose Us?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Years of Experience */}
        <div className="p-6 bg-white/10 backdrop-blur-md shadow-md rounded-md text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/15">
          <MdAccessTime className="w-16 h-16  mx-auto mb-4" />

          <h3 className="text-2xl text-main font-semibold mb-2">
            Years of Experience
          </h3>
          <p>
            With over 5+ years of experience in web development, we provide
            top-notch services to help businesses thrive online.
          </p>
        </div>

        {/* Card 2 - Custom Designs */}
        <div className="p-6 bg-white/10 backdrop-blur-md shadow-md rounded-md text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/15">
          <FaPalette className="w-16 h-16  mx-auto mb-4" />
          <h3 className="text-2xl text-main font-semibold mb-2">
            Custom Designs
          </h3>
          <p>
            We build fully customizable websites tailored to your business
            needs, ensuring unique designs and functionality.
          </p>
        </div>

        {/* Card 3 - 24/7 Support */}
        <div className="p-6 bg-white/10 backdrop-blur-md shadow-md rounded-md text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/15">
          <FaHeadset className="w-16 h-16  mx-auto mb-4" />
          <h3 className="text-2xl text-main font-semibold mb-2">
            24/7 Support
          </h3>
          <p>
            We provide round-the-clock support to ensure your website runs
            smoothly at all times, with quick response times.
          </p>
        </div>

        {/* Card 4 - Affordable Pricing */}
        <div className="p-6 bg-white/10 backdrop-blur-md shadow-md rounded-md text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/15">
          <FaDollarSign className="w-16 h-16  mx-auto mb-4" />
          <h3 className="text-2xl text-main font-semibold mb-2">
            Affordable Pricing
          </h3>
          <p>
            We offer competitive pricing without compromising quality, making
            our services accessible to businesses of all sizes.
          </p>
        </div>

        {/* Card 5 - Latest Technology */}
        <div className="p-6 bg-white/10 backdrop-blur-md shadow-md rounded-md text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/15">
          <FaLaptopCode className="w-16 h-16  mx-auto mb-4" />
          <h3 className="text-2xl text-main font-semibold mb-2">
            Latest Technology
          </h3>
          <p>
            We stay up-to-date with the latest trends and technologies to
            deliver cutting-edge websites that perform exceptionally well.
          </p>
        </div>

        {/* Card 6 - Custom Functionality */}
        <div className="p-6 bg-white/10 backdrop-blur-md shadow-md rounded-md text-center transform transition-transform duration-300 hover:scale-105 hover:bg-white/15">
          <FaCogs className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl text-main font-semibold mb-2">
            Custom Functionality
          </h3>
          <p>
            Need something specific for your business? We can develop custom
            features and functionality tailored to your exact requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
