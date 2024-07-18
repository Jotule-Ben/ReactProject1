import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MerchantNavbar from "./MerchantNavbar";
import { Container, Table } from "react-bootstrap";
import { Context } from "../context/Context";

const AllCategories = () => {
  const {
    formData,
    handleCreateCategory,
    handleInputChange,
    categories,
    handleDeleteCategory,
  } = useContext(Context);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MerchantNavbar />
      <Container>
        <Table striped bordered style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button
          variant="secondary"
          onClick={handleShow}
          style={{ marginTop: "20px" }}
        >
          Create Category
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <input
              type="text"
              name="categoryName"
              placeholder="Category Name"
              value={formData.categoryName || ""}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
            />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="primary" onClick={handleClose}> */}
            <Button variant="primary" onClick={handleCreateCategory}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default AllCategories;
