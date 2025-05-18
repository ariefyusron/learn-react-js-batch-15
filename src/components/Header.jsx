const Header = ({ title, subTitle }) => {

  return (
    <div id="header">
      <h1 className="title">{title}{subTitle ? ` - ${subTitle}` : ''}</h1>
      {!subTitle ? <></> : <p>{subTitle}</p> }
    </div>
  )
}

export default Header;