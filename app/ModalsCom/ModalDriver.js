'use client';
import { Button } from "@nextui-org/button";
import { Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { GetDataByCondition } from "../FireBase/GetDataByCondition";
import { useState } from "react";
import { IoIosWarning } from "react-icons/io";
export default function ModalDriver(props) {
    const Drivers = GetDataByCondition('Driver', 'customer_id', '==', props.customer.customer_id);

    const getDriver = (driver) => {
        if (driver.zmenotNahag) {
            setShowModalWarningDriver(true);
        }
        else {
            props.setDriver(driver);
            props.disable();
        }
    }

    const [showModalWarningDriver, setShowModalWarningDriver] = useState(false);

    return (
        <>
            <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex justify-center shadow-xl">בחירת נהג מהרשימה</ModalHeader>
                        <ModalBody className="shadow-xl">
                            <>
                                <Modal placement="center" className="test-fontt" backdrop={"blur"} isOpen={showModalWarningDriver} onClose={() => setShowModalWarningDriver(false)}>
                                    <ModalContent>
                                        <>
                                            <ModalHeader className="flex justify-center shadow-xl">אזהרה</ModalHeader>
                                            <ModalBody className="shadow-xl">
                                                <div className="" dir="rtl">
                                                    <Card className="border-yellow-500 border-1 mt-3">
                                                        <CardBody>
                                                            <div>
                                                                <div className="flex items-center">
                                                                    <div>
                                                                        <IoIosWarning className="text-yellow-500 text-4xl" />
                                                                    </div>
                                                                    <div className="text-base mr-4 text-yellow-500">
                                                                        הנהג בנתיים לא פנוי והוא נמצא ברכב אחר...
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                    <div className="m-5">
                                                        האם ברוצנך לשים הנהג לרכב אחר והרכב הקודם של הנהג יהיה בלי נהג ?
                                                    </div>
                                                    <div className="text-xs font-extrabold">
                                                        הערה : אם בחרת כן השנוים יבצעו רק עד סיום כל תהליך היצרה
                                                    </div>
                                                </div>
                                            </ModalBody>
                                            <ModalFooter>
                                                <div className="flex justify-between w-full">
                                                    <Button size="lg" color="danger" onClick={() => setShowModalWarningDriver(false)}>
                                                        כן
                                                    </Button>
                                                    <Button size="lg" color="primary" onClick={() => setShowModalWarningDriver(false)}>
                                                        לא
                                                    </Button>
                                                </div>
                                            </ModalFooter>
                                        </>
                                    </ModalContent>
                                </Modal>
                                <div className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto no-scrollbar sizeingForDivsModals">
                                    <table className="w-full text-center">
                                        <tbody>
                                            <tr className="sticky top-0 z-10 bg-primary text-white rounded-lg max-[600px]:text-[10.5px]">
                                                <th className="p-2 rounded-l-lg">זמינות נהג</th>
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
                                                        <tr onClick={() => { getDriver(driver) }} className="cursor-pointer hover:bg-primary hover:text-white max-[600px]:text-[9px]">
                                                            <th className="p-2">{!driver.zmenotNahag ? <div className="text-green-500">זמין</div> : <div className="text-danger-500">לא זמין</div>}</th>
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
                            </>
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