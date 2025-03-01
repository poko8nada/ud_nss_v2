export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className='flex h-[calc(100svh-5rem)] items-center justify-center'>
      {children}
    </div>
  )
}
