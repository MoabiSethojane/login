// import React,{useState} from 'react'
// import{auth, db} from '../firebase.js'
// import{uid} from "uid"
// import {getDatabase, push,set, ref} from "firebase/database";
// // import {db1, storage} from '../firebase.js'
// export const AddProduct = () => {
//     const[productName, setProductName]= useState("");
// const[productPrice,setProductPrice]= useState(0);
// const[productImage, setProductImage]= useState(null);
// const[error,setError]= useState('');
// const [product, setAddPoduct]= useState(" ");

// const types =['image/png', "image/jpeg"]
// const productImageHandler=(e)=>{
//     let selectedFile = e.target.files[0];
//     if(selectedFile&& types.includes(selectedFile.type)){
//         setProductImage(selectedFile);
//         setError('')
//     }else{
//         setProductImage(null)
//         setError('Please select a valid image type png or jpeg');
//     }
// }
// const add =(e)=>{
//     e.preventDefault();
//     console.log(productName,productPrice,productImage)
//      db=getDatabase(app);
//     const reference=ref(db,"Restuarants/" +"userRest");
//     if(!productName||!productPrice || !productImage  ){
//       alert("Please provide value in each input field")
//     }else{
//      push(reference,{
//         productName:productName,
//         productPrice:productPrice,
//         productImage:productImage,
     
//      }).then(res=>console.log(res))
//      .catch(err=>console.log(err))
//      alert("Rest successfully Added")
//    };
    
// //    const uploadTask= storage.ref(`product-images/${productImage.name}`).put(productImage)
// }
// // const writeToDatabase=()=>{
// // const uid = uid();
// // const db=getDatabase(app);
// // set(ref(db, `${auth.currentUser.uid}/${uid}`),{
// //     product: product,
// //     uid: uid,
// // });
// // setAddPoduct(" ");
// // }
//   return (
//     <div className='container'>
//     <br/>
//     <h2>Add Restaurant</h2>
//     <hr/>
//     <form autoComplete='off' className='from-group' onSubmit={add(e)}>
// <lable htmlFor="product-name">Product Name</lable>
// <br/>
// <input type="text" className='form-control' required onChange={(e)=>setProductName(e.target.value)} value={productName}/>
// <label htmlFor='product-price'>Product Price</label>
// <br/>
// <input type="number" className='form-control' required onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
// <br/>
// <lable htmlFor="prodcut-img">Product Image</lable>
// <br/>
// <input type="file" className='form-control' onChange={productImageHandler} />
// <br />
// <button className='btn btn-success btn-md mybtn' onClick={add(e)}>ADD</button>
//     </form>
//     {error &&<span>{error}</span>}
//     </div>
//   )

// }
// //
// //
//M22100335932192
 import {push, ref} from 'firebase/database'
import { db } from '../firebase'
 import React,{useState} from 'react'
import { async } from '@firebase/util'
 
 function AddProduct(){
  const [brand , setBrand]= useState()
  const [category, setCategory] = useState()
  const[filter, setFilter]= useState()
  const [productName, setProductName] = useState()
  const [Price, setPrice]= useState()
  const[Colors, setColors]=useState()

const add= async=()=>{
  let productInfo={
    brandname:brand,
    productCategory: category,
    productFilter: filter,
    productname: productName,
    productPrice:Price,
    productColor: Colors

  }
  console.log(productInfo)
  push(ref(db),`ProductInfo`,{
    productInformation:productInfo
  })
}
 }
 export default AddProduct;