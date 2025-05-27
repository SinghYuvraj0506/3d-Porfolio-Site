import React from "react";
import { SectionWrapper } from "../hoc";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, linkIcon } from "../assets";
import { projects } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 sm:w-[360px] w-full rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image ?? "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover gap-2">
            {source_code_link && (
              <div
                className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => {
                  window.open(source_code_link);
                }}
              >
                <img src={github} alt={github} className="w-1/2 h-1/2" />
              </div>
            )}
            {demo_url && (
              <div
                className="bg-slate-300 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => {
                  window.open(demo_url);
                }}
              >
                <img src={linkIcon} alt={linkIcon} className="w-1/2 h-1/2" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((e, i) => {
            return (
              <p className={`text-[14px] ${e.color}`} key={e?.name}>
                {" "}
                #{e.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          In this section of my portfolio, I am excited to
          present a diverse range of projects that demonstrate my versatility,
          adaptability, and proficiency in various domains. These projects
          represent my eagerness to explore new areas and expand my skill set.
          Each project within this section showcases my ability to understand
          complex problems, devise effective strategies, and deliver tangible
          outcomes.
        </motion.p>
      </div>

      {/* Projects showcasing */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => {
          return <ProjectCard key={project.name} {...project} index={i} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
