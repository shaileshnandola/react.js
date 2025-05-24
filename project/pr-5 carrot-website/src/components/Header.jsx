import { useState } from 'react';
import { Container, FormControl, InputGroup, Dropdown, Button, Navbar, Nav, } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
import { LuPhone } from 'react-icons/lu';
import { VscAccount } from 'react-icons/vsc';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart, FaBars } from 'react-icons/fa';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showElement, setShowElement] = useState(false);

  return (
    <div>
      <Container className="py-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div className="d-flex align-items-center">
          <img
            src="https://img.icons8.com/emoji/48/carrot-emoji.png"
            alt="logo"
            width="40"
          />
          <h4 className="mb-0 ms-2">Carrot</h4>
        </div>
        <InputGroup className="flex-grow-1 w-100 w-md-auto" style={{ maxWidth: '600px' }}>
          <FormControl placeholder="Search For items..." />
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary">All Categories</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Fruits</Dropdown.Item>
              <Dropdown.Item>Vegetables</Dropdown.Item>
              <Dropdown.Item>Dairy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="success">
            <CiSearch />
          </Button>
        </InputGroup>
        <div className="d-none d-lg-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-1">
            <VscAccount /> Account
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaRegHeart /> Wishlist
          </div>
          <div className="d-flex align-items-center gap-1">
            <IoCartOutline /> Cart
          </div>
        </div>
      </Container>
      <Navbar bg="light" expand="lg" className="border-top">
        <Container>
          <Navbar.Toggle className="d-flex" aria-controls="basic-navbar-nav">
            <FaBars />
          </Navbar.Toggle>
          <div className="d-flex d-lg-none align-items-center gap-2 ms-3">
            <LuPhone />
            <span style={{ fontWeight: 600 }}>+123 (456) (7890)</span>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-lg-4 gap-2 mt-3 mt-lg-0">
              <Nav.Link href="#" style={{ fontWeight: 600 }}>
                Home
              </Nav.Link>
              <Dropdown
                show={showCategories}
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <Dropdown.Toggle variant="none" style={{ fontWeight: 600 }}>
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Shop Left sidebar</Dropdown.Item>
                  <Dropdown.Item>Shop Right sidebar</Dropdown.Item>
                  <Dropdown.Item>Full Width</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                show={showProduct}
                onMouseEnter={() => setShowProduct(true)}
                onMouseLeave={() => setShowProduct(false)}
              >
                <Dropdown.Toggle variant="none" style={{ fontWeight: 600 }}>
                  Product
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Product Left sidebar</Dropdown.Item>
                  <Dropdown.Item>Product Right sidebar</Dropdown.Item>
                  <Dropdown.Item>Product Full Width</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                show={showPages}
                onMouseEnter={() => setShowPages(true)}
                onMouseLeave={() => setShowPages(false)}
              >
                <Dropdown.Toggle variant="none" style={{ fontWeight: 600 }}>
                  Pages
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>About Us</Dropdown.Item>
                  <Dropdown.Item>Contact Us</Dropdown.Item>
                  <Dropdown.Item>Car</Dropdown.Item>
                  <Dropdown.Item>Checkout</Dropdown.Item>
                  <Dropdown.Item>Track Order</Dropdown.Item>
                  <Dropdown.Item>Wishlist</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                show={showBlog}
                onMouseEnter={() => setShowBlog(true)}
                onMouseLeave={() => setShowBlog(false)}
              >
                <Dropdown.Toggle variant="none" style={{ fontWeight: 600 }}>
                  Blog
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Left Sidebar</Dropdown.Item>
                  <Dropdown.Item>Right Sidebar</Dropdown.Item>
                  <Dropdown.Item>Full Width</Dropdown.Item>
                  <Dropdown.Item>Detail Left Sidebar</Dropdown.Item>
                  <Dropdown.Item>Detail Right Sidebar</Dropdown.Item>
                  <Dropdown.Item>Detail Full Width</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                show={showElement}
                onMouseEnter={() => setShowElement(true)}
                onMouseLeave={() => setShowElement(false)}
              >
                <Dropdown.Toggle variant="none" style={{ fontWeight: 600 }}>
                  Element
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Product</Dropdown.Item>
                  <Dropdown.Item>Typography</Dropdown.Item>
                  <Dropdown.Item>Button</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <div className="d-none d-lg-flex ms-auto align-items-center gap-2">
              <LuPhone />
              <span style={{ fontWeight: 600 }}>+123 (456) (7890)</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
