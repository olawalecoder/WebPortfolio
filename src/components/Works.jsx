import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5*index, 0.75)}
      >
        <Tilt
          options={{
            max:45,
            scale:1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] p-5 sm:w-[360px] w-full"
        >
        <div className="relative w-full h-[230px]">
            <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 black-gradient rounded-full cursor-pointer flex justify-center items-center"
               >
                <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
                /> 
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
             <p  key={tag.name}
             className={`text-[12px] ${tag.color}`}>
              #{tag.name}
             </p> 
            ))}
          </div>
        </Tilt>
    </motion.div>
)
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Past Projects
        </h2>
    </motion.div>
    
    <div className="w-full flex">    
      <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      variants={fadeIn("", "", 0.1, 1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi alias aut debitis quis placeat, repellendus excepturi voluptatem incidunt hic rem labore provident perferendis reprehenderit, nemo mollitia qui. Inventore, at? Lorem ipsum dolor sit amet consectetur.
      </motion.p> 
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard 
        key={`project-${index}`}
        index={index}
        {...project}
        />
      ))}
    </div>
    </>
    )
}

export default SectionWrapper(Works, "")

