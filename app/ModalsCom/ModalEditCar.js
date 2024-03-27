import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { useState,useContext, useEffect } from "react";
import { GrUpdate } from "react-icons/gr";
import GetData from "../FireBase/GetData";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useRouter } from "next/navigation";
import ContactContext from "../Components/ContactContext";
import { SiGoogleforms } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { doc, updateDoc } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";



export default function ModalEditCar(props) {

    const { setContactName } = useContext(ContactContext);
    const router = useRouter();

    const [loading,setLoading] = useState(false);

    const type2 = GetData('type2');
    const checks = GetData('checks');

    const [car_num, setcar_num] = useState(props.data.car_num);
    const [car_product, setcar_product] = useState(props.data.car_product);
    const [car_type, setcar_type] = useState(props.data.car_type);
    const [car_type2, setcar_type2] = useState(props.data.car_type2);
    const [enddate, setenddate] = useState(props.data.enddate);
    const [hazmat, sethazmat] = useState(props.data.hazmat ? 'כן' : 'לא')
    const [insurance, setinsurance] = useState(props.data.insurance);
    const [insuranceclass, setinsuranceclass] = useState(props.data.insuranceclass);
    const [shockabsorbers, setshockabsorbers] = useState(props.data.shockabsorbers);
    const [tachograph, settachograph] = useState(props.data.tachograph ? 'כן' : 'לא');
    const [winterreview, setwinterreview] = useState(props.data.winterreview);

    const CheckIfNotEqual = () => {
        let a = props.data?.hazmat ? 'כן' : 'לא';
        let b = props.data?.tachograph ? 'כן' : 'לא';
        let c = hazmat.anchorKey ? hazmat.anchorKey : hazmat;
        let d = tachograph.anchorKey ? tachograph.anchorKey : tachograph;
        let e = car_type.anchorKey ? car_type.anchorKey : car_type;;
        let f = car_type2.anchorKey ? car_type2.anchorKey : car_type2;
        if (
            car_num != props.data.car_num ||
            car_product != props.data.car_product ||
            e != props.data.car_type ||
            f != props.data.car_type2 ||
            enddate != props.data.enddate ||
            a != c ||
            insurance != props.data.insurance ||
            insuranceclass != props.data.insuranceclass ||
            shockabsorbers != props.data.shockabsorbers ||
            b != d ||
            winterreview != winterreview
        ) {
            return true;
        }
        return false;
    }

    const createNewForm = () => {
        setLoading(true);
        setContactName(props.data.car_id);
        router.push('/add');
    } 

    const GetChecks = () => {
        let Listchecks = [];
        for (let index = 0; index < checks?.length; index++) {
            if(checks[index]?.car_id === props.data.car_id){
                Listchecks.push(checks[index]);
            }
        }
        return Listchecks;
    }

    const updateProps = async () => {
        setLoading(true);
        const newCarData = {
            car_num: car_num,
            car_product: car_product,
            car_type: car_type,
            car_type2: car_type2,
            enddate: enddate,
            hazmat: hazmat,
            insurance: insurance,
            insuranceclass: insuranceclass,
            shockabsorbers: shockabsorbers,
            tachograph: tachograph,
            winterreview: winterreview,
        };
        const invId = doc(MohamadFireStore, "car", props.data.id);
        await updateDoc(invId, newCarData);
        setLoading(false);
    }

    return (
        <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
            <ModalContent>
                <>
                    {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0 z-50"/>}
                    <ModalHeader className="flex justify-center shadow-lg">פרטים רכב</ModalHeader>
                    <ModalBody className="shadow-lg">
                        <div dir="rtl" className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto sizeingForDivsModals">
                            <div className="flex justify-center">
                                <div className="">
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">מספר רכב</div>
                                        <Input onValueChange={(value) => setcar_num(value)} value={car_num} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">יצרן</div>
                                        <Input onValueChange={(value) => setcar_product(value)} value={car_product} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">תוקף</div>
                                        <Input onValueChange={(value) => setenddate(value)} value={enddate} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">תאריך ביטוח</div>
                                        <Input onValueChange={(value) => setinsurance(value)} value={insurance} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">מחלקת ביטוח</div>
                                        <Input onValueChange={(value) => setinsuranceclass(value)} value={insuranceclass} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">בולמי זעזועים</div>
                                        <Input onValueChange={(value) => setshockabsorbers(value)} value={shockabsorbers} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">סקירת חורף</div>
                                        <Input onValueChange={(value) => setwinterreview(value)} value={winterreview} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">סוג דלק</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car_type2}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={car_type2}
                                                onSelectionChange={setcar_type2}
                                            >
                                                {
                                                    type2.map((type) => {
                                                        return <DropdownItem key={type.name}>{type.name}</DropdownItem>
                                                    })
                                                }
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">סוג רכב</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car_type}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={car_type}
                                                onSelectionChange={setcar_type}
                                            >
                                                <DropdownItem key="גרור">גרור</DropdownItem>
                                                <DropdownItem key="ציוד הנדס'">ציוד הנדס'</DropdownItem>
                                                <DropdownItem key={`רכב עד 9,999 ק"ג`}>רכב עד 9,999 ק"ג</DropdownItem>
                                                <DropdownItem key={`רכב מעל 10,000 ק"ג`}>רכב מעל 10,000 ק"ג</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
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
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">האם הנהג תוקן</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {tachograph}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={tachograph}
                                                onSelectionChange={settachograph}
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
                        <div className="w-full items-center flex">
                            <Button className="font-extrabold max-[500px]:text-[10px]" color="primary" variant="bordered" onClick={props.disable}>
                                <IoMdClose className="text-xl max-[500px]:text-[11px]"/>סגור
                            </Button>
                            <Button onClick={createNewForm} color="primary" variant="bordered" className="max-[500px]:text-[10px] ml-4 font-extrabold">
                                <MdOutlineCreateNewFolder className="text-2xl max-[500px]:text-[11px]"/>ליצרת טופס
                            </Button>
                            {
                                GetChecks().length != 0 ?
                                <Button onClick={() => {props.disable();props.showAllForms();}} color="primary" variant="bordered" className="max-[500px]:text-[10px] ml-4 font-extrabold">
                                    <SiGoogleforms className="text-xl max-[500px]:text-[11px]" />כל הטפסים
                                </Button>
                                :
                                null
                            }
                        </div>
                        {
                            CheckIfNotEqual() &&
                            <Button className="max-[500px]:text-[10px] font-extrabold" color="primary" onClick={updateProps}>
                                <GrUpdate className="text-2xl max-[500px]:text-[11px]" />עדכון
                            </Button>
                        }
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    )
}