import logo from './Logo.png'
const Navbar = () => {
  return (
    <header
      className="bg-dark-900 text-light-900"
      style={{
        height: '73px',
      }}
    >
      <div className="flex items-center p-2">
        <img src={logo} style={{ height: 50 }} alt="logo" />
        <h2 className="ml-2">RAIZE</h2>
      </div>
    </header>
  )
}

export default Navbar
