import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import GetData from "../FireBase/GetData";
import { doc, updateDoc } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";

export default function ModalWarningSign(props) {

    const [warningValue, setWarningValue] = useState(props.WarningSign);
    const [loading, setLoading] = useState(false);

    const UpdateWarningValue = async () => {
        setLoading(true);
        await updateDoc(doc(MohamadFireStore, 'alerts', 'WarningSign'), { value: warningValue });
        setLoading(false);
        props.disable();
    }

    return (
        <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="3xl" isOpen={props.show} onClose={props.disable}>
            <ModalContent>
                <>
                    <ModalHeader className="flex justify-center shadow-lg">סימן התראה</ModalHeader>
                    <ModalBody className="shadow-lg">
                        {loading && <Spinner className='absolute left-0 right-0 bottom-0 top-0 z-50' />}
                        <div dir="rtl" className="m-5">סימן התראה הוא משפיע בדרך כלל הל הצגת כמות ההתראות והוא מבחירתך.
                        </div>
                        <div dir="rtl" className="m-5 flex justify-center items-center">
                            <div className="ml-5">סימן התראה</div>
                            <Input onValueChange={(value) => setWarningValue(value)} type="number" value={warningValue} className="max-w-[300px]" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full">
                            <Button className="font-extrabold" size="lg" color="primary" variant="bordered" onClick={props.disable}>
                                <IoMdClose className="text-xl" />סגור
                            </Button>
                        </div>
                        <Button isDisabled={props.WarningSign == warningValue} className="font-extrabold" size="lg" color="primary" onClick={UpdateWarningValue}>
                            <GrUpdate className="text-2xl" />עדכון
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    )
}