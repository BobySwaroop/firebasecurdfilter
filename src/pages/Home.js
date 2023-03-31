import React ,{ useState, useEffect } from 'react'
import { app, database } from "./firebase-config"; 
import { collection, addDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { toast } from "react-toastify";
const Home = () => {
  

  const [data, setData ] = useState({});
  const collectionRef = collection(database, 'student');
  const namequery = query(collectionRef, where("name", "==", "aftab"));
  // const emailquery = query(collectionRef, where("email", "==", "boby12@gmail.com"));
  
  const handleInputChange = (event) => {
    let input = { [event.target.name]: event.target.value };
    setData({...data , ...input });
  }
  const handleSubmit = () => {
    
    if(!data.name || !data.email ){
      toast.error("Please fill the field");
    }
    else{
      addDoc(collectionRef, {
        name:data.name,
        email:data.email,
      })
      .then(()=> {
        toast.success("data successfully added");
      })
      .catch(()=>{
        toast.error("data not sent");
      })
    }

  }
  // fetch the data from firestore database
  const getData = () => {
    // getDocs(collectionRef).then((res) => {
    //   console.log(res.docs.map((item) => {
    //     return {...item.data(), id : item.id};
        
    //   }))
      
    // })
    onSnapshot(namequery, (data) => {
      console.log(data.docs.map((item) => {
        return item.data();
      }))
    } )


  }
  useEffect(()=> {
    getData();
  },[]);


  return (
    <div class='container'>
    <div class="form-model">
  <div class="row mt-4">
    <input type="text" name="name"  class="form-control" placeholder="name" aria-label="name" onChange={handleInputChange} />
  </div>
  <div class="row mt-4">
    <input type="text" name="email" class="form-control" placeholder="email" aria-label="email" onChange={handleInputChange} />
  </div>
  <button className='btn btn-primary mt-4 form-control mt-4' type='submit' onClick={handleSubmit}>Submit</button> 

  </div>
  </div>
  )
}

export default Home;
