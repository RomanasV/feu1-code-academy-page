import './Podcasts.css';
import podcastImage from '../../images/Untitled-design-300x300.png';
import PodcastItem from './PodcastItem';

const Podcasts = ({title}) => {
  const sectionTitle = title && <h2>{title}</h2>;

  return (
    <div className="podcasts">
      {sectionTitle}
      <div className="podcasts-wrapper">
        <PodcastItem 
          image={podcastImage} 
          playTitle="Play"
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2022-09-05"
          />
        <PodcastItem 
          image={podcastImage} 
          playTitle="Play"
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2022-09-05"
          />
        <PodcastItem 
          image={podcastImage} 
          playTitle="Play"
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2022-09-10"
          />
        <PodcastItem 
          image={podcastImage} 
          playTitle="Play"
          length="7:55"
          title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
          date="2022-09-05"
          />
      </div>
    </div>
  );
}

export default Podcasts;