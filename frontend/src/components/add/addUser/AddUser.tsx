import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from 'react';
import "./addUser.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface CustomerData {
  customerName: string;
  customerLastName: string;
  dateOfBirth: string; 
  CPF: string;
  RG: string;
  gender: string;
  email: string;
  phone: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  ZIP: string;
}

const Add = (props: Props) => {

  const [formData, setFormData] = useState<CustomerData>({
    customerName: '',
    customerLastName: '',
    dateOfBirth: '', 
    CPF: '',
    RG: '',
    gender: '',
    email: '',
    phone: '',
    street: '',
    number: '', 
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    ZIP: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return;
    }

    props.setOpen(false)
  };

  async function createUser(formData: CustomerData) {
    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData }), 
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('User created successfully:', data);
      } else {
        console.error('Error creating user:', data.error);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }  

  const validateForm = (data: CustomerData): boolean => {
    const requiredFields = [
      data.customerName,
      data.customerLastName,
      data.dateOfBirth,
      data.CPF,
      data.RG,
      data.gender,
      data.email,
      data.phone,
      data.street,
      data.number,
      data.neighborhood,
      data.city,
      data.state,
      data.ZIP
    ];
  
    if (requiredFields.some((field) => !field)) {
      setErrorMessage('Preencha todos os campos marcados.');
      return false;
    }
  
    // Validação de CPF // Melhorar
    const cpfPattern = /^\d{11}$/;
    if (!cpfPattern.test(data.CPF)) {
      setErrorMessage('CPF inválido. Deve conter 11 dígitos numéricos.');
      return false;
    }
  
    // Validação de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      setErrorMessage('Email inválido.');
      return false;
    }
  
    setErrorMessage('');
    return true; 
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>

        /* adicionar formulario aqui baseado no https://mui.com/material-ui/react-text-field/ */ 

        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;