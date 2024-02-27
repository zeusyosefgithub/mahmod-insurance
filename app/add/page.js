'use client';

import { Button } from "@nextui-org/react";
import { useState } from "react";
import AddCustomer from "../Components/AddCustomer";
import AddCar from "../Components/AddCar";
import AddDriver from "../Components/AddDriver";

export default function Add(){

    const [showType,setShowType] = useState('car');

    return(
        <div dir="rtl" className="mb-20">
            <div className="flex justify-center">
                <div className="m-10 w-1/2">
                    <div className="flex justify-around bg-white border-2 border-primary rounded-xl shadow-2xl p-5">
                        <Button onClick={() => setShowType("customer")} color="primary" variant="ghost">הוספת לקוח</Button>
                        <Button onClick={() => setShowType("driver")} color="primary" variant="ghost">הוספת נהג</Button>
                        <Button onClick={() => setShowType("car")} color="primary" variant="ghost">הוספת רכב</Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-20">
                <div className="w-9/12 shadow-2xl rounded-3xl">
                    {showType === 'customer' && <AddCustomer/>}
                    {showType === 'car' && <AddCar/>}
                    {showType === 'driver' && <AddDriver/>}
                </div>
            </div>
        </div>
    )
}