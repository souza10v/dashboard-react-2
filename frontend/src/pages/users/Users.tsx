import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";

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

const Users = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      setLoading(true); 
      const response = await api.get("/api/customers");
      setCustomers(response.data);
      setLoading(false); 
    } catch (error) {
      // console.error("Error fetching customers:", error);
      setLoading(false); 
    }
  }

  return (
    <div className="users">
      <div className="info">
        <h1>Customers</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && <DataTable slug="users" columns={columns} rows={customers} />}

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
