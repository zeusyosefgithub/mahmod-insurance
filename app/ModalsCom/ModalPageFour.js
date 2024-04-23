'use client';
import { Button } from "@nextui-org/button";
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { useEffect, useState } from "react";
import { subMonths,addMonths } from "date-fns";
export default function ModalPageFour(props) {

    const type2 = GetData('type2');

    const [discr1, setDiscr1] = useState('');

    const [discr21, setDiscr21] = useState(props.car?.monthlyReview);
    const [discr22, setDiscr22] = useState(props.car?.enddate);
    const [discr23, setDiscr23] = useState(props.car?.insurance);
    const [discr24, setDiscr24] = useState(props.car?.tachographDate);
    const [discr25, setDiscr25] = useState(props.car?.hazmatDate);
    const [discr26, setDiscr26] = useState(null);
    
    const GetType2 = () => {
        for (let index = 0; index < type2.length; index++) {
            if(type2[index].name === props.car.car_type2){
                return type2[index];
            }
        }
    }

    const [discr21Open, setDiscr21Open] = useState('');
    const [discr22Open, setDiscr22Open] = useState('');
    const [discr23Open, setDiscr23Open] = useState(GetAfterTypeConv());
    const [discr24Open, setDiscr24Open] = useState('');
    const [discr25Open, setDiscr25Open] = useState('');
    const [discr26Open, setDiscr26Open] = useState('');
    
    function GetAfterTypeConv() {
        let newDate = new Date(discr22);
        let res = subMonths(newDate, GetType2()?.munthsinsurance);
        return `${res.getFullYear()}-${(res.getMonth() + 1) < 10 ? `0${res.getMonth() + 1}` : res.getMonth() + 1}-${res.getDate() < 10 ? `0${res.getDate()}` : res.getDate()}`;
    }
    useEffect(() => {
        setDiscr23Open(GetAfterTypeConv());
    },[GetAfterTypeConv()])

    function EditEndDate21Open(){
        let newDate = new Date(discr23Open);
        let res = addMonths(newDate, GetType2()?.munthsinsurance);
        let ResDate = `${res.getFullYear()}-${(res.getMonth() + 1) < 10 ? `0${res.getMonth() + 1}` : res.getMonth() + 1}-${res.getDate() < 10 ? `0${res.getDate()}` : res.getDate()}`;
        console.log(ResDate);
        setDiscr23(ResDate);
    }

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
        else if (props.typeShow === '3') {
            props.saveDiscr2(discr21);
        }
        props.disable();
    }

    return (
        <>
            <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
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
                                            <div className="no-scrollbar overflow-auto sizeingForDivsModals">
                                                <div dir="rtl" className="flex items-center flex-wrap justify-center max-[787px]:border-b max-[787px]:pb-5">
                                                    <div className="w-[260px] flex justify-center text-[14px] max-[787px]:mb-3">האישור עד :</div>
                                                    <div className="flex">
                                                        <Input className="w-full max-w-[200px]"  value={discr21Open} onValueChange={(value) => {setDiscr21Open(value)}} type="date" label='בתיחה' labelPlacement="outside-left"/>
                                                        <Input className="w-full max-w-[200px] mr-8"  value={discr21} onValueChange={(value) => setDiscr21(value)} type="date" label='תוקף' labelPlacement="outside-left"/>
                                                    </div>
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5 flex-wrap justify-center max-[787px]:border-b max-[787px]:pb-5">
                                                    <div className="w-[260px] flex justify-center text-[14px] max-[787px]:mb-3">רישיון כלי הרכב :</div>
                                                    <div className="flex">
                                                        <Input className="w-full max-w-[200px]"  value={discr22Open} onValueChange={(value) => setDiscr22Open(value)} type="date" label='בתיחה' labelPlacement="outside-left"/>
                                                        <Input className="w-full max-w-[200px] mr-8"  value={discr22} onValueChange={(value) => setDiscr22(value)} type="date" label='תוקף' labelPlacement="outside-left"/>
                                                    </div>
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5 flex-wrap justify-center max-[787px]:border-b max-[787px]:pb-5">
                                                    <div className="w-[260px] flex justify-center text-[14px] max-[787px]:mb-3">הביטוח :</div>
                                                    <div className="flex">
                                                        <Input className="w-full max-w-[200px]"  value={discr23Open} onValueChange={(value) => {setDiscr23Open(value);EditEndDate21Open();}} type="date" label='בתיחה' labelPlacement="outside-left"/>
                                                        <Input className="w-full max-w-[200px] mr-8"  value={discr23} onValueChange={(value) => setDiscr23(value)} type="date" label='תוקף' labelPlacement="outside-left"/>
                                                    </div>
                                                </div>
                                                <div dir="rtl" className="flex items-center mt-5 flex-wrap justify-center max-[787px]:border-b max-[787px]:pb-5">
                                                    <div className="w-[260px] flex justify-center text-[14px] max-[787px]:mb-3">תעודת כיול הטכוגרף :</div>
                                                    <div className="flex">
                                                        <Input className="w-full max-w-[200px]"  value={discr24Open} onValueChange={(value) => setDiscr24Open(value)} type="date" label='בתיחה' labelPlacement="outside-left"/>
                                                        <Input className="w-full max-w-[200px] mr-8" value={discr24} onValueChange={(value) => setDiscr24(value)} type="date" label='תוקף' labelPlacement="outside-left" />
                                                    </div>
                                                </div>
                                                {
                                                    props.car.hazmat &&
                                                    <div dir="rtl" className="flex items-center mt-5 flex-wrap justify-center max-[787px]:border-b max-[787px]:pb-5">
                                                        <div className="w-[260px] flex justify-center text-[14px] max-[787px]:mb-3">חומ"ס :</div>
                                                        <div className="flex">
                                                            <Input className="w-full max-w-[200px]" value={discr25Open} onValueChange={(value) => setDiscr25Open(value)} type="date" label='בתיחה' labelPlacement="outside-left" />
                                                            <Input className="w-full max-w-[200px] mr-8" value={discr25} onValueChange={(value) => setDiscr25(value)} type="date" label='תוקף' labelPlacement="outside-left" />
                                                        </div>
                                                    </div>
                                                }
                                                <div dir="rtl" className="flex items-center mt-5 flex-wrap justify-center mb-10">
                                                    <div className="w-[260px] flex justify-center text-[14px] max-[787px]:mb-3">רישיון המוביל לכלי הרכב :</div>
                                                    <div className="flex">
                                                        <Input className="w-full max-w-[200px]"  value={discr26Open} onValueChange={(value) => setDiscr26Open(value)} type="date" label='בתיחה' labelPlacement="outside-left"/>
                                                        <Input className="w-full max-w-[200px] mr-8"  value={discr26} onValueChange={(value) => setDiscr26(value)} type="date" label='תוקף' labelPlacement="outside-left"/>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            props.typeShow === '3' ?
                                                <div>
                                                    <div dir="rtl" className="flex items-center">
                                                        <div className="w-1/2">תוקף האישור עד :</div>
                                                        <Input  value={discr21} onValueChange={(value) => setDiscr21(value)} type="text" />
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