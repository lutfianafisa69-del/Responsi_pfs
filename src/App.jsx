import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import InventoryList from "./components/InventoryList";
import InventoryForm from "./components/InventoryForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Kertas HVS A4",
      category: "ATK",
      buyPrice: 45000,
      sellPrice: 55000,
      stock: 5,
      status: "Menipis",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);

  const handleCloseForm = () => {
    setShowForm(false);
    setItemToEdit(null);
  };

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const editItem = (updatedItem) => {
    setItems(items.map((it) => (it.id === updatedItem.id ? updatedItem : it)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((it) => it.id !== id));
  };

  const showEditForm = (item) => {
    setItemToEdit(item);
    handleShowForm();
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Dashboard Manajemen Inventaris Barang Gudang</h1>
      <Button variant="primary" onClick={handleShowForm}>
        + Add Barang
      </Button>

      <div className="mt-4">
        <InventoryList
          items={items}
          deleteItem={deleteItem}
          showEditForm={showEditForm}
        />
        <InventoryForm
          show={showForm}
          handleClose={handleCloseForm}
          addItem={addItem}
          editItem={editItem}
          itemToEdit={itemToEdit}
        />
      </div>
    </Container>
  );
}

export default App;
