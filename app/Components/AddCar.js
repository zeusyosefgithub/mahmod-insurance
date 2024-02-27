import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import ModalCustomer from "../ModalsCom/ModalCustomer";
import { IoMdRemove } from "react-icons/io";
import ModalDriver from "../ModalsCom/ModalDriver";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { addDoc, collection } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";
import GetData from "../FireBase/GetData";




export default function AddCar() {

    const [showCustomerModal, setShowCustomerModdal] = useState(false);
    const [customer, setCustomer] = useState(null);

    const [showDriverModal, setShowDriverModdal] = useState(false);
    const [driver, setDriver] = useState(null);

    const [typeCar,setTypeCar] = useState('');

    const [carNumber,setCarNumber] = useState('');
    const [producer,setProducer] = useState('');
    const [typeFuel,setTypeFuel] = useState('');

    const Cars = GetData('car');

    const currectCarId = () => {
        let maxValue = 0;
        if (!Cars.length) {
            return 1;
        }
        for (let index = 0; index < Cars.length; index++) {
            maxValue = Math.max(maxValue, Cars[index]?.car_id)
        }
        return maxValue + 1;
    }

    const AddCar = async () => {
        const NewData = {
            car_id: currectCarId(),
            car_num: carNumber,
            car_product: producer,
            car_type2: typeFuel,
            car_type: typeCar.currentKey,
            customer_id: customer.customer_id,
            Driver_id: driver.driver_id
        }
        await addDoc(collection(MohamadFireStore, "car"), NewData);
        setCustomer('');
        setDriver('');
        setTypeCar('');
        setCarNumber('');
        setProducer('');
        setTypeFuel('');
    }

    return (
        <div>
            {showCustomerModal && <ModalCustomer setCustomer={(cus) => setCustomer(cus)} show={showCustomerModal} disable={() => setShowCustomerModdal(false)} />}
            {showDriverModal && <ModalDriver setDriver={(driver) => setDriver(driver)} show={showDriverModal} disable={() => setShowDriverModdal(false)} />}
            <div className="flex justify-center text-xl m-14">
                <div className="shadow-sm p-4 pl-10 pr-10 rounded-lg shadow-primary">הוספת רכב חדש</div>
            </div>
            <div className="m-20">
                <div className="flex items-center mt-5">
                    <div className="w-28">מספר רכב</div>
                    <Input value={carNumber} onValueChange={(value) => setCarNumber(value)} type="number" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-28">יצרן</div>
                    <Input value={producer} onValueChange={(value) => setProducer(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-28">סוג דלק</div>
                    <Input value={typeFuel} onValueChange={(value) => setTypeFuel(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                </div>
                <div className="flex items-center mt-5">
                    <div className="w-28">סוג רכב</div>
                    <Dropdown dir="rtl">
                        <DropdownTrigger>
                            <Button
                                color="primary"
                                variant="bordered"
                                className="capitalize"
                            >
                                {typeCar ? typeCar : "לבחור"}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Single selection example"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={typeCar}
                            onSelectionChange={setTypeCar}
                        >
                            <DropdownItem key="גרור">גרור</DropdownItem>
                            <DropdownItem key="ציוד הנדס'">ציוד הנדס'</DropdownItem>
                            <DropdownItem key={`רכב עד 9,999 ק"ג`}>רכב עד 9,999 ק"ג</DropdownItem>
                            <DropdownItem key={`רכב מעל 10,000 ק"ג`}>רכב מעל 10,000 ק"ג</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="flex items-center mt-5">
                    {
                        customer
                            ?
                            <>
                                <div className="w-28">נבחר לקוח</div>
                                <div className="w-40">{customer.customer_name}</div>
                                <Button onClick={() => { setCustomer(null); }} variant="bordered" color="danger">למחוק</Button>
                            </>
                            :
                            <>
                                <div className="w-28">בחירת לקוח</div>
                                <Button onClick={() => { setShowCustomerModdal(true); setShowDriverModdal(false); }} variant="bordered" color="primary"><HiPlus className="text-lg" /></Button>
                            </>
                    }
                </div>
                <div className="flex items-center mt-5">
                    {
                        driver
                            ?
                            <>
                                <div className="w-28">נבחר נהג</div>
                                <div className="w-40">{driver.driver_name}</div>
                                <Button onClick={() => { setDriver(null); }} variant="bordered" color="danger">למחוק</Button>
                            </>
                            :
                            <>
                                <div className="w-28">בחירת נהג</div>
                                <Button onClick={() => { setShowCustomerModdal(false); setShowDriverModdal(true); }} variant="bordered" color="primary"><HiPlus className="text-lg" /></Button>
                            </>
                    }
                </div>
            </div>
            <div className="flex justify-center m-14">
                <Button onClick={AddCar} size="lg" color="primary" >אישור</Button>
            </div>
        </div>
    )
}