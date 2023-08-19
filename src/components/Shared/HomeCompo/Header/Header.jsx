

const Header = () => {

    const Navbar = () => (
        <>
            <li><a>Home</a></li>
            <li><a>Colleges</a></li>
            <li><a>Admission</a></li>
            <li><a>My College</a></li>
        </>
    );

    return (
        <div>
            {/* Navbar section --------------------- */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Navbar />
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">AllColleges</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Navbar />
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            {/* Search Section-------------------------------- */}
<div className="flex justify-center mt-10">
<div>
<input type="text" placeholder="Search Your Text" className="input input-bordered w-full max-w-xs" />
</div>
<div className="ml-3">
<button className="btn btn-success">Search</button>
</div>
</div>
        </div>
    );
};

export default Header;