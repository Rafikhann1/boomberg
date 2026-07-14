import Movies from "./Movies"
import LatestNews from "./LatestNews"
import MostRead from "./MostRead"

export default function Content(){
    return (
        <div className='grid grid-cols-3 mx-6 gap-8'>
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