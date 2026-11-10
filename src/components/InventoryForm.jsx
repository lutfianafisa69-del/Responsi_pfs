import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const InventoryForm = ({
  show,
  handleClose,
  addItem,
  editItem,
  itemToEdit,
}) => {
  const [item, setItem] = useState({
    name: "",
    category: "Elektronik",
    buyPrice: "",
    sellPrice: "",
    stock: "",
    status: "Aman",
  });

  useEffect(() => {
    if (itemToEdit) {
      setItem(itemToEdit);
    } else {
      setItem({
        name: "",
        category: "Elektronik",
        buyPrice: "",
        sellPrice: "",
        stock: "",
        status: "Aman",
      });
    }
  }, [itemToEdit, show]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.name.trim()) return;

    const stockVal = parseInt(item.stock, 10);
    let status = "Aman";
    if (stockVal === 0) {
      status = "Habis";
    } else if (stockVal <= 10) {
      status = "Menipis";
    }

    const processedItem = { ...item, stock: stockVal, status };

    if (itemToEdit) {
      editItem(processedItem);
    } else {
      addItem(processedItem);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{itemToEdit ? "Edit Barang" : "Add Barang"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="itemName">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Masukkan nama barang..."
              value={item.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="itemCategory">
            <Form.Label>Kategori</Form.Label>
            <Form.Select
              name="category"
              value={item.category}
              onChange={handleChange}
            >
              <option value="Elektronik">Elektronik</option>
              <option value="ATK">ATK</option>
              <option value="Perlengkapan">Perlengkapan</option>
              <option value="Konsumsi">Konsumsi</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="itemBuyPrice">
            <Form.Label>Harga Beli</Form.Label>
            <Form.Control
              type="number"
              name="buyPrice"
              placeholder="Masukkan harga beli..."
              value={item.buyPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="itemSellPrice">
            <Form.Label>Harga Jual</Form.Label>
            <Form.Control
              type="number"
              name="sellPrice"
              placeholder="Masukkan harga jual..."
              value={item.sellPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="itemStock">
            <Form.Label>Stok</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              placeholder="Masukkan jumlah stok..."
              value={item.stock}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {itemToEdit ? "Update Barang" : "Add Barang"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InventoryForm;
