import React from "react";
import { Button, Card, Badge } from "react-bootstrap";

const InventoryList = ({ items, deleteItem, showEditForm }) => {
  const getBadgeVariant = (status) => {
    if (status === "Aman") return "success";
    if (status === "Menipis") return "warning";
    return "danger";
  };

  return (
    <div>
      {items.length === 0 ? (
        <p className="text-center text-muted">
            
        </p>
      ) : (
        items.map((prod) => (
          <Card className="mb-3 shadow-sm" key={prod.id}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <strong>Nama Barang:</strong> {prod.name} <br />
                <strong>Kategori:</strong> {prod.category} <br />
                <strong>Harga Beli:</strong> Rp{" "}
                {Number(prod.buyPrice).toLocaleString()} <br />
                <strong>Harga Jual:</strong> Rp{" "}
                {Number(prod.sellPrice).toLocaleString()} <br />
                <strong>Stok:</strong> {prod.stock} <br />
                <strong>Status Stok:</strong>{" "}
                <Badge bg={getBadgeVariant(prod.status)}>{prod.status}</Badge>
              </div>
              <div>
                <Button
                  variant="outline-primary"
                  className="me-2"
                  onClick={() => showEditForm(prod)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => deleteItem(prod.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default InventoryList;
