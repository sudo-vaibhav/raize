from newsapi import NewsApiClient
import re
def sentiment_split():
    # Init
    newsapi = NewsApiClient(api_key='b9629b1957e04c638033750a72995052')

    headlines = newsapi.get_top_headlines(
                                            # q='bitcoin',
                                            # sources='bbc-news,the-verge',
                                            category='health',
                                            language='en',
                                            country='in')["articles"]

    keywords = {
        "beds": ["hospital beds", "ventilator", "nursing home", "bed","icu"],
        "vaccination": ["vaccine", "injection", "vaccination"],
        "masks":["mask","face shield","protective gear"],
        "soaps": ["sanitiz", "sanitis", "soap", "hand wash", "hand-wash"]
    }

    counts = {
        "beds": 0,
        "vaccination": 0,
        "masks": 0,
        "soaps":0
    }

    for headline in headlines:
        content = headline["content"] + " " + headline["description"] + " " + headline["title"]
        
        for key in keywords:
            for synonym in keywords[key]:
                counts[key] += len(re.findall(synonym, content))
    sumVal = sum(counts.values())
    for key in counts:
        counts[key] *= 100 / sumVal
        counts[key] = int(counts[key])
    print(counts)


   

    return {"headlines": headlines,"counts": counts}
    # /v2/everything
    # all_articles = newsapi.get_everything(q='bitcoin',
    #                                     sources='bbc-news,the-verge',
    #                                     domains='bbc.co.uk,techcrunch.com',
    #                                     from_param='2017-12-01',
    #                                     to='2017-12-12',
    #                                     language='en',
    #                                     sort_by='relevancy',
    #                                     page=2)

