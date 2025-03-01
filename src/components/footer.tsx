export default function Footer() {
  return (
    <footer className='mt-12 flex items-center justify-center p-4'>
      <p className='text-muted-foreground text-sm'>
        &copy; {`${new Date().getFullYear()} next-shadcn-supabase`}
      </p>
    </footer>
  )
}
