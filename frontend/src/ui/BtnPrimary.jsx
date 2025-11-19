function BtnPrimary({ children, onClick, classname, type, disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bg-primary-500 font-bold py-3 rounded-lg text-gray-50 text-xl disabled:bg-primary-300 ${classname}`}
    >
      {children}
    </button>
  );
}

export default BtnPrimary;
