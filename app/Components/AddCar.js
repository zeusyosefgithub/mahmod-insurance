import { Button, Input, Spinner } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
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





export default function AddCar() {

    const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const [errorDate,setErrorDate] = useState('');


    const { contactName } = useContext(ContactContext);

    const Customers = GetData('Customer');
    const type2 = GetData('type2');
    const Cars = GetData('car');
    const Drivers = GetData('Driver');

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
    const [tachograph, setTachograph] = useState('');

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



    const [showForm, setShowForm] = useState(false);
    const [showFormCar, setShowFormCar] = useState(null);

    const AddCar = async () => {
        setErrorDate('');
        if(!car && !dateRegex.test(endDateCar)){
            return setErrorDate('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !')
        }
        setErrorDate('');
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
        !driver && await addDoc(collection(MohamadFireStore, "Driver"), NewDataDriver);
        const NewDataCustomer = {
            customer_city: location,
            customer_id: currectCustomerId(),
            customer_name: name,
            customer_phone: number,
            customer_site: address
        }
        !customer && await addDoc(collection(MohamadFireStore, "Customer"), NewDataCustomer);
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
                hazmat: hazmat.currentKey,
                insurance: insurance,
                insuranceclass: insuranceclass,
                shockabsorbers: shockabsorbers,
                tachograph: tachograph.currentKey,
                winterreview: winterreview,
            }
            setShowFormCar(NewDataCar);
            await addDoc(collection(MohamadFireStore, "car"), NewDataCar);
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

    const [showCarInputs, setShowCarInputs] = useState(false);
    const [showDriverInputs, setShowDriverInputs] = useState(false);
    const [showCustomerInputs, setShowCustomerInputs] = useState(false);



    return (
        <div className="transition">
            {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0" />}
            {showCustomerModal && <ModalCustomer setCustomer={(cus) => setCustomer(cus)} show={showCustomerModal} disable={() => setShowCustomerModdal(false)} />}
            {showDriverModal && <ModalDriver setDriver={(driver) => setDriver(driver)} show={showDriverModal} disable={() => setShowDriverModdal(false)} />}
            {showCarModal && <ModalCar setCar={(car) => { setShowFormCar(car); setCar(car); setDriver(GetDriverNameByCar(car.Driver_id)); setCustomer(GetCusNameByCar(car.customer_id)); }} show={showCarModal} disable={() => setShowCarModdal(false)} />}
            {
                showForm ?
                    <div className="mt-14">
                        <div className="flex justify-center">
                            <div className="w-1/2 m-5 mb-10">
                                <Button onClick={() => setShowForm(false)} color="primary" className="text-xl">
                                    לחזור<GoArrowRight />
                                </Button>
                            </div>
                        </div>
                        <ShowForm disable={() => { setShowForm(false); setShowFormCar(null); }} car={showFormCar} driver={GetDriverNameByCar(showFormCar?.Driver_id)} customer={GetCusNameByCar(showFormCar?.customer_id)} />
                    </div>
                    :
                    <>
                        <div className="flex justify-center text-xl m-14">
                            <div className="bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest font-black">
                                 הוספה
                            </div>
                        </div>
                        <div className="m-20">
                            <div className="border-r-2 border-primary bg-slate-300 p-1 rounded-l-full mb-7 mt-10">
                                <div className="flex items-center m-5">
                                    <div className="mr-5 ml-5 w-24 flex items-center tracking-widest font-black"><div className="text-2xl">רכב</div><FaCar className="mr-3 text-2xl" /></div>
                                    <Button color="primary" className="mr-5 ml-5" onClick={() => { setCar(null); setShowCarInputs(true); resetAllCar(); }}>חדש <HiPlus /></Button>
                                    <Button color="primary" className="mr-5 ml-5" onClick={() => { setShowCarModdal(true); setShowCarInputs(true); }}>קיים <GoSearch /></Button>

                                    {
                                        showCarInputs ?
                                            <Button color="primary" className="mr-5 ml-14" onClick={() => { setShowCarInputs(false) }}>סגירה</Button>
                                            :
                                            <Button color="primary" className="mr-5 ml-14" onClick={() => { setShowCarInputs(true); }}>פתיחה</Button>
                                    }
                                    {
                                        !showCarInputs && car ?
                                            <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl">
                                                <TiInputChecked className="text-2xl text-green-500" />
                                                <div className="tracking-widest font-black">נהג : {car.car_num}</div>
                                            </div>
                                            :
                                            !showCarInputs && carNumber ?
                                                <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl">
                                                    <TiInputChecked className="text-2xl text-green-500" />
                                                    <div className="tracking-widest font-black">נהג : {carNumber}</div>
                                                </div>
                                                :
                                                null
                                    }

                                </div>
                            </div>
                            {
                                showCarInputs &&
                                <>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">מספר רכב</div>
                                        <Input onKeyDown={(e) => sortCarNumber(e)} isDisabled={car ? true : false} value={car ? car.car_num : carNumber} onValueChange={(value) => setCarNumber(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">יצרן</div>
                                        <Input isDisabled={car ? true : false} value={car ? car.car_product : producer} onValueChange={(value) => setProducer(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">תוקף רישיון רכב</div>
                                        <Input errorMessage={errorDate} isDisabled={car ? true : false} value={car ? car.enddate : endDateCar} onValueChange={(value) => setEndDateCar(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">תוקף ביטוח</div>
                                        <Input isDisabled={car ? true : false} value={car ? car.insurance : insurance} onValueChange={(value) => setInsurance(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">דרגת ביטוח</div>
                                        <Input isDisabled={car ? true : false} value={car ? car.insuranceclass : insuranceclass} onValueChange={(value) => setInsuranceclass(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">אישור בולמים</div>
                                        <Input isDisabled={car ? true : false} value={car ? car.shockabsorbers : shockabsorbers} onValueChange={(value) => setShockabsorbers(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">ביקורת חורף</div>
                                        <Input isDisabled={car ? true : false} value={car ? car.winterreview : winterreview} onValueChange={(value) => setWinterreview(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">חו"מס</div>
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
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">טכוגרף</div>
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
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">סוג רכב</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.typeFuel ? 'כן' : 'לא' : typeFuel ? typeFuel : "לבחור"}
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
                                        <div className="w-36">סוג טופס</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={car ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {car ? car.typeCar ? 'כן' : 'לא' : typeCar ? typeCar : "לבחור"}
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
                            <div className="border-r-2 border-primary bg-slate-300 p-1 rounded-l-full mb-7 mt-10">
                                <div className="flex items-center m-5">
                                    <div className="mr-5 ml-5 w-24 flex items-center tracking-widest font-black"><div className="text-2xl">לקוח</div><FaUserFriends className="mr-3 text-3xl" /></div>
                                    <Button color="primary" className="mr-5 ml-5" onClick={() => { setCustomer(null); setShowCustomerInputs(true); resetAllCustomer(); }}>חדש <HiPlus /></Button>
                                    <Button color="primary" className="mr-5 ml-5" onClick={() => { setShowCustomerModdal(true); setShowCustomerInputs(true); }}>קיים <GoSearch /></Button>

                                    {
                                        showCustomerInputs ?
                                            <Button color="primary" className="mr-5 ml-14" onClick={() => { setShowCustomerInputs(false) }}>סגירה</Button>
                                            :
                                            <Button color="primary" className="mr-5 ml-14" onClick={() => { setShowCustomerInputs(true); }}>פתיחה</Button>
                                    }
                                    {
                                        !showCustomerInputs && customer ?
                                            <>
                                                <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl">
                                                    <TiInputChecked className="text-2xl text-green-500" />
                                                    <div className="tracking-widest font-black">לקוח : {customer.customer_name}</div>
                                                </div>
                                            </>
                                            :
                                            !showCustomerInputs && name ?
                                                <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl">
                                                    <TiInputChecked className="text-2xl text-green-500" />
                                                    <div className="tracking-widest font-black">לקוח : {name}</div>
                                                </div>
                                                :
                                                null
                                    }

                                </div>
                            </div>
                            {
                                showCustomerInputs &&
                                <>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">שם לקוח</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_name : name} onValueChange={(value) => setName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">פלפון</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_phone : number} onValueChange={(value) => setNumber(value)} type="number" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">כתובת</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_site : address} onValueChange={(value) => setAddresss(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">ישוב</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.customer_city : location} onValueChange={(value) => setLocation(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">מספר סידורי</div>
                                        <Input isDisabled={customer ? true : false} value={customer ? customer.serial : serial} onValueChange={(value) => setSerial(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                </>
                            }
                            <div className="border-r-2 border-primary bg-slate-300 p-1 rounded-l-full mb-7 mt-10">
                                <div className="flex items-center m-5">
                                    <div className="text-2xl mr-5 ml-5 w-24 flex items-center tracking-widest font-black"><div className="text-2xl">נהג</div><TbSteeringWheel className="mr-3 text-3xl" /></div>
                                    <Button color="primary" className="mr-5 ml-5" onClick={() => { setDriver(null); setShowDriverInputs(true); resetAllDriver(); }}>חדש <HiPlus /></Button>
                                    <Button color="primary" className="mr-5 ml-5" onClick={() => { setShowDriverModdal(true); setShowDriverInputs(true); }}>קיים <GoSearch /></Button>

                                    {
                                        showDriverInputs ?
                                            <Button color="primary" className="mr-5 ml-14" onClick={() => { setShowDriverInputs(false) }}>סגירה</Button>
                                            :
                                            <Button color="primary" className="mr-5 ml-14" onClick={() => { setShowDriverInputs(true); }}>פתיחה</Button>
                                    }
                                    {
                                        !showDriverInputs && driver ?
                                            <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl">
                                                <TiInputChecked className="text-2xl text-green-500" />
                                                <div className="tracking-widest font-black">נהג : {driver.driver_name}</div>
                                            </div>
                                            :
                                            !showDriverInputs && nameD ?
                                                <div className="p-2 pr-4 pl-4 bg-white flex items-center rounded-3xl">
                                                    <TiInputChecked className="text-2xl text-green-500" />
                                                    <div className="tracking-widest font-black">נהג : {nameD}</div>
                                                </div>
                                                :
                                                null
                                    }

                                </div>
                            </div>
                            {
                                showDriverInputs &&
                                <>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">שם פרטי</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_name : nameD} onValueChange={(value) => setNameD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">שם משפחה</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.last_name : lastName} onValueChange={(value) => setLastName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">ישוב</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.city : CityD} onValueChange={(value) => setCityD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">כתובת</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.address : addressD} onValueChange={(value) => setAddresssD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">פלפון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_phone : phone} onValueChange={(value) => setPhone(value)} type="number" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">תוקף רישיון נהיגה</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_license_validity : endDate} onValueChange={(value) => setEndDate(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">מס' ת.ז</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.driver_id_card : cardId} onValueChange={(value) => setCardId(value)} type="number" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">תאריך יצרת רישיון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.licenseget : licenseget} onValueChange={(value) => setLicenseget(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">דרגת רישיון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.licensegrade : licensegrade} onValueChange={(value) => setLicensegrade(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">מספר רשיון</div>
                                        <Input isDisabled={driver ? true : false} value={driver ? driver.licensenumber : licensenumber} onValueChange={(value) => setLicensenumber(value)} type="text" variant="bordered" size="sm" color="primary" className="w-96" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-36">נהג קבוע</div>
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
                                        <div className="w-36">חו"מס</div>
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
                    </>
            }
        </div>
    )
}