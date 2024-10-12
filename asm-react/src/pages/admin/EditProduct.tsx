import ProductForm from "../../components/ProductForm";
import { useProduct } from "../../hooks/useProduct";


const EditProduct = () => {
 
  const {handleUpdateProduct } = useProduct();
  
  return (
    <div>
      <h1>Edit product</h1>
    <ProductForm onSubmit={handleUpdateProduct}/>
    </div>
  );
};

export default EditProduct;
