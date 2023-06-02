const Header = ({color, text}) => {
    return(
        <>
            <header className="container">
                <h1 className="header">Task Tracker</h1>
                <button style={{ backgroundColor: color }} className="btn">{text}</button>
            </header>
        </>
    )
}

export default Header;