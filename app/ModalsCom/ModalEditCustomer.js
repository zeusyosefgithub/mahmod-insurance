import { Spinner, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { MohamadFireStore } from "../FireBase/firebase";
import GetData from "../FireBase/GetData";

export default function ModalEditCustomer(props) {

    const [customer_city, setcustomer_city] = useState(props.data.customer_city);
    const [customer_name, setcustomer_name] = useState(props.data.customer_name);
    const [customer_phone, setcustomer_phone] = useState(props.data.customer_phone);
    const [customer_site, setcustomer_site] = useState(props.data.customer_site);
    const [customer_email, setCustomer_Email] = useState(props.data.customer_email);
    const [serial, setserial] = useState(props.data.serial_number);

    const CheckIfNotEqual = () => {
        if (
            customer_city != props.data.customer_city ||
            customer_name != props.data.customer_name ||
            customer_phone != props.data.customer_phone ||
            customer_site != props.data.customer_site ||
            serial != props.data.serial_number ||
            customer_email != props.data.customer_email
        ) {
            return true;
        }
        return false;
    }

    const [loading, setLoading] = useState(false);

    const updateCustomer = async () => {
        setLoading(true);
        const NewDataCustomer = {
            customer_city: customer_city,
            customer_name: customer_name,
            customer_phone: customer_phone,
            customer_site: customer_site,
            customer_email: customer_email,
            serial_number: serial
        }
        const invId = doc(MohamadFireStore, "Customer", props.data.id);
        await updateDoc(invId, NewDataCustomer);
        setLoading(false);
    }

    async function DeleteAllCarsById(customer_id) {
        const carsRef = collection(MohamadFireStore, 'car');
        const q = query(carsRef, where("customer_id", "==", customer_id));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            for (let index = 0; index < querySnapshot.docs.length; index++) {
                await deleteDoc(doc(MohamadFireStore,'car',querySnapshot.docs[index].id))   
            }
            return;
        } else {
          console.log('No matching car found');
          return null;
        }
    }

    async function DeleteAllDriversById(customer_id) {
        const carsRef = collection(MohamadFireStore, 'car');
        const q = query(carsRef, where("customer_id", "==", customer_id));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            for (let index = 0; index < querySnapshot.docs.length; index++) {
                await deleteDoc(doc(MohamadFireStore,'Driver',querySnapshot.docs[index].id))   
            }
            return;
        } else {
          console.log('No matching car found');
          return null;
        }
      }

    let CustomersNum = GetData('numbers')[1]?.number;
    const deleteCustomer = async () => {
        setLoading(true);
        DeleteAllCarsById(props.data.customer_id);
        DeleteAllDriversById(props.data.customer_id);
        await deleteDoc(doc(MohamadFireStore, "Customer", props.data.id));
        await updateDoc(doc(MohamadFireStore, "numbers", 'customers'), { number: CustomersNum - 1 });
        setLoading(false);
        props.disable();
    }

    return (
        <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
            <ModalContent>
                <>
                    {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0 z-50" />}
                    <ModalHeader className="flex justify-center shadow-lg">פרטים הקלוח</ModalHeader>
                    <ModalBody className="shadow-lg">
                        <div dir="rtl" className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto no-scrollbar sizeingForDivsModals">
                            <div className="flex justify-center">
                                <div className="">
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">שם</div>
                                        <Input onValueChange={(value) => setcustomer_name(value)} value={customer_name} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">נייד</div>
                                        <Input onValueChange={(value) => setcustomer_phone(value)} value={customer_phone} type="number" />
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
                                        <div className="w-48 font-extrabold">מספר סידורי</div>
                                        <Input onValueChange={(value) => setserial(value)} value={serial} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-48 font-extrabold">אימיל</div>
                                        <Input onValueChange={(value) => setCustomer_Email(value)} value={customer_email} type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full">
                            <Button className="font-extrabold" size="lg" color="primary" variant="bordered" onClick={props.disable}>
                                <IoMdClose className="text-xl" />סגור
                            </Button>
                        </div>
                        {
                            CheckIfNotEqual() &&
                            <Button className="font-extrabold" size="lg" color="primary" onClick={updateCustomer}>
                                <GrUpdate className="text-2xl" />עדכון
                            </Button>
                        }
                        <Button className="font-extrabold" size="lg" color="danger" variant="bordered" onClick={deleteCustomer}>
                            <FaTrash className="text-2xl" />מחיקה
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    )
}