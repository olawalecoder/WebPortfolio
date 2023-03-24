import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ( {  index, title, company_name, icon, iconBg, date, points } ) =>  (
    <VerticalTimelineElement 
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{ borderRight: '7px solid #232631'}}
      date={date}
      iconStyle={{background: `${iconBg}`}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
     <div>
      <h3 className="text-white text-[24px] font-bold">
        {title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>
        {company_name}
      </p>
      <ul className="mt-5  ml-5 list-disc space-y-2 ">
      {points.map((point) => (
        <li 
        className="text-secondary text-[14px] pl-1 tracking-wider">
          {point}
        </li>
          ))}
      </ul>
     </div>
    </VerticalTimelineElement>
  )

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          What I have done so far?
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => 
        (
          <ExperienceCard key={experience.index} index={index} {...experience}  />
        )
        )}
      </VerticalTimeline>
    </div>

    </>
  )
}

export default SectionWrapper(Experience, "work")