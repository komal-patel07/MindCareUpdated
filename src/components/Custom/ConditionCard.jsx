import { motion } from "framer-motion";
import Button from "@/UI/Button"
import { Link } from "react-router-dom";
import Condition from "@/../Pages/ConditionPage";

const ConditionCard = ({ image, title, description, variants }) => (
  <motion.div className="w-105" variants={variants}>
    <motion.img
      src={image}
      className="w-full rounded-lg"
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl  py-3">{title}</h1>
      <p className="py-3 h-20 w-70 text-center">{description}</p>
      <Link to={`/Services?ID=${image}`}></Link>
     <Button  text="View Condition" ></Button> 
    </div>
  </motion.div>
);

export default ConditionCard;