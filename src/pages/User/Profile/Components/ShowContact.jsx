import React, { useEffect, useState } from 'react';
import { useGetAuth } from '../../../../context';
import { BASE_URL } from '../../../../assets/ApiRoutes';
import './ShowContact.scss';


const ShowContact = () => {

    const [contacts, setContacts] = useState([]);

    const userLogged = useGetAuth()

    useEffect(() => {
        const getContacts = async (e) => {
            try {
             const data = await fetch(`${BASE_URL}/users/contacts`, {
                 method: 'GET',
                 headers: {
                   'Content-Type': 'application/json',
                   Authorization: `Bearer ${userLogged.token}`
                 }
               });
               const jsonData = await data.json();
               setContacts(jsonData.data.contacts);
             
            } catch (error) {
             console.log(error);
            }
      };
      getContacts()
    }, [])
    
  return (   
    
    <>  
     {contacts.map(contact =>(
         <div key={contact.id} className="contact__div">
            <div className='contact__div1'>
                <h1  className='contact__h1'>{contact.name}</h1>
                <h2>{contact.surname}</h2>
            </div>
         </div>
     ))}
     </>
  
  )
}

export default ShowContact