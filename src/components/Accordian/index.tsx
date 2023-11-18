import { motion, AnimatePresence } from "framer-motion";
import { FC, ReactNode } from "react";

export interface AccordionProps {
  i: number;
  expanded: number | false;
  setExpanded: (i: number | false) => void;
  children: ReactNode;
  title: string;
}

const Accordion: FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  children,
  title,
}) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          color: isOpen ? "#FF9248" : "#626262",
          fontWeight: isOpen ? 700 : 600,
        }}
        className="flex justify-between px-5 hover:text-[#FF9248] rounded w-full items-center hover:bg-gray-100 cursor-pointer border-b border-gray-200 py-5"
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transform transition-transform duration-200"
          >
            <path
              fill="currentColor"
              d="M12 15.5L7 10.5L8.41 9.09L12 12.67L15.59 9.09L17 10.5L12 15.5Z"
            />
          </svg>
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            className="w-full"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
