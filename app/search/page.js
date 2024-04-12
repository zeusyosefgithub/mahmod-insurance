'use client';
import { Button, Dropdown, DropdownItem, DropdownMenu, Divider, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { useState, useCallback, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CarNumebr from '../../images/carNumber.jpg';
import Image from 'next/image';
import { FaCamera } from "react-icons/fa";
import React from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';

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

    // function handleTakePhoto(dataUri) {
    //     console.log(dataUri);
    //     setPhoto(dataUri);
    //     handleImageUpload(dataUri);
    // }

    // function handleTakePhotoAnimationDone(dataUri) {
    //     console.log('takePhoto');
    //     setShowCameraModal(false);
    // }

    // function handleCameraError(error) {
    //     console.log('handleCameraError', error);
    // }

    // function handleCameraStart(stream) {
    //     console.log('handleCameraStart');

    // }

    // function handleCameraStop() {
    //     console.log('handleCameraStop');
    // }

    const [text, setText] = useState(null);
    const gf = 'data:image/png;base64,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';
    // const handleImageUpload = async (dataUri) => {
    //     setLoading(true);
    //     try {
    //         // Perform OCR
    //         const { data: { text } } = await Tesseract.recognize(
    //             dataUri,
    //             'eng', // language
    //             {
    //                 logger: m => console.log(m), // logger function
    //                 tessedit_char_whitelist: '0123456789', // whitelist of characters
    //                 // Add more settings here as needed
    //             }
    //         );

    //         // Extract numbers from OCR result
    //         const numbers = extractNumbers(text);

    //         // Set extracted numbers
    //         setText(numbers);
    //     } catch (err) {
    //         console.error(err);
    //     }
    //     setLoading(false);
    // };

    const handleTakePhoto = async (dataUri) => {
        try {
            const { data: { text } } = await Tesseract.recognize(
                gf,
                'eng', // language
                {
                    logger: m => console.log(m), // logger function
                    tessedit_char_whitelist: '0123456789', // whitelist of characters
                    // Add more settings here as needed
                }
            );

            // Extract numbers from OCR result
            const numbers = extractNumbers(text);

            // Set extracted numbers
            setText(numbers);
        } catch (err) {
            console.error(err);
        }
    };

    const extractNumbers = (text) => {
        // Implement logic to extract numbers from text
        // This can involve regular expressions or custom parsing logic
        // For example:
        const numberRegex = /\d+/g;
        return text.match(numberRegex);
    };

    const videoRef = useRef(null);
    const [extractedText, setExtractedText] = useState('');

    useEffect(() => {
        startVideo();
    }, []);

    const startVideo = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
        } catch (err) {
            console.error('Error accessing camera:', err);
        }
    };

    const captureFrame = async () => {
        const video = videoRef.current;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Use Tesseract.js to extract text from the captured frame
        const worker = createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(imageData);
        setExtractedText(text);
        await worker.terminate();
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
                    extractedText && <div className="text-red-600 bg-black w-fit m-10 p-10">
                        {extractedText}
                    </div>
                }
                <Modal placement="center" className="test-fontt" backdrop={"blur"} size="full" isOpen={showCameraModal} onClose={() => setShowCameraModal(false)}>
                    <ModalContent>
                        <>
                            <ModalBody className="shadow-lg">
                                <div className="bg-black">

                                    {/* <video ref={videoRef} width="640" height="480" playsInline></video> */}
                                    <video ref={videoRef} id="video" autobuffer height="240" width="360">
                                        <source src="BigBuck.m4v" />
                                        <source src="BigBuck.webm" type="video/webm" />
                                        <source src="BigBuck.theora.ogv" type="video/ogg" />
                                    </video>
                                    <Button onClick={captureFrame}>Extract ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttText</Button>
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