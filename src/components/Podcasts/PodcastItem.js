import './PodcastItem.css';

const PodcastItem = ({image, length, playTitle, title, date}) => {
  return (
    <div className="podcast">
      <img className="podcast-image" src={image} alt="phone in hands" />
      <span className="podcast-time">Trukmė: {length}</span>
      <button className="podcast-play">{playTitle}</button>
      <div className="podcast-info">
        <h3 className="podcast-title">{title}</h3>
        <span className="podcast-date">{date}</span>
      </div>
    </div>
  );
}

export default PodcastItem;