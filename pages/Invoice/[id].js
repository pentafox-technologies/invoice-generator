import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
// import Logo from ".../images/logo.jpg";
//import Pdf from "react-to-pdf";
import { useRouter } from 'next/router'
import axios from "axios";
import TopBar from "../../components/TopBar/TopBar";
import CompanyDetails from "../../components/CompanyDetails/CompanyDetails";
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails";
import ItemsList from "../../components/ItemList/ItemsList";
import BankDetails from "../../components/BankDetails/BankDetails";
var Pdf = null
if (typeof (window) !== 'undefined') {
  import( "react-to-pdf").then(module => {
    Pdf = module.default;
  });
}
const ref = React.createRef();
const Invoice = ({params}) => {
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
  const [value, setValue] = useState([]);
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

  const router = useRouter()
  const { id } = router.query
  useEffect(()=>{ 
    if(id){
    console.log(id,'asd ' )
      axios
      .post("http://localhost:9000/invoice", { 'id' : id })
          .then(function (response) {
            console.log('zxc',response.data.data)
            setBusiness(response.data.data.business)
            setClient(response.data.data.client)
            setBank(response.data.data.bank)
            setValue(response.data.data)
          })
          .catch(function (error) {
              console.log(error)
          }) 
    }
  },[id])

  const handleChange = (e) => {
    setBank(st => ({
      ...st,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = (e,type) => {
    if (type === "from"){
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
        "title":title,
        "business":business,
        "client":client,
        "invoice":invoice,
        "items":items,
        "bank":bank
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
  },[]);

  const collect_items = (_items) => {
    console.log(_items)
    setItems(_items)
  }
  const collect_invoice = (_invoice) => {
    console.log(_invoice)
    setInvoice(_invoice)
  }
  if (value.items){
    return (
      <>
        <div className="flex rounded bg-gray-200 min-h-screen min-w-screen">
          <div className="lg:flex lg:w-2/12 lg:mx-auto">
            <TopBar />
          </div>
          <div ref={ref} className="lg:flex lg:justify-center lg:w-8/12   lg:mx-auto">
            <div className="lg:block hidden ">
              {/* <Pdf targetRef={ref} filename="invoice.pdf" size="A4">
                {({ toPdf }) => (
                  <div className="mt-20 w-8 mr-12">
                    <FontAwesomeIcon
                      onClick={toPdf}
                      className=" fixed cursor-pointer"
                      icon={faFileAlt}
                      size="3x"
                      color="gray"
                    />
                  </div>
                )}
              </Pdf> */}
            </div>
            <div className=" bg-white lg:mt-20 lg:p-12 p-4 min-h-screen" ref={ref}>
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
                <CompanyDetails
                  align={"right"}
                  name={"Pentafox Tech Pvt Ltd"}
                  initValues={business}
                />
                {/* image logo */}
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
              <InvoiceDetails initValues={value.invoice} actionCB={collect_invoice} />
              <ItemsList initValues={value.items} toCurrency={toCurrency} currency={currency} actionCB={collect_items} />
              <div className="flex mb-8 space-between">
                <CompanyDetails
                  align={"left"}
                  name={"Pentafox Tech Pvt Ltd"}
                  initValues={business}
                />
                <div className="flex text-sm mb-10 float-right">
                    <div className="col-span-6 ">
                        <input name="l_acc_name" type="text" placeholder={"Account Name"}  value={bank.l_acc_name} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input name="l_bank_name" type="text" placeholder={"Bank Name"} value={bank.l_bank_name} className="w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input name="l_acc_no" type="text" placeholder={"Account Number"}  value={bank.l_acc_no} className="w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input name="l_ifsc" type="text" placeholder={"IFSC Code"}  value={bank.l_ifsc} className="w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="col-span-6 float-right">
                        <input name="name" type="text" placeholder={"Name XXXX"} value={bank.name} className=" w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input name="bank" type="text" placeholder={"Bank YYYY"} value={bank.bank} className=" w-full focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input name="acc_no" type="text" placeholder={"0123 4567 8901 2345"} value={bank.acc_no} className="w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                        <input name="ifsc" type="text" placeholder={"IFSC XXX"} value={bank.ifsc} className=" w-full  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100" onChange={(e) => handleChange(e)} />
                    </div>
                </div>
              </div> 
            </div> 
          </div>
          <div className="bg-red-500 rounded  min-h-80 p-2 ml-2 w-2/12 mt-20">
            <p className="font-semibold">Properties</p>
            <div className="w-8 mt-4 flex">
              <p className="p-2">
                Currency
              </p>
              <select
                className="p-1 text-2xl focus:outline-none w-12"
                onBlur={(e) => handleClick(e,'from')}
              >
                <option>₹</option>
                <option>$</option>
                <option>£</option>
                <option>€</option>
                <option>¥</option>
              </select>
            </div>
            <div className="w-8 mt-4 flex">
              <p className="p-2">
                Destination Currency
              </p>
              <select
                className="p-1 text-2xl focus:outline-none w-12"
                onBlur={(e) => handleClick(e,'to')}
              >
                <option>₹</option>
                <option>$</option>
                <option>£</option>
                <option>€</option>
                <option>¥</option>
              </select>
            </div>
            <div className="w-8 mt-4 flex">
              <p className="p-2">
                Clients
              </p>
              <select
                className="p-1 text-2xl focus:outline-none w-120"
                onBlur={(e) => handleClient(e)}
              >
                {allClients.map((client, index) => (
                  <option key={index.toString()}>{client.name}</option>
                ))}
              </select>
            </div>
            <div className="w-8 mt-4 flex">
              <p className="p-2">
                My Businesses
              </p>
              <select
                className="p-1 text-2xl focus:outline-none w-120"
                onBlur={(e) => handleBusniess(e)}
              >
                {allBusinesses.map((business, index) => (
                  <option key={index}>{business.name}</option>
                ))}
              </select>
            </div>
            <div className="w-8 mt-4 flex">
              <p className="p-2">
                Payment
              </p>
              <select
                className="p-1 text-2xl focus:outline-none w-120"
                onBlur={(e) => handlePay(e)}
              >
                {payList?.map((pay, index) => (
                  <option key={index}>{pay.name}</option>
                ))}
              </select>
            </div>
            <div className="w-8 mt-4">
              <div className="p-1 text-2xl focus:outline-none w-120">
                <button className ="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                onClick={store_invoice_db}>Save</button>
              </div>
            </div>
            {
              (Pdf) && (
              <Pdf targetRef={ref} filename="invoice.pdf" size="A4">
                {({ toPdf }) => <div className="mt-2 w-8 mr-12"><button onClick={toPdf} 
                  className ="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  size="3x" color="gray">Download</button></div>}
              </Pdf>
              )
            }
          </div>
        </div>
      </>
    );
  } else {
    return <div>Loading</div>
  }
};

export default Invoice;