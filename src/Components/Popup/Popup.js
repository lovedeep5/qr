import React, { memo, useMemo } from "react";
import "./Popup.scss";
import { useAppContext } from "../../features/appContext";

const Popup = ({ show }) => {
  const popupCloseAction = useMemo(() => {
    return {
      type: "popupDismis",
    };
  }, []);
  const {
    data: { url },
    dispatch,
  } = useAppContext();

  return show ? (
    <div className="popup-wrapper">
      <div className="popup-body">
        <div className="image-container">
          <p>Here is your QR Code</p>
          <img src={url} alt="QR" />
        </div>
        <div className="button-container">
          <a class="btns" href={url} download="qr">
            Download
          </a>
          <a
            href="/"
            class="btns"
            onClick={(e) => {
              e.preventDefault();
              dispatch(popupCloseAction);
            }}
          >
            Close
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default memo(Popup);
