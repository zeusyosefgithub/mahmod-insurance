import { Button, Input, Spinner } from "@nextui-org/react";
import { useContext, useEffect, useRef, useState } from "react";
import { HiPlus } from "react-icons/hi";
import ModalCustomer from "../ModalsCom/ModalCustomer";
import { IoMdRemove } from "react-icons/io";
import ModalDriver from "../ModalsCom/ModalDriver";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";
import GetData from "../FireBase/GetData";
import { GoSearch } from "react-icons/go";
import ModalCar from "../ModalsCom/ModalCar";
import ShowForm from "./ShowForm";
import ContactContext from "./ContactContext";
import { GoArrowRight } from "react-icons/go";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";
import onClickOutside from 'react-onclickoutside'





export default function AddCar() {

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[1,2])(\/|-)(19|20)\d{2}$/;
    const [errorDate, setErrorDate] = useState('');
    const [errorDateInsurance,setErrorDateInsurance] = useState('');



    const { contactName } = useContext(ContactContext);

    const Customers = GetData('Customer');
    const type2 = GetData('type2');
    const Cars = GetData('car');
    const Drivers = GetData('Driver');

    let CarsNum = GetData('numbers')[0]?.number;
    let CustomersNum = GetData('numbers')[1]?.number;
    let DriversNum = GetData('numbers')[2]?.number;

    function GetCurrentPropsCar() {
        for (let index = 0; index < Cars?.length; index++) {
            if (contactName === Cars[index]?.car_id) {
                return Cars[index];
            }
        }
    };
    function GetCurrentPropsDriver() {
        for (let index = 0; index < Cars?.length; index++) {
            if (contactName === Cars[index]?.car_id) {
                return GetDriverNameByCar(Cars[index]?.Driver_id);
            }
        }
    };
    function GetCurrentPropsCustomer() {
        for (let index = 0; index < Cars?.length; index++) {
            if (contactName === Cars[index]?.car_id) {
                return GetCusNameByCar(Cars[index]?.customer_id);
            }
        }
    };

    const GetCusNameByCar = (id) => {
        for (let index = 0; index < Customers.length; index++) {
            if (Customers[index]?.customer_id === id) {
                return Customers[index];
            }
        }
    }

    const GetDriverNameByCar = (id) => {
        for (let index = 0; index < Drivers.length; index++) {
            if (Drivers[index]?.driver_id === id) {
                return Drivers[index];
            }
        }
    }



    const [showCustomerModal, setShowCustomerModdal] = useState(false);
    const [customer, setCustomer] = useState(contactName ? GetCurrentPropsCustomer() : null);

    const [showDriverModal, setShowDriverModdal] = useState(false);
    const [driver, setDriver] = useState(contactName ? GetCurrentPropsDriver() : null);

    const [showCarModal, setShowCarModdal] = useState(false);
    const [car, setCar] = useState(contactName ? GetCurrentPropsCar() : null);

    useEffect(() => {
        contactName && setCar(GetCurrentPropsCar());
        contactName && setDriver(GetCurrentPropsDriver());
        contactName && setCustomer(GetCurrentPropsCustomer());
        contactName && setShowFormCar(GetCurrentPropsCar());
    }, [GetCurrentPropsCar(), GetCurrentPropsDriver(), GetCurrentPropsCustomer()])

    const [typeCar, setTypeCar] = useState('');

    const [carNumber, setCarNumber] = useState('');
    const [producer, setProducer] = useState('');
    const [typeFuel, setTypeFuel] = useState('');
    const [endDateCar, setEndDateCar] = useState('');
    const [insurance, setInsurance] = useState('');
    const [insuranceclass, setInsuranceclass] = useState('');
    const [shockabsorbers, setShockabsorbers] = useState('');
    const [winterreview, setWinterreview] = useState('');
    const [hazmat, setHazmat] = useState('');
    const [hazmatDate,setHazmatDate] = useState('');
    const [tachograph, setTachograph] = useState('');
    const [tachographDate,setTachographDate] = useState('');
    const [insuranceCompany,setInsuranceCompany] = useState('');

    const resetAllCar = () => {
        setCarNumber('');
        setProducer('');
        setTypeFuel('');
        setEndDateCar('');
        setInsurance('');
        setInsuranceclass('');
        setShockabsorbers('');
        setWinterreview('');
        setHazmat('');
        setTachograph('');
        setInsuranceCompany('');
    }

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddresss] = useState('');
    const [location, setLocation] = useState('');
    const [serial, setSerial] = useState('');

    const resetAllCustomer = () => {
        setName('');
        setNumber('');
        setAddresss('');
        setLocation('');
        setSerial('');
    }

    const [nameD, setNameD] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [endDate, setEndDate] = useState('');
    const [cardId, setCardId] = useState('');
    const [isFixed, setIsFixed] = useState('');
    const [addressD, setAddresssD] = useState('');
    const [CityD, setCityD] = useState('');
    const [hazmatD, setHazmatD] = useState('');
    const [licenseget, setLicenseget] = useState('');
    const [licensegrade, setLicensegrade] = useState('');
    const [licensenumber, setLicensenumber] = useState('');

    const resetAllDriver = () => {
        setNameD('');
        setLastName('');
        setPhone('');
        setEndDate('');
        setCardId('');
        setIsFixed('');
        setAddresssD('');
        setCityD('');
        setHazmatD('');
        setLicenseget('');
        setLicensegrade('');
        setLicensenumber('');
    }




    const [loading, setLoading] = useState(false);

    const currectCarId = () => {
        let maxValue = 0;
        if (!Cars.length) {
            return 1;
        }
        for (let index = 0; index < Cars.length; index++) {
            maxValue = Math.max(maxValue, Cars[index]?.car_id)
        }
        return maxValue + 1;
    }
    const currectCustomerId = () => {
        let maxValue = 0;
        if (!Customers.length) {
            return 1;
        }
        for (let index = 0; index < Customers.length; index++) {
            maxValue = Math.max(maxValue, Customers[index]?.customer_id)
        }
        return maxValue + 1;
    }
    const currectDriverId = () => {
        let maxValue = 0;
        if (!Drivers.length) {
            return 1;
        }
        for (let index = 0; index < Drivers.length; index++) {
            maxValue = Math.max(maxValue, Drivers[index]?.driver_id)
        }
        return maxValue + 1;
    }


    const [showCarInputs, setShowCarInputs] = useState(false);
    const [showDriverInputs, setShowDriverInputs] = useState(false);
    const [showCustomerInputs, setShowCustomerInputs] = useState(false);

    const Choises = GetData('Choices');
    const ChoisesProducer = () => {
        for (let index = 0; index < Choises?.length; index++) {
            if (Choises[index]?.id === 'Producers') {
                return Choises[index]?.arch;
            }
        }
    }

    const [displaySearchPrdoucer, setDisplaySearchPrdoucer] = useState("hidden");
    const SearchPrdoucerRef = useRef(null);
    const SearchPrdoucerRef1 = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!SearchPrdoucerRef.current?.contains(event.target) && !SearchPrdoucerRef1.current?.contains(event.target)) {
                setDisplaySearchPrdoucer('hidden');
            }
        };
        document.body.addEventListener("click", handleOutSideClick);
        return () => {
            document.body.addEventListener("click", handleOutSideClick);
        };
    }, [SearchPrdoucerRef, SearchPrdoucerRef1])

    const [showForm, setShowForm] = useState(false);
    const [showFormCar, setShowFormCar] = useState(null);

    const AddCar = async () => {
        setErrorDate('');
        setErrorDateInsurance('');
        if (!car && isNaN(Date.parse(endDateCar))) {
            return setErrorDate('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !')
        }
        if (!car && isNaN(Date.parse(insurance))) {
            return setErrorDateInsurance('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !')
        }
        setErrorDate('');
        setErrorDateInsurance('');
        setLoading(true);
        const NewDataDriver = {
            address: addressD,
            city: CityD,
            driver_fixed: isFixed === 'כן' ? true : false,
            driver_id: currectDriverId(),
            driver_id_card: cardId,
            driver_license_validity: endDate,
            driver_name: nameD,
            driver_phone: phone,
            hazmat: hazmatD === 'כן' ? true : false,
            last_name: lastName,
            licenseget: licenseget,
            licensegrade: licensegrade,
            licensenumber: licensenumber,
        }
        !driver && await addDoc(collection(MohamadFireStore, "Driver"), NewDataDriver) && await updateDoc(doc(MohamadFireStore, "numbers", 'drivers'), { number: DriversNum + 1 });
        const NewDataCustomer = {
            customer_city: location,
            customer_id: currectCustomerId(),
            customer_name: name,
            customer_phone: number,
            customer_site: address
        }
        !customer && await addDoc(collection(MohamadFireStore, "Customer"), NewDataCustomer) && await updateDoc(doc(MohamadFireStore, "numbers", 'customers'), { number: CustomersNum + 1 });
        if (car) {
            const NewDataCarCurrent = {
                Driver_id: driver ? driver.driver_id : currectDriverId(),
                car_num: car.car_num,
                car_product: car.car_product,
                car_type: car.car_type,
                car_type2: car.car_type2,
                customer_id: customer ? customer.customer_id : currectCustomerId(),
                enddate: car.enddate,
                hazmat: car.hazmat,
                insurance: car.insurance,
                insuranceclass: car.insuranceclass,
                shockabsorbers: car.shockabsorbers,
                tachograph: car.tachograph,
                winterreview: car.winterreview,
                insuranceCompany: car.insuranceCompany,
                hazmatDate: car.hazmatDate, 
                tachographDate: car.tachographDate,
            }
            const invId = doc(MohamadFireStore, "car", car.id);
            await updateDoc(invId, NewDataCarCurrent);
        }
        else {
            const NewDataCar = {
                Driver_id: driver ? driver.driver_id : currectDriverId(),
                car_id: currectCarId(),
                car_num: carNumber,
                car_product: producer,
                car_type: typeCar.currentKey,
                car_type2: typeFuel.currentKey,
                customer_id: customer ? customer.customer_id : currectCustomerId(),
                enddate: endDateCar,
                hazmat: hazmat.currentKey === 'כן' ? true : false,
                hazmatDate: hazmat.currentKey === 'כן' ? hazmatDate : null, 
                insurance: insurance,
                insuranceclass: insuranceclass.currentKey,
                shockabsorbers: shockabsorbers,
                tachograph: tachograph.currentKey === 'כן' ? true : false,
                tachographDate: tachograph.currentKey === 'כן' ? tachographDate : null,
                winterreview: winterreview,
                insuranceCompany : insuranceCompany.currentKey
            }
            setShowFormCar(NewDataCar);
            await addDoc(collection(MohamadFireStore, "car"), NewDataCar);
            await updateDoc(doc(MohamadFireStore, "numbers", 'cars'), { number: CarsNum + 1 });
            if (ChoisesProducer()) {
                let arraych = ChoisesProducer();
                arraych?.push(producer);
                await updateDoc(doc(MohamadFireStore, "Choices", 'Producers'), { arch: arraych });
            }
            else {
                let arraych = [];
                arraych.push(producer);
                await updateDoc(doc(MohamadFireStore, "Choices", 'Producers'), { arch: arraych });
            }

        }
        resetAllDriver();
        resetAllCustomer();
        resetAllCar();
        setLoading(false);
        setShowForm(true);
        setCar(null);
        setCustomer(null);
        setDriver(null);
    }

    const sortCarNumber = (val, s) => {
        if (val.key === "Backspace" || val.key === "Delete") {
            return;
        }
        if (val.target.value.length === 2) {
            let nn = carNumber + "-";
            setCarNumber(nn);
        }
        if (val.target.value.length === 6) {
            let nn = carNumber + "-";
            setCarNumber(nn);
        }
    }

    const [listProducers, setListProducers] = useState(ChoisesProducer());

    const getLineCus = (k) => {
        return <div onClick={() => { setProducer(k); setDisplaySearchPrdoucer('hidden'); }} className="hover:bg-primary-200 cursor-pointer p-1">{k}</div>
    }

    const getDefaultProducers = () => {
        let listCus = [];
        for (let index = 0; index < ChoisesProducer()?.length; index++) {
            listCus.push(getLineCus(ChoisesProducer()[index]));
        }
        return listCus;
    }

    const checkIfEqualProducers = (list, producer) => {
        for (let index = 0; index < list.length; index++) {
            if (list[index] === producer) {
                return true;
            }
        }
        return false;
    }

    const GetSearchProducers = () => {
        let getAll = [];
        setListProducers([]);
        for (let index = 0; index < ChoisesProducer()?.length; index++) {
            var StringName = ChoisesProducer()[index]?.toString();
            var StringInput = SearchPrdoucerRef.current?.value.toString();
            if (StringName.startsWith(StringInput)) {
                setListProducers(listCus => [...listCus, getLineCus(ChoisesProducer()[index])]);
                getAll.push(ChoisesProducer()[index]);
            }
        }
        for (let index = 0; index < ChoisesProducer()?.length; index++) {
            var StringName = ChoisesProducer()[index]?.toString();
            var StringInput = SearchPrdoucerRef.current?.value.toString();
            if (!getAll.length || !checkIfEqualProducers(getAll, ChoisesProducer()[index])) {
                if (StringName.includes(StringInput)) {
                    setListProducers(listCus => [...listCus, getLineCus(ChoisesProducer()[index])]);
                    getAll.push(ChoisesProducer()[index]);
                }
            }
        }
    }

    const GetRightDate = (date) => {
        console.log(date);

    }

    return (
        <div>
            {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0" />}
            {showCustomerModal && <ModalCustomer setCustomer={(cus) => setCustomer(cus)} show={showCustomerModal} disable={() => setShowCustomerModdal(false)} />}
            {showDriverModal && <ModalDriver setDriver={(driver) => setDriver(driver)} show={showDriverModal} disable={() => setShowDriverModdal(false)} />}
            {showCarModal && <ModalCar setCar={(car) => { setShowFormCar(car); setCar(car); setDriver(GetDriverNameByCar(car.Driver_id)); setCustomer(GetCusNameByCar(car.customer_id)); }} show={showCarModal} disable={() => setShowCarModdal(false)} />}
            {
                showForm ?
                    // <div className="mt-14">
                    //     <div className="flex justify-center">
                    //         <div className="w-1/2 m-5 mb-10">
                    //             <Button onClick={() => setShowForm(false)} color="primary" className="text-xl">
                    //                 לחזור<GoArrowRight />
                    //             </Button>
                    //         </div>
                    //     </div>
                    //     <ShowForm disable={() => { setShowForm(false); setShowFormCar(null); }} car={showFormCar} driver={GetDriverNameByCar(showFormCar?.Driver_id)} customer={GetCusNameByCar(showFormCar?.customer_id)} />
                    // </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="w-fit m-5 mb-10">
                                <Button onClick={() => setShowForm(false)} color="primary" className="text-xl">
                                    לחזור<GoArrowRight />
                                </Button>
                            </div>
                        </div>
                        <div className="absolute overflow-auto w-full flex">
                            <ShowForm disable={() => { setShowForm(false); setShowFormCar(null); }} car={showFormCar} driver={GetDriverNameByCar(showFormCar?.Driver_id)} customer={GetCusNameByCar(showFormCar?.customer_id)} />
                        </div>
                    </div>
                    :
                    <div className="shadow-2xl rounded-3xl bg-white p-5">
                        <div className="flex justify-center text-xl m-14">
                            <div className="bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest font-black">
                                הוספה
                            </div>
                        </div>
                        <div className="mr-5 w-fit ml-5">
                            <div className="border-r-2 border-primary bg-slate-300 p-1 rounded-l-lg mb-7 mt-10 w-full">
                                <div className="flex items-center pl-1 pt-1 pb-1">
                                    <div className="mr-1 ml-2 w-fit flex items-center tracking-widest font-black"><div className="text-lg ml-2">רכב</div><FaCar className="text-xl" /></div>
                                    <Button color="primary" className="mr-2 ml-2" onClick={() => { setCar(null); setShowCarInputs(true); resetAllCar(); }}>חדש <HiPlus /></Button>
                                    <Button color="primary" className="mr-2 ml-2" onClick={() => { setShowCarModdal(true); setShowCarInputs(true); }}>קיים <GoSearch /></Button>
                                    {
                                        showCarInputs ?
                                            <Button color="primary" className="mr-2" onClick={() => { setShowCarInputs(false) }}>סגירה</Button>
                                            :
                                            <Button color="primary" className="mr-2" onClick={() => { setShowCarInputs(true); }}>פתיחה</Button>
                                    }


                                </div>
                                {
                                    !showCarInputs && car ?
                                        <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl w-fit m-2">
                                            <TiInputChecked className="text-2xl text-green-500" />
                                            <div className="tracking-widest font-black">נהג : {car.car_num}</div>
                                        </div>
                                        :
                                        !showCarInputs && carNumber ?
                                            <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl w-fit m-2">
                                                <TiInputChecked className="text-2xl text-green-500" />
                                                <div className="tracking-widest font-black">נהג : {carNumber}</div>
                                            </div>
                                            :
                                            null
                                }
                            </div>
                            {
                                showCarInputs &&
                                <>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מספר רכב</div>
                                        <div className="w-full">
                                            <Input onKeyDown={(e) => sortCarNumber(e)} isDisabled={car ? true : false} value={car ? car.car_num : carNumber} onValueChange={(value) => setCarNumber(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full ml-3" />
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">יצרן</div>
                                        <div onClick={() => setDisplaySearchPrdoucer('')} className="w-full">
                                            <Input onChange={GetSearchProducers} ref={SearchPrdoucerRef} isDisabled={car ? true : false} value={car ? car.car_product : producer} onValueChange={(value) => setProducer(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full ml-3" />
                                        </div>

                                    </div>
                                    <div ref={SearchPrdoucerRef1} className="flex justify-end">
                                        {
                                            !car && ChoisesProducer() &&
                                            <div className="w-[280px]">
                                                <div className="relative w-full">
                                                    <div className={`${displaySearchPrdoucer} overflow-auto max-h-[200px] absolute border-black border-2 mt-1 w-full rounded p-1 bg-white z-30`}>
                                                        {
                                                            SearchPrdoucerRef.current?.value
                                                                ?
                                                                listProducers
                                                                :
                                                                getDefaultProducers()
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">תוקף רישיון רכב</div>
                                        <div className="w-full">
                                            <Input errorMessage={errorDate} isDisabled={car ? true : false} value={car ? car.enddate : endDateCar} onValueChange={(value) => setEndDateCar(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">תוקף ביטוח</div>
                                        <div className="w-full">
                                            <Input errorMessage={errorDateInsurance} isDisabled={car ? true : false} value={car ? car.insurance : insurance} onValueChange={(value) => setInsurance(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">אישור בולמים</div>
                                        <div className="w-full">
                                            <Input isDisabled={car ? true : false} value={car ? car.shockabsorbers : shockabsorbers} onValueChange={(value) => setShockabsorbers(value)} type="date" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                        </div>
                                    </div>
                                    {
                                        console.log(shockabsorbers)
                                    }
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">ביקורת חורף</div>
                                        <div className="w-full">
                                            <Input isDisabled={car ? true : false} value={car ? car.winterreview : GetRightDate(winterreview)} onValueChange={(value) => setWinterreview(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[150px]">טכוגרף</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.tachograph ? 'כן' : 'לא' : tachograph ? tachograph : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={tachograph}
                                                onSelectionChange={setTachograph}
                                            >
                                                <DropdownItem key='כן'>כן</DropdownItem>
                                                <DropdownItem key='לא'>לא</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    {
                                        (tachograph.currentKey === 'כן' || car?.tachograph) &&
                                        <div className="flex items-center mt-5">
                                            <div className="w-[200px]">תאריך הטכוגרף</div>
                                            <div className="w-full">
                                                <Input isDisabled={car ? true : false} value={car ? car.tachographDate : tachographDate} onValueChange={(value) => setTachographDate(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full ml-3" />
                                            </div>
                                        </div>
                                    }
                                    <div className="flex items-center mt-5">
                                        <div className="w-[150px]">חו"מס</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.hazmat ? 'כן' : 'לא' : hazmat ? hazmat : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={hazmat}
                                                onSelectionChange={setHazmat}
                                            >
                                                <DropdownItem key='כן'>כן</DropdownItem>
                                                <DropdownItem key='לא'>לא</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    {
                                        (hazmat.currentKey === 'כן' || car?.hazmat) &&
                                        <div className="flex items-center mt-5">
                                            <div className="w-[200px]">תאריך חו"מס</div>
                                            <div className="w-full">
                                                <Input isDisabled={car ? true : false} value={car ? car.hazmatDate : hazmatDate} onValueChange={(value) => setHazmatDate(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full ml-3" />
                                            </div>
                                        </div>
                                    }
                                    <div className="flex items-center mt-5">
                                        <div className="w-[150px]">חברת ביטוח</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.insuranceCompany : insuranceCompany ? insuranceCompany : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={insuranceCompany}
                                                onSelectionChange={setInsuranceCompany}
                                            >
                                                <DropdownItem key='איילון - חברת ביטוח'>איילון - חברת ביטוח</DropdownItem>
                                                <DropdownItem key='אליהו - חברת ביטוח'>אליהו - חברת ביטוח</DropdownItem>
                                                <DropdownItem key='הכשרה חברה לביטוח'>הכשרה חברה לביטוח</DropdownItem>
                                                <DropdownItem key='הפניקס - חברת ביטוח'>הפניקס - חברת ביטוח</DropdownItem>
                                                <DropdownItem key='הראל - חברת ביטוח'>הראל - חברת ביטוח</DropdownItem>
                                                <DropdownItem key='כלל - חברת ביטוח'>כלל - חברת ביטוח</DropdownItem>
                                                <DropdownItem key='מגדל - חברת ביטוח'>מגדל - חברת ביטוח</DropdownItem>
                                                <DropdownItem key='מנורה - חברת ביטוח'>מנורה - חברת ביטוח</DropdownItem>
                                                <DropdownItem key='שירביט - חברה לביטוח'>שירביט - חברה לביטוח</DropdownItem>
                                                <DropdownItem key='שלמה (ניו קופל) - חברה לביטוח'>שלמה (ניו קופל) - חברה לביטוח</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[150px]">סוג ביטוח</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.insuranceclass : insuranceclass ? insuranceclass : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={insuranceclass}
                                                onSelectionChange={setInsuranceclass}
                                            >
                                                <DropdownItem key='צד שלשי'>צד שלשי</DropdownItem>
                                                <DropdownItem key='מקיף'>מקיף</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[150px]">סוג רכב</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.car_type2 : typeFuel ? typeFuel : "לבחור"}
                                                </Button>

                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={typeFuel}
                                                onSelectionChange={setTypeFuel}
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
                                        <div className="w-[150px]">סוג טופס</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.car_type : typeCar ? typeCar : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={typeCar}
                                                onSelectionChange={setTypeCar}
                                            >
                                                <DropdownItem key="גרור">גרור</DropdownItem>
                                                <DropdownItem key="ציוד הנדס'">ציוד הנדס'</DropdownItem>
                                                <DropdownItem key={`רכב עד 9,999 ק"ג`}>רכב עד 9,999 ק"ג</DropdownItem>
                                                <DropdownItem key={`רכב מעל 10,000 ק"ג`}>רכב מעל 10,000 ק"ג</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </>

                            }
                            <div className="border-r-2 border-primary bg-slate-300 p-1 rounded-l-lg mb-7 mt-10 w-full">
                                <div className="flex items-center pl-1 pt-1 pb-1">
                                    <div className="mr-1 ml-2 w-fit flex items-center tracking-widest font-black"><div className="text-lg ml-2">לקוח</div><FaUserFriends className="text-xl" /></div>
                                    <Button color="primary" className="mr-2 ml-2" onClick={() => { setCustomer(null); setShowCustomerInputs(true); resetAllCustomer(); }}>חדש <HiPlus /></Button>
                                    <Button color="primary" className="mr-2 ml-2" onClick={() => { setShowCustomerModdal(true); setShowCustomerInputs(true); }}>קיים <GoSearch /></Button>

                                    {
                                        showCustomerInputs ?
                                            <Button color="primary" className="mr-2" onClick={() => { setShowCustomerInputs(false) }}>סגירה</Button>
                                            :
                                            <Button color="primary" className="mr-2" onClick={() => { setShowCustomerInputs(true); }}>פתיחה</Button>
                                    }


                                </div>
                                {
                                    !showCustomerInputs && customer ?
                                        <>
                                            <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl w-fit m-2">
                                                <TiInputChecked className="text-2xl text-green-500" />
                                                <div className="tracking-widest font-black">לקוח : {customer.customer_name}</div>
                                            </div>
                                        </>
                                        :
                                        !showCustomerInputs && name ?
                                            <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl w-fit m-2">
                                                <TiInputChecked className="text-2xl text-green-500" />
                                                <div className="tracking-widest font-black">לקוח : {name}</div>
                                            </div>
                                            :
                                            null
                                }
                            </div>
                            {
                                showCustomerInputs &&
                                <>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">שם לקוח</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_name : name} onValueChange={(value) => setName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">פלפון</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_phone : number} onValueChange={(value) => setNumber(value)} type="number" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">כתובת</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_site : address} onValueChange={(value) => setAddresss(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">ישוב</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_city : location} onValueChange={(value) => setLocation(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מספר סידורי</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.serial : serial} onValueChange={(value) => setSerial(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                </>
                            }
                            <div className="border-r-2 border-primary bg-slate-300 p-1 rounded-l-lg mb-7 mt-10 w-full">
                                <div className="flex items-center pl-1 pt-1 pb-1">
                                    <div className="text-2xl mr-1 ml-2 w-fit flex items-center tracking-widest font-black"><div className="text-lg ml-2">נהג</div><TbSteeringWheel className="text-2xl" /></div>
                                    <Button color="primary" className="mr-2 ml-2" onClick={() => { setDriver(null); setShowDriverInputs(true); resetAllDriver(); }}>חדש <HiPlus /></Button>
                                    <Button color="primary" className="mr-2 ml-2" onClick={() => { setShowDriverModdal(true); setShowDriverInputs(true); }}>קיים <GoSearch /></Button>

                                    {
                                        showDriverInputs ?
                                            <Button color="primary" className="mr-2" onClick={() => { setShowDriverInputs(false) }}>סגירה</Button>
                                            :
                                            <Button color="primary" className="mr-2" onClick={() => { setShowDriverInputs(true); }}>פתיחה</Button>
                                    }


                                </div>
                                {
                                    !showDriverInputs && driver ?
                                        <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl w-fit m-2">
                                            <TiInputChecked className="text-2xl text-green-500" />
                                            <div className="tracking-widest font-black">נהג : {driver.driver_name}</div>
                                        </div>
                                        :
                                        !showDriverInputs && nameD ?
                                            <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl w-fit m-2">
                                                <TiInputChecked className="text-2xl text-green-500" />
                                                <div className="tracking-widest font-black">נהג : {nameD}</div>
                                            </div>
                                            :
                                            null
                                }
                            </div>
                            {
                                showDriverInputs &&
                                <>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">שם פרטי</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_name : nameD} onValueChange={(value) => setNameD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">שם משפחה</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.last_name : lastName} onValueChange={(value) => setLastName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">ישוב</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.city : CityD} onValueChange={(value) => setCityD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">כתובת</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.address : addressD} onValueChange={(value) => setAddresssD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">פלפון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_phone : phone} onValueChange={(value) => setPhone(value)} type="number" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">תוקף רישיון נהיגה</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_license_validity : endDate} onValueChange={(value) => setEndDate(value)} type="date" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מס' ת.ז</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_id_card : cardId} onValueChange={(value) => setCardId(value)} type="number" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">תאריך יצרת רישיון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.licenseget : licenseget} onValueChange={(value) => setLicenseget(value)} type="date" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">דרגת רישיון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.licensegrade : licensegrade} onValueChange={(value) => setLicensegrade(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מספר רשיון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.licensenumber : licensenumber} onValueChange={(value) => setLicensenumber(value)} type="text" variant="bordered" size="sm" color="primary" className="w-ful ml-3" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[150px]">נהג קבוע</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={driver ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {driver ? driver.driver_fixed ? 'כן' : 'לא' : isFixed ? isFixed : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={isFixed}
                                                onSelectionChange={setIsFixed}
                                            >
                                                <DropdownItem key="כן">כן</DropdownItem>
                                                <DropdownItem key="לא">לא</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[150px]">חו"מס</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={driver ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {driver ? driver.hazmat ? 'כן' : 'לא' : hazmatD ? hazmatD : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="single"
                                                selectedKeys={hazmatD}
                                                onSelectionChange={setHazmatD}
                                            >
                                                <DropdownItem key="כן">כן</DropdownItem>
                                                <DropdownItem key="לא">לא</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="flex justify-center m-14">
                            <Button onClick={AddCar} size="lg" color="primary" >אישור</Button>
                        </div>
                    </div>
            }
        </div>
    )
}