function BtnPrimary({ children, onClick, classname, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary-500 font-bold py-3 rounded-xl text-gray-50 text-xl cursor-pointer ${classname}`}
    >
      {children}
    </button>
  );
}

export default BtnPrimary;
