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
  favicon: string
}

export async function handleSubmit(
  state: props,
  formData: FormData,
): Promise<props> {
  const urlValue = formData.get('url')
  const initialState = {
    url: '',
    items: [],
    feedTitle: '',
    feedDescription: '',
    error: [],
    isModalReady: false,
    favicon: '',
  }
  if (!urlValue) {
    return {
      ...initialState,
      error: ['invalid URL'],
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
      ...initialState,
      url: addProtocolUrl,
      error: ['invalid URL'],
    }
  }

  const { rssUrl, favicon, error } = await searchRss(addProtocolUrl)
  console.log(rssUrl)

  if (rssUrl === '') {
    return {
      ...initialState,
      url: addProtocolUrl,
      error: error,
    }
  }
  const addHostNameRssUrl =
    rssUrl.startsWith('http://') || rssUrl.startsWith('https://')
      ? rssUrl
      : `${addProtocolUrl}/${rssUrl}`

  const feeds = await parse([addHostNameRssUrl])
  const items = feeds
    .flatMap(feed => feed.items)
    .filter((_, index) => index < 10)
  const feedTitle = feeds.length > 0 ? feeds[0].feedTitle : ''
  const feedDescription = feeds.length > 0 ? feeds[0].feedDescription : ''
  return {
    url: addProtocolUrl,
    items,
    feedTitle,
    feedDescription,
    error: [],
    isModalReady: true,
    favicon,
  }
}
