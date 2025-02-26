 function DoctorCart({Name,ID,Specialization}){
    return(
        <div className="flex h-36 flex-col w-60  rounded-2xl bg-white shadow-2xl  m-4">
            {/* Name of the Doctors */}
            <h1 className="text-xl rounded-t-xl py-2 p-5  bg-gray-500 text-white font-semibold w-full border-b">{Name}</h1>
            <p className="py-2  px-11 font-semibold ">ID:<span className="font-normal m-5 py-5">{ID}</span></p>
            <p className="py-2 px-11 font-semibold">Specializations:<span className="font-normal m-5 py-5">{Specialization}</span></p>
        </div>
    )
}

export default function CallCart(){
    return(<div className="flex flex-col h-screen overflow-y-auto scrollbar-hide">
{/* <div className="h-64 overflow-y-auto scrollbar-hide"> */}

    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    <DoctorCart Name={"Dr Dev Gray"} ID={53261} Specialization={"ABBB"}/>
    </div>)
}
