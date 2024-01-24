import { createFileRoute } from '@tanstack/react-router'
import { fetchPost } from '../posts'

export const Route = createFileRoute('/posts/$postId/deep')({
  loader: async ({ params: { postId } }) => fetchPost(postId),
})
