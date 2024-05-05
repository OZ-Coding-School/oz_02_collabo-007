import React from 'react';

const FlagIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 3.25H20.2295L17.5102 8.53333L20.2295 13.8167H5.75V21C5.75 21.4142 5.41421 21.75 5 21.75C4.58579 21.75 4.25 21.4142 4.25 21V3.25ZM5.75 12.3167H17.7705L15.8232 8.53333L17.7705 4.75H5.75V12.3167Z"
      />
    </svg>
  );
};

export default FlagIcon;
