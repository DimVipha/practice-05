import React from 'react';


import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import FormCreateProduct, { AddProduct } from './FromCreateProduct';
const ButtonCreate = () => {
    const [openModal, setOpenModal] = useState(false);

function getDataForm(product: AddProduct){
    console.log(product)
}

async function createProduct() {
    try{
        const postProduct = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                   getDataForm
                }
            )
        });
        const res = await postProduct.json();
        console.log(res);
    }catch(error){
        console.log("Error :",error)
    }
    finally{
        setOpenModal(false)
    }
}

  return (
    <>
    <div className='flex justify-center m-5 w-full'>
      <Button  onClick={() => setOpenModal(true)} color="blue">Create Product</Button>
    </div>
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create New Product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
           <FormCreateProduct getDataForm={getDataForm}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createProduct}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonCreate;
