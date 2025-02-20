'use server'
import { type items, parse } from '@/lib/parse'
import { searchRss } from '@/lib/search-rss'

export type props = {
  url: string | null
  items: items[]
  feedTitle: string
  feedDescription: string
  error: string[]
  isModalReady: boolean
}

export async function handleSubmit(
  state: props,
  formData: FormData,
): Promise<props> {
  const urlValue = formData.get('url')
  if (!urlValue) {
    return {
      url: '',
      items: [],
      feedTitle: '',
      feedDescription: '',
      error: ['invalid URL'],
      isModalReady: false,
    }
  }
  const url = urlValue.toString().trim()

  const addProtocolUrl =
    url.startsWith('http://') || url.startsWith('https://')
      ? url
      : `https://${url}`

  if (state.url === addProtocolUrl) {
    return state
  }
  try {
    new URL(addProtocolUrl)
  } catch {
    return {
      ...state,
      url: addProtocolUrl,
      items: [],
      feedTitle: '',
      feedDescription: '',
      error: ['invalid URL'],
      isModalReady: false,
    }
  }

  const { rssUrl, error } = await searchRss(addProtocolUrl)
  console.log(rssUrl)

  if (rssUrl === '') {
    return {
      ...state,
      url: addProtocolUrl,
      items: [],
      feedTitle: '',
      feedDescription: '',
      error: error,
      isModalReady: false,
    }
  }
  const addHostNameRssUrl =
    rssUrl.startsWith('http://') || rssUrl.startsWith('https://')
      ? rssUrl
      : `${addProtocolUrl}/${rssUrl}`

  const feeds = await parse([addHostNameRssUrl])
  const items = feeds.flatMap(feed => feed.items)
  const feedTitle = feeds.length > 0 ? feeds[0].feedTitle : ''
  const feedDescription = feeds.length > 0 ? feeds[0].feedDescription : ''
  return {
    url: addProtocolUrl,
    items,
    feedTitle,
    feedDescription,
    error: [],
    isModalReady: true,
  }
}
