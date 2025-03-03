import React, { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/ui/sidebar";
import { PatientSignUpContext } from "@/Context/PatientSignUpContext";
import Component from "@/components/Custom/LineChart";
import CallCart from "@/components/Custom/DoctorCart";
import DataTable from "@/components/Custom/DataTable";

export default function PatientDashboard() {
  const { patientData } = useContext(PatientSignUpContext);
  console.log(patientData.username);
  if (!patientData) return <h1>Not Logged in!!</h1>;
  const db = patientData.dob;
  function getAge(db) {
    let birthDate = new Date(db);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    // Adjust if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }
  const Age = getAge(db);
  console.log(Age);

  // Example usage
  console.log(getAge("2000-02-26")); // Output: Correct age based on current date

  return (
    <div className="flex justify-center  " >
      <div className="flex justify-center w-[1599px] bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200   ">
        <Sidebar firstLink={"Home"} SecondLink={"FeedBack"} thirdLink={"Appointment"} forthLink={"Communication"} fifthLink={"Services"} />
        <main className="flex-1 p-6 grid grid-cols-2   gap-6  w-5">
          {/* Profile Card */}
          <Card className="col-span-1 p-4">
            <CardContent className=" flex flex-col justify-center p-5 ">
              <div className="flex items-center justify-center py-2  space-x-4 border-b w-full">
                <img
                  src="src/assets/beard-one.jpg"
                  alt="Profile"
                  className="rounded-full w-12 h-12 "
                />
                <div className="">
                  <h2 className="text-lg font-bold">
                    Name {patientData.username}
                  </h2>
                  <p className="text-sm text-gray-500">7000-589-483</p>
                </div>
              </div>
              <div className="text-black/55 m-2">
                <p className="flex justify-around py-1.5 ">
                  Age<span className="px-2"></span> 20 Years
                </p>
                <p className="flex justify-around py-1.5 ">
                  Blood Group<span></span> O+
                </p>
                <p className="flex justify-around py-1.5 ">
                  Height<span className="px-2"></span> 1.55m
                </p>
                <p className="flex justify-around py-1.5 ">
                  Weight<span className="px-2"></span> 46kg
                </p>
              </div>
            </CardContent>
          </Card>
          <Component />

          {/* Activity Chart */}
          <Card className="col-span-2 p-4">
            <CardContent>
              <h2 className="text-lg font-bold">Your Activity</h2>
              <div className=" bg-gray-200 mt-1  rounded-t-xl">
                <DataTable />
              </div>
            </CardContent>
          </Card>
        </main>
        <div className="flex flex-col gap-2">
          <CallCart />
        </div>
      </div>
    </div>
  );
}
