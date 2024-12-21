import { RouterProvider } from "react-router-dom";
import {router} from "./routes"

function App() {
  return (
    <div className='max-w-[1536px] mx-auto'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
