import Link from 'next/link';

export default function BlogArticleCard({ article }){

  return(
    <div>
      <div className="uk-card uk-card-hover">
          <div className="uk-card-media-top">
              <img src={article.image} className="" alt="" />
          </div>
          <div className="uk-card-body uk-text-left">
              <h3 className="uk-card-title uk-text-bold">{article.title}</h3>
              <p className="uk-text-normal">{article.teaser}</p>
              <Link href="#">
                <a>
                  <i className="article-card-dots las la-ellipsis-h"></i>
                </a>
              </Link>
          </div>
      </div>
    </div>
  )

}