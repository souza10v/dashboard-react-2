import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from 'react';
import "./addUser.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

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
}

const Add = (props: Props) => {

  const [formData, setFormData] = useState({
    customerName: '',
    customerLastName: '',
    dateOfBirth: '', // Consider using a date picker library for better user experience
    CPF: '',
    RG: '',
    gender: '',
    email: '',
    phone: '',
    street: '',
    number: '', // Street address
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    ZIP: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  //Adicionar data de criacao e data de atualizacao no backend

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return;
    }

    props.setOpen(false)
  };

  // VER API PARA CADASTRAR USUARIO. SE DEVO USAR TRY AND CATCH OU THEN

  //SENDING TO API
  fetch('/api/createUser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formData }), 
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log('User created successfully:', data);
        // Handle successful user creation (e.g., clear form, show success message)
      } else {
        console.error('Error creating user:', data.error);
        // Handle errors from the backend (e.g., display error message)
      }
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      // Handle network or other errors
    });

  // BASIC VALIDATINONS  
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
    ];
  
    if (requiredFields.some((field) => !field)) {
      setErrorMessage('Preencha todos os campos marcados.');
      return true;
    }

    return false; 
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
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