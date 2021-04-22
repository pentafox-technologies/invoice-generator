import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CompanyDetails from '../components/CompanyDetails/CompanyDetails'
import CardList from '../components/ItemList/CardList'
import TopBar from '../components/TopBar/TopBar'

function Business() {
    const [company,setCompany] = useState([])
    
    const get_company = () => {
        axios
        .get("http://localhost:9000/business")
            .then(function (response) {
                console.log(response.data.data)
                setCompany(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(()=>{get_company()},[])
    
    const add_company = (company_details) => {
        axios
        .post("http://localhost:9000/business", company_details)
            .then(function (response) {
                console.log(response)
                get_company()
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
                MY BUSNIESSES DETAILS
                <CompanyDetails actionCB={add_company} initValues={{}} actionLabel={"Business"} name="CompanyName"/>
                <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4">
                    <CardList data = {company}/>
                </div>
            </div>
        </div> 
    )
}

export default Business
