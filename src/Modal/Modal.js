import React from "react";
import  ReactDOM  from "react-dom";


const Modal = ({isShowing,hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
         <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal font-['Gilroy'] ">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p className="font-medium text-center text-lg mt-2">Hi there, please fill in these details to book a spot</p>

      <form className="mt-8 text-center mb-10 ">
            <input type='text' placeholder='Enter your email address' required className="px-8 py-3 border border-slate-700 placeholder-slate-500 text-sm font-medium" />
            <button className="text-sm px-2 py-3 bg-black text-white border border-black">Book</button>
      </form>
      </div>
    </div>
    </React.Fragment>,document.body
):null


export default Modal