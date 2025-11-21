const Navbar = () => {

    return (

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
                    <div class="navbar-end">
                        <a class="navbar-item">
                            Inicio
                        </a>

                        <a class="navbar-item">
                            Numeros
                        </a>

                        <a class="navbar-item">
                            Personas
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Más
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                                </a>
                                <a class="navbar-item is-selected">
                                    Jobs
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <a class="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-link">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-link">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    )

}

export default Navbar