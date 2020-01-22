import React, { FC } from "react";

interface OwnProps {
  inputId: string;
  placeHolder: string;
  value: string;
  handler: (char: string) => void;
  keyDown: (keyCode: string) => void;
  type: string;
}

const Input: FC<OwnProps> = ({
  inputId,
  placeHolder,
  value,
  handler,
  keyDown,
  type
}) => {
  return (
    <label htmlFor={inputId}>
      <input
        type={type}
        id={inputId}
        value={value}
        onChange={({ target: { value } }) => handler(value)}
        onKeyPress={({ key }) => keyDown(key)}
        placeholder={placeHolder}
      />
    </label>
  );
};

export default Input;
