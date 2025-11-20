import { useState } from 'react';
import { PiEye, PiEyeSlash } from 'react-icons/pi';

function TextField({
  placeholder,
  icon,
  value,
  onChange,
  classname,
  disabled,
  type = 'text',
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  return (
    <div className="text-lg group relative text-gray-50 w-full border-b-2 z-10 border-gray-300 focus-within:border-b-2 focus-within:border-primary-500 flex bg-transparent p-2 justify-between items-center transition-all">
      <label className={`absolute transition-transform text-gray-300 group-focus-within:font-bold group-focus-within:-translate-y-7 -z-10 group-focus-within:text-primary-500
           ${value === '' ? 'absolute' : '-translate-y-7'}`}
      >
        {placeholder}
      </label>
      <input
        autoComplete="off"
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`outline-0 w-full bg-transparent placeholder-text-gray-300 ${classname}`}
        type={isPassword && showPassword ? 'text' : type}
      />
      {isPassword && (
        <button
          disabled={disabled}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={`text-gray-300 cursor-pointer disabled:text-gray-300 hover:text-primary-500 transition`}
        >
          {showPassword ? (
            <PiEyeSlash className="size-6" />
          ) : (
            <PiEye className="size-6 " />
          )}
        </button>
      )}
      {!isPassword && icon}
    </div>
  );
}

export default TextField;
