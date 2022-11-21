import phoneImage from '../../images/phone-in-hands.jpg';
import teamImage from '../../images/ca-team.jpg';
import NewsArticle from '../../components/NewsArticle/NewsArticle';
import PageTitle from '../../components/UI/PageTitle/PageTitle';
import './News.css';
import LargeButton from '../../components/UI/LargeButton/LargeButton';
import Container from '../../components/UI/Container/Container';
import Sidebar from '../../components/Sidebar/Sidebar';

const News = () => {
  return (
    <Container>
      <div className="content-wrapper">
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
        <Sidebar />
      </div>
    </Container>
  );
}

export default News;