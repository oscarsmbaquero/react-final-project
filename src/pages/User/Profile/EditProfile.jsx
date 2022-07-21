import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './EditProfile.scss';

const EditProfile = ({editProfile,userLogged}) => {
       
       //console.log(editProfile);
       const [userModify, setUserModify] =useState({});

       const editUser = (e,id) => {
              e.preventDefault();
               
               let target = e.target;
              let userModify = {
                     
                     name : target.name.value,
                     surname: target.surname.value,
                     email: target.email.value,
                     studies: target.studies.value,
                     age: target.age.value,
                     description: target.description.value,
                     habilities: target.habilities.value,
                     image:target.image.value,
                    };
                    //console.log(userModifyDatos,'user');
                    setUserModify(userModify);
                    console.log(userModify,id,'datos');
                    
             
              fetch(`http://localhost:4000/users/edit/`, {
                     method: 'PUT',
                     headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${userLogged.token}`
                            },
                            body: JSON.stringify({
                                   userId: id,
                                   bodyData:userModify,
                                   userPhoto:userModify.image,
                            })
                            }).then(res => {
                            if (res.status === 200) {
                            Swal.fire("Modificado correctamente", res.message, "success");
                                          
                     }
                     }).catch()
       }

       console.log(userModify);

    //console.log(editProfile);
  return (
       <section className="sectionEdit">
       <h4 className="title">Usuario : {editProfile.name}</h4>
       <div className="edit">
              <form  onSubmit={ e => editUser(e, editProfile._id)}  className="edit__form" >
                     <label className="edit__label" htmlFor="name">Name</label>
                     <input type="text" name="name" className='edit__input' defaultValue={editProfile.name}/>
                     <label className="edit__label" htmlFor="surname">Surname</label>       
                     <input type="text" name="surname" className='edit__input' defaultValue={editProfile.surname}/>
                     <label className="edit__label" htmlFor="email">Email</label>       
                     <input type="text" name="email" className='edit__input' defaultValue={editProfile.email}/>
                     <label className="edit__label" htmlFor="studies">Studies</label>       
                     <input type="text" name="studies" className='edit__input' defaultValue={editProfile.studies}/>
                     <label className="edit__label" htmlFor="age">Age</label>       
                     <input type="text" name="age" className='edit__input' defaultValue={editProfile.age}/>
                     <label className="edit__label" htmlFor="description">Descriptión</label>       
                     <input type="text" name="description" className='edit__input' defaultValue={editProfile.description}/>
                     <label className="edit__label" htmlFor="habilities">Habilities</label>       
                     <input type="text" name="habilities" className='edit__input' defaultValue={editProfile.habilities}/>
                     <label className="edit__label" htmlFor="image">Image</label>       
                     <input type="file" alt="" name="image" className='edit__input'/>
                     <button className='edit__button' >Actualizar</button>
              </form>
       </div>
  </section>
  )
}

export default EditProfile