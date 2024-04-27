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
import { GoPlus } from "react-icons/go";

export default function SearchByCarNumber({ show, disable,newCar }) {

    const [searchValue, setSearchValue] = useState(null);
    const [resualt, setResualt] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showCameraModal, setShowCameraModal] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [errorSearch, setErrorSearch] = useState('');

    async function GetVichel() {
        setLoading(true);
        let wichOne = false;
        const response = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${searchValue}`);
        const movies = await response.json();
        const ress = movies.result.records;
        if (ress[0]) {
            setResualt(ress[0]);
            wichOne = true;
        }
        const response1 = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=cd3acc5c-03c3-4c89-9c54-d40f93c0d790&q=${searchValue}`);
        const movies1 = await response1.json();
        const ress1 = movies1.result.records;
        if (ress1[0]) {
            setResualt(ress1[0]);
            wichOne = true;
        }
        const response2 = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=58dc4654-16b1-42ed-8170-98fadec153ea&q=${searchValue}`);
        const movies2 = await response2.json();
        const ress2 = movies2.result.records;
        if (ress2[0]) {
            setResualt(ress2[0]);
            wichOne = true;
        }
        setErrorSearch('');
        if (!wichOne) { setResualt(null); setLoading(false); setErrorSearch('המספר שהוזן לא נכון!!');; return; }
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


        <Modal placement="center" className="test-fontt h-[500px]" backdrop={"blur"} size="2xl" isOpen={show} onClose={disable}>
            <ModalContent>
                <>
                    <ModalHeader className="flex justify-center shadow-lg">הוספת רכב לפי מספר</ModalHeader>
                    <ModalBody className="shadow-lg">
                        <div className="flex justify-center items-center m-auto">
                            {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0 z-50" />}
                            <div className="w-[500px]">
                                <div dir="rtl" className="flex justify-center">
                                    <Input type="number" value={searchValue} onValueChange={(value) => setSearchValue(value)} variant="flat" color="primary" errorMessage={errorSearch} className="max-w-[350px]" label="מספר הרכב" />
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
                                                    {/* <video ref={videoRef} id="video" autobuffer height="240" width="360">
                                        <source src="BigBuck.m4v" />
                                        <source src="BigBuck.webm" type="video/webm" />
                                        <source src="BigBuck.theora.ogv" type="video/ogg" />
                                    </video> */}
                                                    <video ref={videoRef} id="video-example" width="256" height="177" poster="image.jpg">
                                                        <source src="video/video.mp4" type="video/mp4"></source>
                                                        <source src="video/video.ogg" type="video/ogg"></source>
                                                        This browser does not support HTML5
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
                                                                            <div className="font-bold sdf tracking-widest grid place-items-center text-center w-full">
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
                                                                <table className="w-full max-[450px]:text-xs max-[400px]:text-[9px]">
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
                                                    <Button className="font-extrabold max-[500px]:text-[10px]" color="primary" onClick={() => newCar({
                                                        mispar_rechev :resualt.mispar_rechev,

                                                    })}>
                                                        <GoPlus className="text-3xl max-[500px]:text-[11px]" />הוספה
                                                    </Button>
                                                </div>
                                            </ModalFooter>
                                        </>
                                    </ModalContent>
                                </Modal>

                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="flex w-full">
                            <div className="w-full items-center flex">
                                <Button onClick={disable} color="primary" variant="bordered">
                                    סגור
                                </Button>
                            </div>
                        </div>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    )
}