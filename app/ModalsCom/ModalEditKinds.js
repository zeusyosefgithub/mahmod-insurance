import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";


export default function ModalEditKinds(props) {

    const [name,setName] = useState(props.data.name);
    const [test,setTest] = useState(props.data.munthstest);
    const [tachograph,setTachograph] = useState(props.data.munthstachograph);
    const [insurance,setInsurance] = useState(props.data.munthsinsurance);
    const [review,setReview] = useState(props.data.monthlyreview);
    const [approval,setApproval] = useState(props.data.approvalabsorbers);
    const [check,setCheck] = useState(props.data.winterinspection);

    const CheckIfNotEqual = () => {
        if(name != props.data.name ||
            test != props.data.munthstest ||
            tachograph != props.data.munthstachograph ||
            insurance != props.data.munthsinsurance ||
            review != props.data.monthlyreview ||
            approval != props.data.approvalabsorbers ||
            check != props.data.winterinspection)
        {
            return true;
        }
        return false;
    }

    return (
        <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
            <ModalContent>
                <>
                    <ModalHeader className="flex justify-center shadow-lg">פרטים הסוג</ModalHeader>
                    <ModalBody className="shadow-lg">
                        <div dir="rtl" className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto sizeingForDivsModals">
                            <div className="flex justify-center">
                                <div className="">
                                    <div className="flex items-center mt-5">
                                        <div className="w-40 font-extrabold">שם</div>
                                        <Input onValueChange={(value) => setName(value)} value={name} type="text"/>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-40 font-extrabold">טסט חודשי</div>
                                        <Input onValueChange={(value) => setTest(value)} value={test} type="number"/>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-40 font-extrabold">טכוגרף חודשי</div>
                                        <Input onValueChange={(value) => setTachograph(value)} value={tachograph} type="number"/>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-40 font-extrabold">ביטוח חודשי</div>
                                        <Input onValueChange={(value) => setInsurance(value)} value={insurance} type="number"/>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-40 font-extrabold">סקירה חודשית</div>
                                        <Input onValueChange={(value) => setReview(value)} value={review} type="number"/>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-40 font-extrabold">אישור בולמים</div>
                                        <Input onValueChange={(value) => setApproval(value)} value={approval} type="number"/>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-40 font-extrabold">בדיקת חורף</div>
                                        <Input onValueChange={(value) => setCheck(value)} value={check} type="number"/>
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
