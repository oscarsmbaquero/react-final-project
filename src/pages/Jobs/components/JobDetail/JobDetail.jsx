import React, { useEffect, useState } from 'react';

import { useGetAuth } from "../../../../context/context";
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../../assets/ApiRoutes';
import { useNavigate } from 'react-router-dom';

const JobDetail = ({ selectedJob, getJobs }) => {

  const [applyBtn, setApplyBtn] = useState(false);
  const navigate = useNavigate()

  const userLogged = useGetAuth();

  useEffect(() => {
    if (selectedJob) {
      if (selectedJob.candidate_list.includes(userLogged.id)) {
        setApplyBtn(true);
      } else {
        setApplyBtn(false)
      }
    }
  }, [selectedJob, userLogged])

  /*Funcion para inscribirse en una oferta un usuario con el boton en el detalle*/
  const handleAddUser = () => {
    fetch(`${BASE_URL}/jobs/add-user/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogged.token}`
      },
      body: JSON.stringify({
        _id: selectedJob._id,
      })
    }).then(res => {
      if (res.status === 200) {
        getJobs()
        Swal.fire("Te has inscrito correctamente", res.message, "success");
        setApplyBtn(true);
      } else {
        navigate('/users/login')
      }
    }).catch((error) => {
      console.error(error);
    })
  };

  const handledeleteUser = () => {
    fetch(`${BASE_URL}/jobs/delete-user-job/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogged.token}`
      },
      body: JSON.stringify({
        _id: selectedJob._id
      })

    }).then(res => {
      if (res.status === 200) {
        getJobs()
        Swal.fire("Candidatura retirada correctamente", res.message, "success");
        setApplyBtn(false);
      }

    }).catch((error) => {
      console.log("entró por el error");
      console.error(error);
    })
  };

  const applicationBtn = applyBtn ?
    <button onClick={handledeleteUser} className='jobList__button' >Retirar Solicitud</button>
    :
    <button onClick={handleAddUser} className='jobList__button' >Solicitar</button>

  return (
    <div>
      {selectedJob ? <div className="details">
        <div className="details__text">
          <h1 className='details__text--h1 '> <strong></strong>{selectedJob.name}</h1>
          <h2 className='details__text--h2 '> <strong>Description: </strong>{selectedJob.description}</h2>
          <h3 className='details__text--h2 '> <strong>Salary: </strong>{selectedJob.salary}</h3>
          <p className='details__text--h2 '>  <strong>Requirements: </strong> {selectedJob.requiremets}</p>
          {/* <p className='details__text--h2 '>  <strong>Location: </strong> {selectedJob.location}</p> */}

          {userLogged.rol === "User" ? applicationBtn : ""}
        </div>

      </div> : <p>ningún trabajo selecionado</p>}
    </div>
  )
}

export default JobDetail