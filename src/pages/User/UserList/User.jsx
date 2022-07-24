import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from "../../../context/context";
import Swal from 'sweetalert2';
import { defaultProfileImage } from '../../../assets/images/imagesLink';



const User = ({ post, contacts }) => {
    const [buttonState, setButtonState] = useState(false);
    const userLogged = useGetAuth();

    useEffect(() => {
        const filteredContacts = contacts.find(contact => {
            return contact.id === post._id
        })
        if (filteredContacts) {
            setButtonState(true)
        } else {
            setButtonState(false)
        }
    }, [contacts, post._id])

    const addContact = () => {

        fetch(`${BASE_URL}/users/addContact`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userLogged.token}`
            },
            body: JSON.stringify({

                contactId: post._id
            })
        })
            .then(res => {
                if (res.status === 200) {
                    Swal.fire("te has Inscrito correctamente", res.message, "success");
                    setButtonState(true);
                }
            }).catch((error) => {
                console.error(error);
            }
            )

    }

    const deleteContact = () => {
        fetch(`${BASE_URL}/users/deleteContact`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userLogged.token}`
            },
            body: JSON.stringify({

                contactId: post._id
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
            <Link className='userList__link' to={`/users/${post._id}`}>
                <img className="userList__photo" src={post.image || defaultProfileImage} alt={post.name} />
                <div className='userList__div1' >
                    <h1 className='userList__h1' >{post.name} {post.surname}</h1>
                    <h3 className='userList__h3' >{post.email}</h3>
                </div>
            </Link>

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