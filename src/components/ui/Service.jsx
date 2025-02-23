import { motion } from "framer-motion";
import Button from "./Btn";
import Services from "@/Pages/Services";
import { Link } from "react-router-dom";
export default function Service({ logo, title,link, description }) {
  return (
    <div className="flex my-10  w-120 justify-center items-center">
        <div className="border-dashed w-40 h-40 border-2 items-center text-center flex justify-center rounded-full border-zinc-400">
        <div className="bg-emerald-900 rounded-full w-20 h-20  text-white text-center flex justify-center items-center">
            {logo}
             </div>
      </div>
      <div className="px-5">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-zinc-400 w-72 py-4">{description}</p>
      <Link className="py-2 hover:underline"to={`/Services?ID=${link}`}  >View Service</Link>
      </div>
    </div>
  );
}

const ServiceCard = ({ logo, title, description, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex flex-col items-center text-center w-60"
  >
    <span className="p-2 rounded-full bg-gray-200">{logo}</span>
    <h2 className="text-xl py-2">{title}</h2>
    <p className="py-2 h-24 text-center">{description}</p>
    <Button text="View Condition" />
  </motion.div>
);

export { ServiceCard};