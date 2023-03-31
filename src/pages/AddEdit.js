import React, {useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
// import { getDatabase } from "firebase/database";
// import fireDb from "../firebase";
// import { database } from "../firebase";
import { toast } from "react-toastify";
// import { useFirebase } from '../firebase';

const initialstate = {
  name: "",
  email: "",
  contact: "",
  city:"",
  gender:"",
};

const AddEdit = () => {
  // const firebase = useFirebase();
  
  const [state , setState ] = useState(initialstate);
  const [data, setData] = useState({});
  
  const {name, email, contact, city, gender } = state;
  const handleInputChange = (e) => {
     const { name, value } = e.target;
     setState({ ...state, [name]: value });
     
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !email || !contact ){
      toast.error("Please fill all details");
    } 
    // else
    //  {
    //   database.child("contact").push(state, (err) => {
    //     if(err){
    //       toast.error(err);
    //     }
    //     else{
    //       toast.success("Successful data Add");
    //       console.log('data add');
    //     }
    //   })
    // }

  }

  return (
    <div class='container'>
    <div class="form-model">
  <div class="row mt-4">
    <input type="text" name="name" value={name} class="form-control" placeholder="name" aria-label="name" onChange={handleInputChange} />
  </div>
  <div class="row mt-4">
    <input type="text" name="email" value={email} class="form-control" placeholder="email" aria-label="email" onChange={handleInputChange} />
  </div>
  <div class="row mt-4">
    <input type="number" name="contact" value={contact} class="form-control" placeholder="contact" aria-label="contact" onChange={handleInputChange} />
  </div>
  <select class="form-select mt-4" aria-label="Default select example">
  <option selected>-City-</option>
  <option value={city}>Lucknow</option>
  <option value={city}>Delhi</option>
  <option value={city}>Mumbai</option>
</select>
<h3 className='mt-4'>Gender</h3>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" value={gender} id="flexRadioDefault1" onChange={handleInputChange}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="gender" value={gender} id="flexRadioDefault2" checked onChange={handleInputChange} />
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

<button className='btn btn-primary mt-4 form-control mt-4' type='submit' onClick={handleSubmit}>Submit</button> 
</div>
      
</div>    
  )
}

export default AddEdit
