import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-withAuth/projects/new')({
  component: () => <div>Hello /_layout-home/projects/new!</div>
})