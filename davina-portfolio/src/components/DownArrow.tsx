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
        left: "90%",
        transform: "translateX(-50%)",
        color: "cyan",
        cursor: "grab",
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      onClick={onClick}
    >
      <FaChevronDown size={32} />
    </motion.div>
  );
}
