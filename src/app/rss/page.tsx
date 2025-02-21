'use client'
import { FeedModal } from '@/components/feed-modal'
import { SearchInput } from '@/components/search-input'
import Form from 'next/form'
import { useActionState, useState } from 'react'
import { handleSubmit } from './action'

export default function Page() {
  const [state, action] = useActionState(handleSubmit, {
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
        <SearchInput error={state.error} />
        <FeedModal
          url={state.url ?? ''}
          feedTitle={state.feedTitle}
          feedDescription={state.feedDescription}
          items={state.items}
          isModalReady={state.isModalReady}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Form>
    </div>
  )
}
