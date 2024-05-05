import React from 'react';

const ChevronRightIcon = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.35225 13.8977C6.13258 13.6781 6.13258 13.3219 6.35225 13.1023L10.4545 9L6.35225 4.89775C6.13258 4.67808 6.13258 4.32192 6.35225 4.10225C6.57192 3.88258 6.92808 3.88258 7.14775 4.10225L12.0455 9L7.14775 13.8977C6.92808 14.1174 6.57192 14.1174 6.35225 13.8977Z"
      />
    </svg>
  );
};

export default ChevronRightIcon;
