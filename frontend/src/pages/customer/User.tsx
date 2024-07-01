import { useEffect, useState } from "react"
import { singleUser } from "../../data"
import { api } from "../../services/api";
import Single from "../../components/single/Single"
import "./customer.scss"

const Customer = () => {

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      const response = await api.get("api/customers");
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default Customer;