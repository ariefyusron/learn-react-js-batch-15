const Header = ({ title, subTitle = 'Ini nilai default' }) => {

  return (
    <div id="header">
      <h1 className="title">{`${title}-${subTitle}`}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Header;