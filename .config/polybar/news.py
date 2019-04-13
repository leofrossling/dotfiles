import feedparser

d = feedparser.parse("http://rss.cnn.com/rss/edition.rss")

print (d['entries'][0]['title'])
