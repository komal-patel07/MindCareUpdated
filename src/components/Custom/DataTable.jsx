export default function DataTable() {
  return (
    <div className="w-full h-44 overflow-y-auto scrollbar-hide">
      <table className="w-full border-collapse">
        {/* Table Header */}
        <thead className="sticky top-0 bg-gray-500 rounded  text-white shadow-sm">
          <tr className="grid grid-cols-4 p-3 rounded-t-xl border-b">
            <th className="text-center">Sr. No</th>
            <th className="text-center">Therapist</th>
            <th className="text-center">Date</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {Data.map((item) => (
            <tr
              key={item.id}
              className="grid grid-cols-4 p-2 border-b border-white"
            >
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.therapist}</td>
              <td className="text-center">{item.date}</td>
              <td className="text-center">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Data = [
  { id: 1, therapist: "Dr. Aarav Sharma", date: "2025-03-01", status: "Completed" },
  { id: 2, therapist: "Dr. Priya Kapoor", date: "2025-03-02", status: "Pending" },
  { id: 3, therapist: "Dr. Rohan Mehta", date: "2025-03-03", status: "Cancelled" },
  { id: 4, therapist: "Dr. Sneha Verma", date: "2025-03-04", status: "Completed" },
  { id: 5, therapist: "Dr. Aditya Malhotra", date: "2025-03-05", status: "Pending" },
  { id: 6, therapist: "Dr. Kavita Sinha", date: "2025-03-06", status: "Completed" },
  { id: 7, therapist: "Dr. Rajesh Khanna", date: "2025-03-07", status: "Cancelled" },
  { id: 8, therapist: "Dr. Anjali Dixit", date: "2025-03-08", status: "Pending" },
  { id: 9, therapist: "Dr. Vikram Joshi", date: "2025-03-09", status: "Completed" },
  { id: 10, therapist: "Dr. Meenakshi Rao", date: "2025-03-10", status: "Pending" },
];
