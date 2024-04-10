import { Button, Divider, Input, Spinner } from "@nextui-org/react";
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
import { FaRegCheckSquare } from "react-icons/fa";
import { FiSquare } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";





export default function AddCar() {

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[1,2])(\/|-)(19|20)\d{2}$/;




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
    const [errorTypeCar, setErrorTypeCar] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [errorCarNumber, setErrorCarNumber] = useState('');
    const [producer, setProducer] = useState('');
    const [errorProduce, setErrorProduce] = useState('');
    const [typeFuel, setTypeFuel] = useState('');
    const [errorTypeFuel, setErrorTypeFuel] = useState('');
    const [endDateCar, setEndDateCar] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [insurance, setInsurance] = useState('');
    const [errorDateInsurance, setErrorDateInsurance] = useState('');
    const [insuranceclass, setInsuranceclass] = useState('');
    const [errorInsuranceclass, setErrorInsuranceclass] = useState('');
    const [shockabsorbers, setShockabsorbers] = useState('');
    const [errorShockabsorbers, setErrorShockabsorbers] = useState('');
    const [winterreview, setWinterreview] = useState('');
    const [errorWinterreview, setErrorWinterreview] = useState('');
    const [hazmat, setHazmat] = useState('');
    const [errorHazmat, setErrorHazmat] = useState('');
    const [hazmatDate, setHazmatDate] = useState('');
    const [tachograph, setTachograph] = useState('');
    const [errorTachograph, setErrorTachograph] = useState('');
    const [tachographDate, setTachographDate] = useState('');
    const [insuranceCompany, setInsuranceCompany] = useState('');
    const [errorInsuranceCompany, setErrorInsuranceCompany] = useState('');

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
    const [errorName, setErrorName] = useState('');
    const [number, setNumber] = useState('');
    const [errorNumber, setErrorNumber] = useState('');
    const [address, setAddresss] = useState('');
    const [errorAddresss, setErrorAddresss] = useState('');
    const [location, setLocation] = useState('');
    const [errorLocation, setErrorLocation] = useState('');
    const [serial, setSerial] = useState('');
    const [errorSerial, setErrorSerial] = useState('');
    const [CustomerEmail, setCustomerEmail] = useState('');

    const resetAllCustomer = () => {
        setName('');
        setNumber('');
        setAddresss('');
        setLocation('');
        setSerial('');
    }

    const [nameD, setNameD] = useState('');
    const [errorNameD, setErrorNameD] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errorEndDate, setErrorEndDate] = useState('');
    const [cardId, setCardId] = useState('');
    const [errorCardId, setErrorCardId] = useState('');
    const [isFixed, setIsFixed] = useState('');
    const [errorIsFixed, setErrorIsFixed] = useState('');
    const [addressD, setAddresssD] = useState('');
    const [errorAddresssD, setErrorAddresssD] = useState('');
    const [CityD, setCityD] = useState('');
    const [errorCityD, setErrorCityD] = useState('');
    const [hazmatD, setHazmatD] = useState('');
    const [errorHazmatD, setErrorHazmatD] = useState('');
    const [hazmatDDate, setHazmatDDate] = useState('');
    const [licenseget, setLicenseget] = useState('');
    const [errorLicenseget, setErrorLicenseget] = useState('');
    const [licensegrade, setLicensegrade] = useState('');
    const [errorLicensegrad, setErrorLicensegrad] = useState('');
    const [licensenumber, setLicensenumber] = useState('');
    const [errorLicensenumber, setErrorLicensenumber] = useState('');

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

    const resetAllErrors = () => {
        setErrorCarNumber('');
        setErrorProduce('');
        setErrorTypeFuel('');
        setErrorDate('');
        setErrorDateInsurance('');
        setErrorInsuranceclass('');
        setErrorShockabsorbers('');
        setErrorWinterreview('');
        setErrorHazmat('');
        setErrorTachograph('');
        setErrorInsuranceCompany('');
        setErrorName('');
        setErrorNumber('');
        setErrorAddresss('');
        setErrorLocation('');
        setErrorSerial('');
        setErrorNameD('');
        setErrorLastName('');
        setErrorPhone('');
        setErrorEndDate('');
        setErrorCardId('');
        setErrorIsFixed('');
        setErrorAddresssD('');
        setErrorCityD('');
        setErrorHazmatD('');
        setErrorLicenseget('');
        setErrorLicensegrad('');
        setErrorLicensenumber('');
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


    const [disableAddCar, setDisableAddCar] = useState(true);


    function isDateBeforeToday(date) {
        return new Date(date.toDateString()) < new Date(new Date().toDateString());
    }

    const [staticErrorMessage, setStaticErrorMessage] = useState('');

    const AddCar = async () => {





        let carStaus = true;
        let customerStatus = true;
        let driverStatus = true;



        if (!car) {
            if (typeCar) {
                if (typeCar.currentKey === `רכב מעל 10,000 ק"ג`) {
                    if (!carNumber ||
                        !producer ||
                        !endDateCar ||
                        !insurance ||
                        !shockabsorbers ||
                        !winterreview ||
                        !tachograph ||
                        !hazmat ||
                        !insuranceCompany ||
                        !insuranceclass ||
                        !typeFuel ||
                        !typeCar.currentKey) {
                        carStaus = false;
                    }
                }
                else {
                    if (!carNumber ||
                        !producer ||
                        !endDateCar ||
                        !insurance ||
                        !winterreview ||
                        !hazmat ||
                        !insuranceCompany ||
                        !insuranceclass ||
                        !typeFuel ||
                        !typeCar.currentKey) {
                        carStaus = false;
                    }
                }
            }
            else {
                carStaus = false;
            }
        }

        if (!name &&
            !number &&
            !address &&
            !location &&
            !serial &&
            !CustomerEmail) {
            customerStatus = false;
        }
        // return console.log(carStaus);
        if (!nameD &&
            !lastName &&
            !CityD &&
            !addressD &&
            !phone &&
            !endDate &&
            !cardId &&
            !licenseget &&
            !licensenumber &&
            !licensegrade &&
            !isFixed &&
            !hazmatD) {
            driverStatus = false;
        }
        resetAllErrors();
        if (!car && carStaus) {
            if (!carNumber) {
                return setErrorCarNumber('לא הוזנו נתונים למספר הרכב !');
            }
            if (carNumber.length < 5 && carNumber.length > 8) {
                return setErrorCarNumber('מספר הרכב שהוזן לא נכון !');
            }
            if (!producer) {
                return setErrorProduce('לא הוזנו נתונים ליצרן !');
            }
            if (producer.length > 20) {
                return setErrorProduce('חרגת ממגבלת התווים של היצרן !');
            }
            if (!endDateCar) {
                return setErrorDate('לא הוזנו נתונים לתוקף רישיון הרכב !');
            }
            if (isNaN(Date.parse(endDateCar))) {
                return setErrorDate('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !');
            }
            if (!insurance) {
                return setErrorDateInsurance('לא הוזנו נתונים לתוקף הביטוח !');
            }
            if (isNaN(Date.parse(insurance))) {
                return setErrorDateInsurance('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !');
            }
            if (!shockabsorbers) {
                return setErrorShockabsorbers('לא הוזנו נתונים לאישור הבולמים !');
            }
            if (isNaN(Date.parse(shockabsorbers))) {
                return setErrorShockabsorbers('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !');
            }
            if (!winterreview) {
                return setErrorWinterreview('לא הוזנו נתונים לאישור הבולמים !');
            }
            if (isNaN(Date.parse(winterreview))) {
                return setErrorWinterreview('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !');
            }
            if (!tachograph) {
                return setErrorTachograph('לא הוזנו נתונים לתכוגרף !');
            }
            if (tachograph.currentKey === 'כן' && !tachographDate) {
                return setErrorTachograph('לא הוזנו נתונים לתאריך התכוגרף !');
            }
            if (tachograph.currentKey === 'כן' && isNaN(Date.parse(tachographDate))) {
                return setErrorTachograph('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !');
            }
            if (!hazmat) {
                return setErrorHazmat('לא הוזנו נתונים לתכוגרף !');
            }
            if (hazmat.currentKey === 'כן' && !hazmatDate) {
                return setErrorHazmat('לא הוזנו נתונים לתאריך התכוגרף !');
            }
            if (hazmat.currentKey === 'כן' && isNaN(Date.parse(hazmatDate))) {
                return setErrorHazmat('התאריך חייב להיות DD/MM/YYYY | DD-MM-YYYY | DD.MM.YYYY !');
            }
            if (!insuranceCompany) {
                return setErrorInsuranceCompany('לא הוזנו נתונים לחברת הביטוח !');
            }
            if (!insuranceclass) {
                return setErrorInsuranceclass('לא הוזנו נתונים לסוג הביטוח  !');
            }
            if (!typeFuel) {
                return setErrorTypeFuel('לא הוזנו נתונים לסוג הרכב !');
            }
            if (!typeCar) {
                return setErrorTypeCar('לא הוזנו נתונים לסוג הרכב !');
            }
        }
        resetAllErrors();



        setStaticErrorMessage('');
        if (car) {
            if (!customer && !customerStatus && !driver && !driverStatus) {
                return setStaticErrorMessage('לא סמת עם הרכב שהוזן איזה נהג ולקוח !');
            }
            if (customer && customerStatus && !driver && !driverStatus) {
                return setStaticErrorMessage('לא סמת עם הרכב שהוזן איזה נהג !');
            }
            if (!customer && !customerStatus && driver && driverStatus) {
                return setStaticErrorMessage('לא סמת עם הרכב שהוזן איזה לקוח !');
            }
        }
        setStaticErrorMessage('');


        // if(driver){

        // }






        // if(car){
        //     if(driver){
        //         if(car.hazmat && !driver.hazmat){
        //             return alert('error');
        //         }
        //         // if(isDateBeforeToday(driver.)){

        //         // }
        //     }
        //     else{
        //         if(car.hazmat && hazmatD.currentKey === 'לא'){
        //             return alert('error');
        //         }
        //     }

        // }



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
            licensegrade: licensegrade.currentKey,
            licensenumber: licensenumber,

        }
        !driver && driverStatus && await addDoc(collection(MohamadFireStore, "Driver"), NewDataDriver) && await updateDoc(doc(MohamadFireStore, "numbers", 'drivers'), { number: DriversNum + 1 });
        const NewDataCustomer = {
            customer_city: location,
            customer_id: currectCustomerId(),
            customer_name: name,
            customer_phone: number,
            customer_site: address,
            customer_email: CustomerEmail,
            serial_number: serial
        }
        !customer && customerStatus && await addDoc(collection(MohamadFireStore, "Customer"), NewDataCustomer) && await updateDoc(doc(MohamadFireStore, "numbers", 'customers'), { number: CustomersNum + 1 });
        if (car && carStaus) {
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
        else if (carStaus) {
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
                insuranceCompany: insuranceCompany.currentKey,
                monthlyReview : null
            }
            setShowFormCar(NewDataCar);
            await addDoc(collection(MohamadFireStore, "car"), NewDataCar);
            await updateDoc(doc(MohamadFireStore, "numbers", 'cars'), { number: CarsNum + 1 });
            if (ChoisesProducer() && checkIfNotEqualProducer(producer)) {
                let arraych = ChoisesProducer();
                arraych?.push(producer);
                await updateDoc(doc(MohamadFireStore, "Choices", 'Producers'), { arch: arraych });
            }
            else if (checkIfNotEqualProducer(producer)) {
                let arraych = [];
                arraych.push(producer);
                await updateDoc(doc(MohamadFireStore, "Choices", 'Producers'), { arch: arraych });
            }

        }
        resetAllDriver();
        resetAllCustomer();
        resetAllCar();
        setLoading(false);
        carStaus && setShowForm(true);
        setCar(null);
        setCustomer(null);
        setDriver(null);
    }

    function checkIfNotEqualProducer(val) {
        let arrayProducers = ChoisesProducer();
        for (let index = 0; index < arrayProducers.length; index++) {
            if (arrayProducers[index] === val) {
                return false;
            }
        }
        return true;
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

    const [carCheck, setCarCheck] = useState(false);
    const [customerCheck, setCustomerCheck] = useState(false);
    const [driverCheck, setDriverCheck] = useState(false);

    useEffect(() => {
        if (carNumber || car?.car_num &&
            producer || car?.car_product &&
            endDateCar || car?.enddate &&
            insurance || car?.insurance &&
            shockabsorbers || car?.shockabsorbers &&
            winterreview || car?.winterreview &&
            tachograph || car?.tachograph &&
            hazmat || car?.hazmat &&
            insuranceCompany || car?.insuranceCompany &&
            insuranceclass || car?.insuranceclass &&
            typeFuel || car?.car_type2 &&
            typeCar || car?.car_type) {
            return setCarCheck(true);
        }
        else {
            return setCarCheck(false);
        }
    },
        [
            carNumber, car?.car_num,
            producer, car?.car_product,
            endDateCar, car?.enddate,
            insurance, car?.insurance,
            shockabsorbers, car?.shockabsorbers,
            winterreview, car?.winterreview,
            tachograph, car?.tachograph, tachographDate,
            hazmat, car?.hazmat, hazmatDate,
            insuranceCompany, car?.insuranceCompany,
            insuranceclass, car?.insuranceclass,
            typeFuel, car?.car_type2,
            typeCar, car?.car_type,
        ]
    )

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
                                <Button onClick={() => { setShowForm(false); resetAllCustomer(); resetAllDriver(); resetAllErrors(); resetAllCar(); setShowCustomerInputs(false); setShowDriverInputs(false); setShowCarInputs(false); }} color="primary" className="text-xl">
                                    לחזור<GoArrowRight />
                                </Button>
                            </div>
                        </div>
                        <div className="absolute overflow-auto w-full flex">
                            <ShowForm disable={() => { setShowForm(false); setShowFormCar(null); resetAllCustomer(); resetAllDriver(); resetAllErrors(); resetAllCar(); setShowCustomerInputs(false); setShowDriverInputs(false); setShowCarInputs(false); }} car={showFormCar} driver={GetDriverNameByCar(showFormCar?.Driver_id)} customer={GetCusNameByCar(showFormCar?.customer_id)} />
                        </div>
                    </div>
                    :
                    <div className="shadow-2xl rounded-3xl bg-white p-5 mr-5 ml-5">
                        <div className="flex justify-center text-xl m-14">
                            <div className="bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest font-black">
                                הוספה
                            </div>
                        </div>
                        <div className="w-full bg-white z-30 sticky top-0">
                            <Divider />
                            <div className="flex justify-around p-4 ">
                                <div>
                                    <div className="text-2xl flex items-center max-[500px]:text-lg">
                                        <div className="ml-5">רכב</div>
                                        {
                                            carCheck ?
                                                <FaRegCheckSquare className="text-green-500" />
                                                :
                                                <FiSquare className="text-yellow-500" />
                                        }
                                    </div>
                                    {
                                        carCheck &&
                                            car ?
                                            <div className="text-center max-[500px]:text-xs">
                                                {car.car_num}
                                            </div>
                                            :
                                            carNumber ?
                                                <div className="text-center max-[500px]:text-xs">
                                                    {carNumber}
                                                </div>
                                                :
                                                null
                                    }
                                </div>
                                <div className="border-1 border-gray-300" />
                                <div>
                                    <div className="text-2xl flex items-center max-[500px]:text-lg">
                                        <div className="ml-5">לקוח</div>
                                        {
                                            customerCheck ?
                                                <FaRegCheckSquare className="text-green-500" />
                                                :
                                                <FiSquare className="text-yellow-500" />
                                        }
                                    </div>
                                    {
                                        customerCheck &&
                                            customer ?
                                            <div className="text-center max-[500px]:text-xs">
                                                {customer.customer_name}
                                            </div>
                                            :
                                            name ?
                                                <div className="text-center max-[500px]:text-xs">
                                                    {name}
                                                </div>
                                                :
                                                null
                                    }
                                </div>
                                <div className="border-1 border-gray-300" />
                                <div>
                                    <div className="text-2xl flex items-center max-[500px]:text-lg">
                                        <div className="ml-5">נהג</div>
                                        {
                                            driverCheck ?
                                                <FaRegCheckSquare className="text-green-500" />
                                                :
                                                <FiSquare className="text-yellow-500" />
                                        }
                                    </div>
                                    {
                                        driverCheck &&
                                            driver ?
                                            <div className="text-center max-[500px]:text-xs">
                                                {driver.driver_name}
                                            </div>
                                            :
                                            nameD ?
                                                <div className="text-center max-[500px]:text-xs">
                                                    {nameD}
                                                </div>
                                                :
                                                null
                                    }
                                </div>
                            </div>
                            <Divider />
                        </div>
                        <div className="w-full mt-10 mb-10">
                            <div className="flex justify-around items-center mb-20">
                                <div className="flex w-full justify-center items-center">
                                    <div className="text-lg ml-2">רכב</div>
                                    <FaCar className="text-xl" />
                                </div>
                                <div className="w-full flex justify-around items-center">
                                    <div className="ml-2 mr-2">
                                        <button onClick={() => { setCar(null); setShowCarInputs(true); resetAllCar(); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                            חדש <HiPlus />
                                        </button>
                                    </div>
                                    <div className="ml-2 mr-2">
                                        <button onClick={() => { setShowCarModdal(true); setShowCarInputs(true); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                            קיים <GoSearch />
                                        </button>
                                    </div>
                                    <div className="ml-2 mr-2">
                                        {
                                            showCarInputs ?
                                                <button onClick={() => { setShowCarInputs(false) }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                                    סגירה
                                                </button>
                                                :
                                                <button onClick={() => { setShowCarInputs(true); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                                    פתיחה
                                                </button>
                                        }

                                    </div>
                                </div>
                            </div>
                            {
                                showCarInputs &&
                                <div className="max-[450px]:text-[13px]">

                                    <div className="flex items-center mt-5">
                                        <div className="w-[160px]">סוג טופס</div>
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
                                    {errorTypeCar && <div className="text-danger text-xs">{errorTypeCar}</div>}

                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מספר רכב</div>
                                        <div className="w-full">
                                            <Input errorMessage={errorCarNumber} onKeyDown={(e) => sortCarNumber(e)} isDisabled={car ? true : false} value={car ? car.car_num : carNumber} onValueChange={(value) => setCarNumber(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">יצרן</div>
                                        <div onClick={() => setDisplaySearchPrdoucer('')} className="w-full">
                                            <Input errorMessage={errorProduce} onChange={GetSearchProducers} ref={SearchPrdoucerRef} isDisabled={car ? true : false} value={car ? car.car_product : producer} onValueChange={(value) => setProducer(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
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
                                        <div className="w-full flex items-center">
                                            <Input errorMessage={errorDate} isDisabled={car ? true : false} value={car ? car.enddate : endDateCar} onValueChange={(value) => setEndDateCar(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                            <Button variant="bordered" size="sm"><FaFolder /></Button>
                                        </div>

                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">תוקף ביטוח</div>
                                        <div className="w-full flex items-center">
                                            <Input errorMessage={errorDateInsurance} isDisabled={car ? true : false} value={car ? car.insurance : insurance} onValueChange={(value) => setInsurance(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                            <Button variant="bordered" size="sm"><FaFolder /></Button>
                                        </div>
                                    </div>
                                    {
                                        (car?.car_type === `רכב מעל 10,000 ק"ג` || typeCar.currentKey === `רכב מעל 10,000 ק"ג`) &&
                                        <div className="flex items-center mt-5">
                                            <div className="w-[200px]">אישור בולמים</div>
                                            <div className="w-full flex items-center">
                                                <Input errorMessage={errorShockabsorbers} isDisabled={car ? true : false} value={car ? car.shockabsorbers : shockabsorbers} onValueChange={(value) => setShockabsorbers(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                                <Button variant="bordered" size="sm"><FaFolder /></Button>
                                            </div>
                                        </div>
                                    }
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">ביקורת חורף</div>
                                        <div className="w-full flex items-center">
                                            <Input errorMessage={errorWinterreview} isDisabled={car ? true : false} value={car ? car.winterreview : winterreview} onValueChange={(value) => setWinterreview(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                            <Button variant="bordered" size="sm"><FaFolder /></Button>
                                        </div>
                                    </div>
                                    {
                                        (car?.car_type === `רכב מעל 10,000 ק"ג` || typeCar.currentKey === `רכב מעל 10,000 ק"ג`) &&
                                        <>
                                            <div className="flex items-center mt-5">
                                                <div className="w-[160px]">טכוגרף</div>
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
                                                        <Input isDisabled={car ? true : false} value={car ? car.tachographDate : tachographDate} onValueChange={(value) => setTachographDate(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                                    </div>
                                                </div>
                                            }
                                        </>
                                    }
                                    {errorTachograph && <div className="text-danger text-xs">{errorTachograph}</div>}
                                    <div className="flex items-center mt-5">
                                        <div className="w-[160px]">חו"מס</div>
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
                                                <Input isDisabled={car ? true : false} value={car ? car.hazmatDate : hazmatDate} onValueChange={(value) => setHazmatDate(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                            </div>
                                        </div>
                                    }
                                    {errorHazmat && <div className="text-danger text-xs">{errorHazmat}</div>}
                                    <div className="flex items-center mt-5">
                                        <div className="w-[160px]">חברת ביטוח</div>
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
                                    {errorInsuranceCompany && <div className="text-danger text-xs">{errorInsuranceCompany}</div>}
                                    <div className="flex items-center mt-5">
                                        <div className="w-[160px]">סוג ביטוח</div>
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
                                    {errorInsuranceclass && <div className="text-danger text-xs">{errorInsuranceclass}</div>}
                                    <div className="flex items-center mt-5">
                                        <div className="w-[160px]">סוג רכב</div>
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
                                    {errorTypeFuel && <div className="text-danger text-xs">{errorTypeFuel}</div>}
                                </div>

                            }
                        </div>
                        <Divider />
                        <div className="w-full mt-10 mb-10">
                            <div className="flex justify-around items-center mb-20">
                                <div className="flex w-full justify-center items-center">
                                    <div className="text-lg ml-2">לקוח</div>
                                    <FaUserFriends className="text-xl" />
                                </div>
                                <div className="w-full flex justify-around items-center">
                                    <div className="ml-2 mr-2">
                                        <button onClick={() => { setCustomer(null); setShowCustomerInputs(true); resetAllCustomer(); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                            חדש <HiPlus />
                                        </button>
                                    </div>
                                    <div className="ml-2 mr-2">
                                        <button onClick={() => { setShowCustomerModdal(true); setShowCustomerInputs(true); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                            קיים <GoSearch />
                                        </button>
                                    </div>
                                    <div className="ml-2 mr-2">
                                        {
                                            showCustomerInputs ?
                                                <button onClick={() => { setShowCustomerInputs(false) }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                                    סגירה
                                                </button>
                                                :
                                                <button onClick={() => { setShowCustomerInputs(true); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                                    פתיחה
                                                </button>
                                        }

                                    </div>
                                </div>
                            </div>
                            {
                                showCustomerInputs &&
                                <div className="max-[450px]:text-[13px]">
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">שם לקוח</div>
                                        <div className="w-full">
                                            <Input isDisabled={customer ? true : false} value={customer ? customer.customer_name : name} onValueChange={(value) => setName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">נייד</div>
                                        <div className="w-full">
                                            <Input isDisabled={customer ? true : false} value={customer ? customer.customer_phone : number} onValueChange={(value) => setNumber(value)} type="number" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">כתובת</div>
                                        <div className="w-full">
                                            <Input isDisabled={customer ? true : false} value={customer ? customer.customer_site : address} onValueChange={(value) => setAddresss(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">ישוב</div>
                                        <div className="w-full">
                                            <Input isDisabled={customer ? true : false} value={customer ? customer.customer_city : location} onValueChange={(value) => setLocation(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מספר סידורי</div>
                                        <div className="w-full">
                                            <Input isDisabled={customer ? true : false} value={customer ? customer.serial_number : serial} onValueChange={(value) => setSerial(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">דואר אלקטרוני</div>
                                        <div className="w-full">
                                            <Input isDisabled={customer ? true : false} value={customer ? customer.customer_email : CustomerEmail} onValueChange={(value) => setCustomerEmail(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <Divider />
                        <div className="w-full mt-10 mb-10">
                            <div className="flex justify-around items-center mb-20">
                                <div className="flex w-full justify-center items-center">
                                    <div className="text-lg ml-2">נהג</div>
                                    <TbSteeringWheel className="text-2xl" />
                                </div>
                                <div className="w-full flex justify-around items-center">
                                    <div className="ml-2 mr-2">
                                        <button onClick={() => { setDriver(null); setShowDriverInputs(true); resetAllDriver(); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                            חדש <HiPlus />
                                        </button>
                                    </div>
                                    <div className="ml-2 mr-2">
                                        <button onClick={() => { setShowDriverModdal(true); setShowDriverInputs(true); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                            קיים <GoSearch />
                                        </button>
                                    </div>
                                    <div className="ml-2 mr-2">
                                        {
                                            showDriverInputs ?
                                                <button onClick={() => { setShowDriverInputs(false) }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                                    סגירה
                                                </button>
                                                :
                                                <button onClick={() => { setShowDriverInputs(true); }} className="hover:bg-primary-200 hover:rounded-lg border-b-2 border-b-primary-200 w-[80px] h-[40px] max-[400px]:w-[55px] max-[400px]:h-[35px] max-[400px]:text-[14px] flex items-center justify-center">
                                                    פתיחה
                                                </button>
                                        }

                                    </div>
                                </div>
                            </div>
                            {
                                showDriverInputs &&
                                <div className="max-[450px]:text-[13px]">
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">שם פרטי</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.driver_name : nameD} onValueChange={(value) => setNameD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">שם משפחה</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.last_name : lastName} onValueChange={(value) => setLastName(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">ישוב</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.city : CityD} onValueChange={(value) => setCityD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">כתובת</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.address : addressD} onValueChange={(value) => setAddresssD(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">נייד</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.driver_phone : phone} onValueChange={(value) => setPhone(value)} type="number" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">תוקף רישיון נהיגה</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.driver_license_validity : endDate} onValueChange={(value) => setEndDate(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מס' ת.ז</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.driver_id_card : cardId} onValueChange={(value) => setCardId(value)} type="number" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">תאריך יצרת רישיון</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.licenseget : licenseget} onValueChange={(value) => setLicenseget(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[200px]">מספר רשיון</div>
                                        <div className="w-full">
                                            <Input isDisabled={driver ? true : false} value={driver ? driver.licensenumber : licensenumber} onValueChange={(value) => setLicensenumber(value)} type="text" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[160px]">דרגת רישיון</div>
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <Button
                                                    isDisabled={driver ? true : false}
                                                    color="primary"
                                                    variant="bordered"
                                                    className="capitalize"
                                                >
                                                    {driver ? driver.licensegrade : licensegrade ? licensegrade : "לבחור"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Single selection example"
                                                variant="flat"
                                                disallowEmptySelection
                                                selectionMode="multiple"
                                                selectedKeys={licensegrade}
                                                onSelectionChange={setLicensegrade}
                                            >
                                                <DropdownItem key="A1">A1</DropdownItem>
                                                <DropdownItem key="A2">A2</DropdownItem>
                                                <DropdownItem key="A">A</DropdownItem>
                                                <DropdownItem key="B">B</DropdownItem>
                                                <DropdownItem key="C1">C1</DropdownItem>
                                                <DropdownItem key="C">C</DropdownItem>
                                                <DropdownItem key="D">D</DropdownItem>
                                                <DropdownItem key="D1">D1</DropdownItem>
                                                <DropdownItem key="D2">D2</DropdownItem>
                                                <DropdownItem key="D3">D3</DropdownItem>
                                                <DropdownItem key="E">E</DropdownItem>
                                                <DropdownItem key="1">1</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="w-[160px]">נהג קבוע</div>
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
                                        <div className="w-[160px]">חו"מס</div>
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
                                    {
                                        (hazmatD.currentKey === 'כן' || driver?.hazmat) &&
                                        <div className="flex items-center mt-5">
                                            <div className="w-[200px]">חו"מס</div>
                                            <div className="w-full">
                                                <Input isDisabled={driver ? true : false} value={driver ? driver.hazmatDDate : hazmatDDate} onValueChange={(value) => setHazmatDDate(value)} type="date" variant="bordered" size="sm" color="primary" className="w-full max-w-[300px] ml-3" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <Divider />
                        {
                            staticErrorMessage && <div className="text-danger mt-5">
                                {staticErrorMessage}
                            </div>
                        }
                        <div className="flex justify-center m-14">
                            <Button isDisabled={!disableAddCar} onClick={AddCar} size="lg" color="primary" >אישור</Button>
                        </div>
                    </div>
            }
        </div>
    )
}