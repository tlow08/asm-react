import ProductForm from "../../components/ProductForm"
import { useProduct } from "../../hooks/useProduct"


const AddProduct = () => {
  const {handleAddProduct} = useProduct()
  return (
    <div>
      <h1>Add product</h1>
      <ProductForm onSubmit={handleAddProduct}/>
    </div>
  )
}

export default AddProduct
