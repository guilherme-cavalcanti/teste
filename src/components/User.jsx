import './User.css'
import React from "react";
import { useFetch } from '../hooks/useFetch';

export default _ => {
    const { data, isFetching } = useFetch("https://randomuser.me/api/")
    
    return (
        <div>
            {isFetching && <p>Carregando...</p>}
            {data?.results?.map(user => {
                return (
                    <ul className='User' key={user?.id?.value}>
                        <li>Email: {user.email}</li>
                        <li>Gender: {user.gender}</li>
                        <li>Cell: {user.cell}</li>
                    </ul>
                )
            })}
        </div>
    )
}