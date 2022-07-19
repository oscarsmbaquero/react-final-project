import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './JobsList.scss';
import Swal from 'sweetalert2';

import SearchInput from '../../../core/SearchInput/SearchInput';

import {  useGetAuth } from "../../../context/context";

const JobsList = () => {
  const userLogged = useGetAuth();

  console.log(userLogged.id);
    
    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        fetch('http://localhost:4000/jobs')
          .then(response => response.json())
          .then(data => setJobs(data))
      }, []);
      
      //funcion para inscribirse como  usuario logeado al id de una oferta. Oscar. En pruebas
      const handleaddUser = (e,id_job) => {
        e.preventDefault();

        const userlogged = userLogged.id;
        
        fetch(`http://localhost:4000/jobs/add-user/`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _id: id_job,
            userId: userlogged
        })
            }).then(res=>{
              if(res.status === 200){
              Swal.fire("te has Inscrito correctamente", res.message,"success");
              fetch('http://localhost:4000/jobs')
              .then(response => response.json())
              .then(data => setJobs(data))
              
            }
        })
      }
      
      //funcion para eliminar subscripcion del usuario logeado previamente inscrito
      const handledeleteUser = (e,id_job) => {
        e.preventDefault();
        console.log('id_job');

        //const userlogged = userLogged.id;
      }

      
      //Capturamos eel valor del input del buscador  y lo seteamos a keyword pasandolo a minusculas
      const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
      };
      /*Con el valor introducido en el inpute del buscador filtramos los trabajos almacenaos en jobs,
      Filtramos por empresa o por puestos ofertados, previo paso a minusculas*/
      const filteredJobs = jobs.filter((jobs) =>
        jobs.name.toLowerCase().includes(keyword) ||
        jobs.description.toLowerCase().includes(keyword)

        );
      //     console.log(filteredJobs);
  return (
<>
    <SearchInput placeholder="Filter by Companies of Jobs" onChange={onInputChange} />
        <section className="jobList">
      {filteredJobs.map((post, key)=>(
        <div key={key} className="jobList__div">
          <div className='jobList__div1'>
            <h1 className='jobList__h1'>Puesto trabajo: {post.name}</h1>
            {/* <h2 className='jobList__h2'>Salario: {post.salary}</h2> */}
            <h3 className='jobList__h3'>Descripción: {post.description}</h3>
            {/* <p className='jobList__p'>Requisitos: {post.requiremets}</p> */}
            </div>
            {post.candidate_list.includes(userLogged.id)?//comprobamos si el usuario esta inscrito a esa oferta
            <button className='jobList__btn' onClick={(e)=> handledeleteUser(e,post._id)}>Retirar Subscripción</button>
            :
            <button className='jobList__btn' onClick={(e)=> handleaddUser(e,post._id)}>Inscibirme</button>
            }
            <Link to={`/Jobs/${post._id}`}>
              <button className='jobList__btn'>Show More</button>
            </Link>
        </div>
      ))}
      </section>
      </>
  )
}

export default JobsList