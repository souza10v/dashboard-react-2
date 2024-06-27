import { GridColDef } from "@mui/x-data-grid";
import "./addProduct.scss";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

//Adicionar no banco de dados talvez usuario que o criou. Ver o que mais
interface ProductData {
  productName: string;
  description: string;
  category: string;
  brand?: string;
  model?: string;
  serialNumber?: string;
  rentalPrice: number;
  quantityAvailable: number;
  condition: string;
  image?: string;
  securityDeposit?: number;
  rentalTerms?: string;
  storageLocation?: string;
  status: boolean;
}

const AddProduct = (props: Props) => {

  const [formData, setFormData] = useState<ProductData>({
    productName: '',
    description: '',
    category: '',
    brand: '',
    model: '',
    serialNumber: '',
    rentalPrice: 0,
    quantityAvailable: 0,
    condition: '',
    image: '',
    rentalTerms: '',
    securityDeposit: 0,
    storageLocation: '',
    status: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("working ", formData)
    
    props.setOpen(false)
  };

  return (

    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Cadastar novo produto </h1>

        <form onSubmit={handleSubmit}>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
          >

            <div>
              <TextField
                required
                id="standard-required-name"
                label="Nome do Produto"
                defaultValue={formData.productName}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.defaultValue })}
              />

              <TextField
                //required
                id="standard-required-description"
                label="Descrição"
                defaultValue={formData.description}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.defaultValue })}
              />


              <TextField //categoria necessario?
                //required
                id="standard-required-category"
                label="Categoria"
                defaultValue={formData.category}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.defaultValue })}
              />

              <TextField
                //required //marca necessario?
                id="standard-required-brand"
                label="Marca"
                defaultValue={formData.brand}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.defaultValue })}
              />

              <TextField
                //required //serial number necessario?
                id="standard-required-serial-number"
                label="Número de Serial"
                defaultValue={formData.serialNumber}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, serialNumber: e.target.defaultValue })}
              />

              <TextField
                required
                id="standard-required-price"
                label="Preço"
                type="number"
                defaultValue={formData.rentalPrice}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, rentalPrice: Number(e.target.defaultValue) })}
              />

              <TextField
                required
                id="standard-required-quantity-available"
                label="Quantidade"
                type="number"
                defaultValue={formData.quantityAvailable}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, quantityAvailable: Number(e.target.defaultValue) })}
              />

              <TextField
                id="standard-required-condition-date"
                label="Condição"
                defaultValue={formData.condition}
                variant="standard"
                onChange={(e) =>
                  setFormData({ ...formData, condition: e.target.defaultValue })}
              />
            </div>

            <Button type="submit" variant="contained">
              Cadastrar
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;