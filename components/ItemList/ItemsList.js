import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BankDetails from '../BankDetails/BankDetails';
import currencyFormatter from 'currency-formatter'

const ItemsList = ({
  actionCB,
  currency,
  toCurrency,
  initValues=[
    {
      s_no:1,
      item_desc: "Monthly charges towards development of digital suite of products",
      item_hsn_code: "998314",
      hours:0,
      item_amount:0,
      total:0,
    }
  ]
}) => {
  const cur= {
    "₹":"INR",
    "$":"USD",
    "£":"GBP",
    "€":"EUR",
    "¥":"YEN"
  }
  const [total, setTotal] = useState(0);
  const [rows, setRows] = useState(initValues)
  const [conversList, setConversList] = useState([])
  const [conversion, setConversion] = useState(0)
  const [value, setValue] = useState({
    s_no:"S.no",
    particulars:"Particulars",
    hsn_code:"HSN Code",
    hours:"Hours",
    amount:"Amount",
    total:"Total",
  })
  useEffect(() => {
    totalCalc()
    actionCB(rows)
  },[rows])

  const totalCalc = () => {
    let tot = 0;
    rows.forEach(r => {
      tot += parseFloat(r.item_amount) * parseFloat(r.hours)
    })
    setTotal(tot)
  }

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
      newState[i]['total'] = parseInt(newState[i]['hours']) * parseInt(newState[i]['item_amount'])
      totalCalc();
      return newState;
    })
    // setValue(e.target.value)
    // if(key === 'item_amount') {
    //   setTotal(prevTotal => parseFloat(prevTotal) + parseFloat(val))
    // }
  }

  useEffect(()=>{
    axios.get("http://api.exchangeratesapi.io/v1/latest?access_key=9de9bf30ffa6e098e2a968ad2083cab2&format=1")
    .then((response => {
      setConversList(response.data.rates)
    }))
  },[])
  
  const addNewRow = () => {
    setRows(prevState => prevState.concat({
      s_no:rows.length+1,
      item_desc: "Monthly charges towards development of digital suite of products",
      item_hsn_code: "998314",
      hours:0,
      item_amount:0,
      total:0,
    }))
  } 
  const all_data_tester = () =>{
    changeCurrency()
  }

  
  useEffect(()=>{
    setConversion( conversList[cur[toCurrency]] / conversList[cur[currency]] )
  },[currency,toCurrency,conversList])

  return (
    <>
      <div className="mb-4">
        <div className="text-gray-500 mb-6" >
          <div className="grid grid-cols-12 mb-2">
            <input type="text" value={value.s_no} className="col-span-1 mr-2  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold text-sm" onChange={(e) => handleHeaderChange('hsn_code', e?.target?.value)} />
            <input type="text" value={value.particulars} className="col-span-3 mr-2 focus:outline-none font-semibold text-sm  hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleHeaderChange('description', e?.target?.value)} />
            <input type="text" value={value.hsn_code} className="col-span-2 mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold text-sm" onChange={(e) => handleHeaderChange('hsn_code', e?.target?.value)} />
            <input type="text" value={value.hours} className="col-span-2 mr-2 text-right focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold text-sm" onChange={(e) => handleHeaderChange('hsn_code', e?.target?.value)} />
            <input type="text" value={value.amount} className="col-span-2 text-right focus:outline-none font-semibold text-sm hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleHeaderChange('amount', e?.target?.value)} />
            <input type="text" value={`${value.total}(${currency})`} className="col-span-2 text-right focus:outline-none font-semibold text-sm hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleHeaderChange('toal', e?.target?.value)} />
          </div>
          {
            rows.map((item, i) => {
              return (
                <div key={`row-${i}`} className="grid grid-cols-12 mb-2">
                  <input type="text" defaultValue={item.s_no} className="  mr-2 h-5 col-span-1   text-sm focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(i, 'item_hsn_code', e?.target?.value)} />
                  <textarea type="text" defaultValue={item.item_desc} className="   mr-2     col-span-3   text-sm             focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(i, 'item_desc', e?.target?.value)} />
                  <input type="text" defaultValue={item.item_hsn_code} className="  mr-2 h-5 col-span-2   text-sm text-right  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(i, 'item_hsn_code', e?.target?.value)} />
                  <input type="" min="1" defaultValue={item.hours} className="     h-5 col-span-2 text-sm text-right  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(i, 'hours', e?.target?.value)} />
                  <input type="" min="1" defaultValue={item.item_amount} className="     h-5 col-span-2 text-sm text-right  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(i, 'item_amount', e?.target?.value)} />
                  <input type="" min="1" value={item.total} className="     h-5 col-span-2 text-sm text-right  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"/>
                </div>  
              )
            })
          }
        </div>
        <span className="cursor-pointer font-semibold text-sm text-blue-800" onClick={addNewRow}>+ Add Item to the list</span>
        <span className="cursor-pointer font-semibold text-sm text-blue-800 ml-7" >+ Add Column to the list</span>
      </div>
      <button onClick={all_data_tester}>LOGGER</button>
      {(conversion>0) && <BankDetails total={parseFloat(total)*conversion} conversion={conversion} toCurrency={toCurrency} currency={cur[toCurrency]} /> }
    </>
  )
}
export default ItemsList;