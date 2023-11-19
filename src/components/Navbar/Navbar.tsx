import './navbar.scss'
const Navbar = () => {
  return (
    <div className="navbar">
      <a className='navbar__link' href="">Home</a>
      <a className='navbar__link' href="">New</a>
      <a className='navbar__link' href="">Popular</a>
      <a className='navbar__link' href="">Trending</a>
      <a className='navbar__link' href="">Categories</a>
    </div>
  )
}

export default Navbar