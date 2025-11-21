import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const Binding = () => {

    let [user, setUser] = useState()

    let getUserData = () => {

        //arrow function

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setUser(res.data)

            }


            )
    }


    useEffect(() => {
        getUserData()

    }, [])


    let col = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },

        {
            name: 'Email',
            selector: row => row.email
        },

        {
            name: 'U_name',
            selector: row => row.username
        },

        {
            name: 'Delete',
            selector: row => <Button>Delete</Button>
        }
    ]

    return (
        <div>Binding


            {/* {
            user&& user.map((u)=><Card>
                <p>{u.id}</p>
                <p>{u.name}</p>
                <p>{u.email}</p>
                <p>{u.address.street}</p>
            </Card>)
        } */}

            <DataTable

                columns={col}

                data={user}

                pagination
                highlightOnHover
                selectableRows

            />
        </div>
    )
}

export default Binding

//npm i axios