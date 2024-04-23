'use client';
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { GetDataByCondition } from "../FireBase/GetDataByCondition";
import { useEffect } from "react";
export default function ModalAddDriver(props) {

    return (
        <>
            <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="shadow-2xl flex justify-center">בחירת רכב מהרישמה</ModalHeader>
                        <ModalBody className="shadow-2xl">
                            <div className="m-1 bg-white rounded-xl no-scrollbar overflow-auto sizeingForDivsModals">
                                
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