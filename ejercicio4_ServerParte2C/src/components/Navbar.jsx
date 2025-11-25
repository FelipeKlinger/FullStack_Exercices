const Navbar = () => {

    return (
        <>
            <div className="block-promo">
                <div className="mid">
                    <p>Your phone's reminder list and phonebook.</p>
                    <button className="button is-medium">Try ReactGress Early &gt;</button>
                </div>
            </div>
            <nav>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <svg width="1090" height="160" viewBox="0 0 850 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 80 Q100 20 120 80 T200 80" stroke="#ffffffff" stroke-width="27" fill="none" />
                                <circle cx="120" cy="80" r="16" fill="#4983ffff" />
                                <text x="230" y="110" font-size="90" font-family="Arial, Helvetica, sans-serif" fill="#ffffffff" font-weight="bold">REACTGRESS</text>
                            </svg>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">
                                Products
                            </a>

                            <a class="navbar-item">
                                My Numbers
                            </a>

                            <a class="navbar-item">
                                Blog
                            </a>
                        </div>
                        <div class="navbar-end">
                            <a class="navbar-item">
                                Contact
                            </a>
                            <a class="navbar-item">
                                Log in
                            </a>
                            <a class="button is-link">
                                Get started
                            </a>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )

}

export default Navbar;