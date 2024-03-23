import ScaleLoader from "react-spinners/ScaleLoader";

const Spinners = () => {
    return (
        <div className='min-h-[calc(100vh-116px)] flex flex-col justify-center items-center'>
            <ScaleLoader size={100} color="#F92FD3"></ScaleLoader>
        </div>
    );
};

export default Spinners;