import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/ui/sidebar";
import StatsCard from "./components/StateCart";
import PatientSummary from "./components/PatientSummary"
import { NextPatientDetails,AppointmentList } from "./components/PatientSummary";
import DataTable from "@/components/Custom/AppointmentDataAdmin";

export default function TheparistDashboard() {
  const appointments = [
    { name: "M.J. Mical", diagnosis: "Health Checkup", time: "On Going" },
    { name: "Sanath Deo", diagnosis: "Health Checkup", time: "12:30 PM" },
    { name: "Loeara Phanj", diagnosis: "Report", time: "03:15 PM" },
    { name: "Komola Haris", diagnosis: "Common Cold", time: "05:30 PM" },
  ];
  return (
      <div className="flex h-screen bg-gray-100">
      <Sidebar firstLink={"Home"} SecondLink={"Add Therapist"} thirdLink={"Add Admin"}  />
      <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-3 gap-4">
            <StatsCard title="Total Patients" value="2000+" date="Till Today" />
            <StatsCard title="Today Patients" value="068" date="21 Dec 2021" />
            <StatsCard title="Today Appointments" value="085" date="21 Dec 2021" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <PatientSummary />
            <NextPatientDetails />
          </div>
          <div className="mt-6">
            <AppointmentList />
          </div>
        </main>
      </div>
  );
}
