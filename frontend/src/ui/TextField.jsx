import { useState } from 'react';
import { PiEye, PiEyeSlash } from 'react-icons/pi';

function TextField({
  placeholder,
  icon,
  value,
  onChange,
  classname,
  type = 'text',
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  return (
    <div className="text-lg group relative text-gray-50 border-b-2 z-10 border-gray-300 focus-within:border-b-2 focus-within:border-primary-500 flex bg-transparent py-3 px-2 justify-between items-center transition-all">
      <label className={`absolute ${value === '' ? 'absolute' : '-translate-y-10'}
           transition-transform text-gray-300 text-lg group-focus-within:font-bold group-focus-within:-translate-y-10 -z-10 group-focus-within:text-primary-500`}
      >
        {placeholder}
      </label>
      <input
        autoComplete="off"
        value={value}
        onChange={onChange}
        className={`outline-0 w-full bg-transparent placeholder-text-gray-300 ${classname}`}
        type={isPassword && showPassword ? 'text' : type}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-gray-300 cursor-pointer hover:text-primary-500 transition"
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
