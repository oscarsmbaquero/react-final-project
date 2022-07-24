import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../assets/ApiRoutes';
import { useGetAuth } from "../../../context/context";
import Swal from 'sweetalert2';



const User = ({ post, contacts }) => {
    let [buttonState, setButtonState] = useState(false);
    const userLogged = useGetAuth();

    useEffect(() => {
        
        
        const mapContact=contacts.map(contact=>{

            console.log(contact.id===post._id)
            return contact.id===post._i
        })
if (mapContact){
    setButtonState(true)
    
}else{
    setButtonState(false)

}


        // if (contacts) {
        //     if (contacts.candidate_list.includes(post.id)) {
        //         buttonState(true);
        //     } else {
        //         buttonState(false)
        //     }
        // }
    }, [contacts])

const addContact = () => {

    fetch(`${BASE_URL}/users/addContact`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userLogged.token}`
        },
        body: JSON.stringify({

            contactId: post.id
        })
    })
        .then(res => {
            if (res.status === 200) {
                // getJobs()
                Swal.fire("te has Inscrito correctamente", res.message, "success");
                buttonState(true);
            }
        }).catch((error) => {
            console.error(error);
        }
        )


}
let deleteContact = () => {
    fetch(`${BASE_URL}/users/deleteContact`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userLogged.token}`
        },
        body: JSON.stringify({

            contactId: post.id
        })
    })
        .then(res => res.json())
        .then(() => Swal.fire("Eliminado corectamente", "success"))



}



return (
    <div className="userList__div">
        <img className="userList__photo" src={post.image} alt={post.name} />
        <div className='userList__div1' >

            <h1 className='userList__h1' >Name: {post.name}</h1>
            <h2 className='userList__h2' >Surname: {post.surname}</h2>
            <h3 className='userList__h3' >Email: {post.email}</h3>
            {/* <p className='userList__p' >Direction: {post.direction}</p>
              <p className='userList__p' >Job: {post.job}</p> */}
        </div>

        {buttonState ?
            <button className='userList__btn' onClick={addContact}>Añadir Contacto</button>
            :
            <button className='userList__btn' onClick={deleteContact}>Dejar de seguir</button>
        }

        <Link to={`/users/${post._id}`}>
            <button className='userList__btn' >Show More</button>
        </Link>
    </div>
)
}

export default User