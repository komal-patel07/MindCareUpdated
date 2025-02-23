import BoyImg from "@/assets/Layer.svg";
import Depression from "@/assets/Triggers-And-Mental-Illness.jpg";
import PersonalityDesorder from "@/assets/person-suffering-from-ptsd.jpg";
import Anxiety from "@/assets/young-man-hoodie-leaning-face-hand-looking-tired-front-view.jpg";
import Button from "@/components/ui/Btn";
import yoo_one from "@/assets/yoo-one.jpg";
import beard_one from "@/assets/beard-one.jpg";
import hat_one from "@/assets/hat-one.jpg";
import { Phone, Users, Pill, User, Brain, Leaf } from "lucide-react";
import { FaChild } from "react-icons/fa";
import LadyImage from "@/assets/image-Photoroom.png";
import Service from "@/components/ui/Service";
import Two_home from "@/assets/doctor-examining-chest-patient.jpg";
import "@/App.css"; // Import your CSS file
import FeedbackCart from "@/components/ui/FeedbackCart";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  buttonVariants,
} from "@/components/Animation/HomePageAnimation";
import { Link } from "react-router-dom";

// Data for the bar chart
const data = [
  { category: "Time", Week1: 2, Goal: 6 },
  { category: "Food", Week1: 3, Goal: 7 },
  { category: "Walk", Week1: 4, Goal: 6 },
  { category: "Family", Week1: 5, Goal: 6 },
  { category: "Gym", Week1: 2, Goal: 4 },
  { category: "Sleep", Week1: 4, Goal: 5 },
];

