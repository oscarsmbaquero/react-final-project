import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import './EditProfile.scss';
import { BASE_URL } from '../../../../assets/ApiRoutes';



const EditProfile = ({ editProfile, userLogged }) => {
       let navigate = useNavigate();
     

       console.log(userLogged.rol,13);
       // const [userModify, setUserModify] =useState({});

       const editUser = (e, id) => {
              e.preventDefault();

              let target = e.target;

              const data = new FormData();
              data.append('image', target.image.files[0])
              data.append('name', target.name.value);
              data.append('email', target.email.value);
              data.append('studies', target.studies.value);
              data.append('age', target.age.value);
              data.append('description', target.description.value);
              data.append('habilities', target.habilities.value);

              fetch(`${BASE_URL}/users/edit/`, {
                     method: 'PUT',
                     headers: {
                            //'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${userLogged.token}`
                     },
                     body: data


              }).then(res => {
                     if (res.status === 200) {
                            Swal.fire("Modificado correctamente", res.message, "success");
                            navigate("/users");
                     }
              }).catch()
       }

       return (
              <section className="sectionEdit">
                     <h4 className="title">Usuario : {editProfile.name}</h4>
                     <div className="edit">
                            <form onSubmit={e => editUser(e, editProfile._id)} className="edit__form" >
                                   <label className="edit__label" htmlFor="name">Name</label>
                                   <input type="text" name="name" className='edit__input' defaultValue={editProfile.name} />
                                   {userLogged.rol ==='User'?
                                   <>
                                   <label className="edit__label" htmlFor="surname">Surname</label>
                                   <input type="text" name="surname" className='edit__input' defaultValue={editProfile.surname} />
                                   </>
                                   :''}
                                   <label className="edit__label" htmlFor="email">Email</label>
                                   <input type="text" name="email" className='edit__input' defaultValue={editProfile.email} />
                                   {userLogged.rol ==='User'?
                                   <>
                                   <label className="edit__label" htmlFor="studies">Studies</label>                                   
                                   <input type="text" name="studies" className='edit__input' defaultValue={editProfile.studies} />
                                   </>
                                   :''}
                                   {userLogged.rol ==='User'?
                                   <>
                                   <label className="edit__label" htmlFor="age">Age</label>
                                   <input type="text" name="age" className='edit__input' defaultValue={editProfile.age} />
                                   </>
                                   :''}
                                   <label className="edit__label" htmlFor="description">Descriptión</label>
                                   <input type="text" name="description" className='edit__input' defaultValue={editProfile.description} />
                                   {userLogged.rol ==='User'?
                                   <>
                                   <label className="edit__label" htmlFor="habilities">Habilities</label>
                                   <input type="text" name="habilities" className='edit__input' defaultValue={editProfile.habilities} />
                                   </>
                                   :''}
                                   <label className="edit__label" htmlFor="image">Image</label>
                                   <input type="file" alt="" name="image" className='edit__input' />
                                   <button className='edit__button' >Actualizar</button>
                            </form>
                     </div>
              </section>
       )
}

export default EditProfile