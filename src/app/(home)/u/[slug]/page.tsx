import Brinks from '@/components/brinks'

interface PageProps {
  params: {
    slug: string
  }
}

const Page = ({ params }: PageProps) => {
  return <Brinks params={params.slug} />
}

export default Page
