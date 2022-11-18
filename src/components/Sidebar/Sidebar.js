import Podcasts from '../Podcasts/Podcasts';
import Events from '../Events/Events';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Podcasts title="Podcastai ir radijo laidos" />
      <Events title="Renginiai" />
    </div>
  );
}

export default Sidebar;