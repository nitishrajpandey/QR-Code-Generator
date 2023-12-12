// import React from 'react'

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { InputAction } from "../Store";

function Input() {
  const dispatch = useDispatch();
  const InputElement = useRef();

  const handelOnClick = () => {
    dispatch(
      InputAction.InputFiled({
        inputValue: InputElement.current.value,
      })
    );
    InputElement.current.value = "";
  };

  return (
    <div>
      <div className="flex flex-col  xs:flex-row justify-center gap-5 items-center mt-8">
        <input
          type="text"
          ref={InputElement}
          placeholder="Enter text here.."
          className="border border-green-600 text-center py-2 px-4 normal-text-size outline-none rounded-xl shadow shadow-green-300 "
          required
        />
        <button
          className="px-4 py-2 bg-blue-500 shadow shadow-blue-800  rounded-xl font-semibold normal-text-size text-white active:scale-95 duration-300 ease-in-out"
          onClick={handelOnClick}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Input;
