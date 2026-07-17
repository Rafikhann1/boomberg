import phone from "../assets/phone.png";
import ship from "../assets/ship.png";
import twitter from "../assets/twitter.png";
import sunset from "../assets/sunset.png";
import paper from "../assets/paper.png";
import { IoIosArrowDropright } from "react-icons/io"


const articles = [
  {
    category: "Crypto",
    date: "April 16, 2022",
    title:
      "Nicola Sturgeon Reported to Police Over Apparent Face Mask Law Breach",
    image: phone,
  },
  {
    category: "Crypto",
    date: "April 16, 2022",
    title: "A New Cruise Ship Is Redefining Luxury in the Galápagos",
    image: ship,
  },
  {
    category: "Crypto",
    date: "April 16, 2022",
    title:
      "Elon Musk Also Threatened to Buy My Company. Here's How We Handled It",
    image: twitter,
  },
  {
    category: "Crypto",
    date: "April 16, 2022",
    title: "A New Cruise Ship Is Redefining Luxury in the Galápagos",
    image: sunset,
  },
  {
    category: "Crypto",
    date: "April 16, 2022",
    title:
      "Elon Musk Also Threatened to Buy My Company. Here's How We Handled It",
    image: paper,
  },
];


export default function MostRead() {
  return (
    <div className="most-read">
       <div className="flex items-center gap-1 font-bold text-xl ">
              <h1>Most Read</h1>
              <IoIosArrowDropright />
      </div>

      {articles.map((article, index) => (
        <div className="most-item grid grid-cols-[1fr_33%] gapx-2 mb-10" key={index}>
          <div className="most-content">
            <div className="meta">
              <span className="tag">{article.category}</span>
              <span>{article.date}</span>
            </div>

            <p className="font-bold">{article.title}</p>

            <a href="/">Continue Reading</a>
          </div>
          <div className="w-full h-full">
            <img className="h-full w-full object-cover " src={article.image} alt={article.title} />
          </div>
          
        </div>
      ))}
    </div>
  )
}