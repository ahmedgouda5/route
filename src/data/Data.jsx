import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Data() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  // Get Customers
  async function getCustomerData() {
    const option = {
      url: `https://raw.githubusercontent.com/ahmedgouda5/new/main/db.json`,
      method: "GET",
    };

    let { data } = await axios.request(option);
    setCustomers(data.customers);
  }

  // Get Transactions
  async function getTransactionData() {
    const option = {
      url: `https://raw.githubusercontent.com/ahmedgouda5/new/main/db.json`,
      method: "GET",
    };

    let { data } = await axios.request(option);
    setTransactions(data.transactions);
  }

  // Invoke functions
  useEffect(() => {
    getCustomerData();
    getTransactionData();
  }, []);

  const getCustomerNameById = (id) => {
    const customer = customers.find((customer) => customer.id === id);
    return customer ? customer.name : "Unknown";
  };

  // Filtered transactions based on search
  const filteredTransactions = transactions.filter((transaction) =>
    getCustomerNameById(transaction.customer_id)
      .toLowerCase()
      .includes(search.toUpperCase().toLowerCase())
  );

  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center my-4 ">
        <h1 className="text-uppercase">Customers Transactions</h1>
        <div className="d-flex justify-content-center gap-2 w-50 ">
          <input
            type="text"
            placeholder="Search..."
            className="form-control w-100 fs-5"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="my-5 w-75">
          <table className="table mt-3">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>View Chart</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index} className="text-center p-2">
                  <td>{transaction.customer_id}</td>
                  <td>{getCustomerNameById(transaction.customer_id)}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <Link
                      to={`/chart/${transaction.amount}`}
                      className="btn form-control bg-success w-auto"
                    >
                      View Chart
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
