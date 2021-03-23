import React, { useEffect, useState } from 'react';
import BankDetails from '../BankDetails/BankDetails';

const ref = React.createRef();

const ItemsList = (props) => {
  const [total, setTotal] = useState(0);
  const [rows, setRows] = useState([
    {
      item_desc: "Monthly charges towards development of digital suite of products",
      item_hsn_code: "998314",
      item_amount: 888888
    }
  ]);
  const [value, setValue] = useState({
    description: "DESCRIPTION",
    hsn_code: "HSN CODE",
    amount: "AMOUNT",
  });

  useEffect(() => {
    let tot = 0;
    rows.forEach(r => {
      console.log(r)
      tot += parseFloat(r.item_amount)
    })
    console.log(tot)
    setTotal(tot)
  }, [rows])

  const handleHeaderChange = (key, val) => {
    setValue(prevState => ({
      ...prevState,
      [key]: val
    }))
  }
  const handleChange = (i, key, val) => {
    setRows(prevState => {
      let newState = prevState;
      newState[i][key] = val;
      return newState;
    })
    // setValue(e.target.value)
    // if(key === 'item_amount') {
    //   setTotal(prevTotal => parseFloat(prevTotal) + parseFloat(val))
    // }
  }

  const addNewRow = () => {
    setRows(prevState => prevState.concat({
      item_desc: "New row item",
      item_hsn_code: "998314",
      item_amount: 0
    }))
  }
  
  return (
    <>
      <div className="mb-4">
        <div className="text-gray-500 mb-6" ref={ref}>
          <div className="grid grid-cols-12 mb-2">
            <input type="text" value={value.description} className="col-span-6 mr-2 focus:outline-none font-semibold text-sm  hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleHeaderChange('description', e?.target?.value)} />
            <input type="text" value={value.hsn_code} className="col-span-3 mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold text-sm" onChange={(e) => handleHeaderChange('hsn_code', e?.target?.value)} />
            <input type="text" value={value.amount} className="col-span-3 text-right focus:outline-none font-semibold text-sm hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleHeaderChange('amount', e?.target?.value)} />
          </div>
          {
            
            rows.map((item, i) => {
              return (
                <div key={`row-${i}`} className="grid grid-cols-12 mb-2">
                  <textarea type="text" defaultValue={item.item_desc} className="mr-2 col-span-6 text-sm  focus:outline-none  hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(i, 'item_desc', e?.target?.value)} />
                  <input type="text" defaultValue={item.item_hsn_code} className="focus:outline-none mr-2 h-5 hover:bg-yellow-100  focus:bg-yellow-100 col-span-3 text-sm text-right" onChange={(e) => handleChange(i, 'item_hsn_code', e?.target?.value)} />
                  <input type="amount" defaultValue={item.item_amount} className="focus:outline-none h-5  hover:bg-yellow-100 focus:bg-yellow-100 col-span-3 text-sm text-right" onChange={(e) => handleChange(i, 'item_amount', e?.target?.value)} />
                </div>
              )
            })
          }

        </div>
        <span className="cursor-pointer font-semibold text-sm text-blue-800" onClick={addNewRow}>+ Add Item to the list</span>
      </div>
      <BankDetails total={total} currency={props.currency} />
    </>
  )
}
export default ItemsList;