import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

export default function ModalEditCustomer (props){

    const [customer_city,setcustomer_city] = useState(props.data.customer_city);
    const [customer_name,setcustomer_name] = useState(props.data.customer_name);
    const [customer_phone,setcustomer_phone] = useState(props.data.customer_phone);
    const [customer_site,setcustomer_site] = useState(props.data.customer_site);
    const [serial,setserial] = useState(props.data.serial);

    const CheckIfNotEqual = () => {
        if(
            customer_city != props.data.customer_city ||
            customer_name != props.data.customer_name ||
            customer_phone != props.data.customer_phone ||
            customer_site != props.data.customer_site ||
            serial != props.data.serial
        )
        {
            return true;
        }
        return false;
    }

    return(
        <Modal className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
            <ModalContent>
                <>
                    <ModalHeader className="flex justify-center shadow-lg">פרטים הקלוח</ModalHeader>
                    <ModalBody className="shadow-lg">
                        <div dir="rtl" className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto sizeingForDivsModals">
                            <div className="flex justify-center">
                                <div className="w-1/2">
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">שם</div>
                                        <Input onValueChange={(value) => setcustomer_name(value)} value={customer_name} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">מספר סידורי</div>
                                        <Input onValueChange={(value) => setserial(value)} value={serial} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">ישוב</div>
                                        <Input onValueChange={(value) => setcustomer_city(value)} value={customer_city} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">כתובת</div>
                                        <Input onValueChange={(value) => setcustomer_site(value)} value={customer_site} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">מספר</div>
                                        <Input onValueChange={(value) => setcustomer_phone(value)} value={customer_phone} type="number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full">
                            <Button className="font-extrabold" size="lg" color="primary" variant="bordered" onClick={props.disable}>
                                <IoMdClose className="text-xl"/>סגור
                            </Button>
                        </div>
                        {
                            CheckIfNotEqual() &&
                            <Button className="font-extrabold" size="lg" color="primary" onClick={props.disable}>
                                <GrUpdate className="text-2xl"/>עדכון
                            </Button>
                        }
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    )
}