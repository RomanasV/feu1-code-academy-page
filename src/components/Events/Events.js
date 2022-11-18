import eventImage from '../../images/279056133_5029178327168536_4126724437953769972_n-1-300x111.png';
import LargeButton from '../UI/LargeButton/LargeButton';
import EventItem from './EventItem';

const Events = ({title}) => {
  const sectionTitle = title && <h2>{title}</h2>;

  return (
    <div className="events">
      {sectionTitle}
      <div className="events-wrapper">
        <EventItem 
          image={eventImage} 
          imageAlt="Event poster" 
          url="/#"
          title="TestCon Europe 2022"
          location="Online"
          day="29"
          month="Spa"
          />

        <EventItem 
          url="/#"
          title="TestCon Europe 2022"
          location="Online"
          day="29"
          month="Spa"
          />
          
        <EventItem 
          url="/#"
          title="TestCon Europe 2022"
          location="Online"
          day="29"
          month="Spa"
          />

      </div>

      <LargeButton content="Daugiau" customClass="all-events" url="/#" />
    </div>
  );
}

export default Events;