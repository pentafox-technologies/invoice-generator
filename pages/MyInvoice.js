import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InvoiceList from '../components/ItemList/InvoiceList'
import TopBar from '../components/TopBar/TopBar'

function MyInvoice() {
    const [invoice,setInvoice] = useState([])
    
    useEffect(() => {
        axios
        .get("http://localhost:9000/invoice")
            .then(function (response) {
                console.log(response.data.data)
                setInvoice(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    },[])
    
    return (
        <div className="flex rounded bg-gray-200 min-h-screen min-w-screen">
          <div className="lg:flex lg:w-2/12 lg:mx-auto">
            <TopBar />
          </div>
            <div className=" p-4 w-10/12 ">
                MY INVOICE LIST
                <InvoiceList data = {invoice}/>
            </div>
        </div>
    )
}

export default MyInvoice
