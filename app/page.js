'use client';

import nearestDate from "nearest-date";
import GetData from "./FireBase/GetData";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { Avatar, Button, Card, CardHeader, Divider, Spinner } from "@nextui-org/react";
import ContactContext from "./Components/ContactContext";
import { useRouter } from "next/navigation";
import carNumber from '../images/carNumber.jpg';
import rep15 from '../images/rep15.png';
import rep16 from '../images/rep16.png';
import rep17 from '../images/rep17.png';
import rep18 from '../images/rep18.png';
import rep19 from '../images/rep19.png';
import rep20 from '../images/rep20.png';
import valid from '../images/valid.png';
import Image from "next/image";
import { HiDocumentText } from "react-icons/hi";
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { MohamadFireStore, storagee } from "./FireBase/firebase";
import CardContent from "@geist-ui/react/esm/card/card-content";
import { getDownloadURL, ref } from "firebase/storage";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";


export default function Home() {

  const { setContactName,setCustomerSet } = useContext(ContactContext);
  const Cars = GetData('car');
  const Checks = GetData('checks');
  const Customers = GetData('Customer');
  const router = useRouter();


  const [loading, setLoading] = useState(false);

  const Alerts = GetData('alerts');

  const WarningSign = () => {
    for (let index = 0; index < Alerts?.length; index++) {
      if (Alerts[index]?.id === 'WarningSign') {
        return Alerts[index]?.value;
      }
    }
  }

  function createNewForm(carid,customer) {
    setLoading(true);
    setContactName(carid);
    setCustomerSet(customer);
    router.push('/add');
  }

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Red: 0-255
    const g = Math.floor(Math.random() * 256); // Green: 0-255
    const b = Math.floor(Math.random() * 256); // Blue: 0-255
    return `rgb(${r},${g},${b})`; // Return RGB color string
  }

  function SortResualt(car, KindWarning, amountWarning, dateWarning, rest,index,customer) {
    return <tr onClick={() => createNewForm(car.car_id,customer)} key={index} className="hover:bg-primary-200 hover:cursor-pointer border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950">
      <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{amountWarning}</td>
      <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{KindWarning}</td>
      <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{rest}</td>
      <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{dateWarning}</td>
      <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{car.car_num}</td>
      <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100"><Image alt="" src={rep19} className="rounded-full h-[40px]" width={50} height="auto" /></td>
    </tr>
  }

  function ShowWarnings() {
    let ArrayCars = [];
    for (let index = 0; index < Cars.length; index++) {
      if (Cars[index].customer_id === Customers[currentCustomer].customer_id) {
        let amountWarning = GetWarningProps(Cars[index]).amount;
        let dateWarning = GetWarningProps(Cars[index]).date;
        let KindWarning = GetWarningProps(Cars[index]).kind;
        let rest = GetWarningProps(Cars[index]).rest;
        ArrayCars.push(
          SortResualt(Cars[index], KindWarning, amountWarning, dateWarning, rest,index,Customers[currentCustomer])
        );
      }
    }
    return ArrayCars;
  }

  function GetWarningProps(car) {
    let ArrayDates = [];
    let ArrayDatesNames = [];
    ArrayDates.push(new Date(car.enddate));
    ArrayDatesNames.push('טסט');
    ArrayDates.push(new Date(car.insurance));
    ArrayDatesNames.push('בטוח');
    ArrayDates.push(new Date(car.shockabsorbers));
    ArrayDatesNames.push('אישור בולמים');
    ArrayDates.push(new Date(car.winterreview));
    ArrayDatesNames.push('בדיקת חורף');
    ArrayDates.push(new Date(car.monthlyReview));
    ArrayDatesNames.push('ביקורת חודשית');
    car.hazmat && ArrayDates.push(new Date(car.hazmatDate)) && ArrayDatesNames.push('חומ"ס');
    car.tachograph && ArrayDates.push(new Date(car.tachographDate)) && ArrayDatesNames.push('טכוגרף');

    let closerDate = nearestDate(ArrayDates, new Date());
    let asdate = addDays(new Date(), WarningSign());
    let count = 0;
    for (let index = 0; index < ArrayDates.length; index++) {
      if (index != closerDate && dateCheck(new Date(), new Date(convertDigitIn(asdate, true)), new Date(ArrayDates[index]))) {
        count++;
      }
    }
    const diffInMs = new Date(ArrayDates[closerDate]) - new Date()
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return { kind: ArrayDatesNames[closerDate], date: convertDigitIn(ArrayDates[closerDate]), amount: count, rest: parseInt(diffInDays) }
  }

  function convertDigitIn(str, defaultt) {
    let newDate = new Date(str);
    return defaultt ? `${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}` : `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${newDate.getFullYear()}`;
  }

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function dateCheck(from, to, check) {

    var fDate, lDate, cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(check);

    if ((cDate <= lDate && cDate >= fDate)) {
      return true;
    }
    return false;
  }


  async function getCarById(carId) {
    const carsRef = collection(MohamadFireStore, 'car');
    const q = query(carsRef, where("car_id", "==", carId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      console.log('No matching car found');
      return null;
    }
  }

  async function getCustomerById(customerId) {
    const customerRef = collection(MohamadFireStore, 'Customer');
    const q = query(customerRef, where("customer_id", "==", customerId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      console.log('No matching car found');
      return null;
    }
  }

  const [checksWithCars, setChecksWithCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const checksWithCarsData = await Promise.all(Checks.map(async (Check) => {
        try {
          const car = await getCarById(Check.car_id);
          const customer = await getCustomerById(Check.customer_id);
          return { ...Check, ...{ customer }, car };
        }
        catch (e) {
          console.log(e);
        }
      }));
      setChecksWithCars(checksWithCarsData);
    };
    fetchCars();
  }, [Checks]);

  async function getCustomerImageById(customerPhone) {
    const imagePath = `gs://mahmod-insurance.appspot.com/${customerPhone}/CustomerImage`; // Assuming the image is named 'profile.jpg'
    const imageRef = ref(storagee, imagePath);
    try {
      const url = await getDownloadURL(imageRef);
      return url;
    }
    catch (e) {
      console.log('Error fetching image:', e);
      return null;
    }
  }

  const [customersWithImages,setCustomersWithImages] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      const customersWithImagesData = await Promise.all(Customers.map(async (cus) => {
        try {
          const customerImages = await getCustomerImageById(cus.customer_phone);
          return { ...cus ,url : customerImages};
        }
        catch (e) {
          console.log(e);
          return { ...cus, url: null };
        }
      }));
      setCustomersWithImages(customersWithImagesData);
    };
    fetchCars();
  },[Customers]);
  
  // const [carData, setCarData] = useState(null);
  // const [numberCar,setNumberCat] = useState(null);
  // useEffect(() => {
    //   const carsRef = collection(MohamadFireStore, 'car');
    //   const q = query(carsRef, where("car_id", "==", numberCar));
    //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
      //     querySnapshot.docs.map(doc => (setCarData({ id: doc.id, ...doc.data() })));
      //   });
      //   return () => unsubscribe();
  // }, [numberCar]);

  const [currentCustomer,setCurrentCustomer] = useState(0);
      
      
  return loading ? <Spinner className="absolute left-0 right-0 bottom-0 top-0" /> : (
    <div>
      <div className="flex justify-center mt-32 ml-3 mr-3">
        <div className="w-full">
          <div className="flex justify-center">
            <div className="text-xl bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest">
              דף הבית
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <div className="bg-white w-[1680px] flex rounded-2xl">
              {Customers && <TextCard Next={(val) => setCurrentCustomer(val)} Prev={(val) => setCurrentCustomer(val)} Customers={customersWithImages} />}
            </div>
          </div>
          <div className=" flex flex-wrap justify-center ">
            <div className="w-[800px] mt-10 ml-10 mr-10">
              <div className="w-full bg-white p-5 rounded-lg shadow-xl">
                <div className="text-center text-2xl">
                  תפסים
                </div>
                <Divider className="mb-5" />
                <div className="overflow-auto h-[400px]">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800 z-10 sticky top-0">
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">מצב טופס</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">תאריך</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">שם חברה</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">מספר רכב</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">מספר טופס</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        checksWithCars.map((check, i) => {
                          return (Customers[currentCustomer].customer_id === check.customer_id) && <tr key={i} className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950">
                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{check?.mtsavTofs === 'driver' ? <div className="text-yellow-500">לא שלם</div> : check?.mtsavTofs === true ? <div className="text-green-500">שלם</div> : null}</td>
                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{check?.date}</td>
                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{check?.customer?.customer_name}</td>
                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{check?.car?.car_num}</td>
                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{check?.check_id}</td>
                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100"><HiDocumentText className="text-2xl" /></td>
                          </tr>
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-[800px] mt-10 ml-10 mr-10">
              <div className="w-full bg-white p-5 rounded-lg shadow-xl">
                <div className="text-center text-2xl">
                  התראות
                </div>
                <Divider className="mb-5" />
                <div className="overflow-auto h-[400px] ">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800 z-10 sticky top-0">
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">כמות</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">סוג התראה</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">זמן נשאר</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">מועד ההתראה</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">מספר הרכב</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        ShowWarnings()
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



function TextCard({ Customers, Next,Prev }) {
  const [index, setIndex] = useState(0);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const handleNext = () => {
    setIsActiveNext(true);
    setTimeout(() => setIsActiveNext(false), 200);
    setIndex((current) => (current + 1) % Customers.length);
    Next((index + 1) % Customers.length);
  };
  const [isActivePrev, setIsActivePrev] = useState(false);
  const handlePrev = () => {
    setIsActivePrev(true);
    setTimeout(() => setIsActivePrev(false), 200);
    setIndex((current) => (current - 1 + Customers.length) % Customers.length);
    Prev((index - 1 + Customers.length) % Customers.length);
  };

  return (
    <div className="w-full relative flex items-center justify-center rounded-lg overflow-hidden">
      <div className="flex items-center w-full h-full">
        <div className="w-fit h-full">
          <button size="sm" className={`text-4xl ${isActivePrev ? 'bg-[#D4D4D8] opacity-40' : 'bg-[#D4D4D8]'} m-auto h-full focus:outline-none`} onClick={handlePrev}>
            <MdOutlineArrowBackIos/>
          </button>
        </div>
        <div className="flex items-center justify-around w-full p-4">
        <div className="text-base opacity-50 max-[1020px]:hidden w-[130px]">
          <div className="flex justify-center">
            <Avatar alt="" className="w-[40px] h-[40px]" src={Customers[(index - 3 + Customers.length) % Customers.length]?.url} />
          </div>
          <div className="text-center">
            {Customers[(index - 3 + Customers.length) % Customers.length]?.customer_name}
          </div>
        </div>
        <div className="text-base opacity-50 max-[755px]:hidden w-[130px]">
          <div className="flex justify-center">
            <Avatar alt="" className="w-[55px] h-[55px]" src={Customers[(index - 2 + Customers.length) % Customers.length]?.url} />
          </div>
          <div className="text-center">
            {Customers[(index - 2 + Customers.length) % Customers.length]?.customer_name}
          </div>
        </div>
        <div className="text-base opacity-50 max-[500px]:hidden w-[130px]">
          <div className="flex justify-center">
            <Avatar alt="" className="w-[70px] h-[70px]" src={Customers[(index - 1 + Customers.length) % Customers.length]?.url} />
          </div>
          <div className="text-center">
            {Customers[(index - 1 + Customers.length) % Customers.length]?.customer_name}
          </div>
        </div>
        <div className="text-2xl max-[430px]:text-base w-[130px]">
          <div className="flex justify-center">
            <Avatar alt="" isBordered size="lg" className="w-20 h-20" color="primary" src={Customers[index]?.url} />
          </div>
          <div className="text-center">
            {Customers[index]?.customer_name}
          </div>
        </div>
        <div className="text-base opacity-50 max-[500px]:hidden w-[130px]">
          <div className="flex justify-center">
            <Avatar alt="" className="w-[70px] h-[70px]" size="lg" src={Customers[(index + 1) % Customers.length]?.url} />
          </div>
          <div className="text-center">
            {Customers[(index + 1) % Customers.length]?.customer_name}
          </div>
        </div>
        <div className="text-base opacity-50 max-[755px]:hidden w-[130px]">
          <div className="flex justify-center">
            <Avatar alt="" className="w-[55px] h-[55px]" src={Customers[(index + 2) % Customers.length]?.url} />
          </div>
          <div className="text-center">
            {Customers[(index + 2) % Customers.length]?.customer_name}
          </div>
        </div>
        <div className="text-base opacity-50 max-[1020px]:hidden w-[130px]">
          <div className="flex justify-center">
            <Avatar alt="" className="w-[40px] h-[40px]" src={Customers[(index + 3) % Customers.length]?.url} />
          </div>
          <div className="text-center">
            {Customers[(index + 3) % Customers.length]?.customer_name}
          </div>
        </div>
        </div>
        <div className="w-fit h-full">
          <button size="sm" className={`text-4xl m-auto h-full focus:outline-none ${isActiveNext ? 'bg-[#D4D4D8] opacity-40' : 'bg-[#D4D4D8]'}`} onClick={handleNext}>
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}