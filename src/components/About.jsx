import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] shadow-card rounded-[20px]"
      >
        <div options={{ max: 45, scale: 1 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who am i</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey there! I’m a full-stack developer who loves turning complex problems into intuitive, user-centric digital solutions. My work blends clean design with logical, scalable code—powered by a modern stack focused on React, Node.js, TypeScript, and cloud-native practices.

I specialize in building robust apps with the MERN stack, and often go beyond just frontend and backend—dabbling in DevOps, CI/CD pipelines, containerization, and cloud deployments. From real-time systems to SaaS tools, I enjoy building products that are both practical and delightful to use.

When I’m not writing code or shipping features, I’m either leveling up my skills, watching a gripping web series, or playing cricket with friends.

Let’s build the future—one clean commit at a time.
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-10">
        {services?.map((elem, index) => {
          return <ServiceCard key={elem?.title} index={index} {...elem} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
