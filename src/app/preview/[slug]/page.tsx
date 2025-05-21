export const dynamic = 'force-dynamic'

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
      <h1>Preview Page for: {slug}</h1>
    </div>
  )
}
