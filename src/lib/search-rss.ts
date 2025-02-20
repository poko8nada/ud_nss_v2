'use server'
import { JSDOM } from 'jsdom'

export const searchRss = async (
  url: string,
): Promise<{ rssUrl: string; error: string[] }> => {
  try {
    const dom = await JSDOM.fromURL(url)
    const document = dom.window.document

    const html = document.querySelector('html')
    // console.log(html)

    if (!html) return { rssUrl: url, error: [] }

    let rssUrl = ''

    const linkTags = html.querySelectorAll('link')

    for (const linkTag of linkTags) {
      if (
        linkTag.getAttribute('type') === 'application/rss+xml' ||
        linkTag.getAttribute('type') === 'application/atom+xml'
      ) {
        rssUrl = linkTag.getAttribute('href') || ''
      }
    }

    if (rssUrl === '') {
      const links = html.querySelectorAll('a')

      const regex = /(\.|\/)(rss|rdf|atom|feed|xml)([?].+)?$/i

      for (const link of links) {
        const href = link.getAttribute('href')
        // console.log(href)
        if (href && regex.test(href)) {
          rssUrl = href
          break
        }
      }
    }
    console.log(rssUrl)

    return { rssUrl, error: rssUrl === '' ? ['RSS not found'] : [] }
  } catch (error) {
    console.error(error)
    return { rssUrl: '', error: ['invalid URL'] }
  }
}
