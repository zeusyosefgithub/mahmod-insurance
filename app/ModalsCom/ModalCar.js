'use client';
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { GetDataByCondition } from "../FireBase/GetDataByCondition";
import { useEffect } from "react";
export default function ModalCar(props) {
    const Drivers = GetData('Driver');
    const Cars = GetDataByCondition('car','customer_id','==',props.customer.customer_id);

    useEffect(() => {
    },[Cars,props])

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
                        <ModalHeader className="shadow-2xl flex justify-center">בחירת רכב מהרישמה</ModalHeader>
                        <ModalBody className="shadow-2xl">
                            <div className="m-1 bg-white rounded-xl no-scrollbar overflow-auto sizeingForDivsModals">
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
                                                        <th className="p-2">{props.customer.customer_name}</th>
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