import React, { useState, useCallback } from "react";
import "./Form.scss";
import { useAppContext } from "../../features/appContext";
import Popup from "../Popup";
import QRCode from "qrcode";

const Form = () => {
  const [input, setInput] = useState("");
  const { data, dispatch } = useAppContext();

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = useCallback(() => {
    QRCode.toDataURL(
      input,
      { width: 350, errorCorrectionLevel: "H", version: 2 },
      (error, url) => {
        !error && dispatch({ type: "setURL", url });
      }
    );
  }, [input, dispatch]);

  return (
    <>
      <div className="form-wrapper">
        <div className="flex">
          <div>
            <input
              type="text"
              placeholder="Enter Text or URL..."
              onChange={(e) => inputHandler(e)}
              value={input}
            />
          </div>
          <div>
            <button onClick={() => submitHandler()}>Generate QR</button>
          </div>
        </div>
      </div>
      <Popup show={data?.popup} />
    </>
  );
};

export default Form;
