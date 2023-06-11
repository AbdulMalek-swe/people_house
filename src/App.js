import { RouterProvider } from "react-router"
import router from "./Routes/routes.config"
 
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

export default function App() {
  return (
  <>
     <ScrollUpButton    ContainerClassName="   p-2 "
      TransitionClassName="transition duration-300"/>
   <RouterProvider router={router} />
  </>
  )
}