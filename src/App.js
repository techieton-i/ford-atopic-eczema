import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <div className="container1">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
