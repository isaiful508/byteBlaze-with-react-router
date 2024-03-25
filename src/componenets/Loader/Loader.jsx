import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex    min-h-screen flex-col justify-center items-center">
            <ScaleLoader size={100} color='#F92FD3'></ScaleLoader>
        </div>
    );
};

export default Loader;