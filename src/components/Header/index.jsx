import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Swal from "sweetalert2";
import styles from "./style.module.css";
import logo from "../../assets/img/favicon.png";

const Header = () => {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("auth"));

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("auth");
                navigate("/login");
                Swal.fire({
                    title: "Logout Success",
                    icon: "success"
                });
            }
        });
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <img src={logo} alt="DuoMart" className={styles.logo} />
                    DuoMart
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Nav.Link as={Link} to={auth ? (auth.roles === "user" ? "/" : "/admin") : "/"}>
                                    Home
                                </Nav.Link>
                            </li>
                            {auth ? (
                                auth.roles === "user" ? (
                                    <li className="nav-item">
                                        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Nav.Link as={Link} to="/rekap-penjualan">Rekap Penjualan</Nav.Link>
                                    </li>
                                )
                            ) : (
                                <li className="nav-item">
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </li>
                            )}
                            {auth && (
                                <li className="nav-item">
                                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
