
const Modal = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen fixed top-0 left-0 bg-black/40 backdrop-blur-xs">
            {children}
        </div>
    )
}

export default Modal