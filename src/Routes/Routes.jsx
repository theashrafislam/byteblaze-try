import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/blogs",
          loader: () =>  fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element: <Blogs></Blogs>,
        },
        {
          path: "/blog/:id",
          element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Content></Content>
            },
            {
                path: "author",
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Author></Author>
            }
          ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks></Bookmarks>
        }
      ]
    }
    
  ])