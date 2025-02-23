import { UserCircle } from "lucide-react"

export default function Profile(){
    return(
        <div className="flex gap-2 justify-center items-center border border-gray-100 p-2 rounded  bg-rose-100 text-2xl">
            <UserCircle size={30} />
            <span>Komal</span>
        </div>
    )
}