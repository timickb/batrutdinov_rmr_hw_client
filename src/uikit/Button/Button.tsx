import React, { DOMAttributes } from 'react';
import './Button.css';

interface IProps extends DOMAttributes<HTMLButtonElement> {
  disabled?: boolean;
  width?: number;
  padding?: number;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IProps> = ({
  children,
  disabled,
  width,
  padding,
  onClick,
  ...props
}) => {
  return (
    <button
      style={{ width: width, padding: padding }}
      className="button"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
