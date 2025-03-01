import React from "react";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200 text-center py-16 px-6 rounded-b-lg">
        <h1 className="text-4xl font-bold">Welcome to Mindcare – Your Partner in Mental Wellness</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          At Mindcare, we believe that mental health is the foundation of a fulfilling life.
          Our mission is to provide compassionate, expert care in a safe and supportive environment,
          helping individuals navigate their mental health journey with confidence and dignity.
        </p>
      </section>

      {/* Team Image Section */}
      <div className="relative flex justify-center mt-[-60px]">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl">
          <img
            src="/src/assets/Group.png"
            alt="Our Team"
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-lg font-semibold">Our team ❤️</p>
        </div>
      </div>

      {/* Our Approach Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mt-4">
          We offer a holistic, evidence-based approach to mental health care, ensuring personalized
          and effective treatment for every individual.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Individual Therapy</h3>
            <p className="text-gray-600">Tailored one-on-one sessions to address personal struggles.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Couples & Family Counseling</h3>
            <p className="text-gray-600">Strengthening relationships through guided therapy.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Group Therapy & Workshops</h3>
            <p className="text-gray-600">A supportive space to share and grow.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Online & In-Person Sessions</h3>
            <p className="text-gray-600">Flexible care options for your convenience.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Mindcare? */}
      <section className="text-center py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold">Why Choose Mindcare?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Confidential & Judgment-Free</h3>
            <p className="text-gray-600">Your privacy and comfort are our priority.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Expert Guidance</h3>
            <p className="text-gray-600">A team of experienced and certified professionals.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Personalized Care</h3>
            <p className="text-gray-600">Treatment plans tailored to your unique needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Accessible & Convenient</h3>
            <p className="text-gray-600">Virtual sessions and flexible scheduling available.</p>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mt-4">
          If you or a loved one need support, reach out today. We’re here to listen, guide, and help you take the first step toward mental wellness.
        </p>
        <div className="mt-6 p-6  bg-gray-100 rounded-lg shadow-md flex justify-center gap-10">
          <p className="text-lg text-gray-700">📞 <strong>Contact Us:</strong> (704) 555-0127</p>
          <p className="text-lg text-gray-700">📧 <strong>Email:</strong>mindcare@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default About;
