'use client'
import { FeedModal } from '@/components/feed-modal'
import { SearchForm } from '@/components/search-from'
import Form from 'next/form'
import { useActionState, useState } from 'react'
import { handleSubmit } from './action'

export default function Page() {
  const [state, action] = useActionState(handleSubmit, {
    rssUrl: '',
    url: '',
    items: [],
    feedTitle: '',
    feedDescription: '',
    error: [],
    isModalReady: false,
    favicon: '',
  })
  console.log(state)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='p-3'>
      <Form
        action={action}
        className='mb-5'
        onSubmit={() => setModalOpen(true)}
      >
        <SearchForm error={state.error} />
        <FeedModal
          url={state.url ?? ''}
          feedTitle={state.feedTitle}
          feedDescription={state.feedDescription}
          items={state.items}
          isModalReady={state.isModalReady}
          favicon={state.favicon}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Form>
    </div>
  )
}
