import React from 'react';

import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router-dom";



const FormEmployers = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});
    let navigate = useNavigate();
    const onSubmit = async (formData) => {
        console.log(formData);
        try {

            const result = await fetch("http://localhost:4000/employers" ,{
                method: "POST",
                headers: {
                        'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData),
            })
            const resData = await result.json();
            navigate("/Users");
            console.log(resData);
            
            
            
        } catch (error) {
           console.log(error); 
        }
        
    }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} class="form">
     <div >
        <label>
            <p>Name</p>
            <input className="input" type="text" name="name" placeholder="Nombre" {...register('name', {
                required: 'Nombre is required',
            })}/>
            {errors.name && errors.name.type === 'required' && <p>{errors.name.message}</p>}
        </label>
        <label>
            <p>Surname</p>
            <input className="input" type="text" name="surname" placeholder="Surname"  {...register('surname')}/>
        </label>
        <label>
            <p>Dni</p>
            <input className="input" type="text" name="dni" placeholder="Dni"  {...register('dni')}/>
        </label>
        <label>
            <p>Email</p>
            <input className="input" type="email" name="email" placeholder="Email"  {...register('email')}/>
        </label>
        <label>
            <p>Perfil</p>
            <input className="input" type="text" name="job" placeholder="Perfil"  {...register('job')}/>
        </label>
        <label>
            <p>Age</p>
            <input className="input" type="text" name="age" placeholder="Age"  {...register('age')}/>
        </label>
        
        <br></br>
        
        <button className="buttonForm"disabled={!isValid}>Send</button>
        </div>
    </form>
    
  )
  
}

export default FormEmployers