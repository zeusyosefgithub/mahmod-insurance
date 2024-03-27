import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

export default function ModalEditDrivers (props){

    const [address,setAddress] = useState(props.data.address);
    const [city,setcity] = useState(props.data.city);
    const [driver_fixed,setdriver_fixed] = useState(props.data.driver_fixed ? 'כן' : 'לא');
    const [driver_id_card,setdriver_id_card] = useState(props.data.driver_id_card);
    const [driver_license_validity,setdriver_license_validity] = useState(props.data.driver_license_validity);
    const [driver_name,setdriver_name] = useState(props.data.driver_name);
    const [driver_phone,setdriver_phone] = useState(props.data.driver_phone);
    const [hazmat,sethazmat] = useState(props.data.hazmat ? 'כן' : 'לא');
    const [last_name,setlast_name] = useState(props.data.last_name);
    const [licenseget,setlicenseget] = useState(props.data.licenseget);
    const [licensegrade,setlicensegrade] = useState(props.data.licensegrade);
    const [licensenumber,setlicensenumber] = useState(props.data.licensenumber);

    const CheckIfNotEqual = () => {
        let a = props.data?.driver_fixed ? 'כן' : 'לא'; 
        let b = props.data?.hazmat ? 'כן' : 'לא'; 
        let c = driver_fixed.anchorKey ? driver_fixed.anchorKey : driver_fixed;
        let d = hazmat.anchorKey ? hazmat.anchorKey : hazmat;
        if(
            address != props.data.address ||
            city != props.data.city ||
            driver_id_card != props.data.driver_id_card ||
            driver_license_validity != props.data.driver_license_validity ||
            driver_name != props.data.driver_name ||
            driver_phone != props.data.driver_phone ||
            last_name != props.data.last_name ||
            a != c ||
            b != d ||
            licenseget != props.data.licenseget ||
            licensegrade != props.data.licensegrade ||
            licensenumber != props.data.licensenumber
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
                    <ModalHeader className="flex justify-center shadow-lg">פרטים הנהג</ModalHeader>
                    <ModalBody className="shadow-lg">
                        <div dir="rtl" className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto sizeingForDivsModals">
                            <div className="flex justify-center">
                                <div className="">
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">שם</div>
                                        <Input onValueChange={(value) => setdriver_name(value)} value={driver_name} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">שם משפחת</div>
                                        <Input onValueChange={(value) => setlast_name(value)} value={last_name} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">ישוב</div>
                                        <Input onValueChange={(value) => setcity(value)} value={city} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">כתובת</div>
                                        <Input onValueChange={(value) => setAddress(value)} value={address} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">מספר</div>
                                        <Input onValueChange={(value) => setdriver_phone(value)} value={driver_phone} type="number" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">תוקף רישיון נהיגה</div>
                                        <Input onValueChange={(value) => setdriver_license_validity(value)} value={driver_license_validity} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">מס' תעדת זהות</div>
                                        <Input onValueChange={(value) => setdriver_id_card(value)} value={driver_id_card} type="number" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">תאריך יצרת רישיון</div>
                                        <Input onValueChange={(value) => setlicenseget(value)} value={licenseget} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">דרגת רישיון</div>
                                        <Input onValueChange={(value) => setlicensegrade(value)} value={licensegrade} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">מספר רשיון</div>
                                        <Input onValueChange={(value) => setlicensenumber(value)} value={licensenumber} type="number" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">האם הנהג תוקן</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {driver_fixed}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={driver_fixed}
                                                onSelectionChange={setdriver_fixed}
                                            >
                                                <DropdownItem key="כן">כן</DropdownItem>
                                                <DropdownItem key="לא">לא</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">חומרים מסוכנים</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {hazmat}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={hazmat}
                                                onSelectionChange={sethazmat}
                                            >
                                                <DropdownItem key="כן">כן</DropdownItem>
                                                <DropdownItem key="לא">לא</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
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