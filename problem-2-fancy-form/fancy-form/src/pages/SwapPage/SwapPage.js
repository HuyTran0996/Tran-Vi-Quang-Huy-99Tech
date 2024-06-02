import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./SwapPage.scss";

import { useThunk } from "../../hook/use-thunk";
import { fetchDataAll } from "../../store/thunks/fetchCoins";
import Loading from "../../components/Loading/Loading";
import { showToast } from "../../components/ToastMessage";

import { MdCurrencyExchange } from "react-icons/md";

//function to help get tokenImage
const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "").replace(".svg", "")] = r(item);
  });
  return images;
};

const tokenImages = importAll(
  require.context("../../assets/tokens", false, /\.svg$/)
);

const SwapPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("USD");
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
      const simulateSubmitting = async () => {
        setIsSubmitting(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          showToast("Swapped successfully", "success");
        } catch (err) {
          showToast("Swapped fail", "error");
        } finally {
          setIsSubmitting(false);
          setAmount("");
        }
      };
      simulateSubmitting();
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
        <h1 className="title">Swap Page</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="part">
              <h3>From:</h3>
              <div className="currency-select">
                <div className="wrapper">
                  <div className="selectAndIcon">
                    {fromCurrency && (
                      <img
                        src={tokenImages[fromCurrency]}
                        alt={fromCurrency}
                        className="token-icon"
                      />
                    )}

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

                  <input
                    type="number"
                    placeholder="Enter amount..."
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="divider">
              <div className="line"></div>
              <MdCurrencyExchange size={30} />
              <div className="line"></div>
            </div>
            <div className="part">
              <h3>To:</h3>
              <div className="currency-select">
                {toCurrency && (
                  <img
                    src={tokenImages[toCurrency]}
                    alt={toCurrency}
                    className="token-icon"
                  />
                )}

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
            </div>

            <div className="result">
              {`Result: ${amount} ${fromCurrency} = ${toAmount.toFixed(
                6
              )} ${toCurrency} `}
            </div>
            <div className="pool-price">
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
            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting" : "Perform Swap"}
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default SwapPage;
