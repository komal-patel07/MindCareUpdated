function DoctorCart({Name,ID,Specialization}){
    return(
        <div className="grid gap-2  h-36  w-60  rounded-2xl bg-white shadow-2xl  m-4">
            {/* Name of the Doctors */}  <h2 className="text-2xl font-bold bg-gray-500 h-12 text-center text-white rounded-t-xl">{Name}</h2>
    <p className="text-gray-500 text-lg px-3">{Specialization}</p>
    <p className=" text-sm text-gray-600 px-3 pb-20">ID: {ID}</p>
        </div>
    )
}  
export default function CallCart(){
    return(<div className="flex flex-col h-screen overflow-y-auto scrollbar-hide">
{/* <div className="h-64 overflow-y-auto scrollbar-hide"> */}

      {data.map((doctor, index) => (
        <DoctorCart
          key={doctor.ID} // Using ID as a unique key
          Name={doctor.Name}
          ID={doctor.ID}
          Specialization={doctor.Specialization}         />
      ))}

    </div>)
}


///will come from backend later......

const data = [
    { ID: 2001, Name: "Dr. Aarav Sharma", Specialization: "Psychiatrist" },
    { ID: 2002, Name: "Dr. Priya Kapoor", Specialization: "Clinical Psychologist" },
    { ID: 2003, Name: "Dr. Rohan Mehta", Specialization: "Cognitive Behavioral Therapist" },
    { ID: 2004, Name: "Dr. Sneha Verma", Specialization: "Child Psychologist" },
    { ID: 2005, Name: "Dr. Aditya Malhotra", Specialization: "Neuropsychologist" },
    { ID: 2006, Name: "Dr. Kavita Sinha", Specialization: "Trauma Therapist" },
    { ID: 2007, Name: "Dr. Rajesh Khanna", Specialization: "Addiction Counselor" },
    { ID: 2008, Name: "Dr. Anjali Dixit", Specialization: "Marriage & Family Therapist" },
    { ID: 2009, Name: "Dr. Vikram Joshi", Specialization: "Depression Specialist" },
    { ID: 2010, Name: "Dr. Meenakshi Rao", Specialization: "Anxiety Disorder Specialist" },
  ];
