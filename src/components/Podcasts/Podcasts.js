import "./Podcasts.css";
import podcastImage from "../../images/Untitled-design-300x300.png";
import PodcastItem from "./PodcastItem";

const Podcasts = ({ title }) => {
  const podcastsInfo = [
    {
      image: podcastImage,
      playTitle: "Play",
      length: "7:15",
      title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
      date: "2022-09-05",
    },
    {
      image: podcastImage,
      playTitle: "Play",
      length: "7:35",
      title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
      date: "2022-09-05",
    },
    {
      image: podcastImage,
      playTitle: "Play",
      length: "8:15",
      title: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
      date: "2022-09-05",
    },
  ];

  const sectionTitle = title && <h2>{title}</h2>;

  return (
    <div className="podcasts">
      {sectionTitle}
      {podcastsInfo.length > 0 ? (
        <div className="podcasts-wrapper">
          {podcastsInfo.map((podcastInfo, index) => (
            <PodcastItem
              image={podcastInfo.image}
              playTitle={podcastInfo.playTitle}
              length={podcastInfo.length}
              title={podcastInfo.title}
              date={podcastInfo.date}
              key={index}
            />
          ))}
        </div>
      ) : (
        <h2>No Podcasts</h2>
      )}

    </div>
  );
};

export default Podcasts;
