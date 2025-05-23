import { Outlet, NavLink, useNavigate, useLocation } from 'react-router'

const Container = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const queryString = new URLSearchParams(location.search)

  return (
    <div>
      <h1>Header</h1>

      <button onClick={() => {
        queryString.set('first', 'jamal')
        navigate(`detail?${queryString.toString()}`)
      }}>Change query string</button>

      <div>
        <NavLink to=''>Produk aja</NavLink>
        <br />
        <NavLink to='list'>List</NavLink>
        <br />
        <NavLink to={`detail${location.search}`}>Detail</NavLink>
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