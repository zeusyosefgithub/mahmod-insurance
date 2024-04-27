'use client';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { useState, useContext, useEffect, useRef } from "react";
import { GrUpdate } from "react-icons/gr";
import GetData from "../FireBase/GetData";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useRouter } from "next/navigation";
import ContactContext from "../Components/ContactContext";
import { SiGoogleforms } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { MohamadFireStore, storagee } from "../FireBase/firebase";
import { TbTrash } from "react-icons/tb";
import { FaFolder } from "react-icons/fa";
import { deleteObject, getDownloadURL, getMetadata, listAll, ref, uploadBytesResumable } from "firebase/storage";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import rep19 from '../../images/rep19.png';
import rep30 from '../../images/rep30.png';


function GetCarsImages(size,hight,type){
    if(type === 'merceds'){
        return <Image
        src={rep19}
        sizes={size}
        height={hight}
        />
    }
    else if(type === 'טויוטה'){
        return <Image
        src={rep30}
        sizes={size}
        height={hight}
        />
    }
}



export default function ModalEditCar(props) {

    const { setContactName , setCustomerSet } = useContext(ContactContext);
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const type2 = GetData('type2');
    const checks = GetData('checks');

    const [carData, setCarData] = useState(props.data);
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(MohamadFireStore, 'car', props.data.id), (doc) => {
            setCarData({ id: doc.id, ...doc.data() });
        });

        return () => unsubscribe();
    }, [props.data.id]);

    const [car_num, setcar_num] = useState(carData.car_num);
    const [car_product, setcar_product] = useState(carData.car_product);
    const [car_type, setcar_type] = useState(carData.car_type);
    const [car_type2, setcar_type2] = useState(carData.car_type2);
    const [enddate, setenddate] = useState(carData.enddate);
    const [hazmat, sethazmat] = useState(carData.hazmat ? 'כן' : 'לא');
    const [hazmatDate, setHazmatDate] = useState(carData.hazmatDate);
    const [insurance, setinsurance] = useState(carData.insurance);
    const [insuranceclass, setinsuranceclass] = useState(carData.insuranceclass);
    const [shockabsorbers, setshockabsorbers] = useState(carData.shockabsorbers);
    const [tachograph, settachograph] = useState(carData.tachograph ? 'כן' : 'לא');
    const [tachographDate, setTachographDate] = useState(carData.tachographDate);
    const [winterreview, setwinterreview] = useState(carData.winterreview);

    useEffect(() => {
        setinsurance(carData.insurance);
        setcar_num(carData.car_num);
        setcar_product(carData.car_product);
        setcar_type(carData.car_type);
        setcar_type2(carData.car_type2);
        setenddate(carData.enddate);
        sethazmat(carData.hazmat ? 'כן' : 'לא');
        setHazmatDate(carData.hazmatDate);
        setinsuranceclass(carData.insuranceclass);
        setshockabsorbers(carData.shockabsorbers);
        settachograph(carData.tachograph ? 'כן' : 'לא');
        setTachographDate(carData.tachographDate);
        setwinterreview(carData.winterreview);
    }, [carData])

    console.log(carData);
    const ReturnKenLo = (val) => {
        return val === 'כן' ? true : false;
    }

    const CheckIfNotEqual = () => {
        // (ReturnKenLo(tachograph) != props.data.tachograph && tachographDate) ||
        // (ReturnKenLo(hazmat) != props.data.hazmat && hazmatDate) ||
        if (!hazmatDate && ReturnKenLo(hazmat)) { return true; }
        if (!tachographDate && ReturnKenLo(tachograph)) { return true; }
        if ((car_num != carData.car_num) ||
            (car_product != carData.car_product) ||
            (car_type != carData.car_type) ||
            (car_type2 != carData.car_type2) ||
            (enddate != carData.enddate) ||
            (insurance != carData.insurance) ||
            (insuranceclass != carData.insuranceclass) ||
            (winterreview != carData.winterreview) ||
            (shockabsorbers != carData.shockabsorbers) ||
            (tachographDate != carData.tachographDate) ||
            (hazmatDate != carData.hazmatDate) ||
            fileEndDateCar ||
            fileInsurance ||
            fileShockabsorbers ||
            fileWinterreview ||
            fileTachograph ||
            fileHazmat
        ) {
            return false;
        }
        else {
            return true;
        }

    }

    async function getCustomerCar(customerId) {
        const carsRef = collection(MohamadFireStore, 'Customer');
        const q = query(carsRef, where("customer_id", "==", customerId));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            return querySnapshot.docs[0].data();
        } else {
            console.log('No matching car found');
            return null;
        }
    }
    const createNewForm = async() => {
        setLoading(true);
        let customerCar = await getCustomerCar(props.data.customer_id);
        setContactName(props.data.car_id);
        setCustomerSet(customerCar);
        router.push('/add');
    }

    const GetChecks = () => {
        let Listchecks = [];
        for (let index = 0; index < checks?.length; index++) {
            if (checks[index]?.car_id === props.data.car_id) {
                Listchecks.push(checks[index]);
            }
        }
        return Listchecks;
    }

    const updateProps = async () => {
        setLoading(true);
        const newCarData = {
            car_num: car_num,
            car_product: car_product,
            car_type: car_type,
            car_type2: car_type2,
            enddate: enddate,
            hazmat: hazmat,
            insurance: insurance,
            insuranceclass: insuranceclass,
            shockabsorbers: shockabsorbers,
            tachograph: tachograph,
            winterreview: winterreview,
            hazmatDate: hazmat === 'כן' ? hazmatDate : null,
            tachographDate: tachograph === 'כן' ? tachographDate : null,
        };
        const invId = doc(MohamadFireStore, "car", props.data.id);
        await updateDoc(invId, newCarData);
        if (fileEndDateCar) {
            const storageRefEndDate = ref(storagee, `${car_num}/endDateCar`);
            const uploadTaskEndDate = uploadBytesResumable(storageRefEndDate, fileEndDateCar);
        }
        if (fileInsurance) {
            const storageRefnsurance = ref(storagee, `${car_num}/Insurance`);
            const uploadTasknsurance = uploadBytesResumable(storageRefnsurance, fileInsurance);
        }
        if (fileShockabsorbers) {
            const storageRefShockabsorber = ref(storagee, `${car_num}/Shockabsorbers`);
            const uploadTaskShockabsorber = uploadBytesResumable(storageRefShockabsorber, fileShockabsorbers);
        }
        if (fileWinterreview) {
            const storageRefWinterreview = ref(storagee, `${car_num}/Winterreview`);
            const uploadTaskWinterreview = uploadBytesResumable(storageRefWinterreview, fileWinterreview);
        }
        if (fileTachograph) {
            const storageRefTachograph = ref(storagee, `${car_num}/Tachograph`);
            const uploadTaskTachograph = uploadBytesResumable(storageRefTachograph, fileTachograph);
        }
        if (fileHazmat) {
            const storageRefHazmat = ref(storagee, `${car_num}/Hazmat`);
            const uploadTaskHazmat = uploadBytesResumable(storageRefHazmat, fileHazmat);
        }
        setLoading(false);
    }

    async function UpdateDriverById(Driver_id) {
        const carsRef = collection(MohamadFireStore, 'Driver');
        const q = query(carsRef, where("driver_id", "==", Driver_id));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            return await updateDoc(doc(MohamadFireStore,'Driver',querySnapshot.docs[0].id),{zmenotNahag : false})
        } else {
          console.log('No matching car found');
          return null;
        }
      }

    let CarsNum = GetData('numbers')[0]?.number;
    const deleteCar = async () => {
        setLoading(true);
        for (let index = 0; index < checks.length; index++) {
            if (checks[index]?.car_id === props.data.car_id) {
                await deleteDoc(doc(MohamadFireStore, "checks", checks[index]?.id));
            }
        }
        await deleteDoc(doc(MohamadFireStore, "car", props.data.id));
        await updateDoc(doc(MohamadFireStore, "numbers", 'cars'), { number: CarsNum - 1 });
        await UpdateDriverById(props.data.Driver_id);
        const storageRef = ref(storagee, `${car_num}/`);
        try {
            const listResults = await listAll(storageRef);
            const deletePromises = listResults.items.map(item => {
              return deleteObject(item);
            });
            await Promise.all(deletePromises);
            console.log('All files deleted successfully');
          } catch (error) {
            console.error("Failed to delete files", error);
          }
        setLoading(false);
        props.disable();
    }

    const endDatePath = `gs://mahmod-insurance.appspot.com/${props.data.car_num}/endDateCar`;
    const Insurance = `gs://mahmod-insurance.appspot.com/${props.data.car_num}/Insurance`;
    const Shockabsorbers = `gs://mahmod-insurance.appspot.com/${props.data.car_num}/Shockabsorbers`;
    const Winterreview = `gs://mahmod-insurance.appspot.com/${props.data.car_num}/Winterreview`;
    const Tachograph = `gs://mahmod-insurance.appspot.com/${props.data.car_num}/Tachograph`;
    const Hazmat = `gs://mahmod-insurance.appspot.com/${props.data.car_num}/Hazmat`;

    const [endDateFile, setEndDateFile] = useState(false);
    const [InsuranceFile, setInsuranceFile] = useState(false);
    const [ShockabsorbersFile, setShockabsorbersFile] = useState(false);
    const [WinterreviewFile, setWinterreviewFile] = useState(false);
    const [TachographFile, setTachographFile] = useState(false);
    const [HazmatFile, setHazmatFile] = useState(false);

    const fileEndDateCarRef = useRef();
    const [fileEndDateCar, setFileEndDateCar] = useState(null);
    // תוקף ביטוח
    const fileInsuranceRef = useRef();
    const [fileInsurance, setFileInsurance] = useState(null);
    // אישור בולמים
    const fileShockabsorbersRef = useRef();
    const [fileShockabsorbers, setFileShockabsorber] = useState(null);
    // ביקורת חורף
    const fileWinterreviewRef = useRef();
    const [fileWinterreview, setFileWinterreview] = useState(null);
    // טכוגרף
    const fileTachographRef = useRef();
    const [fileTachograph, setFileTachograph] = useState(null);
    // חו"מס
    const fileHazmatRef = useRef();
    const [fileHazmat, setFileHazmat] = useState(null);

    const checkForFile = async (filePath) => {
        const fileRef = ref(storagee, filePath);
        try {
            await getMetadata(fileRef);
            return true;
        } catch (error) {
            if (error.code === 'storage/object-not-found') {
                return false;
            }
            throw error;
        }
    };

    useEffect(() => {
        checkForFile(endDatePath)
            .then((fileExists) => {
                setEndDateFile(fileExists);
            })
            .catch((error) => {
                console.error('Error checking for file:', error);
                setEndDateFile(false);
            });
        checkForFile(Insurance)
            .then((fileExists) => {
                setInsuranceFile(fileExists);
            })
            .catch((error) => {
                console.error('Error checking for file:', error);
                setInsuranceFile(false);
            });
        checkForFile(Shockabsorbers)
            .then((fileExists) => {
                setShockabsorbersFile(fileExists);
            })
            .catch((error) => {
                console.error('Error checking for file:', error);
                setShockabsorbersFile(false);
            });
        checkForFile(Winterreview)
            .then((fileExists) => {
                setWinterreviewFile(fileExists);
            })
            .catch((error) => {
                console.error('Error checking for file:', error);
                setWinterreviewFile(false);
            });
        checkForFile(Tachograph)
            .then((fileExists) => {
                setTachographFile(fileExists);
            })
            .catch((error) => {
                console.error('Error checking for file:', error);
                setTachographFile(false);
            });
        checkForFile(Hazmat)
            .then((fileExists) => {
                setHazmatFile(fileExists);
            })
            .catch((error) => {
                console.error('Error checking for file:', error);
                setHazmatFile(false);
            });
    }, [endDatePath, Insurance, Shockabsorbers, Winterreview, Tachograph, Hazmat]);

    async function GetEndDate(type) {
        setLoading(true);
        const storageRef = ref(storagee, `gs://mahmod-insurance.appspot.com/${props.data.car_num}/${type}`);
        try {
            const url = await getDownloadURL(storageRef);
            window.open(url, '_blank');
        }
        catch (e) {
            console.log(e);
        }
        setLoading(false);
    }




    return (
        <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
            <ModalContent>
                <>
                    {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0 z-50" />}
                    <ModalHeader className="flex justify-center shadow-lg">
                        <div className="flex items-center">
                            <div className="mr-2">{car_num}</div>
                            <div className="flex bg-black p-1 rounded-xl w-fit">
                                {GetCarsImages(30, 30, props.data.car_product)}
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody className="shadow-lg">
                        <div dir="rtl" className="m-1 pr-2 pl-2 pb-2 bg-white rounded-xl no-scrollbar overflow-auto sizeingForDivsModals">
                            <div className="flex justify-center">
                            </div>
                            <div className="flex justify-center">
                                <div className="w-full max-w-[700px]">
                                    <div className="flex items-center mt-5">
                                        <div className="w-[130px] ml-2 font-extrabold">מספר רכב</div>
                                        <Input onValueChange={(value) => setcar_num(value)} value={car_num} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[130px] ml-2 font-extrabold">יצרן</div>
                                        <Input onValueChange={(value) => setcar_product(value)} value={car_product} type="text" />
                                    </div>
                                    <div className="flex items-center mt-5 max-[820px]:border-t-1 max-[820px]:pt-4 max-[820px]:pb-4">
                                        <div className="w-[130px] ml-2 font-extrabold">תוקף</div>
                                        <div className="w-full flex items-center flex-wrap justify-center">
                                            <Input className="ml-3 max-w-[400px]" onValueChange={(value) => setenddate(value)} value={enddate} type="date" />
                                            {
                                                endDateFile ?
                                                    <div className="flex items-center max-[820px]:mt-3">
                                                        <Button className='text-primary border-primary' onClick={() => { GetEndDate('endDateCar') }} variant="bordered" size="sm"><FaEye className="text-xl" /></Button>
                                                        <input onChange={(e) => setFileEndDateCar(e.target.files[0])} ref={fileEndDateCarRef} className="hidden" type="file" />
                                                        <Button onClick={() => { fileEndDateCarRef.current.click() }} color="primary" variant="flat" size="sm" className="mr-2">להחליף</Button>
                                                    </div>
                                                    :
                                                    <div className="flex items-center max-[820px]:mt-3">
                                                        <input onChange={(e) => setFileEndDateCar(e.target.files[0])} ref={fileEndDateCarRef} className="hidden" type="file" />
                                                        <Button className={`text-${fileEndDateCar ? 'primary' : 'default'} border-${fileEndDateCar ? 'primary' : 'default'}`} onClick={() => { fileEndDateCarRef.current.click() }} variant="bordered" size="sm"><FaFolder className="text-xl" /></Button>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5 max-[820px]:border-t-1 max-[820px]:pt-4 max-[820px]:pb-4">
                                        <div className="w-[130px] ml-2 font-extrabold">תאריך ביטוח</div>
                                        <div className="w-full flex items-center flex-wrap justify-center">
                                            <Input className="ml-3 max-w-[400px]" onValueChange={(value) => setinsurance(value)} value={insurance} type="date" />
                                            {
                                                InsuranceFile ?
                                                    <div className="flex items-center max-[820px]:mt-3">
                                                        <Button className='text-primary border-primary' onClick={() => { GetEndDate('Insurance') }} variant="bordered" size="sm"><FaEye className="text-xl" /></Button>
                                                        <input onChange={(e) => setFileInsurance(e.target.files[0])} ref={fileInsuranceRef} className="hidden" type="file" />
                                                        <Button onClick={() => { fileInsuranceRef.current.click() }} color="primary" variant="flat" size="sm" className="mr-2">להחליף</Button>
                                                    </div>
                                                    :
                                                    <div className="flex items-center max-[820px]:mt-3">
                                                        <input onChange={(e) => setFileInsurance(e.target.files[0])} ref={fileInsuranceRef} className="hidden" type="file" />
                                                        <Button className={`text-${fileInsurance ? 'primary' : 'default'} border-${fileInsurance ? 'primary' : 'default'}`} onClick={() => { fileInsuranceRef.current.click() }} variant="bordered" size="sm"><FaFolder className="text-xl" /></Button>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    {
                                        props.data.car_type == `רכב מעל 10,000 ק"ג` &&
                                        <div className="flex items-center mt-5 max-[820px]:border-t-1 max-[820px]:pt-4 max-[820px]:pb-4">
                                            <div className="w-[130px] ml-2 font-extrabold">אישור בולמים</div>
                                            <div className="w-full flex items-center flex-wrap justify-center">
                                                <Input className="ml-3 max-w-[400px]" onValueChange={(value) => setshockabsorbers(value)} value={shockabsorbers} type="date" />
                                                {
                                                    ShockabsorbersFile ?
                                                        <div className="flex items-center max-[820px]:mt-3">
                                                            <Button className='text-primary border-primary' onClick={() => { GetEndDate('Shockabsorbers') }} variant="bordered" size="sm"><FaEye className="text-xl" /></Button>
                                                            <input onChange={(e) => setFileShockabsorber(e.target.files[0])} ref={fileShockabsorbersRef} className="hidden" type="file" />
                                                            <Button onClick={() => { fileShockabsorbersRef.current.click() }} color="primary" variant="flat" size="sm" className="mr-2">להחליף</Button>
                                                        </div>
                                                        :
                                                        <div className="flex items-center max-[820px]:mt-3">
                                                            <input onChange={(e) => setFileShockabsorber(e.target.files[0])} ref={fileShockabsorbersRef} className="hidden" type="file" />
                                                            <Button className={`text-${fileShockabsorbers ? 'primary' : 'default'} border-${fileShockabsorbers ? 'primary' : 'default'}`} onClick={() => { fileShockabsorbersRef.current.click() }} variant="bordered" size="sm"><FaFolder className="text-xl" /></Button>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                    <div className="flex items-center mt-5 max-[820px]:border-t-1 max-[820px]:border-b-1 max-[820px]:pt-4 max-[820px]:pb-4">
                                        <div className="w-[130px] ml-2 font-extrabold">בדיקת חורף</div>
                                        <div className="w-full flex items-center flex-wrap justify-center">
                                            <Input className="ml-3 max-w-[400px]" onValueChange={(value) => setwinterreview(value)} value={winterreview} type="date" />
                                            {
                                                WinterreviewFile ?
                                                    <div className="flex items-center max-[820px]:mt-3">
                                                        <Button className='text-primary border-primary' onClick={() => { GetEndDate('Winterreview') }} variant="bordered" size="sm"><FaEye className="text-xl" /></Button>
                                                        <input onChange={(e) => setFileWinterreview(e.target.files[0])} ref={fileWinterreviewRef} className="hidden" type="file" />
                                                        <Button onClick={() => { fileWinterreviewRef.current.click() }} color="primary" variant="flat" size="sm" className="mr-2">להחליף</Button>
                                                    </div>
                                                    :
                                                    <div className="flex items-center max-[820px]:mt-3">
                                                        <input onChange={(e) => setFileWinterreview(e.target.files[0])} ref={fileWinterreviewRef} className="hidden" type="file" />
                                                        <Button className={`text-${fileWinterreview ? 'primary' : 'default'} border-${fileWinterreview ? 'primary' : 'default'}`} onClick={() => { fileWinterreviewRef.current.click() }} variant="bordered" size="sm"><FaFolder className="text-xl" /></Button>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">סוג ביטוח</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {insuranceclass}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={insuranceclass}
                                                onSelectionChange={(value) => setinsuranceclass(value.currentKey)}
                                            >
                                                <DropdownItem key='צד שלשי'>צד שלשי</DropdownItem>
                                                <DropdownItem key='מקיף'>מקיף</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">סוג רכב</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car_type2}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={car_type2}
                                                onSelectionChange={(value) => setcar_type2(value.currentKey)}
                                            >
                                                {
                                                    type2.map((type) => {
                                                        return <DropdownItem key={type.name}>{type.name}</DropdownItem>
                                                    })
                                                }
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">סוג טופס</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car_type}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={car_type}
                                                onSelectionChange={(value) => setcar_type(value.currentKey)}
                                            >
                                                <DropdownItem key="גרור">גרור</DropdownItem>
                                                <DropdownItem key="ציוד הנדס'">ציוד הנדס'</DropdownItem>
                                                <DropdownItem key={`רכב עד 9,999 ק"ג`}>רכב עד 9,999 ק"ג</DropdownItem>
                                                <DropdownItem key={`רכב מעל 10,000 ק"ג`}>רכב מעל 10,000 ק"ג</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36 font-extrabold">חו"מס</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {hazmat}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={hazmat}
                                                onSelectionChange={(value) => sethazmat(value.currentKey)}
                                            >
                                                <DropdownItem key="כן">כן</DropdownItem>
                                                <DropdownItem key="לא" onClick={() => { setFileHazmat(null); setHazmatDate(''); }}>לא</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    {
                                        hazmat === 'כן' &&
                                        <div className="flex items-center mt-5 max-[820px]:border-t-1 max-[820px]:border-b-1 max-[820px]:pt-4 max-[820px]:pb-4">
                                            <div className="font-extrabold w-[130px] ml-2">תאריך חו"מס</div>
                                            <div className="w-full flex items-center flex-wrap justify-center">
                                                <Input className="ml-3 max-w-[400px]" onValueChange={(value) => setHazmatDate(value)} value={hazmatDate} type="date" />
                                                {
                                                    HazmatFile ?
                                                        <div className="flex items-center max-[820px]:mt-3">
                                                            <Button className='text-primary border-primary' onClick={() => { GetEndDate('Hazmat') }} variant="bordered" size="sm"><FaEye className="text-xl" /></Button>
                                                            <input onChange={(e) => setFileHazmat(e.target.files[0])} ref={fileHazmatRef} className="hidden" type="file" />
                                                            <Button onClick={() => { fileHazmatRef.current.click() }} color="primary" variant="flat" size="sm" className="mr-2">להחליף</Button>
                                                        </div>
                                                        :
                                                        <div className="flex items-center max-[820px]:mt-3">
                                                            <input onChange={(e) => setFileHazmat(e.target.files[0])} ref={fileHazmatRef} className="hidden" type="file" />
                                                            <Button className={`text-${fileHazmat ? 'primary' : 'default'} border-${fileHazmat ? 'primary' : 'default'}`} onClick={() => { fileHazmatRef.current.click() }} variant="bordered" size="sm"><FaFolder className="text-xl" /></Button>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                    {
                                        props.data.car_type === `רכב מעל 10,000 ק"ג` &&
                                        <div className="flex items-center mt-5">
                                            <div className="w-36 font-extrabold">טכוגרף</div>
                                            <Dropdown dir="rtl">
                                                <DropdownTrigger>
                                                    <Button
                                                        color="primary"
                                                        variant="bordered"
                                                        className="capitalize"
                                                    >
                                                        {tachograph}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Single selection example"
                                                    variant="flat"
                                                    disallowEmptySelection
                                                    selectionMode="single"
                                                    selectedKeys={tachograph}
                                                    onSelectionChange={(value) => settachograph(value.currentKey)}
                                                >
                                                    <DropdownItem key="כן">כן</DropdownItem>
                                                    <DropdownItem key="לא" onClick={() => { setFileTachograph(null); setTachographDate(''); }}>לא</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    }
                                    {
                                        props.data.car_type === `רכב מעל 10,000 ק"ג` && tachograph === 'כן' &&
                                        <div className="flex items-center mt-5 max-[820px]:border-t-1 max-[820px]:border-b-1 max-[820px]:pt-4 max-[820px]:pb-4">
                                            <div className="font-extrabold w-[130px] ml-2">תאריך תכוגרף</div>
                                            <div className="w-full flex items-center flex-wrap justify-center">
                                                <Input className="ml-3 max-w-[400px]" onValueChange={(value) => setTachographDate(value)} value={tachographDate} type="date" />
                                                {
                                                    TachographFile ?
                                                        <div className="flex items-center max-[820px]:mt-3">
                                                            <Button className='text-primary border-primary' onClick={() => { GetEndDate('Tachograph') }} variant="bordered" size="sm"><FaEye className="text-xl" /></Button>
                                                            <input onChange={(e) => setFileTachograph(e.target.files[0])} ref={fileTachographRef} className="hidden" type="file" />
                                                            <Button onClick={() => { fileTachographRef.current.click() }} color="primary" variant="flat" size="sm" className="mr-2">להחליף</Button>
                                                        </div>
                                                        :
                                                        <div className="flex items-center max-[820px]:mt-3">
                                                            <input onChange={(e) => setFileTachograph(e.target.files[0])} ref={fileTachographRef} className="hidden" type="file" />
                                                            <Button className={`text-${fileTachograph ? 'primary' : 'default'} border-${fileTachograph ? 'primary' : 'default'}`} onClick={() => { fileTachographRef.current.click() }} variant="bordered" size="sm"><FaFolder className="text-xl" /></Button>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full overflow-auto">
                            <div className="flex w-full mb-2">
                                <div className="w-full items-center flex">
                                    <Button className="font-extrabold max-[500px]:text-[10px]" color="primary" variant="bordered" onClick={props.disable}>
                                        <IoMdClose className="text-xl max-[500px]:text-[11px]" />סגור
                                    </Button>
                                    <Button onClick={createNewForm} color="primary" variant="bordered" className="max-[500px]:text-[10px] ml-4 font-extrabold">
                                        <MdOutlineCreateNewFolder className="text-2xl max-[500px]:text-[11px]" />ליצרת טופס
                                    </Button>
                                    {
                                        GetChecks().length != 0 ?
                                            <Button onClick={() => { props.disable(); props.showAllForms(); }} color="primary" variant="bordered" className="max-[500px]:text-[10px] ml-4 font-extrabold">
                                                <SiGoogleforms className="text-xl max-[500px]:text-[11px]" />כל הטפסים
                                            </Button>
                                            :
                                            null
                                    }
                                </div>
                                <div className="flex justify-start">
                                    <Button onClick={deleteCar} color="danger" variant="bordered" className="max-[500px]:text-[10px] ml-4 font-extrabold">
                                        <TbTrash className="text-2xl max-[500px]:text-[11px]" />מחיקת הרכב
                                    </Button>
                                </div>
                                <div>
                                    <Button isDisabled={CheckIfNotEqual()} className="max-[500px]:text-[10px] font-extrabold ml-3" color="primary" onClick={updateProps}>
                                        <GrUpdate className="text-2xl max-[500px]:text-[11px]" />עדכון
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    )
}