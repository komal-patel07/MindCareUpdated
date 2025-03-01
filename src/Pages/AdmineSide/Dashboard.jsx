import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/ui/sidebar";
import Component from "@/components/Custom/DonatChart";
import CallCart from "@/components/Custom/DoctorCart";
import DataTable from "@/components/Custom/AppointmentDataAdmin";

export default function AdminDashboard() {

  return (
    <div className="flex justify-center  " >
      <div className="flex justify-center w-[1599px] bg-gradient-to-bl from-rose-100 via-gray-100 to-gray-200   ">
        <Sidebar firstLink={"Home"} SecondLink={"Add Therapist"} thirdLink={"Add Admin"}  />
        <main className="flex-1 p-6 grid grid-cols-3 gap-4  h-screen overflow-y-auto scrollbar-hide w-5">
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
                    Name 
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
          <Component/>
          <div>Komal</div>
          {/* <Component/> */}
          <Card className="col-span-3 p-4">
            <CardContent>
              <div className=" bg-gray-200 mt-4  rounded-t-xl">
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
