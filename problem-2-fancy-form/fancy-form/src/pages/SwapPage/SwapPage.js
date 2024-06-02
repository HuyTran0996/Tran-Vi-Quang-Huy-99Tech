import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SwapPage.scss";

import { useThunk } from "../../hook/use-thunk";
import { fetchDataAll } from "../../store/thunks/fetchCoins";
import Loading from "../../components/Loading/Loading";
import { showToast } from "../../components/ToastMessage";

const SwapPage = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [toAmount, setToAmount] = useState(0);
  const [doFetchData, isLoading, loadingError] = useThunk(fetchDataAll);

  const { dataDataAll } = useSelector((state) => {
    return state.coins;
  });

  useEffect(() => {
    doFetchData();
  }, [doFetchData]);

  useEffect(() => {
    if (amount > 0 && fromCurrency && toCurrency) {
      const fromRate = dataDataAll.find(
        (coin) => coin.currency === fromCurrency
      )?.price;
      const toRate = dataDataAll.find(
        (coin) => coin.currency === toCurrency
      )?.price;

      if (fromRate && toRate) {
        setToAmount((amount * fromRate) / toRate);
      }
    }
  }, [amount, fromCurrency, toCurrency, dataDataAll]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === 0) {
      showToast("Enter the amount that you want to swap.", "warn");
    } else if (!fromCurrency || !toCurrency) {
      showToast("Please select both currencies.", "warn");
    } else {
      showToast("Swapped successfully", "success");
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  if (loadingError) {
    return <p>Error loading data</p>;
  } else {
    return (
      <div className="SwapPage">
        <form onSubmit={handleSubmit}>
          <div className="part">
            <h3>Amount</h3>
            <input
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="part">
            <h3>From:</h3>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="" disabled>
                Select currency
              </option>
              {dataDataAll.map((coin) => (
                <option key={coin.currency} value={coin.currency}>
                  {coin.currency}
                </option>
              ))}
            </select>
          </div>

          <div className="part">
            <h3>To:</h3>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="" disabled>
                Select currency
              </option>
              {dataDataAll.map((coin) => (
                <option key={coin.currency} value={coin.currency}>
                  {coin.currency}
                </option>
              ))}
            </select>
          </div>
          <div>
            {`Result: ${amount} ${fromCurrency} = ${toAmount.toFixed(
              6
            )} ${toCurrency} `}
          </div>
          <div>
            Pool Price: 1 {fromCurrency} ={" "}
            {fromCurrency && toCurrency
              ? (
                  dataDataAll.find((coin) => coin.currency === fromCurrency)
                    ?.price /
                  dataDataAll.find((coin) => coin.currency === toCurrency)
                    ?.price
                ).toFixed(6)
              : 0}{" "}
            {toCurrency}
          </div>
          <button type="submit">Perform Swap</button>
        </form>
      </div>
    );
  }
};

export default SwapPage;
