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
                <div className="max-w-[800px] w-full">
                    <AddCar/>
                </div>
            </div>
        </div>
    )
}