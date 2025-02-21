'use server'
import { type items, parse } from '@/lib/parse'
import { searchRss } from '@/lib/search-rss'

export type props = {
  rssUrl: string | null
  url: string
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
    rssUrl: '',
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
  const url = urlValue.toString().trim().replace(/\/$/, '')

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

  const feeds = await parse([rssUrl])
  const items = feeds
    .flatMap(feed => feed.items)
    .filter((_, index) => index < 5)
  const feedTitle = feeds.length > 0 ? feeds[0].feedTitle : ''
  const feedDescription = feeds.length > 0 ? feeds[0].feedDescription : ''
  return {
    rssUrl,
    url: new URL(rssUrl).origin,
    items,
    feedTitle,
    feedDescription,
    error: [],
    isModalReady: true,
    favicon,
  }
}
