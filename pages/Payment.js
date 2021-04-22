import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar/TopBar";

function Payment() {
  const [payList, setPayList] = useState([]);
  const [bank, setBank] = useState({
    l_acc_name: "Account Name",
    l_bank_name: "Bank Name",
    l_acc_no: "Account Number",
    l_ifsc: "IFSC",
    name: "",
    bank: "",
    acc_no: "",
    ifsc: "",
  });

  const handleChange = (e) => {
    setBank((st) => ({
      ...st,
      [e.target.name]: e.target.value,
    }));
  };

  const get_pay = () => {
    axios
      .get("http://localhost:9000/pay")
      .then(function (response) {
        console.log(response.data.data);
        setPayList(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    get_pay();
  }, []);

  const add_pay = (pay_details) => {
    axios
      .post("http://localhost:9000/pay", pay_details)
      .then(function (response) {
        console.log(response);
        get_pay();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex rounded bg-gray-200 min-h-screen min-w-screen">
      <div className="lg:flex lg:w-2/12 lg:mx-auto">
        <TopBar />
      </div>
      <div className=" p-4 w-10/12 ">
        Enter payment details
        <div className="col-span-6 ">
          <input
            name="l_acc_name"
            type="text"
            placeholder={"Account Name"}
            value={bank.l_acc_name}
            className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="l_bank_name"
            type="text"
            placeholder={"Bank Name"}
            value={bank.l_bank_name}
            className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="l_acc_no"
            type="text"
            placeholder={"Account Number"}
            value={bank.l_acc_no}
            className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="l_ifsc"
            type="text"
            placeholder={"IFSC Code"}
            value={bank.l_ifsc}
            className="focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-6 ">
          <input
            name="name"
            type="text"
            placeholder={"Name XXXX"}
            value={bank.name}
            className="  focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="bank"
            type="text"
            placeholder={"Bank YYYY"}
            value={bank.bank}
            className=" focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="acc_no"
            type="text"
            placeholder={"5555 6666 7777 8888"}
            value={bank.acc_no}
            className=" focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="ifsc"
            type="text"
            placeholder={"IFSC Code XXX"}
            value={bank.ifsc}
            className=" focus:outline-none hover:bg-yellow-100 focus:bg-yellow-100"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button onClick={(e) => add_pay(bank)}>Save</button>
        {payList.map((row) => (
          <div key={row._id} className=" w-1/4 shadow border rounded-lg">
            <div className="flex items-center space-x-4 p-4">
              <div className="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-7 h-7"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-500 font-semibold">{row.bank}</p>
                <div className="flex items-baseline space-x-4">
                  <h2 className="text-2xl font-semibold">{row.ifsc}</h2>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="block p-3 text-lg font-semibold bg-purple-50 text-purple-800 hover:bg-purple-100 cursor-pointer"
            >
              View all
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;
