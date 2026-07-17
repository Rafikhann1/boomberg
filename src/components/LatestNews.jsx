import { IoIosArrowDropright } from "react-icons/io"
import { nanoid } from "nanoid"
import { NavLink } from "react-router-dom"

export default function LatestNews() {
  const latestNews = [
    {
      category: "Politics",
      date: "April 16, 2022",
      title:
        "Nicola Sturgeon Reported to Police Over Apparent Face Mask Law Breach",
      description:
        "Nicola Sturgeon has been reported to police after footage showed her apparently breaching Scotland's Covid...",
    },
    {
      category: "Markets",
      date: "April 17, 2022",
      title: "A New Cruise Ship Is Redefining Luxury in the Galápagos",
      description:
        "South Africa's Eskom has begun implementing further power cuts from 4:00 p.m. local today untill..",
    },
    {
      category: "Crypto",
      date: "April 17, 2022",
      title:
        "Elon Musk Also Threatened to Buy My Company. Here's How We Handled It",
      description:
        "South Africa's Eskom has begun implementing further power cuts from 4:00 p.m. local today untill..",
    },
  ]

  return (
    <section className="latest-news-container mx-2">
      <div className="flex items-center gap-1 font-bold text-xl mx-4">
        <h1>Latest News</h1>
        <IoIosArrowDropright />
      </div>

      <div className="border-x-[1px] border-custom-border px-4 mt-2">
        {latestNews.map((news, index) => {
          //    console.log(news)
          return (
            <div key={nanoid()} className="grid py-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold border border-1 border-custom-border px-2 py-1 text-xs">
                  {news.category}
                </span>
                <span className="text-xs text-custom-clr1">{news.date}</span>
              </div>
              <h1 className="font-bold text-lg mb-2">{news.title}</h1>
              <p className="mb-2 text-sm text-custom-para">
                {news.description}
              </p>
              <NavLink
                to="/"
                className={({ isActive }) => `underline text-navlink font-bold}`}
              >
                Continue Reading
              </NavLink>
              {index == latestNews.length - 1 ? (
                <></>
              ) : (
                <div className="border-b-3 border-custom-border border-dashed pt-4"></div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
