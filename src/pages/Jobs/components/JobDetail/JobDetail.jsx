import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useGetAuth } from "../../../../context/context";
import Swal from 'sweetalert2';

const JobDetail = ({ selectedJob, getJobs }) => {

  const [applyBtn, setApplyBtn] = useState(false);

  const userLogged = useGetAuth();

  useEffect(() => {
    // debugger
    if (selectedJob) {
      if (selectedJob.candidate_list.includes(userLogged.id)) {
        setApplyBtn(true);
      }else {
        setApplyBtn(false)
      }
    }

  }, [selectedJob, userLogged])

  const navigate = useNavigate();

  /*Funcion para inscribirse en una oferta un usuario con el boton en el detalle*/
  const handleAddUser = (e, suscribeJob) => {
    e.preventDefault();
    // SetEstadoboton('nosolictar');
    const userlogged = userLogged.id;
    //console.log(userLogged.id,25);
    fetch(`http://localhost:4000/jobs/add-user/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogged.token}`
      },
      body: JSON.stringify({
        _id: suscribeJob,
        userId: userlogged
      })
    }).then(res => {
      if (res.status === 200) {
        Swal.fire("te has Inscrito correctamente", res.message, "success");
        setApplyBtn(true);
        getJobs()
      }
    }).catch()
  }

  const handledeleteUser = (e, desuscribeJob) => {
    e.preventDefault();
    // SetEstadoboton('solictar');
    const userlogged = userLogged.id;
    console.log(userLogged.id, desuscribeJob, 25);
    fetch(`http://localhost:4000/jobs/delete-user-job/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: desuscribeJob,
        userId: userlogged
      })

    }).then(res => {
      if (res.status === 200) {
        Swal.fire("Candidatura retirada correctamente", res.message, "success");
        navigate('/jobs');
      }

    })
  }

  return (
    <div>
      {selectedJob ? <div className="details">
        <div className="details__text">
          <h1> puesto de trabajo: {selectedJob.name}</h1>
          <h2> Description:{selectedJob.description}</h2>
          <h3> Salary: {selectedJob.salary}</h3>
          <p>  Requirements: {selectedJob.requiremets}</p>
          {applyBtn ? 
            <button onClick={(e) => handledeleteUser(e, selectedJob._id)} className='login__button' >Retirar Solicitud</button>
            :
            <button onClick={(e) => handleAddUser(e, selectedJob._id)} className='login__button' >Solicitar</button>

          }
        </div>
      </div> : <p>ningún trabajo selecionado</p>}
    </div>
  )
}

export default JobDetail