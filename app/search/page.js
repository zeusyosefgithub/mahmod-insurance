'use client';
import { Button, Dropdown, DropdownItem, DropdownMenu, Divider, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { useState, useCallback, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CarNumebr from '../../images/carNumber.jpg';
import Image from 'next/image';
import { FaCamera } from "react-icons/fa";
import React from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import Tesseract from 'tesseract.js';

export default function searchPage() {

    const [searchValue, setSearchValue] = useState(null);
    const [resualt, setResualt] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showCameraModal, setShowCameraModal] = useState(false);
    const [photo,setPhoto] = useState(null); 

    async function GetVichel() {
        setLoading(true);
        const response = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${searchValue}`);
        const movies = await response.json();
        const ress = movies.result.records;
        setResualt(ress[0]);
        setShowSearchModal(true);
        setLoading(false);
    }

    function handleTakePhoto(dataUri) {
        console.log(dataUri);
        setPhoto(dataUri);
        
    }

    function handleTakePhotoAnimationDone(dataUri) {
        console.log('takePhoto');
        setShowCameraModal(false);
        handleImageUpload();
    }

    function handleCameraError(error) {
        console.log('handleCameraError', error);
    }

    function handleCameraStart(stream) {
        console.log('handleCameraStart');

    }

    function handleCameraStop() {
        console.log('handleCameraStop');
    }

    const [text, setText] = useState('');
    const handleImageUpload = async () => {
        setLoading(true);
        const { data: { text } } = await Tesseract.recognize(photo, 'eng');
        setText(text);
        setLoading(false);
    };


    return (
        <div className="hsd flex justify-center items-center">
            {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0 z-50" />}
            <div className="w-[500px]">
                <div dir="rtl" className="flex justify-center">
                    <Input type="number" value={searchValue} onValueChange={(value) => setSearchValue(value)} variant="flat" color="primary" className="max-w-[350px]" label="מספר הרכב" />
                </div>
                <div className="mt-20 flex justify-center">

                    <Button onClick={() => setShowCameraModal(true)} className="text-xl m-5" color="primary"><FaCamera />צלם</Button>
                    <Button onClick={GetVichel} color="primary" className="text-xl m-5"><FaSearch />חיפוש</Button>
                </div>
                {
                    photo && <div className="text-red-600 bg-black w-fit m-10 p-10">
                        {photo}
                        {text}
                    </div>
                }
                <Modal placement="center" className="test-fontt" backdrop={"blur"} size="full" isOpen={showCameraModal} onClose={() => setShowCameraModal(false)}>
                    <ModalContent>
                        <>
                            <ModalBody className="shadow-lg">
                                <div className="bg-black">
                                    <Camera
                                        onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                                        onTakePhotoAnimationDone={(dataUri) => { handleTakePhotoAnimationDone(dataUri); }}
                                        onCameraError={(error) => { handleCameraError(error); }}
                                        idealFacingMode={FACING_MODES.ENVIRONMENT}
                                        idealResolution={{ width: 640, height: 480 }}
                                        imageType={IMAGE_TYPES.PNG}
                                        imageCompression={0.97}
                                        isMaxResolution={true}
                                        isImageMirror={false}
                                        isSilentMode={false}
                                        isDisplayStartCameraError={true}
                                        isFullscreen={false}
                                        sizeFactor={1}
                                        onCameraStart={(stream) => { handleCameraStart(stream); }}
                                        onCameraStop={() => { handleCameraStop(); }}
                                    />
                                </div>

                            </ModalBody>
                        </>
                    </ModalContent>
                </Modal>
                <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={showSearchModal} onClose={() => setShowSearchModal(false)}>
                    <ModalContent>
                        <>
                            <ModalHeader className="flex justify-center shadow-lg">פרטים רכב</ModalHeader>
                            <ModalBody className="shadow-lg">
                                <div>
                                    {
                                        resualt &&
                                        <div className="no-scrollbar overflow-auto sizeingForDivsModals">
                                            <div className="flex justify-center mt-20 mb-10">
                                                <div className="border-4 border-black max-w-[700px] w-full flex items-center rounded-lg">
                                                    <div className="w-full max-w-[90px] bg-blue-800">
                                                        <Image src={CarNumebr} />
                                                    </div>
                                                    <div className="w-full bg-yellow-500 h-full">
                                                        <div className="flex justify-center h-full w-full">
                                                            <div className="font-bold sdf  tracking-widest grid place-items-center text-center w-full">
                                                                {
                                                                    resualt.mispar_rechev > 999999 && resualt.mispar_rechev <= 9999999 ?
                                                                        `${parseInt(((((((resualt.mispar_rechev / 10) / 10) / 10) / 10) / 10) / 10) % 10)}${parseInt((((((resualt.mispar_rechev / 10) / 10) / 10) / 10) / 10) % 10)}-${parseInt(((((resualt.mispar_rechev / 10) / 10) / 10) / 10) % 10)}${parseInt((((resualt.mispar_rechev / 10) / 10) / 10) % 10)}${parseInt(((resualt.mispar_rechev / 10) / 10) % 10)}-${parseInt((resualt.mispar_rechev / 10) % 10)}${parseInt(resualt.mispar_rechev % 10)}`
                                                                        : resualt.mispar_rechev > 9999999 && resualt.mispar_rechev <= 99999999 ?
                                                                            23
                                                                            : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider />
                                            <div className="flex justify-center m-10 mt-10">
                                                <table className="w-full">
                                                    <tbody>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.mispar_rechev}</th>
                                                            <th className="text-right p-2">מספר הרכב</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.sug_degem}</th>
                                                            <th className="text-right p-2">סוג דגם</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.tozeret_nm}</th>
                                                            <th className="text-right p-2">תוצרת</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.degem_nm}</th>
                                                            <th className="text-right p-2">מספר דגם</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.ramat_gimur}</th>
                                                            <th className="text-right p-2">רמת גימור</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.kvutzat_zihum}</th>
                                                            <th className="text-right p-2">קבוצת זיהום</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.shnat_yitzur}</th>
                                                            <th className="text-right p-2">שנת יצור</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.degem_manoa}</th>
                                                            <th className="text-right p-2">דגם מנוע</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.mivchan_acharon_dt}</th>
                                                            <th className="text-right p-2">מבחן אחרון</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.tokef_dt}</th>
                                                            <th className="text-right p-2">תוקף</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.baalut}</th>
                                                            <th className="text-right p-2">בעלות</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.misgeret}</th>
                                                            <th className="text-right p-2">מסגרת</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.tzeva_rechev}</th>
                                                            <th className="text-right p-2">צבע רכב</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.zmig_kidmi}</th>
                                                            <th className="text-right p-2">צמיג קדמי</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.zmig_ahori}</th>
                                                            <th className="text-right p-2">צמיג אחורי</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.sug_delek_nm}</th>
                                                            <th className="text-right p-2">סוג דלק</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.horaat_rishum}</th>
                                                            <th className="text-right p-2">הוראת רישום</th>
                                                        </tr>
                                                        <tr className="bg-primary-200">
                                                            <th className="text-left p-2">{resualt.moed_aliya_lakvish}</th>
                                                            <th className="text-right p-2">מועד עליה לכביש</th>
                                                        </tr>
                                                        <tr className="bg-primary-100">
                                                            <th className="text-left p-2">{resualt.kinuy_mishari}</th>
                                                            <th className="text-right p-2">קינוי מסחרי</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    }
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <div className="flex w-full">
                                    <div className="w-full items-center flex">
                                        <Button className="font-extrabold max-[500px]:text-[10px]" color="primary" variant="bordered" onClick={() => setShowSearchModal(false)}>
                                            <IoMdClose className="text-xl max-[500px]:text-[11px]" />סגור
                                        </Button>
                                    </div>
                                </div>
                            </ModalFooter>
                        </>
                    </ModalContent>
                </Modal>

            </div>
        </div>
    )
}