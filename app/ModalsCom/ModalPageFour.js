'use client';
import { Button } from "@nextui-org/button";
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { useState } from "react";
export default function ModalPageFour(props) {

    const [discr1, setDiscr1] = useState('');

    const [discr21, setDiscr21] = useState('');
    const [discr22, setDiscr22] = useState('');
    const [discr23, setDiscr23] = useState('');
    const [discr24, setDiscr24] = useState('');
    const [discr25, setDiscr25] = useState('');
    const [discr26, setDiscr26] = useState('');

    const send = () => {
        if (props.typeShow === '1') {
            props.saveDiscr1(discr1);
        }
        else if (props.typeShow === '2') {
            const discr2 = [
                discr21,
                discr22,
                discr23,
                discr24,
                discr25,
                discr26
            ]
            props.saveDiscr2(discr2);
        }
        else if(props.typeShow === '3'){
            props.saveDiscr2(discr21);
        }
        props.disable();
    }

    return (
        <>
            <Modal className="test-fontt" size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex justify-center">{
                            props.typeShow === '1' ?
                                <div>
                                    הערות קצין בטיחות בתעבורה / הוראת תיקון
                                </div>
                                :
                                props.typeShow === '2' ?
                                    <div>תוקף רישיון מוביל</div>
                                    :
                                    <div></div>
                        }
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                {
                                    props.typeShow === '1' ?
                                        <div dir="rtl" className="flex items-center">
                                            <div className="w-28">הערות :</div>
                                            <Input value={discr1} onValueChange={(value) => setDiscr1(value)} type="text" />
                                        </div>
                                        :
                                        props.typeShow === '2' ?
                                            <div>
                                                <div dir="rtl" className="flex items-center">
                                                    <div className="w-1/2">תוקף האישור עד :</div>
                                                    <Input size="sm" value={discr21} onValueChange={(value) => setDiscr21(value)} type="text" />
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5">
                                                    <div className="w-1/2">תוקף רישיון כלי הרכב :</div>
                                                    <Input size="sm" value={discr22} onValueChange={(value) => setDiscr22(value)} type="text" />
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5">
                                                    <div className="w-1/2">תוקף הביטוח :</div>
                                                    <Input size="sm" value={discr23} onValueChange={(value) => setDiscr23(value)} type="text" />
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5">
                                                    <div className="w-1/2">תוקף תעודת כיול הטכוגרף :</div>
                                                    <Input size="sm" value={discr24} onValueChange={(value) => setDiscr24(value)} type="text" />
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5">
                                                    <div className="w-1/2">תוקף היתר לנהג המוביל חומרים מסוכנים :</div>
                                                    <Input size="sm" value={discr25} onValueChange={(value) => setDiscr25(value)} type="text" />
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5">
                                                    <div className="w-1/2">תוקף רישיון המוביל לכלי הרכב :</div>
                                                    <Input size="sm" value={discr26} onValueChange={(value) => setDiscr26(value)} type="text" />
                                                </div>
                                            </div>
                                            :
                                            props.typeShow === '3' ?
                                                <div>
                                                    <div dir="rtl" className="flex items-center">
                                                        <div className="w-1/2">תוקף האישור עד :</div>
                                                        <Input size="sm" value={discr21} onValueChange={(value) => setDiscr21(value)} type="text" />
                                                    </div>
                                                </div>
                                                :
                                                null

                                }
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button size="lg" color="primary" variant="bordered" onClick={props.disable}>
                                סגור
                            </Button>
                            <Button size="lg" color="primary" onClick={send}>
                                שמירה
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>

    )
}