import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from "../../../context/context";
import Swal from 'sweetalert2';
import { defaultProfileImage } from '../../../assets/images/imagesLink';



const User = ({ user, contactsList }) => {
    const [buttonState, setButtonState] = useState(false);
    const userLogged = useGetAuth();

    useEffect(() => {
        const filteredContacts = contactsList.find(contact => {
            return contact.id === user._id
        })
        if (filteredContacts) {
            setButtonState(true)
        } else {
            setButtonState(false)
        }
    }, [contactsList, user._id])

    const addContact = () => {

        fetch(`${BASE_URL}/users/addContact`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userLogged.token}`
            },
            body: JSON.stringify({

                contactId: user._id
            })
        })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire("te has Inscrito correctamente", res.message, "success");
                    setButtonState(true);
                }
            }).catch((error) => console.error(error))
    }

    const deleteContact = () => {
        fetch(`${BASE_URL}/users/deleteContact`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userLogged.token}`
            },
            body: JSON.stringify({

                contactId: user._id
            })
        })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire("contacto eliminado", res.message, "success");
                    setButtonState(false);
                }
            })
            .then(() => Swal.fire("Eliminado corectamente", "success"))
    }

    return (
        <div className="userList__div">
            <div className='userList__info'>
            <Link className='userList__link' to={`/users/${user._id}`}>
                <img className="userList__photo" src={user.image || defaultProfileImage} alt="img" />
                <div className='userList__div1' >
                    <h1 className='userList__h1' >{user.name} {user.surname}</h1>
                        <h3 className='userList__h3' >{user.email}</h3>
                        {/* Colocar puesto mejor que correo */}
                </div>
                </Link>
                </div>

            {!buttonState ?
                <button className='userList__btn' onClick={addContact}>Añadir Contacto</button>
                :
                <button className='userList__btn userList__btn--deleteBtn' onClick={deleteContact}>Dejar de seguir</button>
            }
            {/* <button className='userList__btn' >Show More</button> */}
        </div>
    )
}

export default User