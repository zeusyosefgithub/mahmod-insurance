'use client';
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { PageFour } from "../PagesToPrint/PageFour";
export default function ModalCheck(props) {
    const Cars = GetData('car');

    const Customers = GetData('Customer');
    const Drivers = GetData('Driver');

    const GetCusNameByCar = (id) => {
        for (let index = 0; index < Customers.length; index++) {
            if (Customers[index]?.customer_id === id) {
                return Customers[index];
            }
        }
    }
    const GetDriverNameByCar = (id) => {
        for (let index = 0; index < Drivers.length; index++) {
            if (Drivers[index]?.driver_id === id) {
                return Drivers[index];
            }
        }
    }

    return (
        <>
            <Modal placement="center" className="test-fontt" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex justify-center">בחירת רכב מהרישמה</ModalHeader>
                        <ModalBody>
                            <div>
                                <PageFour/>
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