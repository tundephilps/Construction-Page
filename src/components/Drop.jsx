import { useState } from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} id="togglebutton" class="navbar-toggler">
        <AiOutlineMenu />
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            defaultActiveKey="/home"
            className="flex-column"
            class="navbar-nav ms-auto py-lg-0"
          >
            <Nav.Link class="nav-item nav-link active" href="/home">
              <a href="" class="nav-item nav-link active">
                Home
              </a>
            </Nav.Link>
            <Nav.Link eventKey="link-1">
              <a href="" class="nav-item nav-link">
                Our Services
              </a>
            </Nav.Link>
            <Nav.Link eventKey="link-2">
              <a href="" class="nav-item nav-link">
                Contact Us
              </a>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export const Drop = () => {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
};
