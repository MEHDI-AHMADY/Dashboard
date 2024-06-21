import React , { useState } from 'react';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { storage , db } from '../../firebase'; 
import { ref , uploadBytes , getDownloadURL } from 'firebase/storage';
import { showAlert } from '../../util';  
import { collection , addDoc } from 'firebase/firestore';

const style = {
    newProduct : `flex-[4] flex items-center justify-center mx-5 bg-slate-100 rounded-md dark:bg-gray-600`,
    newProductFormWrapper : `p-4 rounded-md`,
    newProductForm : `flex flex-col gap-3`,
    newProductTitle : `p-2 rounded-sm outline-none`,
    newProductFileUpload : `flex items-center gap-2 relative p-2 bg-white`,
    newProductUploadTxt : `cursor-pointer`,
    newProductFile : `absolute top-0 right-0 left-0 bottom-0 opacity-0 cursor-pointer`,
    newProductPrice : `p-2 rounded-sm outline-none`,
    newProductBtn : `w-full bg-white transition hover:bg-green-300 p-2`
}

export default function NewProduct() {
    const [title , setTitle] = useState('');
    const [img , setImg] = useState(null);
    const [price , setPrice] = useState('');

    const titleHandler = e => setTitle(e.target.value);
    const fileImgHandler = e => setImg(e.target.files[0]);
    const priceHandler = e => setPrice(e.target.value);

    const submitHandler = async e => {
        e.preventDefault();
        if(img == null) return;
        try {
            const imgRef = ref(storage ,`images/${img.name}`);
            await uploadBytes(imgRef , img);
            const imgUrl = await getDownloadURL(imgRef);
    
            await addDoc(collection(db , 'products'), {
                title,
                price : parseFloat(price),
                imgUrl
            });
            console.log('Product added to Firestore');
    
            showAlert({title : 'Product Added' , text : 'Your Product has been added successfully' , icon : 'success' , confirmButtonText : 'OK'});
    
            setTitle('');
            setPrice('');
            setImg(null);
    
            console.log('product added.');
        }
        catch (error) {
            console.log(error.message);
            showAlert({
                title: 'Error',
                text: 'There was an error while adding your product. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
              });
        }
    }

  return (
    <div className={style.newProduct}>
        <div className={style.newProductFormWrapper}>
            <form onSubmit={submitHandler} className={style.newProductForm}>
                <input type="text" className={style.newProductTitle} value={title} onChange={titleHandler} placeholder="Name of the Product" />
                <div className={style.newProductFileUpload}>
                    <span className={style.newProductUploadTxt}>Upload an Image</span>
                    <DriveFolderUploadIcon />
                    <input type="file" onChange={fileImgHandler} className={style.newProductFile} />
                </div>
                <input type="text" className={style.newProductPrice} value={price} onChange={priceHandler} placeholder="Enter the Price" />
                <button type="submit" className={style.newProductBtn}>Create</button>
            </form>
        </div>
    </div>
  )
}
