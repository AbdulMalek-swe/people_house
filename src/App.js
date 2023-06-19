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


// placeholder='Enter country'
// type="country"
// id="country"
// name="country"
// className={`block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg rounded-lg  ${errors.country?'border border-red':'border border-white'}`}
// onChange={handleChange}
// onBlur={handleBlur}
// value={values.country}
// error={errors.country && touched.usecountry && errors.country}
// helperText={errors.country && touched.country && errors.country}
//         />
//         {errors.country && touched.country && (
//             <div className="text-red text-xs">{errors.country}</div>
//         )}

//         {!errors.country && touched.country && (
//             <div className="text-green-500 text-xs">Ok</div>
//         )}