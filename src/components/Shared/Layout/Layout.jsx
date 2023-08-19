import { Outlet } from "react-router-dom";
import Header from "../HomeCompo/Header/Header";
import Footer from "../HomeCompo/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;