export default function HomePage() {
  return (
<div className=" flex items-center   justify-center flex-col">
{/* First Section */}
<div >
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-row gap-10  justify-between bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200"
  >
    <div className="text-left my-30 px-20 py-20 w-1/2">
      <div>
        <p className="border border-zinc-200 shadow-2xs w-max text-center rounded-2xl px-4 py-1">
          😢 Depressed?
        </p>
      </div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-6xl w-200 py-8"
      >
        There's No One Face to Mental Health Conditions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="py-7 text-gray-500 text-base"
      >
        At Mental care, there's no one-size-fits-all approach to mental health.
        <br />
        We tailor our care plan to fit each person's unique needs.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex flex-row gap-1 py-5"
      >
        <div className="mb-3">
          <motion.div
            className="w-55"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button text="Find a Provider" />
          </motion.div>
        </div>
        <div className="ml-10 flex items-center">
          <Phone className="mr-2" />
          <span className="text-lg">(704) 555-0127</span>
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <img
        src={BoyImg}
        width={500}
        className="max-w-lg py-7"
        alt="Mental Health Illustration"
      />
    </motion.div>
  </motion.div>

  {/* Conditions Section */}
  <div className="px-5 max-w-full m-10 bg-white py-0">
    <div className="flex flex-row justify-between items-center text-left">
      <h1 className="text-5xl w-2/3">
        We help people living with a variety of mental health conditions
      </h1>
      <p className="border border-zinc-200 h-10 text-center py-2 text-zinc-500 rounded w-max px-4 mt-3">
        All Conditions
      </p>
    </div>
  </div>
</div>

  {/* Second Section: Conditions Cards */}
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="container mx-auto py-12"
  >
    <div className="flex flex-col md:flex-row justify-around py-20 gap-10">
      {[
        {
          image: PersonalityDesorder,
          title: "Personality Disorders",
          description:
            "Personality disorders are a group of mental illnesses.",
        },
        {
          image: Depression,
          title: "Depression",
          description:
            "Depression is a common and serious medical illness that negatively.",
        },
        {
          image: Anxiety,
          title: "Anxiety",
          description:
            "Anxiety is the feeling of fear, dread, and uneasiness.",
        },
      ].map((condition, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3"
          variants={itemVariants}
        >
          <motion.img
            src={condition.image}
            className="w-full rounded-lg"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl py-3">{condition.title}</h1>
            <p className="py-3 h-20 w-70 text-center">
              {condition.description}
            </p>
            <motion.div
              className="w-55"
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to={`/Services?ID=${condition.title}`}>
                <Button text="View Condition" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* Third Section: Services */}
  <motion.div className="flex justify-center py-20" variants={itemVariants}>
    <h1 className="text-2xl md:text-5xl w-100 text-center">
      Our extensive network of licensed clinicians offers a wide variety of
      services.
    </h1>
  </motion.div>
  <motion.div
    className="flex flex-col items-center"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
      {[
        {
          logo: <User className="size-11" />,
          title: "Individual Therapy",
          link: "IndividualTherapy",
          description:
            "Individual therapy is a personalized form of psychotherapy where a trained professional helps individuals address and work through their mental health issues. ",
        },
        {
          logo: <Users className="size-11" />,
          title: "Couples Therapy",
          link: "CouplesTherapy",
          description:
            "Couple therapy, also known as couples counseling or marriage therapy, is a form of psychotherapy that helps partners improve their relationship and resolve conflicts. ",
        },
        {
          logo: <FaChild className="size-11" />,
          title: "Child Therapy",
          link: "ChildTherapy",
          description:
            "Child therapy, also known as child psychotherapy or play therapy, is a specialized form of therapy designed to help children address emotional, behavioral, and psychological issues.",
        },
        {
          logo: <Pill className="size-11" />,
          title: "Spravato Therapy",
          link: "SpravatoTherapy",
          description:
            "Spravato therapy involves the use of esketamine, a nasal spray approved for treating treatment-resistant depression in adults. ",
        },
        {
          logo: <Brain className="size-11" />,
          title: "Relaxation Therapy",
          link: "RelaxationTherapy",
          description:
            "Relaxation therapy is a therapeutic approach that focuses on reducing stress and promoting a state of calm and relaxation.",
        },
        {
          logo: <Leaf className="size-11" />,
          title: "Sarvato Therapy",
          link: "SarvatoTherapy",
          description:
            "SPRAVATO® is a groundbreaking treatment specifically designed for individuals suffering from treatment-resistant depression (TRD). ",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Service {...service} />
        </motion.div>
      ))}
    </div>
    <motion.div
      className="w-55 mt-10"
      variants={buttonVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link to={`/Services?ID=Services`}>
        <Button text="View All Services" />
      </Link>
    </motion.div>
  </motion.div>

  {/* Fourth Section: Doctor Section */}
  <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-gradient-to-bl my-10 from-rose-100 via-gray-100 to-gray-200">
    <div className="flex flex-col items-center md:items-start">
      <motion.p
        className="bg-white text-center text-black font-medium py-2 px-4 rounded mt-4 shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Dr. Schuessler
        <br />
        Psychotherapist
      </motion.p>
      <img
        src={LadyImage}
        alt="Dr. Schuessler"
        width={900}
        className="h-auto rounded"
      />
    </div>
    <div className="text-center md:text-left mt-10 md:mt-0 md:ml-10">
      <h1 className="text-4xl mb-5">
        How to get back to natural life after treated from mental health
        medicare
      </h1>
      <p className="text-gray-600 mb-5">
        Medicare patient care is paramount – the driving force in everything
        we do. LifeStance is committed to state-of-the-art clinical
        excellence.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-gray-700 list-disc pl-5">
        {[
          "Complete Daily Task",
          "Drinking Water",
          "Care of Time Management",
          "Quality Time with Family",
          "Healthy Food",
          "Gym Workout",
          "Daily Morning Walk",
          "Proper Sound Sleep",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="inline-block"
      >
        <Button text="Contact Us" />
      </motion.div>
    </div>
  </div>

  {/* Fifth Section: Bar Chart */}
  <div className="flex flex-col md:flex-row justify-evenly items-center bg-white p-10">
    <div className="max-w-md mx-1 mb-10 md:mb-0">
      <h1 className="text-3xl mb-5">Measure the program wellness impact</h1>
      <p className="text-gray-600 mb-5">
        When behavioral health patients can choose between in-office and
        virtual appointments, they tend to have more continuity of care.
        This leads to better patient outcomes, which is what we are all
        about.
      </p>
      <p className="text-gray-600">
        We tailor our care plans to fit each person's unique needs. Our
        clinicians include psychiatrists, psychologists, and licensed
        therapists who are ready to support you.
      </p>
    </div>
    <div>
      <Card className="shadow-lg">
        <CardContent>
          <ResponsiveContainer width={400} height={300}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Week1"
                fill="#047857"
                name="Week 1"
                animationBegin={0}
                animationDuration={1000}
              />
              <Bar
                dataKey="Goal"
                fill="#fda4af"
                name="Goal"
                animationBegin={200}
                animationDuration={1000}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  </div>

  {/* Sixth Section: Image and Stats */}
  <div className="flex flex-col my-7 md:flex-row items-center gap-10 max-w-8xl p-10">
    <div className="flex flex-col items-center md:items-start">
      <img
        src={Two_home}
        alt="Dr. Schuessler"
        width={900}
        className="h-auto rounded"
      />
    </div>
    <div className="text-center mx-20 md:text-left">
      <h1 className="text-4xl py-5 mb-5">
        We provide mental health services when and where you need it.
      </h1>
      <p className="text-gray-600 py-2 mb-5">
        Medicare Promotes a Healthy and active lifestyle - no fanatical
        weight loss or perfect body ideals. Our goal is to teach patient to
        create happiness within.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 list-none gap-3 mb-5 text-gray-700 pl-5">
        {[
          { value: "31+", label: "States we serve" },
          { value: "4385+", label: "Highly trained clinicants" },
          { value: "500+", label: "Approximately centers" },
        ].map((stat, index) => (
          <li key={index} className="border-b-2 w-60 border-zinc-200 py-3">
            <h1 className="text-4xl py-3">{stat.value}</h1>
            {stat.label}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Seventh Section: Feedback */}
  <div className="flex flex-col md:flex-row gap-10 justify-center p-10">
    {[
      {
        img: yoo_one,
        name: "Sharlet skew",
        description:
          '"This is simply unbeliveable! Without it, we would have gone bankrupt by now.I did not even need training."',
        date: "01 January 2025",
      },
      {
        img: hat_one,
        name: "Geoffrey Mott",
        description:
          '"No matter where you go.It is the collest , most happening thing around! Not able to tell you how happy I am with it."',
        date: "03 January 2025",
      },
      {
        img: beard_one,
        name: "Geoffrey Mott",
        description:
          '"I had lost without it. It is incrediblr. It is the real deal! Since I invested in it I made over 100,000 dollar profits."',
        date: "05 February 2025",
      },
    ].map((feedback, index) => (
      <motion.div
        key={index}
        variants={buttonVariants}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        // className="inline-block"
      >
        <FeedbackCart {...feedback} />
      </motion.div>
    ))}
  </div>
</div>
  );
}
