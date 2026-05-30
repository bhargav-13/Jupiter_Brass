import { Link } from 'react-router-dom';
import { getArticlePath } from '../data/articles';

const ArticleCard = ({ article }) => (
  <Link to={getArticlePath(article.slug)} className="article-card">
    <div className="article-image-wrapper">
      <img src={article.image} alt={article.title} className="article-image" />
    </div>
    <div className="article-content">
      <div className="article-date">{article.date}</div>
      <h3 className="article-title">{article.title}</h3>
      <div className="article-author">
        {article.author} • {article.readTime}
      </div>
    </div>
  </Link>
);

export default ArticleCard;
