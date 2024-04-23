'use client';
import { Button } from "@nextui-org/button";
import { Avatar, Card, CardBody, CardFooter, CardHeader, CheckboxGroup, CustomCheckbox, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { useState } from "react";
import Link from "next/link";
export default function ModalCustomer(props) {
    const Customers = GetData('Customer').sort((a,b) => {
        return a.customer_id - b.customer_id;
    });
    const colors = ["[#e2e8f0]","[#e5e7eb]","[#e4e4e7]","[#e5e5e5]","[#d4d4d4]","[#d6d3d1]"]
    return (
        <div className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto no-scrollbar sizeingForDivsModals">
            {
                Customers.map((cus,i) => {
                    return <div key={i} onClick={() => { props.setCustomer(cus); props.disable(); }} className="cursor-pointer">{GetCustomersRows(cus,colors[i])}</div>
                })
            }
        </div>

    )
}

function GetCustomersRows(cus, colors) {
    return <Card className={`mb-4 h-fit bg-${colors}`}>
        <CardHeader dir="rtl" className="flex justify-between">
            <div className="min-w-[55px]">
                <Avatar size="sm" isBordered color="primary" src={cus.src} />
            </div>
            <div className="flex w-full">
                <div className="w-[40px]">
                    {cus.customer_id}
                </div>
                <div>
                    {cus.customer_name}
                </div>
            </div>
        </CardHeader>
    </Card>
}
