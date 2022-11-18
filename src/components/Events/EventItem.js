import './EventItem.css';

const EventItem = ({image, imageAlt, url, title, location, day, month}) => {
  const imageElement = image && (
    <div className="image-wrapper">
      <img src={image} alt={imageAlt} />
    </div>
  )

  return (
    <div className="event">
      <a href={url}>
        {imageElement}
        <div className="content-wrapper">
          <div className="date">
            <div className="day">{day}</div>
            <div className="month">{month}</div>
          </div>
          <span className="event-place">{location}</span>
          <h3 className="event-title">{title}</h3>
        </div>
      </a>
    </div>
  );
}

export default EventItem;