import { Outlet } from 'react-router'

const Container = () => {

  return (
    <div>
      <h1>Header</h1>
      <Outlet />
    </div>
  )
}

export default Container;