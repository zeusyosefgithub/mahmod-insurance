import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";
import GetData from "../FireBase/GetData";

export default function AddCustomer() {

    const Customers = GetData('Customer');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddresss] = useState('');
    const [location, setLocation] = useState('');

    const currectCustomerId = () => {
        let maxValue = 0;
        if (!Customers.length) {
            return 1;
        }
        for (let index = 0; index < Customers.length; index++) {
            maxValue = Math.max(maxValue, Customers[index]?.customer_id)
        }
        return maxValue + 1;
    }
    const AddCustomer = async () => {
        const NewData = {
            customer_city: location,
            customer_id: currectCustomerId(),
            customer_name: name,
            customer_phone: number,
            customer_site: address
        }
        await addDoc(collection(MohamadFireStore, "Customer"), NewData);
        setName('');
        setNumber('');
        setAddresss('');
        setLocation('');
    }

    return (
        <div>
            <div className="flex justify-center text-xl m-14">
                <div className="shadow-sm p-4 pl-10 pr-10 rounded-lg shadow-primary">הוספת לקוח חדש</div>
            </div>
            <div className="m-20">
                <div className="flex items-center mt-5">
                    <div className="w-28">שם לקוח</div>
                    <Input value={name} onValueChange={(value) => setName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-28">מספר לקוח</div>
                    <Input value={number} onValueChange={(value) => setNumber(value)} type="number" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-28">כתובת</div>
                    <Input value={address} onValueChange={(value) => setAddresss(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96"/>
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-28">ישוב</div>
                    <Input value={location} onValueChange={(value) => setLocation(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96"/>
                </div> 
            </div>
            <div className="flex justify-center m-14">
                <Button onClick={AddCustomer} size="lg" color="primary" >אישור</Button>
            </div>
        </div>
    )
}