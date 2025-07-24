import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header() {
  // 금고(loginSlice 금고)(memverSlice 금고), (dateSlice 금고)
  const loginState = useSelector((state) => state.loginSlice);

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="primary"
        data-bs-theme="dark"
        className="bg-body-primary"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">MAIN</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
              {loginState.email ? (
                <>
                  <NavDropdown
                    title="TODO"
                    className="bg-body-primary"
                    bg="primary"
                  >
                    <NavDropdown.Item href="/todo/list">LIST</NavDropdown.Item>
                    <NavDropdown.Item href="/todo/add">ADD</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      예비용
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="PRODUCT"
                    className="bg-body-primary"
                    bg="primary"
                  >
                    <NavDropdown.Item href="/product/list">
                      LIST
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/product/add">ADD</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      예비용
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <></>
              )}
            </Nav>
            {loginState.email ? (
              <Link to={"/member/logout"}>Logout</Link>
            ) : (
              <Link to={"/member/login"}>Login</Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
