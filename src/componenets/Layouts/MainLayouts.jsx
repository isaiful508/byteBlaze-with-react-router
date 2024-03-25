import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;