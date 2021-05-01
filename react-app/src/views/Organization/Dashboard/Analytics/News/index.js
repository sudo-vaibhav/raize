import Card from '../../../../../components/Card'
import FeatherIcon from 'feather-icons-react'

const News = ({ news, className = '' }) => {
  news = news.slice(0, 6)
  return (
    <Card className={`overflow-auto ${className}`}>
      <h4 className="font-semibold">Health articles</h4>
      <div className="grid grid-cols-2">
        {news.map((article) => {
          return (
            <div className="border-light-700 p-3 border text-xs m-2 rounded-lg">
              <div className="flex justify-between  my-2">
                <img
                  src={article.urlToImage}
                  className="mr-2 w-1/5"
                  style={{
                    maxHeight: 50,
                    //   maxWidth: 100,
                  }}
                />
                <h6 className="font-medium">{article.title}</h6>
              </div>
              <a
                href={article.url}
                target={'_blank'}
                rel="noreferrer"
                className="flex justify-end text-primary-900"
              >
                <FeatherIcon icon="external-link" size={20} />
              </a>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default News
