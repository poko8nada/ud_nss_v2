export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className='flex h-[calc(100vh-5rem)] flex-col items-center justify-center'>
      {children}
    </div>
  )
}
