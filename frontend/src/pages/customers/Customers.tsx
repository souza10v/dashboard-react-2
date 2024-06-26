import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import DataTable from "../../components/dataTable/DataTable";
import Button from "@mui/material/Button";
import AddCustomer from "../../components/add/addCustomer/AddCustomer";
import "./customers.scss";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Customers = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      setLoading(true); 
      const response = await api.get("/customers");
      setCustomers(response.data);
      setLoading(false); 
    } catch (error) {
      // console.error("Error fetching customers:", error);
      setLoading(false); 
    }
  }

  // Function to be passed to AddCustomer to reload customers
  const handleModalClose = () => {
    setOpen(false);
    loadCustomers(); // Reload customers when the modal is closed
  };

  return (
    <div className="customers">
      <div className="info">
        <h1>Clientes</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>Cadastrar cliente</Button>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && <DataTable slug="users" columns={columns} rows={customers} />}

      {open && <AddCustomer slug="user" columns={columns} setOpen={setOpen} handleModalClose={handleModalClose} />}
    </div>
  );
};

export default Customers;
