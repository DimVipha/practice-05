import React, { useEffect, useState } from 'react';

import CardComponent from './Card/CardComponent';
import LoadingComponent from '../Loader/LoadingComponent';
import ButtonCreate from '../ButtonCreate';
import FooterComponent from '../FooterComponent';
import NavbarComponent from '../NavbarComponent';

export type Products = {
   readonly id?:number,
    title:string,
    description:string,
    image:string
}

const HomeComponent = () => {
  const [getProduct,setGetProduct] = useState<Products[]>()
  const [loading,setLoading]=useState(false)
  async function fetchData(){
    setLoading(true)
    try{
        const fetchProduct = await fetch('https://fakestoreapi.com/products')
        const res = await fetchProduct.json()
        console.log(res)
        setGetProduct(res)

    }catch(error){
        console.log("Error :",error)
    }finally{
        setLoading(false)
    }
  }  
  useEffect(()=>{
    fetchData()
  },[])
  return (

    <div>
        <NavbarComponent/>
        <ButtonCreate/>
        {
            loading ? (<LoadingComponent/> ):
            (
                <div className='grid grid-cols-1 max-w-sm md:grid-cols-2 md:max-w-3xl  lg:grid-cols-3 lg:max-w-5xl  xl:grid-cols-3 xl:max-w-screen-xl mx-auto gap-7'>
                    {
                        (getProduct?.map(
                            (pro,index)=>(
                            <CardComponent image={pro.image} key={index} title={pro.title} description={pro.description} />
                        )
                        )
                        )
                    }
                </div>
            )

            
        }
        <FooterComponent/>
    </div>
  );
}

export default HomeComponent;
