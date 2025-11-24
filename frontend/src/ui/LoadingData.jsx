import { FadeLoader } from "react-spinners"

const LoadingData = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <FadeLoader color="rgba(59, 130, 246, 1)" />
        </div>
    )
}

export default LoadingData