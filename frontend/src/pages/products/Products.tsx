import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { api } from "../../services/api"
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/addUser/AddUser";
import "./products.scss";
// import { products } from "../../data";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      setLoading(true); 
      const response = await api.get("/api/products");
      setProducts(response.data);
      setLoading(false); 
    } catch (error) {
      // console.error("Error fetching customers:", error);
      setLoading(false); 
    }
  }


  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>Add New Products</Button>
      </div>    

      {loading && <p>Loading...</p>}

      {!loading && <DataTable slug="products" columns={columns} rows={products} />}

      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;