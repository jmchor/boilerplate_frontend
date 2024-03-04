import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-withAuth/articles/new')({
  component: () => <div>Hello /_layout-home/articles/new!</div>
})