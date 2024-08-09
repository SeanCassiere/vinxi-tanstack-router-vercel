import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/invoices/')({
  component: () => <div>Hello /invoices/!</div>
})