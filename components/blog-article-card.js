import Link from 'next/link';

export default function BlogArticleCard({ article }){

  return(
    <div>
      <div class="uk-card uk-card-hover">
          <div class="uk-card-media-top">
              <img src={article.image} className="" alt="" />
          </div>
          <div class="uk-card-body uk-text-left">
              <h3 class="uk-card-title uk-text-bold">{article.title}</h3>
              <p className="uk-text-normal">{article.teaser}</p>
              <Link href="#">
                <a>
                  <i class="article-card-dots las la-ellipsis-h"></i>
                </a>
              </Link>
          </div>
      </div>
    </div>
  )

}