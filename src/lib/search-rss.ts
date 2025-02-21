'use server'
import { JSDOM } from 'jsdom'

type props = {
  rssUrl: string
  favicon: string
  error: string[]
}
export const searchRss = async (url: string): Promise<props> => {
  const result: props = {
    rssUrl: '',
    favicon: '',
    error: [],
  }
  const regex = /(\.|\/)(rss|rdf|atom|feed|xml)([?].+)?$/i
  let homeUrl = ''

  if (regex.test(url)) {
    result.rssUrl = url
    homeUrl = new URL(url).origin
    console.log(homeUrl)
  } else {
    homeUrl = url
  }

  try {
    const dom = await JSDOM.fromURL(homeUrl)
    const document = dom.window.document

    const html = document.querySelector('html')

    if (!html) return { ...result, error: ['invalid URL'] }

    const linkTags = html.querySelectorAll('link')

    for (const linkTag of linkTags) {
      if (
        linkTag.getAttribute('rel') === 'apple-touch-icon' ||
        linkTag.getAttribute('rel') === 'apple-touch-icon-precomposed' ||
        linkTag.getAttribute('rel') === 'icon' ||
        linkTag.getAttribute('rel') === 'shortcut icon'
      ) {
        const href = linkTag.getAttribute('href')
        if (!href) {
          result.favicon = ''
        }
        if (href?.startsWith('http://') || href?.startsWith('https://')) {
          result.favicon = href
        } else if (href?.startsWith('/')) {
          result.favicon = homeUrl + href
        } else {
          result.favicon = `${homeUrl}/${href}`
        }
      }
    }

    if (result.rssUrl === '') {
      for (const linkTag of linkTags) {
        if (
          linkTag.getAttribute('type') === 'application/rss+xml' ||
          linkTag.getAttribute('type') === 'application/atom+xml'
        ) {
          result.rssUrl = linkTag.getAttribute('href') || ''
          break
        }
      }
    }

    if (result.rssUrl === '') {
      const links = html.querySelectorAll('a')

      for (const link of links) {
        const href = link.getAttribute('href')
        if (href && regex.test(href)) {
          result.rssUrl = href
          break
        }
      }
    }

    if (result.rssUrl !== '') {
      if (
        !result.rssUrl.startsWith('http://') &&
        !result.rssUrl.startsWith('https://')
      ) {
        if (result.rssUrl.startsWith('/')) {
          result.rssUrl = homeUrl + result.rssUrl
        } else {
          result.rssUrl = `${homeUrl}/${result.rssUrl}`
        }
      }
    }

    return {
      ...result,
      error: result.rssUrl === '' ? ['RSS not found'] : [],
    }
  } catch (error) {
    console.error(error)
    return { ...result, error: ['invalid URL'] }
  }
}
