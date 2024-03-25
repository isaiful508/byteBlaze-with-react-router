import HeroBanner from "../componenets/HeroBanner.jsx/HeroBanner";
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div className="flex relative flex-col justify-center items-center min-h-screen">
            <HeroBanner></HeroBanner>

            <img className="absolute bottom-0 w-full" src={wave} alt="" />
           
        </div>
    );
};

export default Home;