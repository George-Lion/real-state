import { MotionConfig } from "framer-motion";
import { Header } from "../../components/Header";
import { AllServices } from "../../components/serviceComponet/AllServices";
import { Information } from "../../components/serviceComponet/Information";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Information />
      <AllServices />
    </motion.div>
  );
};
