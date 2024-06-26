import React, { useState } from 'react';
import { GridColDef } from "@mui/x-data-grid";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputMask from 'react-input-mask';
import "./addUser.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface CustomerData {
  customerName: string;
  customerLastName: string;
  dateOfBirth: Date;
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
    dateOfBirth: new Date(),
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

  const CPFMask = (props) => {
    const { inputRef, ...other } = props;

    return (
      <InputMask mask="999.999.999-99" {...other} ref={inputRef} />
    );
  };

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
        <h1>Cadastar novo cliente</h1>

        /* adicionar formulario aqui baseado no https://mui.com/material-ui/react-text-field/ */

        <form onSubmit={handleSubmit}>

          return (
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >

            <div>
              <TextField
                required
                id="standard-required-name"
                label="Nome"
                defaultValue={formData.customerName}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, customerName: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-lastname"
                label="Sobrenome"
                defaultValue={formData.customerLastName}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, customerLastName: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-date"
                label="Data de Nascimento"
                type="date"
                variant="standard"
                defaultValue={formData.dateOfBirth}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  const parsedDate = new Date(e.target.defaultValue);
                  //console.log(parsedDate);
                  setFormData({ ...formData, dateOfBirth: parsedDate })
                }
                }
              />

              <TextField //ver pre formatacao de cpf
                required
                id="standard-required-cpf"
                label="CPF"
                defaultValue={formData.CPF}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, CPF: e.target.defaultValue })}
              />


              <TextField //ver pre formatacao de rg
                required
                id="standard-required-rg"
                label="RG"
                defaultValue={formData.RG}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, RG: e.target.defaultValue })}
              />

              <TextField // genero
                id="standard-search-gender"
                label="Genero"
                type="search"
                variant="standard"
              />

              <TextField //talvez ocpional
                id="standard-required-email"
                type="email"
                label="Email"
                defaultValue={formData.email}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.defaultValue })}
              />

              <TextField //ver pre formatacao de telefone
                required
                id="standard-required-phone"
                label="Telefone"
                defaultValue={formData.phone}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-street"
                label="Rua"
                defaultValue={formData.street}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-number"
                label="Número"
                defaultValue={formData.number}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.defaultValue })}
              />

              <TextField
                id="standard-required-complement"
                label="Complemento"
                defaultValue={formData.complement}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, complement: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-neighborhood"
                label="Bairro"
                defaultValue={formData.neighborhood}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, neighborhood: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-city"
                label="Cidade"
                defaultValue={formData.city}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-state"
                label="Estado"
                defaultValue={formData.state}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.defaultValue })}
              />

              <TextField //ver pre formatacao de CEP
                required
                id="standard-required-zip"
                label="CEP"
                defaultValue={formData.ZIP}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, ZIP: e.target.defaultValue })}
              />
            </div>
          </Box>
          );

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