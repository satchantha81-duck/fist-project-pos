// import {  redirect } from "react-router-dom";

import { useNavigate } from "react-router-dom";



export default function Home() {
    const navigate = useNavigate();
    return ( 
        <div className="grid grid-cols-2 gap-2">
            <div className="bg-yellow-500 p-2 rounded-2xl">
                <img src="./src/assets/img-icon/products.png" alt="" />
                <p>All Product</p>
            </div>
            <div className="bg-red-500 p-2 rounded-2xl">
                <img src="./src/assets/img-icon/selling.png" alt="" />
                <p>Sell Today</p>
            </div>
            <div className="bg-sky-500 p-2 rounded-2xl">
                <img src="./src/assets/img-icon/order.png" alt="" />
                <p>Alert Stock</p>
                
            </div>
            <div className="bg-teal-500 p-2 rounded-2xl">
                <img src="./src/assets/img-icon/parchment.png" alt="" />
                <p>Sell History</p> 
            </div>
            {/* <Link to={"/scanbarcode"}> */}
                <div onClick={() => navigate("/scanbarcode")} className="bg-amber-600 p-2 rounded-2xl col-span-2">
                    <img src="./src/assets/img-icon/scan.png" alt="" />
                    <p>Scan To Sell</p> 
                </div>
            {/* </Link> */}
        </div>
     );
}