import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" href="/">Staff App</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active"
                                href="/staff-list">Staff List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}