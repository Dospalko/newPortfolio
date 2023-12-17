import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Card from './Card'; // Assuming Card is in a separate file

const StickyCard = ({ title, content }) => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div style={{ y: yRange }} className="sticky top-0">
      <Card title={title} content={content} />
    </motion.div>
  );
};

export default StickyCard;
