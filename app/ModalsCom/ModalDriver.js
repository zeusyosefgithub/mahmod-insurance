'use client';
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
export default function ModalDriver(props) {
    const Drivers = GetData('Driver');
    return (
        <>
            <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex justify-center">בחירת נהג מהרשימה</ModalHeader>
                        <ModalBody>
                            <div className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto sizeingForDivsModals">
                                <table className="w-full text-center">
                                    <tbody>
                                        <tr className="sticky top-0 z-10 bg-primary text-white rounded-lg max-[600px]:text-[10.5px]">
                                            <th className="p-2 rounded-l-lg">נהג תוקן</th>
                                            <th className="p-2">תוקף רישיון</th>
                                            <th className="p-2">מ"ס זהות</th>
                                            <th className="p-2">מספר נהג</th>
                                            <th className="p-2 rounded-r-lg">שם נהג</th>
                                        </tr>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                        {
                                            Drivers.map(driver => {
                                                return <>
                                                    <tr onClick={() => { props.setDriver(driver); props.disable(); }} className="cursor-pointer hover:bg-primary hover:text-white max-[600px]:text-[9px]">
                                                        <th className="p-2">{driver.driver_fixed ? "כן" : "לא"}</th>
                                                        <th className="p-2">{driver.driver_license_validity}</th>
                                                        <th className="p-2">{driver.driver_id_card}</th>
                                                        <th className="p-2">{driver.driver_phone}</th>
                                                        <th className="p-2">{driver.driver_name}</th>
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