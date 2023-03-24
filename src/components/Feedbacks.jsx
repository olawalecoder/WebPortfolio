import { motion } from 'framer-motion';

import { styles } from '../styles';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const FeedbackCard = ({ index, testimonial, name, designation, company, image, }) => (
  <motion.div 
  variants={fadeIn("", "spring", 0.5*index, 0.75)} className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">
      "
    </p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
    </div>

    <div className='flex justify-between items-center gap-1 mt-7'>
      <div className="flex flex-col flex-1">
        <p className="text-[16px] text-medium">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-[12px] text-secondary">{designation} <span>of</span> {company}</p>
      </div>
      <img 
      src={image} 
      alt={`feedback-by-${name}`} 
      className="w-10 h-10 rounded-full object-contain"
      />
    </div>
  </motion.div>
)


const Feedbacks= () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
     <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          What others say
        </p>
        <h2 className={styles.sectionHeadText}>
          Testimonials
        </h2>
      </motion.div>
     </div>
     <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard 
        key={testimonial.name}
        index={index}
        {...testimonial}
        />
      ))}
      </div>     
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")