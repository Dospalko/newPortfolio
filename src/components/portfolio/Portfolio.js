import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "PRFs SCORING AI SYSTEM",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The project involves creating a Sales CoPilot, a system using AI for lead scoring in sales. This system will utilize large language models (LLMs) to evaluate Requests for Proposal (RFPs), matching them with a company's portfolio and scoring their potential for success. It also includes a customization dashboard allowing users to tailor scoring criteria and integrate with various systems.",
  },
  {
    id: 2,
    title: "Dynamic Loan Payment using AI",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "AI Summarizer of articles",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Annotation web tool for AI training",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item, alignLeft }) => {
  const ref = useRef();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      setOffsetY(rect.top - window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageComponent = (
    <motion.div 
      className="imageContainer flex-1 h-[50%]"
      style={{ y: offsetY * 0.2 }}
    >
      <img className="w-full h-full object-cover" src={item.img} alt="" />
    </motion.div>
  );

  const textComponent = (
    <motion.div 
      className="textContainer flex-1 flex flex-col gap-[30px]"
      style={{ y: offsetY * -0.1 }}
    >
      <h2 className="text-[72px]">{item.title}</h2>
      <p className="text-gray-500 text-[20px]">{item.desc}</p>
      <button className="bg-orange-500 border-none rounded-[10px] p-[10px] w-[200px] pointer">See Demo</button>
    </motion.div>
  );

  return (
    <section ref={ref} className="container m-auto flex justify-center items-center w-full h-full overflow-hidden">
      <div className="wrapper max-w-[1366px] h-full m-auto flex items-center justify-center gap-[50px]">
        {alignLeft ? (
          <>
            {imageComponent}
            {textComponent}
          </>
        ) : (
          <>
            {textComponent}
            {imageComponent}
          </>
        )}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const portfolioRef = useRef();
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (portfolioRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = portfolioRef.current;
      const maxScroll = scrollHeight - clientHeight;
      const currentProgress = scrollTop / maxScroll;
      setProgress(currentProgress);
    }
  };

  useEffect(() => {
    const portfolioElement = portfolioRef.current;
    portfolioElement.addEventListener('scroll', handleScroll);
    return () => portfolioElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio relative  h-screen" ref={portfolioRef}>
      <div className="progress sticky top-0 left-0 pt-[50px] text-center text-orange-600 text-[36px]">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: progress }} className="progressBar h-[10px] bg-white"></motion.div>
      </div>
      {items.map((item, index) => (
        <Single item={item} key={item.id} alignLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Portfolio;