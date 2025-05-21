export const dynamicParams = true
export const revalidate = 60

export async function generateStaticParams() {
  return [{ slug: 'example-1' }, { slug: 'example-2' }, { slug: 'example-3' }]
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params

  return (
    <div>
      <h1>Page for: {slug}</h1>
    </div>
  )
}
