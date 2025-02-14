import type { featureItem } from '@/types/featureItem'
import Image from 'next/image'

const features: featureItem[] = [
  {
    title: 'Next.js',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.',
    href: '/images/next.svg',
  },
  {
    title: 'React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.',
    href: '/images/react.svg',
  },
  {
    title: 'PlanetScale',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.',
    href: '/images/planetScale.svg',
  },
  {
    title: 'tailwind CSS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.',
    href: '/images/tailwind.svg',
  },
  {
    title: 'OAuth',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.',
    href: '/images/oauth.svg',
  },
  {
    title: 'Stripe',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.',
    href: '/images/stripe.svg',
  },
]

const Item = ({ title, description, href }: featureItem) => {
  return (
    <div className='flex flex-col items-center gap-2 rounded-xl border bg-background p-4'>
      <Image src={href} alt={title} width={50} height={50} />
      <h3 className='font-semibold'>{title}</h3>
      <p className='text-muted-foreground text-sm'>{description}</p>
    </div>
  )
}

export default () => {
  return (
    <div className='mx-auto grid max-w-[64rem] grid-cols-2 gap-4 p-3 md:grid-cols-3'>
      {features.map(feature => (
        <Item
          key={feature.title}
          title={feature.title}
          description={feature.description}
          href={feature.href}
        />
      ))}
    </div>
  )
}
