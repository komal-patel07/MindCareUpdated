import { useState } from "react";
import { MoreVertical } from "lucide-react"; // Three-dot icon
import { Menu, MenuItem } from "@mui/material"; // MUI for dropdown

const Data = [
  { id: 1, therapist: "Dr. Aarav Sharma", date: "2025-03-01", status: "Completed", changes: "Updated status" },
  { id: 2, therapist: "Dr. Priya Kapoor", date: "2025-03-02", status: "Pending", changes: "New appointment" },
  { id: 3, therapist: "Dr. Rohan Mehta", date: "2025-03-03", status: "Cancelled", changes: "Cancelled by user" },
  { id: 4, therapist: "Dr. Sneha Verma", date: "2025-03-04", status: "Completed", changes: "Rescheduled" },
  { id: 5, therapist: "Dr. Aditya Malhotra", date: "2025-03-05", status: "Pending", changes: "Awaiting confirmation" },
  { id: 6, therapist: "Dr. Kavita Sinha", date: "2025-03-06", status: "Completed", changes: "Updated notes" },
  { id: 7, therapist: "Dr. Rajesh Khanna", date: "2025-03-07", status: "Cancelled", changes: "Cancelled by admin" },
  { id: 8, therapist: "Dr. Anjali Dixit", date: "2025-03-08", status: "Pending", changes: "Follow-up scheduled" },
  { id: 9, therapist: "Dr. Vikram Joshi", date: "2025-03-09", status: "Completed", changes: "Finalized" },
  { id: 10, therapist: "Dr. Meenakshi Rao", date: "2025-03-10", status: "Pending", changes: "Pending review" },
];

const AppointmentTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenMenu = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  return (
    <table className="w-full border-collapse shadow-md bg-white">
      <thead>
        <tr className="grid grid-cols-5 p-3 text-white bg-gray-500 rounded-t-2xl border-b">
          <th className="text-center">Sr. No</th>
          <th className="text-center">Therapist</th>
          <th className="text-center">Date</th>
          <th className="text-center">Status</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item, index) => (
          <tr key={item.id} className="grid grid-cols-5 p-3 border-b">
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{item.therapist}</td>
            <td className="text-center">{item.date}</td>
            <td className="text-center">
            <span
  className={`px-2 py-1 rounded-lg  ${
    item.status === "Completed" ? "text-green-500" :
    item.status === "Pending" ? "text-yellow-500" :
    "text-red-600"
  }`}
>
  {item.status}
</span>

            </td>
            {/* <td className="text-center">{item.changes}</td> */}
            <td className="text-center relative">
  <button onClick={(e) => handleOpenMenu(e, item.id)}>
    <MoreVertical className="cursor-pointer " />
  </button>

  {/* Dropdown Menu */}
  <Menu anchorEl={anchorEl} open={selectedId === item.id} onClose={handleCloseMenu}>
    <MenuItem 
      onClick={() => console.log("Edit", item.id)} 
      className="text-blue-600"
    >
      Edit
    </MenuItem>
    <MenuItem 
      onClick={() => console.log("Remove", item.id)} 
      className="text-red-600 hover:bg-red-100"
    >
      Remove
    </MenuItem>
  </Menu>
</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
