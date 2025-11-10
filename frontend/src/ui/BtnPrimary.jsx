function BtnPrimary({ children, onClick, classname }) {
  return (
    <button className={`bg-primary-500 font-bold py-4 rounded-2xl text-gray-50 text-xl cursor-pointer ${classname}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default BtnPrimary;
