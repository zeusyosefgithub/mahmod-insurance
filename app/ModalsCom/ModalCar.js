'use client';
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
export default function ModalCar(props) {
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
            <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex justify-center">בחירת רכב מהרישמה</ModalHeader>
                        <ModalBody>
                            <div className="m-1 bg-white rounded-xl overflow-auto sizeingForDivsModals">
                                <table className="w-full text-center">
                                    <tbody>
                                        <tr className="sticky top-0 z-10 bg-primary text-white rounded-lg max-[600px]:text-[10.5px]">
                                            <th className="p-2 rounded-l-lg">יצרן</th>
                                            <th className="p-2">מספר רכב</th>
                                            <th className="p-2">סוג הרכב</th>
                                            <th className="p-2">שם נהג</th>
                                            <th className="p-2 rounded-r-lg">שם לקוח</th>
                                        </tr>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                        {
                                            Cars.map(car => {
                                                return <>
                                                    <tr onClick={() => { props.setCar(car); props.disable(); }} className="max-[600px]:text-[9px] cursor-pointer hover:bg-primary hover:text-white">
                                                        <th className="p-2">{car.car_product}</th>
                                                        <th className="p-2">{car.car_num}</th>
                                                        <th className="p-2">{car.car_type}</th>
                                                        <th className="p-2">{GetDriverNameByCar(car.Driver_id)?.driver_name}</th>
                                                        <th className="p-2">{GetCusNameByCar(car.customer_id)?.customer_name}</th>
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