import React, { useState } from 'react';



const CompanyDetails = () => {
  const [value, setValue] = useState({
    bill: "BILLED TO",
    t_inv_no: "INV NUMBER",
    t_issue_date: "DATE OF ISSUE",
    t_due: "DUE DATE",
    cmpny_name: "Company name",
    gst: "GSTIN",
    pan: "PAN",
    state: "STATE",
    address: "Address of the company",
    inv_no: "INV - 00000",
    issue_date: "28-Feb-21",
    due: "7-Mar-21"
  });
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div className="text-gray-500 mb-4" >
        <div className="grid grid-cols-12 mb-2 lg:text-sm text-xs">
          <input type="text" value={value.bill} className="col-span-5 mr-2 text-left font-semibold focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          <input type="text" value={value.t_inv_no} className="col-span-3 mr-2 font-semibold text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          <input type="text" value={value.t_issue_date} className="col-span-2 font-semibold mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          <input type="text" value={value.t_due} className="col-span-2 mr-2 font-semibold text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-5 mr-2 w-full text-sm">
            <input type="text" value={value.cmpny_name} className=" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 " onChange={(e) => handleChange(e)} />
            <input type="text" value={value.gst} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 " onChange={(e) => handleChange(e)} />
            <input type="text" value={value.pan} className=" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 " onChange={(e) => handleChange(e)} />
            <input type="text" value={value.state} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
            <input type="text" value={value.address} className=" w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100 " onChange={(e) => handleChange(e)} />
          </div>
          <input type="text" value={value.inv_no} className="col-span-3 mr-2 text-sm text-right focus:outline-none max-h-12 hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          <input type="" value={value.issue_date} className="col-span-2 mr-2 text-sm text-right focus:outline-none max-h-12 hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          <input type="" value={value.due} className="col-span-2 mr-2 text-sm text-right focus:outline-none max-h-12  hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
        </div>
      </div>
    </>
  );
}
export default CompanyDetails;