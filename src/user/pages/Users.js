import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {


    const USERS = [
       {
            id:'u1',
            name:'Max Shawarz',
            image:'https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170930839/87002964-junge-figur-person-cartoon-vektor-illustration.jpg',
            places:3
        },
        {
            id:'u2',
            name:'Martin Sanchez',
            image:'https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170930757/87002882-ilustraci%C3%B3n-de-vector-de-dibujos-animados-de-persona-de-personaje-joven-de-hombre-de-retrato.jpg',
            places:4

        }
    ]
    return (
        <UsersList items={USERS}/>
    )
}

export default Users
