import { Outlet, NavLink, useNavigate } from 'react-router'

const Container = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Header</h1>

      <div>
        <NavLink to=''>Produk aja</NavLink>
        <br />
        <NavLink to='list'>List</NavLink>
        <br />
        <NavLink to='detail'>Detail</NavLink>
        <br />
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <div style={{ marginTop: '50px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Container;