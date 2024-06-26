import { GridColDef } from "@mui/x-data-grid";
import "./addProduct.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

//Adicionar no banco de dados talvez usuario que o criou. Ver o que mais
interface ProductData {
  id: string;
  productName: string;
  description: string;
  category: string;
  brand?: string;
  model?: string;
  serialNumber?: string;
  rentalPrice: number;
  quantityAvailable: number;
  acquisitionDate: string;
  condition: string;
  image?: File;
  securityDeposit: number;
  rentalTerms?: string;
  storageLocation?: string;
  availability: boolean;
}


const AddProduct = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false)
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

export default AddProduct;