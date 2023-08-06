/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Modal = ({ modalData }) => {
  const { tool_name, logo, image_link, description, website } = modalData;
  console.log(modalData);
  return (
    <>
      <dialog id="my_modal_4" className="modal ">
        <form
          method="dialog"
          className="modal-box w-11/12 overflow-visible max-w-5xl relative"
        >
          <div className="card   card-side bg-base-100 ">
            <div className="card-body">
              <h2 className="card-title">{tool_name}</h2>
              <p>{description}</p>
              <hr className="border-1 border-black"></hr>
            </div>
            <figure>
              <img
                className="w-96"
                src={
                  image_link
                    ? image_link[0]
                    : "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                }
                alt="Movie"
              />
            </figure>
          </div>
          <button className=" btn btn-circle text-slate-700 hover:bg-slate-50 hover:text-slate-800 absolute top-[-15px] right-[-15px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
