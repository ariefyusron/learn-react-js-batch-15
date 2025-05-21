import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from './pages/home'
import DetailPage from './pages/detail'

import ProductContainer from './pages/products/container'
import ProductPage from './pages/products'
import ProductListPage from './pages/products/list'
import ProductDetailPage from './pages/products/detail'

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='detail/:id' element={<DetailPage />} />

        <Route path='product' element={<ProductContainer />}>
          <Route index element={<ProductPage />} />
          <Route path='list' element={<ProductListPage />} />
          <Route path='detail' element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent;