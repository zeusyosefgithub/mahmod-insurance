import { Button, Input } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";
import GetData from "../FireBase/GetData";


export default function AddDriver() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [endDate, setEndDate] = useState('');
    const [cardId, setCardId] = useState('');
    const [isFixed, setIsFixed] = useState('');

    const Drivers = GetData('Driver');

    const currectDriverId = () => {
        let maxValue = 0;
        if (!Drivers.length) {
            return 1;
        }
        for (let index = 0; index < Drivers.length; index++) {
            maxValue = Math.max(maxValue, Drivers[index]?.driver_id)
        }
        return maxValue + 1;
    }
    const AddDriver = async () => {

        const NewData = {
            driver_fixed: isFixed === 'כן' ? true : false,
            driver_id: currectDriverId(),
            driver_id_card: cardId,
            driver_license_validity: endDate,
            driver_name: name,
            driver_phone: phone
        }
        await addDoc(collection(MohamadFireStore, "Driver"), NewData);
        setName('');
        setPhone('');
        setEndDate('');
        setCardId('');
        setIsFixed('');
    }

    return (
        <div>
            <div className="flex justify-center text-xl m-14">
                <div className="shadow-sm p-4 pl-10 pr-10 rounded-lg shadow-primary">הוספת נהג חדש</div>
            </div>
            <div className="m-20">
                <div className="flex items-center mt-5">
                    <div className="w-36">שם נהג</div>
                    <Input value={name} onValueChange={(value) => setName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-36">מספר נהג</div>
                    <Input value={phone} onValueChange={(value) => setPhone(value)} type="number" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-36">תוקף רישיון נהיגה</div>
                    <Input value={endDate} onValueChange={(value) => setEndDate(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-36">מס' תעדת זהות</div>
                    <Input value={cardId} onValueChange={(value) => setCardId(value)} type="number" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-36">האם הנהג תוקן</div>
                    <Dropdown dir="rtl">
                        <DropdownTrigger>
                            <Button
                                color="primary"
                                variant="bordered"
                                className="capitalize"
                            >
                               {isFixed ? isFixed : "לבחור"}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={isFixed}
                        onSelectionChange={setIsFixed}
                        >
                            <DropdownItem key="כן">כן</DropdownItem>
                            <DropdownItem key="לא">לא</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className="flex justify-center m-14">
                <Button onClick={AddDriver} size="lg" color="primary" >אישור</Button>
            </div>
        </div>
    )
}