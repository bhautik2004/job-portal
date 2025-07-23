import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing";
import Onbording from "./pages/onbording";
import JobListing from "./pages/job-listing";
import MyJobs from "./pages/my-jobs";
import SavedJobs from "./pages/saved-jobs";
import PostJob from "./pages/post-job";
import JobPage from "./pages/job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/onbording',
        element: <Onbording/>
      },
      {
        path: '/my-jobs',
        element: <MyJobs/>
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs/>
      },
      {
        path: '/jobs',
        element: <JobListing/>
      },
      {
        path: '/job/:id',
        element: <JobPage/>
      },
       {
        path: '/post-job',
        element: <PostJob/>
      },
      
    ]
  }
]);


function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
