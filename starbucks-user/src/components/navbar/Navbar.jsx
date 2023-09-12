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
                                    <button className="nav-link bg-black text-white p-4 rounded-full pl-10 pr-10 ml-10" onClick={handleLogout}>Logout</button>
                                </>
                            )}
                            {!accessToken && (
                                <div className="flex">
                                    <Link to="/u/menus" className="nav-link mt-4">Menu</Link>
                                    <Link to="/login" className="nav-link bg-black text-white p-4 rounded-full ml-10">Go to Admin Page</Link>
                               </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    );
}
