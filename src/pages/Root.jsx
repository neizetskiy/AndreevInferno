import { useEffect } from "react";
import { Outlet} from "react-router-dom";
import Header from "../copmonents/Header/Header";
import Footer from "../copmonents/Footer/Footer";

const Root = () =>{
    useEffect(()=>{
        document.title = "Inferno"
    }, [])

    return(
        <>
        <main>
                <Header />
            <Outlet />
            <Footer />
        </main>
        </>
    )
}

export default Root