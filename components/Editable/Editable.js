import React, { useEffect, useState } from "react";
import Sticky from "react-stickynode";
import axios from "axios";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import InvoiceDetails from "../InvoiceDetails/InvoiceDetails";
import ItemsList from "../ItemList/ItemsList";
import TopBar from "../TopBar/TopBar";



var Pdf = null
if (typeof (window) !== 'undefined') {
  import("react-to-pdf").then(module => {
    Pdf = module.default;
  });
}
const ref = React.createRef();

const Editable = () => {
    const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("₹");
  const [toCurrency, setToCurrency] = useState("₹");
  const [client, setClient] = useState([]);
  const [business, setBusiness] = useState([]);
  const [allClients, setAllClient] = useState([]);
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [items, setItems] = useState([]);
  const [imgPreview, setImgPreview] = useState({ file: null });
  const [error, setError] = useState(false);
  const [payList, setPayList] = useState([])
  const [bank, setBank] = useState({
    l_acc_name: "Account Name",
    l_bank_name: "Bank Name",
    l_acc_no: "Account Number",
    l_ifsc: "IFSC Code",
    name: "",
    bank: "",
    acc_no: "",
    ifsc: ""
  });

  const handleClick = (e, type) => {
    if (type === "from") {
      setCurrency(e.target.value);
    } else {
      setToCurrency(e.target.value);
    }
  };

  const onChange = (event) => {
    const selected = event.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview({ file: URL.createObjectURL(selected) });
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  const handleClient = (e) => {
    for (var i in allClients) {
      if (allClients[i].name === e.target.value) {
        setClient(allClients[i]);
        console.log(client);
      }
    }
  };

  const handleChange = (e) => {
    setBank(st => ({
      ...st,
      [e.target.name]: e.target.value
    }))
  }

  const handleBusniess = (e) => {
    for (var i in allBusinesses) {
      if (allBusinesses[i].name === e.target.value) {
        setBusiness(allBusinesses[i]);
        console.log(business);
      }
    }
  };

  const handlePay = (e) => {
    for (var i in payList) {
      if (payList[i].name === e.target.value) {
        setBank(payList[i]);
        console.log(bank);
      }
    }
  };

  const get_client = async () => {
    var _user = await axios.get("http://localhost:9000/client");
    console.log(_user.data.data);
    setAllClient(_user.data.data);
  };

  const get_businesses = async () => {
    var _user = await axios.get("http://localhost:9000/business");
    setAllBusinesses(_user.data.data);
  };

  const store_invoice_db = () => {
    axios
      .post("http://localhost:9000/invoice", {
        "title": title,
        "business": business,
        "client": client,
        "invoice": invoice,
        "items": items,
        "bank": bank
      })
      .then(function (response) {
        console.log(response)
        get_client()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const get_pay = () => {
    axios
      .get("http://localhost:9000/pay")
      .then(function (response) {
        console.log(response.data.data)
        setPayList(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    get_client();
    get_businesses();
    get_pay();
  }, []);

  const collect_items = (_items) => {
    console.log(_items)
    setItems(_items)
  }

  const collect_invoice = (_invoice) => {
    console.log(_invoice)
    setInvoice(_invoice)
  }



    return(
    <div className="grid grid-cols-12 bg-gray-200">
        <div className="col-span-2">
            <TopBar />
        </div>

        <div ref={ref} className="col-span-7 max-w-3/4 mx-auto mt-32 mb-20">
            <div className="lg:block hidden ">
            </div>
            <div className=" bg-white lg:mt-20 lg:p-12 p-4 min-h-screen" >
                <div className="text-center mb-4 lg:mt-0 mt-8">
                    <input
                        className="focus:outline-none mx-auto text-xl font-semibold text-center text-gray-700  hover:bg-yellow-100 focus:bg-yellow-100"
                        value={title}
                        type="text"
                        placeholder={"INVOICE"}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex mb-8 space-between">
                    <CompanyDetails
                        align={"left"}
                        name={"Random COMPANY Ltd"}
                        initValues={client}
                    />
                    <div className="border-dotted p-4 w-full max-h-40 bg-white border-gray-300 border-2 ">
                        <div className="text-center">
                            <p className="mb-4"> To Create an invoice, first select a client</p>
                            <a> Add Client</a>
                        </div>
                    </div>
                    <CompanyDetails
                        align={"right"}
                        name={"Pentafox Tech Pvt Ltd"}
                        initValues={business}
                    />
                    <div className="border-dotted p-4 w-full max-h-40 bg-white m-2 border-gray-300 border-2">
                        <div className="text-center">
                            <p className="mb-4">To create an invoice select a business</p>
                            <a>Add business</a>
                        </div>
                    </div>
              image logo
              <div className="ml-6">
                        <div className="lg:w-24 mt-8 w-20 m-auto cursor-pointer">
                            {error && (
                                <p className="text-red-500 text-xs">File not supported</p>
                            )}
                            <div>
                                {
                                    <>
                                        <label htmlFor="fileUpload" className="">
                                            {imgPreview.file ? (
                                                <img
                                                    src={imgPreview.file}
                                                    alt="could not be stored"
                                                />
                                            ) : (
                                                <img
                                                    src='/logo.jpg'
                                                    alt="alter"
                                                    className="rounded-md"
                                                />
                                            )}{" "}
                                        </label>
                                        <input
                                            type="file"
                                            id="fileUpload"
                                            onChange={onChange}
                                            className="hidden"
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <InvoiceDetails actionCB={collect_invoice} />
                <ItemsList currency={currency} toCurrency={toCurrency} actionCB={collect_items} />
                <div className="flex mb-8 space-between">
                    <CompanyDetails
                        align={"left"}
                        name={"Pentafox Tech Pvt Ltd"}
                        initValues={business}
                    />
                    <div className="flex text-sm mb-10 float-right">
                        <div className="col-span-6 ">
                            <input name="l_acc_name" type="text" placeholder={"Account Name"} value={bank.l_acc_name} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                            <input name="l_bank_name" type="text" placeholder={"Bank Name"} value={bank.l_bank_name} className="w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                            <input name="l_acc_no" type="text" placeholder={"Account Number"} value={bank.l_acc_no} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                            <input name="l_ifsc" type="text" placeholder={"IFSC Code"} value={bank.l_ifsc} className="w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="col-span-6 float-right">
                            <input name="name" type="text" placeholder={"Name XXXX"} value={bank.name} className=" w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                            <input name="bank" type="text" placeholder={"Bank YYYY"} value={bank.bank} className=" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                            <input name="acc_no" type="text" placeholder={"5555 6666 7777 8888"} value={bank.acc_no} className="w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                            <input name="ifsc" type="text" placeholder={"IFSC XXX"} value={bank.ifsc} className=" w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-3">
            <Sticky enabled={true} top={0}>
                <div className="bg-white shadow-lg   ml-16  h-3/5 p-4 mb-20 mt-52">

                    <p className="text-center font-normal text-2xl">Properties</p>
                    <div className="w-full my-4">
                        <p className="py-2">
                            From Currency
                        </p>
                        <select
                            className="py-1 px-4 text-2xl focus:outline-none w-full bg-gray-200 rounded-md"
                            onBlur={(e) => handleClick(e, 'from')}
                        >
                            <option>₹</option>
                            <option>$</option>
                            <option>£</option>
                            <option>€</option>
                            <option>¥</option>
                        </select>
                    </div>
                    <div>
                        <p className="py-2">
                            To Currency
                        </p>
                        <select
                            className="px-4 py-1 text-2xl focus:outline-none w-full p-2 bg-gray-200 rounded-md"
                            onBlur={(e) => handleClick(e, 'to')}
                        >
                            <option>₹</option>
                            <option>$</option>
                            <option>£</option>
                            <option>€</option>
                            <option>¥</option>
                        </select>
                    </div>
                    <div>
                        <p className="py-2">
                            Clients
            </p>
                        <select
                            className="px-2 py-1 text-2xl focus:outline-none w-full bg-gray-200 rounded-md"
                            onBlur={(e) => handleClient(e)}
                        >
                            {
                                allClients.map((client, index) => (
                                    <option key={index.toString()}>{client.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <p className="py-2">
                            My Businesses
            </p>
                        <select
                            className="p-2 py-1 w-full text-2xl  focus:outline-none bg-gray-200 rounded-md"
                            onBlur={(e) => handleBusniess(e)}
                        >
                            {allBusinesses.map((business, index) => (
                                <option key={index}>{business.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p className="p-2">
                            Payment
            </p>
                        <select
                            className="px-2 py-1 w-full text-2xl focus:outline-none bg-gray-200 rounded-md"
                            onBlur={(e) => handlePay(e)}
                        >
                            {payList?.map((pay, index) => (
                                <option key={index}>{pay.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="my-2 hidden">
                        <div className="w-full text-center">
                            <button className="p-2 px-4 hover:bg-gray-400 "
                                onClick={store_invoice_db}>Save</button>
                        </div>
                    </div>
                    {
                        (Pdf) && (
                            <Pdf targetRef={ref} filename="invoice.pdf" size="A4">
                                {
                                    ({ toPdf }) => <div className="w-full text-center">
                                        <button onClick={toPdf}
                                            className="p-2 mt-8 w-full rounded-md px-4 bg-gray-200 hover:bg-gray-300 "
                                            size="3x" color="gray">Download
                                        </button>
                                    </div>
                                }
                            </Pdf>
                        )
                    }
                </div>

            </Sticky>

        </div>

    </div>
    );

}
export default Editable;