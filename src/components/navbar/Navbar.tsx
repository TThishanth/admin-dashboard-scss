import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="logo" />
            <span>Admin Panel</span>
        </div>
        <div className="icons">
            <img src="search.svg" alt="Search" className="icon" />
            <img src="app.svg" alt="App" className="icon" />
            <img src="expand.svg" alt="Expand" className="icon" />
            <div className="notification">
                <img src="notifications.svg" alt="Notification" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="User" />
                <span>User</span>
            </div>
            <img src="settings.svg" alt="Settings" className="icon" />
        </div>
    </div>
  )
}

export default Navbar