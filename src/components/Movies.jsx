import { NavLink} from "react-router-dom"
import { IoIosArrowDropright } from "react-icons/io";
import moviePoster from "../assets/movies1.png"

export default function Movies(){
    return (
        <section className="movies grid">
            <div className="flex justify-between items-center gap-2 mb-4">
                <div className="flex items-center gap-1 font-bold">
                    <h1 className="text-xl">
                        Movies 
                    </h1>
                    <IoIosArrowDropright />
                </div>
                <div className="navlink-container flex gap-2">
                    <NavLink to='/'>Trailers</NavLink>
                    <NavLink to='/'>Premiers</NavLink>
                    <NavLink to='/'>Announced</NavLink>
                </div>
            </div>
            <div className="image-container aspect-square mb-4">
                <img 
                    src={ moviePoster } 
                    alt="Four guys giving pose for a movie poster" 
                    className="h-full w-full"
                />
            </div>
            <span className="mb-4 text-gray-300">{
                new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                })}
            </span>
            <article className="text-justify mb-4">
                <h2 className="font-bold">
                    For 'Fantastic Beasts' Series, a case of Diminishing Returns
                </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem molestias iure illum totam asperiores praesentium. Minus quos voluptates iure! Labore, iste recusandae? Delectus tempore molestias similique, perspiciatis quisquam rerum sint.</p>
            </article>

            <NavLink to='/' className={({isActive}) => 'underline text-navlink font-bold' }>Continue Reading</NavLink>
        </section>
    )
}