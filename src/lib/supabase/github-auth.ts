'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  // クライアントを作成
  const supabase = await createClient()
  const {
    data: { url },
    error,
  } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${process.env.HOST_URL}/auth/callback`,
    },
  })

  console.log('url:', `${process.env.HOST_URL}/auth/callback`)

  if (error) console.error('githubログインエラー:', error.message)
  if (!error && url) redirect(url)
}

export async function signOut() {
  // クライアントを作成
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) console.error('githubログアウトエラー:', error.message)
  if (!error) return true
  return false
}
