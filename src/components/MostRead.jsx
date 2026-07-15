import phone from "../assets/phone.png";
import ship from "../assets/ship.png";
import twitter from "../assets/twitter.png";
import sunset from "../assets/sunset.png";
import paper from "../assets/paper.png";

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
      <h2>
        Most Read <span>›</span>
      </h2>

      {articles.map((article, index) => (
        <div className="most-item" key={index}>
          <div className="most-content">
            <div className="meta">
              <span className="tag">{article.category}</span>
              <span>{article.date}</span>
            </div>

            <h4>{article.title}</h4>

            <a href="/">Continue Reading</a>
          </div>

          <img src={article.image} alt={article.title} />
        </div>
      ))}
    </div>
  );
}