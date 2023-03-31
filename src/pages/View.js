import React, { useState, useEffect } from "react";

import { app, database } from "./firebase-config";

import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const View = () => {
   const [array, setArray] = useState([])
  // const navigate = useNavigate();
  // const auth = getAuth();
  const db = collection(database, "employee");
  const [data, setData] = useState({
    name: "",
    city: "",
    // gender:"",
  });

  const handleInputChange = (event) => {
    let input = { [event.target.name]: event.target.value };
    setData({ ...data, ...input });
  };

  const handleSubmit = () => {
    addDoc(db, data)
      .then(() => {
        toast.success("Data Added Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    //   signInWithEmailAndPassword(auth, data.email, data.password)
    //   .then((res) => {console.log(res.user);
    //   toast.success("successfully login")
    //   navigate('/');
    // })
    //   .catch((err) => {
    //     toast.error(err.message);
    //   })
  };
  // fetch the data
  // const getData = async () => {
  //   const data = await getDocs(db);
  //   console.log(
  //     data.docs.map((item) => {
  //       return { ...item.data(), id: item.id };
  //     })
  //   );
  // };

  //  const updatedata = (id) => {
  //   let update =doc(db, 'employee', id)
  //   updateDoc(update, {
  //     name:"Shiv Kumar",
  //     email:"shiv1234@gmail.com",
  //     gender:"male",
  //   })
  //   .then(()=> {
  //     toast.success("data updated");
  //     getData();
  //   })
  //   .catch((err)=> {
  //     toast.error("data not updated");
  //   })
  //  }
  

  //  const deletedata = (id) => {
  //   const deletedata = doc(db, 'employee', id)
  //   deleteDoc(deletedata)
  //   .then(() => {
  //     toast.success("Deleted");
  //     getData();
  //   })
  //   .catch((err) => {
  //     toast.error(err.message);
  //   })
  //  }
  // useEffect = () => {
  //   getData();
  // };
  return (
    // login authentication
    //   <div class='container'>
    //   <div class="form-model">
    // <div class="row mt-4">
    //   <input type="email" name="email"  class="form-control" placeholder="email" aria-label="email" onChange={handleInputChange} />
    // </div>
    // <div class="row mt-4">
    //   <input type="password" name="password" class="form-control" placeholder="password" aria-label="password" onChange={handleInputChange} />
    // </div>
    // <button className='btn btn-primary mt-4 form-control mt-4' type='submit' onClick={handleSubmit}>Login</button>
    // {/* <button className='btn btn-danger mt-4 form-control mt-4' onClick={handlelogout}>Logout</button> */}

    // </div>
    // </div>
    <div class="container">
      <div class="form-model">
        <div class="row mt-4">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="name"
            aria-label="name"
            onChange={handleInputChange}
          />
        </div>
        <select
          class="form-select mt-4 mb-4"
          aria-label="Default select example"
          name="city"
          onChange={handleInputChange}
        >
          <option selected>City</option>
          <option value="lucknow">Lucknow</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        {/* <h2>Gender</h2>
<div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="male" onChange={handleInputChange} />
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="female" onChange={handleInputChange} checked />
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div> */}
        <button
          className="btn btn-primary mt-4 form-control mt-4"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {/* <button className='btn btn-danger mt-4 form-control mt-4' onClick={handlelogout}>Logout</button> */}
        {/* {array.map((item) => {
          return (
            <div>
              <h3>{item.name}</h3>
              <h3>{item.city}</h3>
              <h3>{item.gender}</h3> */}
              {/* <button onClick= {() => updatedata(item.id)}>Update</button>
    <button onClick= {() => deletedata(item.id)}>Delete</button> */}
            {/* </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default View;
