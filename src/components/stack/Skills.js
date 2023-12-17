import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skillVariants = {
  initial: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

const Skills = () => {
  const skillsData = [
    { name: "React", icon: "/icons/react.png" },
    { name: "AI", icon: "/icons/ai.png" },
    { name: "API", icon: "/icons/api.png" },
    { name: "C lang", icon: "/icons/c.png" },
    { name: "OPENAI API", icon: "/icons/chatgpt.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "Flask", icon: "/icons/flask.png" },
    { name: "Java", icon: "/icons/java.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "Postgres Database", icon: "/icons/postgres.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
    // Add more skills here with their respective icons
  ];

  const ref = useRef();
  const controls = useAnimation();
  const inView = useInView(ref);

  // Separate skills into columns
  const initialColumns = Array.from({ length: 4 }, (_, i) => 
    skillsData.filter((_, index) => index % 4 === i)
  );

  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      const intervalId = setInterval(() => {
        setColumns(currentColumns => {
          return currentColumns.map(column => {
            let newColumn = [...column];
            let idx1 = Math.floor(Math.random() * newColumn.length);
            let idx2 = Math.floor(Math.random() * newColumn.length);
            [newColumn[idx1], newColumn[idx2]] = [newColumn[idx2], newColumn[idx1]]; // Swap positions within the column
            return newColumn;
          });
        });
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      controls.start("initial");
    }
  }, [inView, controls]);

  const isOdd = (num) => num % 2 !== 0;

  const renderColumn = (columnSkills, heightClass) => (
    <div className={`flex flex-col ${heightClass} gap-4`}>
      {columnSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${
            isOdd(index) ? 'bg-white text-black' : 'bg-orange-500 text-black'
          }`}
          variants={skillVariants}
          initial="initial"
          animate={controls}
        >
          <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-2" />
          <span className="text-sm font-bold">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="h-screen bg-[linear-gradient(180deg, #0c0c1d, #111132)] flex justify-center items-center">
      <div ref={ref} className="grid grid-cols-4 gap-12">
        {columns.map((column, i) => renderColumn(column, i % 2 === 0 ? "h-96 mt-20" : "h-80"))}
      </div>
    </div>
  );
};

export default Skills;