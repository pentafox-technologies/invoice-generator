// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileAlt } from "@fortawesome/free-solid-svg-icons"; 
import 'tailwindcss/tailwind.css'
import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import CompanyDetails from "../components/CompanyDetails/CompanyDetails";
import ItemsList from "../components/ItemList/ItemsList";
import axios from "axios";
import InvoiceDetails from "../components/InvoiceDetails/InvoiceDetails";
import dynamic from 'next/dynamic'
import Sticky from 'react-stickynode';
import { HomePageWrapper } from '../styles/HomePageWrapper.css';
import Editable from '../components/Editable/Editable';
var Pdf = null
if (typeof (window) !== 'undefined') {
  import("react-to-pdf").then(module => {
    Pdf = module.default;
  });
}
const ref = React.createRef();

const HomePage = () => {
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

  return (
    <>
      <HomePageWrapper>
        {/* <Editable /> */}
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <TopBar />
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-9">
            <div className=" grid grid-cols-12 mt-40 ">
              <div ref={ref} className="col-span-8  min-w-full mb-20 min-h-screen invoice-page">
                <div className="flex justify-between  " >
                  <div class=" add-client text-center">
                    <div class="add-client-text">
                      To create an invoice, first select or create a client.
                      </div>
                    <a
                      href="https://fms.lano.io/en/">
                      <span class="text-brand font-bold"><span className=" text-md p-1">+</span>Add client</span>
                    </a>
                  </div>
                  <div className="w-48 business-type">
                    <a
                      href="https://fms.lano.io/en/">
                      <p class="text-brand font-bold mb-2"><span className=" text-md p-1">+</span>Add Logo</p>
                    </a>
                    <span className=" business-name">Vignesh Sankaran</span>
                    <br />
                    {/* <input value="Vignesh Sankaran" type="hidden" name="invoice[full_name]" id="invoice_full_name"></input> */}
                    <address className="mb-2">
                      <span>5th Floor, 91Springboard,  Trifecta Building, ITPL Main road, Mahdevapura</span>
                      <br />
                      <span>560048 Bengaluru, IN</span>
                    </address>
                    <address className="mb-2">
                      <span>+91 90432 69523</span>
                      <br />
                      <span>vignesh@pentafox.in</span>
                    </address>
                    <span className="mb-2">
                      Tax ID: 33ANUPV7383CIZE
                      </span>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="invoice">Invoice</h1>
                    <div className="flex justify-between mb-8">
                      <div className="left-column">
                        <span>Invoice ID:2021-04-26-0001</span>
                      </div>
                      <div className="right-column">
                        <span>Invoice Date:26/04/2021</span>
                      </div>
                    </div>
                  </div>
                  <ItemsList currency={currency} toCurrency={toCurrency} actionCB={collect_items} />
                  <div>
                    <a
                      href="https://fms.lano.io/en/">
                      <p class="text-brand font-bold mb-8"><span className=" text-md p-1">+</span>Add Payment deadline</p>
                    </a>
                    <a
                      href="https://fms.lano.io/en/">
                      <p class="text-brand font-bold mb-2"><span className=" text-md p-1">+</span>Add concluding text (optional)</p>
                    </a>
                  </div>
                  <hr className="mt-40 border-gray-800" />
                  <div className="flex mt-8">
                    <div class="footer-left mr-4">
                      <span>Vignesh Sankaran</span>
                      <br />
                      <span>5th Floor, 91Springboard,  Trifecta Building, ITPL Main road, Mahdevapura</span>
                      <br />
                      <span>560048 Bengaluru, IN</span>
                    </div>
                    <div>
                      <span>Receiver Vignesh Sankaran</span>
                      <br />
                      <span>Indian Bank</span><br />
                      <span>Country of Bank: India</span><br />
                      <span>Account number:6126431103</span><br />
                      <span>IFSC: IDIB000J008</span>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
              <div className="col-span-4 ml-24 mr-12">
                <Sticky enabled={true} top={0}>
                  <div className="bg-white shadow-lg   h-3/5 p-4 mb-20">
                    <p className="text-center font-normal text-2xl">Properties</p>
                    <div className="w-full my-4">
                      <p className="py-2">From Currency</p>
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
                      <p className="py-2">To Currency</p>
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
                      <p className="py-2">Clients</p>
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
                      <p className="py-2">My Businesses</p>
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
                      <p className="p-2">Payment</p>
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
          </div>
        </div>
      </HomePageWrapper>
    </>
  );
};

export default HomePage;
