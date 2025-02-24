import Button from "@/components/Custom/Btn";
import PieChartComponent, {
  StackedPieChart,
  PieChartNoSeparator,
} from "@/components/Custom/DonatChart";
import Profile from "@/components/Custom/Profile";
import { motion } from "framer-motion";
export default function PatientDashboard() {
  return (
    <div className="flex  justify-center gap-2">
      <div className="flex gap-x-64 ">
        {/* <div className="flex flex-col items-center px-5 text-xl sm:text-2xl md:text-3xl  h-16 font-[Snowburst_One]">
          <p>
            <span className="text-2xl sm:text-3xl md:text-5xl">M</span>ind Care.
          </p>
          <h2 className="mb-6">
            <motion.div
              className="w-full md:w-2/3"
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                onClick={() => navigate(-1)}
                className="bg-emerald-800 w-40 text-white text-sm font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                &larr;Back
              </button>
            </motion.div>
          </h2>
        </div> */}
        <div className="">
          <Profile />
        </div>
        <div className=" flex gap-5">

          <div>
            <PieChartComponent />
          </div>
          <div>
            <StackedPieChart />
          </div>
          <div>
            <PieChartNoSeparator />
          </div>
        </div>
        
      </div>
    </div>
  );
}
