import { addProduct } from '@/app/lib/actions';
import AddProductForm from '@/app/ui/dashboard/product/addForm';

const AddProduct = () => {

    const onSubmit = async (data) => {
        console.log(data); // Aquí puedes enviar los datos a través de una solicitud HTTP, por ejemplo.
        addProduct(data);
    };

    return (
        <AddProductForm  />
    )
}
export default AddProduct