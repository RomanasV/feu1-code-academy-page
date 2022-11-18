import phoneImage from '../../images/phone-in-hands.jpg';
import teamImage from '../../images/ca-team.jpg';
import NewsArticle from '../NewsArticle/NewsArticle';
import PageTitle from '../UI/PageTitle/PageTitle';
import './News.css';
import LargeButton from '../UI/LargeButton/LargeButton';

const News = () => {
  return (
    <div className="news">
      <PageTitle>Naujienos</PageTitle>
      <div className="main-news">
        <NewsArticle 
          image={phoneImage} 
          imageAlt="phone in hands" 
          url="/#"
          category="Naujienos"
          title="Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?" 
          date="2022-02-23" />

        <NewsArticle 
          image={teamImage} 
          imageAlt="CodeAcademy Team"
          title="„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį"
          url="/#"
          category="Naujienos"
          date="2022-02-23" />
      </div>

      <div className="secondary-news">
        <NewsArticle 
          image={phoneImage} 
          imageAlt="phone in hands" 
          url="/#" 
          category="Naujienos"
          title="Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?" 
          date="2022-02-23" />

        <NewsArticle 
          image={teamImage} 
          imageAlt="CodeAcademy Team"
          title="„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį"
          url="/#"
          category="Naujienos"
          date="2022-02-23" />

        <NewsArticle 
          image={phoneImage} 
          imageAlt="phone in hands" 
          url="/#" 
          category="Naujienos"
          title="Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?" 
          date="2022-02-23" />

        <NewsArticle 
          image={teamImage} 
          imageAlt="CodeAcademy Team"
          title="„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį"
          url="/#"
          category="Naujienos"
          date="2022-02-23" />
      </div>

      <LargeButton url="/#" content="Visos naujienos" />
    </div>
  );
}

export default News;