import React from 'react';
import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router-dom";
import { BASE_URL } from '../../assets/ApiRoutes';

const FormCompanies = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});
    let navigate = useNavigate();

    const onSubmit = async (formData) => {
        console.log(formData);
        try {
            const result = await fetch(`${BASE_URL}/companies` ,{
                method: "POST",
                headers: {
                        'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData),
            })
            const resData = await result.json();
            navigate("/Jobs");
            console.log(resData);
        } catch (error) {
           console.log(error); 
        }
        
    }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="form">
     <div >
        <label>
            <p>Puesto Ofertado</p>
            <input className="input" type="text" name="name_job" placeholder="Puesto Ofertado" {...register('name_job', {
                required: 'Puesto Ofertado is required',
               
            })}/>
            {errors.name_job && errors.name_job.type === 'required' && <p>{errors.name_job.message}</p>}
        </label>
        <label>
            <p>Empresa</p>
            <input className="input" type="text" name="companie" placeholder="Empresa"  {...register('companie')}/>
        </label>
        <label>
            <p>Email</p>
            <input className="input" type="email" name="email" placeholder="Email"  {...register('email')}/>
        </label>
        <label>
            <p>Cif</p>
            <input className="input" type="text" name="cif" placeholder="Cif"  {...register('cif')}/>
        </label>
        <br></br>
        
        <button className="buttonForm"disabled={!isValid}>Send</button>
        </div>
    </form>
    
  )
  
}


export default FormCompanies