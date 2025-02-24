import { Link } from "react-router-dom"
import Second from "./Second";
export default function First(){
    return(<div>
        First
        <button className="border bg-blue-500"><Link to={"/Second"}>Next</Link></button>
    </div>)
}