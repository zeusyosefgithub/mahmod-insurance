'use client';
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
export default function ModalCustomer(props) {
    const Customers = GetData('Customer');
    let count = 1;
    return (
        <>
            <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="shadow-2xl flex justify-center">בחירת לקוח מהרישמה</ModalHeader>
                        <ModalBody className="shadow-2xl">
                            <div className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto no-scrollbar sizeingForDivsModals">
                                <table className="w-full text-center">
                                    <tbody>
                                        <tr className="sticky top-0 z-10 bg-primary text-white rounded-lg max-[600px]:text-[10.5px]">
                                            <th className="p-2 rounded-l-lg">ישוב לקוח</th>
                                            <th className="p-2">כתובת לקוח</th>
                                            <th className="p-2">מספר לקוח</th>
                                            <th className="p-2 rounded-r-lg">שם לקוח</th>
                                        </tr>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                        {
                                            Customers.map(cus => {
                                                return <>
                                                    <tr onClick={() => { props.setCustomer(cus); props.disable(); }} className="cursor-pointer hover:bg-primary hover:text-white max-[600px]:text-[9px]">
                                                        <th className="p-2">{cus.customer_city}</th>
                                                        <th className="p-2">{cus.customer_site}</th>
                                                        <th className="p-2">{cus.customer_phone}</th>
                                                        <th className="p-2">{cus.customer_name}</th>
                                                    </tr>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th>&nbsp;</th>
                                                        <th>&nbsp;</th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                </>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button size="lg" color="primary" onClick={props.disable}>
                                סגור
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>

    )
}