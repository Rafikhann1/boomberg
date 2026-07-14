import './Routes.css'
import { BsThreeDots } from "react-icons/bs";

export default function Routes(){

    const date =new Date().toLocaleDateString('en-US', { weekday : 'long'})
    const formattedDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
    });

    return (
        <nav className="mx-6 flex justify-between items-center py-4">
           <div><span className='font-bold'>{date}</span><br />{formattedDate}</div>
           <div>World</div>
           <div>Politics</div>
           <div>Business</div>
           <div>Opinion</div>
           <div>Tech</div>
           <div>Science</div>
           <div>Sports</div>
           <div>Arts</div>
           <div>Books</div>
           <div>Style</div>
           <div>Food</div>
           <div>Travel</div>
           <div>Magazine</div>
           <div className="bg-black text-white flex items-center py-4 px-4"><BsThreeDots /></div>
        </nav>
    )
}