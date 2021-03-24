import React, { useState } from 'react';


const ref = React.createRef();

const BankDetails = (props) => {
    const [value, setValue] = useState({
        l_acc_name: "Account Name",
        l_bank_name: "Bank Name",
        l_acc_no: "Account Number",
        l_ifsc: "IFSC Code",
        name: "Name XXXX",
        bank: "Bank YYYY",
        acc_no: "5555 6666 7777 8888",
        ifsc: "IFSC Code",
        l_subtot: "SUBTOTAL",
        cgst: "CGST",
        sgst: "SGST",
        igst: "IGST",
        inv_tot: "INVOICE TOTAL",
    })
    const [cgst_per, setCgst_per] = useState(0);
    const [sgst_per, setSgst_per] = useState(0);
    const [igst_per, setIgst_per] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleCgst = (e) => {
        setCgst_per(parseFloat(e.target.value))
    }
    const handleIgst = (e) => {
        setIgst_per(parseFloat(e.target.value))
    }
    const handleSgst = (e) => {
        setSgst_per(parseFloat(e.target.value))
    }
    const sgst_tot = parseFloat(props.total * (sgst_per / 100)).toFixed(2);
    const cgst_tot = parseFloat(props.total * (cgst_per / 100)).toFixed(2);
    const igst_tot = parseFloat(props.total * (igst_per / 100)).toFixed(2);
    const grant_tot = parseFloat(props.total + sgst_tot + cgst_tot + igst_tot).toFixed(2);
    return (
        <div className="text-gray-500 text-xs lg:text-sm">
            <div className="">
                <div className="grid grid-cols-12 mb-8 col-end-8">
                    <div className="col-span-6"></div>
                    <div className="col-span-3">
                        <input type="text" value={value.l_subtot} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 text-xs  font-semibold lg:text-sm" onChange={(e) => handleChange(e)} />
                        {
                            !igst_per >= 1 ? (
                                <>
                                    <input type="text" value={value.cgst} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold  w-1/2" onChange={(e) => handleChange(e)} />
                                    <input type="number" value={cgst_per} min="0" max="100" className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold  w-1/4 text-center" onChange={(e) => handleCgst(e)} /><span>%</span>
                                    <input type="text" value={value.sgst}  className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold  w-1/2" onChange={(e) => handleChange(e)} />
                                    <input type="number" value={sgst_per} min="0" className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold w-1/4 text-center" onChange={(e) => handleSgst(e)} /><span>%</span>
                                </>
                            ) : null
                        }
                        {
                            !cgst_per >= 1 && !sgst_per >= 1 ? (
                                <>
                                    <input type="text" value={value.igst} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold w-1/2" onChange={(e) => handleChange(e)} />
                                    <input type="number" value={igst_per} min="0" className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold w-1/4 text-center" onChange={(e) => handleIgst(e)} /><span>%</span>
                                </>
                            ) : null
                        }
                        <input type="text" value={value.inv_tot} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 font-semibold" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="col-span-3 text-right">
                        <p className="">{props.currency} {parseFloat(props.total).toFixed(2)}</p>
                        {
                            !igst_per >= 1 ? (
                                <>
                                    <p>{props.currency} {cgst_tot}</p>
                                    <p className="">{props.currency} {sgst_tot} </p>
                                </>
                            ) : null
                        }
                        {
                            !cgst_per >= 1 && !sgst_per >= 1 ? (
                                <>
                                    <p className="">{props.currency} {igst_tot}</p>
                                </>
                            ) : null
                        }
                        <p>{props.currency} {parseFloat(parseFloat(cgst_tot)+parseFloat(props.total)+parseFloat(sgst_tot)+parseFloat(igst_tot)).toFixed(2)}</p>
                    </div>
                </div>
                <input type="text" className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100 text-md font-semibold mb-2" value="Bank Details" onChange={(e) => handleChange(e)} />
                <div className="grid grid-cols-12 text-sm mb-10">
                    <div className="col-span-3 w-full ">
                        <input type="text" value={value.l_acc_name} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input type="text" value={value.l_bank_name} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input type="text" value={value.l_acc_no} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input type="text" value={value.l_ifsc} className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="col-span-3  w-full">
                        <input type="text" value={value.name} className=" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input type="text" value={value.bank} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input type="text" value={value.acc_no} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input type="text" value={value.ifsc} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BankDetails;