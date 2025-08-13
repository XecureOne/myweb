import { Routes, Route } from "react-router-dom";
import WebsiteRouter from "./WebsiteRouter";
import AppAdmin from "./Admin/AppAdmin";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<WebsiteRouter />} />
        <Route path="/admin/*" element={<AppAdmin />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
