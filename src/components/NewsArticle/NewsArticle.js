const NewsArticle = ({ category, title, date, image, imageAlt, url }) => {
  const categoryElement = category && <span className="category">{category}</span>;
  const titleElement = title && <h3 className="news-title">{title}</h3>;
  const dateElement = date && <span className="article-date">{date}</span>;
  const imageElement = image && (
    <div className="image-wrapper">
      <img src={image} alt={imageAlt} />
    </div>
  );

  return (
    <div className="news-article">
      <a href={url}>
        {imageElement}
        <div className="info-wrapper">
          {categoryElement}
          {titleElement}
          {dateElement}
        </div>
      </a>
    </div>
  );
};

export default NewsArticle;
