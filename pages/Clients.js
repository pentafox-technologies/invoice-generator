import React, { useState,useEffect } from 'react'
import CompanyDetails from '../components/CompanyDetails/CompanyDetails'
import TopBar from '../components/TopBar/TopBar'
import axios from "axios"
import CardList from '../components/ItemList/CardList'

function Clients() {
    const [client,setClient] = useState([])
    
    const get_client = () => {
        axios
        .get("http://localhost:9000/client")
            .then(function (response) {
                console.log(response.data.data)
                setClient(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(()=>{get_client()},[])
    
    const add_client = (client_details) => {
        axios
        .post("http://localhost:9000/client", client_details)
            .then(function (response) {
                console.log(response)
                get_client()
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return ( 
        <div className="flex rounded bg-gray-200 min-h-screen min-w-screen">
            <div className="lg:flex lg:w-2/12 lg:mx-auto">
                <TopBar />
            </div>
            <div className=" p-4 w-10/12 ">
                ADD CLIENT DETAILS
                <CompanyDetails actionCB={add_client} initValues={{}} actionLabel={"Client"} name="Your Business Name"/>
                <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4">
                    <CardList data = {client}/>
                </div>
            </div>
        </div> 
    )
}

export default Clients
