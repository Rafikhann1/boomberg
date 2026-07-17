import Movies from "./Movies"
import LatestNews from "./LatestNews"
import MostRead from "./MostRead"
import './Routes.css'

export default function Content(){
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 gap-8 pt-4'>
            <section className="movies">
                <Movies />
            </section>
            <section className="latest-news">
                <LatestNews />
            </section>
            <section className="most-read">
                <MostRead />
            </section>
        </div>
    )
}