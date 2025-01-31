import React from "react";
import ReactDom from 'react-dom'
import ModalPage from "./modalPage";

 function Modal()
 {
    return ReactDom.createPortal(
        <ModalPage/>, 
        document.getElementById("portal-root")
    )
 }
 export default Modal