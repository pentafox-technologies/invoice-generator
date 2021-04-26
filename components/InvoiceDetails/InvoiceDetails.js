import React, { useEffect, useState } from 'react';



const InvoiceDetails = ({
  actionCB,
  initValues = {
    t_inv_no: "INV NUMBER",
    t_issue_date: "DATE OF ISSUE",
    t_due: "DUE DATE",
    state: "STATE",
    inv_no: "INV - 00000",
    issue_date: "28-Feb-21",
    due: "7-Mar-21"
  }
}) => {
  const [value, setValue] = useState(initValues);
  const handleChange = (e) => {
    setValue(st => ({
      ...st,
      [e.target.name]: e.target.value
    }))
  }
  useEffect(() => {
    actionCB(value)
  }, [value])
  return (
    <div className="mb-12">
      <input
        className={"font-semibold w-full focus:outline-none my-4  lg:text-xl text-sm "}
        value="Invoice"
        type="text"
      />
      <div className="text-gray-500 mb-4" >
        <div className="grid grid-cols-12  mb-2 lg:text-sm text-xs">
          <input type="text" name={"t_inv_no"} value={value.t_inv_no} className="col-span-6 mr-2 font-semibold text-left focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          <input type="text" name={"t_issue_date"} value={value.t_issue_date} className="col-span-6 font-semibold mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
        </div>
        <div className="grid grid-cols-12">
          <input name={"inv_no"} type="text" value={value.inv_no} className="col-span-6 mr-2 text-sm text-left focus:outline-none max-h-12 hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          <input name={"issue_date"} type="" value={value.issue_date} className="col-span-6 mr-2 text-sm text-right focus:outline-none max-h-12 hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
        </div>
      </div>
    </div>
  );
}
export default InvoiceDetails;