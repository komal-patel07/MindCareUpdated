import { Card,CardContent,CardHeader } from "@/components/ui/card";
import { PieChart } from "lucide-react";
import Button from "@/components/Custom/Btn";
import { Avatar } from "@mui/material";
export  default function   PatientSummary(){
    const data = [
      { name: "New Patients", value: 400, fill: "#007bff" },
      { name: "Old Patients", value: 300, fill: "#f8b400" },
      { name: "Total Patients", value: 700, fill: "#e0e0e0" },
    ];
    return (
      <Card>
        <CardHeader>Patients Summary December 2021</CardHeader>
        <CardContent>
          <PieChart width={300} height={200} data={data} />
        </CardContent>
      </Card>
    );
  };

  const NextPatientDetails = () => (
    <Card>
      <CardHeader>Next Patient Details</CardHeader>
      <CardContent>
        <p className="font-bold">Sanath Deo</p>
        <p className="text-sm text-gray-500">Health Checkup</p>
        <Button className="mt-4">View History</Button>
      </CardContent>
    </Card>
  );

  const AppointmentList = () => {
    const appointments = [
      { name: "M.J. Mical", diagnosis: "Health Checkup", time: "On Going" },
      { name: "Sanath Deo", diagnosis: "Health Checkup", time: "12:30 PM" },
      { name: "Loeara Phanj", diagnosis: "Report", time: "03:15 PM" },
      { name: "Komola Haris", diagnosis: "Common Cold", time: "05:30 PM" },
    ];
    return (
      <Card>
        <CardHeader>Today Appointment</CardHeader>
        <CardContent>
          {appointments.map((appt, index) => (
            <div key={index} className="flex justify-between py-2">
              <Avatar />
              <div>
                <p className="font-bold">{appt.name}</p>
                <p className="text-sm text-gray-500">{appt.diagnosis}</p>
              </div>
              <span className="text-blue-500">{appt.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };
  
export {NextPatientDetails,AppointmentList}  