import React, { useState } from 'react';
import { GridColDef } from "@mui/x-data-grid";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputMask from 'react-input-mask';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { api } from "../../../services/api";
import { styled } from '@mui/material/styles';
import "./addCustomer.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

//Adicionar no banco de dados talvez usuario que o criou. Ver o que mais
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

const AddCustomer = (props: Props) => {

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
  const [errorMessage, setErrorMessage] = useState('    ');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createUser(formData) //chamar ou nao a funcao

    //props.setOpen(false)
  };

  async function createUser(formData: CustomerData) {
    try {
      const response = await api.post('/new-customer', formData);
      const data = response.data;
  
      if (data.success) {
        console.log('Cliente criado com sucesso');
        setErrorMessage('');
        props.setOpen(false);
      } else {
        console.error('Erro ao cadastrar cliente', data.error);
        setErrorMessage(data.error);
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Erro ao criar usuário');
      }
      console.error('Erro ao criar usuário:', error);
    }
  }

  const CPFMask = React.forwardRef((props, ref) => {
    return (
      <InputMask
        {...props}
        mask="999.999.999-99"
        ref={ref}
        maskPlaceholder={null}
      />
    );
  });

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Cadastar novo cliente</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
          >
            <div>
              <TextField
                required
                id="standard-required-name"
                label="Nome"
                defaultValue={formData.customerName}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, customerName: e.target.value })}
              />

              <TextField
                required
                id="standard-required-lastname"
                label="Sobrenome"
                defaultValue={formData.customerLastName}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, customerLastName: e.target.value })}
              />

              <TextField
                required
                id="standard-required-date"
                label="Data de Nascimento"
                type="date"
                variant="standard"
                defaultValue={formData.dateOfBirth.toISOString().substring(0, 10)}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  const parsedDate = new Date(e.target.value);
                  setFormData({ ...formData, dateOfBirth: parsedDate })
                }
                }
              />

              <TextField
                required
                id="standard-required-cpf"
                label="CPF"
                defaultValue={formData.CPF}
                variant="standard"
                onChange={(e) => setFormData({ ...formData, CPF: e.target.value })}
                InputProps={{
                  inputComponent: CPFMask as any,
                }}
              />

              <TextField
                required
                id="standard-required-rg"
                label="RG"
                defaultValue={formData.RG}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, RG: e.target.value })}
              />

              <FormControl
                //required
                >
                <FormLabel id="standard-search-gender">Gênero</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })}
                  defaultValue={formData.gender}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                  <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                </RadioGroup>
              </FormControl>

              <TextField
                required
                id="standard-required-email"
                type="email"
                label="Email"
                defaultValue={formData.email}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })}
              />

              <TextField
                //required
                id="standard-required-phone"
                label="Telefone"
                defaultValue={formData.phone}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })}
              />

              <TextField
                //required
                id="standard-required-street"
                label="Rua"
                defaultValue={formData.street}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })}
              />

              <TextField
                //required
                id="standard-required-number"
                label="Número"
                defaultValue={formData.number}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })}
              />

              <TextField
                id="standard-required-complement"
                label="Complemento"
                defaultValue={formData.complement}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, complement: e.target.value })}
              />

              <TextField
                //required
                id="standard-required-neighborhood"
                label="Bairro"
                defaultValue={formData.neighborhood}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, neighborhood: e.target.value })}
              />

              <TextField
                //required
                id="standard-required-city"
                label="Cidade"
                defaultValue={formData.city}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })}
              />

              <TextField
                //required
                id="standard-required-state"
                label="Estado"
                defaultValue={formData.state}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })}
              />

              <TextField
                //required
                id="standard-required-zip"
                label="CEP"
                defaultValue={formData.ZIP}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, ZIP: e.target.value })}
              />
            </div>
            
            {errorMessage && (
              <div className="showError">
                <label>{errorMessage}</label>
              </div>
            )}

            <Button type="submit" variant="contained">
              Cadastrar
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
