import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MerchantNavbar from "./MerchantNavbar";
import { Container, Table } from "react-bootstrap";
import { Context } from "../context/Context";

const AllProduct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    formData,
    handleInputChange,
    categories,
    getInitialState,
    handleSelectChange,
    handleSelectCategoryChange,
    handleCreateProduct,
    createProduct,
    handleSelectLocationChange,
    handleFileChange,
    handleFileSubmit,
  } = useContext(Context);

  return (
    <>
      <MerchantNavbar />
      <Container fluid>
        <Table striped bordered style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Currency</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(createProduct) &&
              createProduct.map((product, index) => (
                <tr key={product?.id}>
                  <td>{index + 1}</td>
                  <td>{product?.title}</td>
                  <td>{product?.currency}</td>
                  <td> {product?.price}</td>
                  <td>{product?.brand}</td>
                  <td>{product?.quantity}</td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Button
          variant="secondary"
          onClick={handleShow}
          style={{ marginTop: "20px" }}
        >
          Create Product
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>

          <Modal.Body>
            <label>Product Name</label>
            <br />
            <input
              name="productTitle"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="add a title ..."
              value={formData.productTitle || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Description</label>
            <br />
            <input
              name="productDescription"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="add a description ..."
              value={formData.productDescription || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Price</label>
            <br />
            <input
              name="productPrice"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="price ..."
              value={formData.productPrice || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Brand </label>
            <br />
            <input
              name="productBrand"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="add a brand ..."
              value={formData.productBrand || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Product Quantity</label>
            <br />
            <input
              name="productQuantity"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="number"
              placeholder="Product Quantity ..."
              value={formData.productQuantity || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Currency</label>
            <br />
            <input
              name="productCurrency"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="Currency ..."
              value={formData.productCurrency || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Min Quantity</label>
            <br />
            <input
              name="productMinQuantity"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="Minimum Quantity ..."
              value={formData.productMinQuantity || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Max Quantity</label>
            <br />
            <input
              name="productMaxQuantity"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="Maximum Quantity ..."
              value={formData.productMaxQuantity || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Discount </label>
            <br />
            <input
              name="productDiscount"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="text"
              placeholder="Discount ..."
              value={formData.productDiscount || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Discount Expiration</label>
            <br />
            <input
              name="productDiscountExpiration"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              type="datetime-local"
              placeholder="Discount Expiration ..."
              value={formData.productDiscountExpiration || ""}
              onChange={handleInputChange}
            />
          </Modal.Body>

          <Modal.Body>
            <label>Refund policy </label>
            <br />
            <select
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              name=""
              value={getInitialState.value}
              onChange={handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </Modal.Body>

          <Modal.Body>
            <label>Has discount </label>
            <br />
            <select
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              name=""
              value={getInitialState.value}
              onChange={handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </Modal.Body>

          <Modal.Body>
            <label>Has shipment </label>
            <br />
            <select
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              name=""
              value={getInitialState.value}
              onChange={handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </Modal.Body>

          <Modal.Body>
            <label>Has variation </label>
            <br />
            <select
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              name=""
              value={getInitialState.value}
              onChange={handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </Modal.Body>

          <Modal.Body>
            <label>Shipping Locations </label>
            <br />
            <select
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              name=""
              multiple
              multiselect
              value={getInitialState.value}
              onChange={handleSelectLocationChange}
            >
              <option value="all">All Countries</option>
              <option value="canada">Canada</option>
              <option value="nigeria">Nigeria</option>
              <option value="ghana">Ghana</option>
            </select>
          </Modal.Body>

          <Modal.Body>
            <label>Select the Product Category</label>
            <br />
            <select
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              name="taskTags"
              value={getInitialState.value}
              onChange={handleSelectCategoryChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </Modal.Body>

          <Modal.Body>
            <input
              name="productImage"
              style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
              // type="file"
              type="text"
              placeholder="add an image URL ..."
              value={formData.productImage || ""}
              onChange={handleInputChange}
              // onChange={handleFileChange}
            />
            <button onClick={handleFileSubmit}>Upload</button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCreateProduct}>
              {/* <Button variant="primary" onClick={handleCreateCategory}> */}
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default AllProduct;
