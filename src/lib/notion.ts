import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getInfo = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  })
  const info = response.results

  const formattedInfo = info.map(item => {
    if ('properties' in item) {
      const properties = item.properties as unknown as {
        isPublished?: { select: { name: string } }
        date?: { date: { start: string } }
        title?: { title: { plain_text: string }[] }
        category?: { select: { name: string; color: string } }
        link?: { rich_text: { plain_text: string }[] }
      }
      return {
        id: item.id,
        isPublished: properties.isPublished?.select?.name || null,
        date: properties.date?.date?.start || null,
        title: properties.title?.title[0]?.plain_text || null,
        category: properties.category?.select?.name || null,
        catColor: properties.category?.select?.color || null,
        link: properties.link?.rich_text[0]?.plain_text || null,
      }
    }
    return null
  })

  const filteredInfo = formattedInfo
    .filter(item => item !== null)
    .filter(item => {
      if (
        !item.isPublished ||
        !item.date ||
        !item.title ||
        !item.category ||
        !item.catColor
      ) {
        return false
      }
      return true
    })
    .filter(item => {
      if (process.env.PRODUCT_OR_DEV === 'product') {
        return item.isPublished === 'isPublished'
      }
      return true
    })

  // console.log(filteredInfo)

  return filteredInfo
}
