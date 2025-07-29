import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      {/* About Us Title */}
      <div className="text-center text-2xl pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <section className="my-10 flex flex-col md:flex-row gap-16 px-4 md:px-16">
        <img
          className="w-full md:max-w-[480px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          src={assets.about_img}
          alt="About Us Image"
        />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600">
          <p className="transition-colors duration-300 hover:text-blue-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cumque quibusdam,
            laborum ut libero. Incidunt itaque voluptate laboriosam eligendi!
          </p>
          <p className="transition-colors duration-300 hover:text-purple-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim repellat distinctio
            eius exercitationem labore tempora nobis, nesciunt molestiae.
          </p>
          <h2 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-green-600">
            Our Mission
          </h2>
          <p className="transition-colors duration-300 hover:text-pink-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta nostrum sapiente
            modi non fugiat mollitia omnis natus.
          </p>
        </div>
      </section>

      {/* Why Choose Us Title */}
      <div className="text-4xl py-4 text-center">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Cards */}
      <section className="flex flex-col md:flex-row text-sm mb-20 px-4 md:px-16 gap-6">
        <article className="border px-10 py-8 sm:py-20 flex flex-col gap-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:border-blue-400">
          <h3 className="font-semibold text-base text-gray-800 hover:text-blue-600 transition-colors">
            Quality Assurance
          </h3>
          <p className="text-gray-600 hover:text-blue-700 transition-colors">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem debitis
            ipsam nostrum repellat, eos, quisquam nobis eaque rem quidem.
          </p>
        </article>

        <article className="border px-10 py-8 sm:py-20 flex flex-col gap-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-green-50 hover:border-green-400">
          <h3 className="font-semibold text-base text-gray-800 hover:text-green-600 transition-colors">
            Convenience
          </h3>
          <p className="text-gray-600 hover:text-green-700 transition-colors">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat,
            eos, quisquam nobis eaque rem quidem modi dolorum.
          </p>
        </article>

        <article className="border px-10 py-8 sm:py-20 flex flex-col gap-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-pink-50 hover:border-pink-400">
          <h3 className="font-semibold text-base text-gray-800 hover:text-pink-600 transition-colors">
            Exceptional Customer Service
          </h3>
          <p className="text-gray-600 hover:text-pink-700 transition-colors">
            Quisquam nobis eaque rem quidem modi dolorum rerum quibusdam at dolorem
            maiores illum aperiam repudiandae.
          </p>
        </article>
      </section>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
};

export default About;
