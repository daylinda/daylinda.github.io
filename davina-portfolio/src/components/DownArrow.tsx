import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

type DownArrowProps = {
  onClick?: () => void;
};

export default function DownArrow({ onClick }: DownArrowProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "90%", // centered instead of 90%
        transform: "translateX(-50%)",
        color: "cyan",
        cursor: "pointer", // use pointer instead of grab
        zIndex: 2,
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      onClick={onClick}
    >
      <FaChevronDown size={32} />
    </motion.div>
  );
}
