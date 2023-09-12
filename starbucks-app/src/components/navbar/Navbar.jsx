import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    const accessToken = localStorage.getItem("access_token");

    return (
        <section>
            <header className="navbar bg-green-900 shadow-md">
                <nav className="container mx-auto px-4 py-6">
                    <ul className="flex justify-between items-center">
                        <li className="mr-6">
                            <Link to="/" className="text-4xl font-bold text-white m-20">
                                Starbucks
                            </Link>
                        </li>
                        <li className="space-x-4 text-white font-bold">
                            {accessToken && (
                                <>
                                    <Link to="/menus" className="nav-link">Menu</Link>
                                    <Link to="/categories" className="nav-link">Categories</Link>
                                    <Link to="/register" className="nav-link">Register</Link>
                                    <button className="nav-link bg-black text-white p-4 rounded-full ml-10 transition duration-300 hover:bg-white hover:text-black pl-10 pr-10" onClick={handleLogout}>Logout</button>
                                </>
                            )}
                            {!accessToken && (
                                <div className="flex">
                                    <Link to="/" className="nav-link bg-black text-white p-4 rounded-full ml-10  transition duration-300 hover:bg-white hover:text-black pl-10 pr-10">Login</Link>
                               </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    );
}
