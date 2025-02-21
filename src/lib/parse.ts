import Parser from 'rss-parser'

type items = {
  title: string
  content: string
  link: string
  pubDate?: string
  date: string
  thumbnail: string
  enclosure?: string
  'content:encoded'?: string
  creator?: string
  author?: string
  heroImage?: string
  feedTitle?: string
  isRead: boolean
}
type feed = {
  feedTitle: string
  feedLink: string
  feedDescription: string
  items: items[]
}
async function parse(urlList: string[]): Promise<feed[]> {
  const parser = new Parser({
    customFields: {
      item: [
        'thumbnail',
        'content:encoded',
        'date',
        'creator',
        'author',
        'heroImage',
        'feedTitle',
        'isRead',
      ],
    },
  })

  let allFeed: feed[] = []
  try {
    allFeed = await Promise.all(
      urlList.map(async url => {
        const feed = await parser.parseURL(url)
        console.log(feed)
        const feedTitle = feed.title || ''
        const feedLink = feed.link || ''
        const feedDescription = feed.description || ''

        const items = feed.items.map(item => {
          return {
            title:
              (item.title && item.title.length > 100
                ? `${item.title.slice(0, 100)}...`
                : item.title) || '',
            content: item.content || '',
            link: item.link || '',
            date: new Date(item.date || item.pubDate).toLocaleString() || '',
            thumbnail: '',
            heroImage: item.enclosure ? item.enclosure.url : '',
            'content:encoded': item['content:encoded'] || '',
            creator: item.creator || item.author || '',
            feedTitle: item.feedTitle || '',
            isRead: false,
          }
        })
        return {
          feedTitle,
          feedLink,
          feedDescription,
          items,
        }
      }),
    )
  } catch (error) {
    console.log(error)
    return []
  }

  return allFeed
}

export { parse, type items }
