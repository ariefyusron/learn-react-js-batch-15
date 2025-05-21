import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from './pages/home'
import DetailPage from './pages/detail'

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='detail/:id' element={<DetailPage />} />

        <Route path='product'>
          <Route index element={<div>Produk Aja</div>} />
          <Route path='list' element={<div>Produk List</div>} />
          <Route path='detail' element={<div>Produk Detail</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent;