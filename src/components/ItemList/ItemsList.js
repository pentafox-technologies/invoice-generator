import React, { useState } from 'react';
import BankDetails from '../BankDetails/BankDetails';


const ref = React.createRef();

const ItemsList = (props) => {
  const [total,setTotal]=useState(888888);
  const [value, setValue] = useState({
    description: "DESCRIPTION",
    hsn_code: "HSN CODE",
    amount: "AMOUNT",
    item_desc: "Monthly charges towards development of digital suite of products",
    item_hsn_code: "998314",
    item_amount: 888888
  });
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const totalCost =(e) => {
    setTotal(e.target.value)
  }
  return (
    <>
      <div className="mb-4">
        <div className="text-gray-500 mb-6" ref={ref}>
          <div className="grid grid-cols-12 mb-2">
            <input type="text" value={value.description} className="col-span-6 mr-2 focus:outline-none font-semibold text-sm  hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
            <input type="text" value={value.hsn_code} className="col-span-3 mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold text-sm" onChange={(e) => handleChange(e)} />
            <input type="text" value={value.amount} className="col-span-3 text-right focus:outline-none font-semibold text-sm hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
          </div>
          <div className="grid grid-cols-12">
            <textarea type="text" value={value.item_desc} className="mr-2 col-span-6 text-sm  focus:outline-none  hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
            <input type="text" value={value.item_hsn_code} className="focus:outline-none mr-2 h-5 hover:bg-yellow-100  focus:bg-yellow-100 col-span-3 text-sm text-right" onChange={(e) => handleChange(e)} />
            <input type="amount" value={total} className="focus:outline-none h-5  hover:bg-yellow-100 focus:bg-yellow-100 col-span-3 text-sm text-right" onChange={(e) => totalCost(e)} />
          </div>
        </div>
        <span className="cursor-pointer font-semibold text-sm text-blue-800">+ Add Item to the list</span>
      </div>
      <BankDetails total={total} currency={props.currency} />
    </>
  )
}
export default ItemsList;