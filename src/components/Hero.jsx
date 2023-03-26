import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} m-2 text-white-100`}>Hi, <span className="text-[#915eff]"> I'm Ola</span> 
          </h1>
          <p className={`${styles.heroSubText} m-2 text-white-100`}> I have extensive experience in marketing, graphic design,<br className="sm:block hidden"/>  art direction, motion design, and customer experience.
          </p>
          <p className={`${styles.heroSubText} m-2 text-white-100`}>Currently, I am expanding my skill set to include <br className="sm:block hidden"/>  Front-End Development.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      </section>
  )
}

export default Hero