import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-home/articles/$articleid')({
  component: () => <div>Hello /_layout-home/articles/$articleid!</div>
})