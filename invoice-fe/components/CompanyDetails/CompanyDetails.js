import React, { useEffect, useState } from 'react';

const CompanyDetails = ({
  initValues={
    name: "",
    address: "",
    city: "",
    gst: "",
    state: "",
    pan: "",
  },
  name,align, actionCB, actionLabel}) => {
    
  const [value, setValue] = useState([])
    useEffect(()=>{setValue(initValues)},[initValues])

  const [placeholder, setPlaceholder] = useState({
    name: name,
    address: "59, Journalist Colony, Thiruvanmiyur",
    city: "Chennai - 600041",
    gst: "GSTIN - 33AAICP5142K1ZC",
    state: "STATE - 33 - Tamil Nadu",
    pan: "PAN - AAICP5142K",
  })
  const handleChange = (e,object) => {
    console.log(e.target.name, e.target.value)
    setValue(st => ({
      ...st,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <div className="">
        <input
          className={"font-semibold w-full focus:outline-none text-gray-600 lg:text-xl text-sm hover:bg-yellow-100 focus:bg-yellow-100 "+`text-${align}` } 
          value={value.name}
          type="text"
          name="name"
          placeholder={placeholder.name}
          onChange={e => handleChange(e)}
          />
        <input
          className={"font-medium w-full text-xs focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 "+`text-${align}`}
          type="address"
          name="address"
          value={value.address}
          placeholder={placeholder.address}
          onChange={e => handleChange(e)}
          />
        <input
          className={"font-medium w-full text-xs focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 " +`text-${align}`}
          type="address"
          name="city"
          value={value.city}
          placeholder={placeholder.city}
          onChange={e => handleChange(e)}
          />
        <input
          className={"font-medium w-full text-xs focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100 " +`text-${align}`}
          type="text"
          value={value.gst}
          name= "gst"
          placeholder={placeholder.gst}
          onChange={e => handleChange(e)}
          />
        <input
          className={"font-medium text-xs w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100 "+`text-${align}`}
          type="text"
          value={value.state}
          name="state"
          placeholder={placeholder.state}
          onChange={e => handleChange(e)}
          />
        <input
          className={"font-medium text-xs w-full focus:outline-none leading-none hover:bg-yellow-100 focus:bg-yellow-100 "+`text-${align}`}
          type="text"
          name="pan"
          value={value.pan}
          placeholder={placeholder.pan}
          onChange={e => handleChange(e)}
        />
      </div>
      {
        (typeof actionCB === 'function') ? <button onClick={e=>{actionCB(value);setValue(initValues)}}>ADD {actionLabel}</button> : <></>
      }
    </>
  );
}
export default CompanyDetails;