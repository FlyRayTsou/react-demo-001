import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts, { loader as postsLoader} from './routes/Posts.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, { action as newPostAction } from './routes/NewPost.tsx'
import PostDetails, { loader as postDetailsLoader} from './routes/PostDetails.tsx'
import RootLayout from './routes/RootLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader }
        ]
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
