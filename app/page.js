'use client';
import Image from "next/image";
import { MohamadFireStore } from "./FireBase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Button } from "@nextui-org/react";
import NavBar from "./Components/NavBar";
import { PageOne } from "./PagesToPrint/PageOne";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { PageTwo } from "./PagesToPrint/PageTwo";
import { PageThree } from "./PagesToPrint/PageThree";
import { PageFour } from "./PagesToPrint/PageFour";
import ModalCar from "./ModalsCom/ModalCar";
import GetData from "./FireBase/GetData";
import ModalCheck from "./ModalsCom/ModalCheck";
import { FaArrowRight } from "react-icons/fa";
import { PageFourWithData } from "./PagesWithData/PageFourWithData";
import { PageThreeWithData } from "./PagesWithData/PageThreeWithData";
import { PageTwoWithData } from "./PagesWithData/PageTwoWithData";
import { PageOneWithData } from "./PagesWithData/PageOneWithData";


export default function Home() {

  const add = async () => {
    await addDoc(collection(MohamadFireStore, 'test'), { test: 1 });
  }

  const componentRef1 = useRef();
  const componentRef2 = useRef();
  const componentRef3 = useRef();
  const componentRef4 = useRef();

  const handlePrint1 = useReactToPrint({
    pageStyle: `@page {
      size: A4;
      margin: 0;
  }`,
    content: () => componentRef1.current,
  });

  const handlePrint2 = useReactToPrint({
    pageStyle: `@page {
      size: A4;
      margin: 0;
  }`,
    content: () => componentRef2.current,
  });

  const handlePrint3 = useReactToPrint({
    pageStyle: `@page {
      size: A4;
      margin: 0;
  }`,
    content: () => componentRef3.current,
  });

  const handlePrint4 = useReactToPrint({
    pageStyle: `@page {
      size: A4;
      margin: 0;
  }`,
    content: () => componentRef4.current,
  });

  const [showModalCar, setShowModalCar] = useState(false);
  const [car, setCar] = useState(null);

  const [showEdit, setShowEdite] = useState(false);

  const Customers = GetData('Customer');
  const Drivers = GetData('Driver');
  const Cars = GetData('car');
  const Checks = GetData('checks');

  var date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let currentdate = `${day}/${month}/${year}`;

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
  const GetCarById = (id) => {
    for (let index = 0; index < Cars.length; index++) {
      if (Cars[index]?.car_id === id) {
        return Cars[index];
      }
    }
  }

  const currectCheckId = () => {
    let maxValue = 0;
    if (!Checks.length) {
      return 1;
    }
    for (let index = 0; index < Checks.length; index++) {
      maxValue = Math.max(maxValue, Checks[index]?.check_id)
    }
    return maxValue + 1;
  }

  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);



  const saveDataUp10 = async () => {
    const newData = {
      checks: data,
      data2: data2,
      data3: data3,
      car_id: car.car_id,
      check_id: currectCheckId(),
      date: currentdate
    }
    await addDoc(collection(MohamadFireStore, 'checks'), newData);
    setData(null);
    setData2(null);
    setData3(null);
    setCar(null);
    setShowEdite(false);
  }

  const saveDataDown10 = async () => {
    const newData = {
      checks: data,
      data2: data2,
      data3: data3,
      car_id: car.car_id,
      check_id: currectCheckId(),
      date: currentdate
    }
    await addDoc(collection(MohamadFireStore, 'checks'), newData);
    setData(null);
    setData2(null);
    setData3(null);
    setCar(null);
    setShowEdite(false);
  }

  const saveDataTrailer = async () => {
    const newData = {
      checks: data,
      data2: data2,
      data3: data3,
      car_id: car.car_id,
      check_id: currectCheckId(),
      date: currentdate
    }
    await addDoc(collection(MohamadFireStore, 'checks'), newData);
    setData(null);
    setData2(null);
    setData3(null);
    setCar(null);
    setShowEdite(false);
  }

  const saveDataTools = async () => {
    const newData = {
      checks: data,
      data2: data2,
      data3: data3,
      car_id: car.car_id,
      check_id: currectCheckId(),
      date: currentdate
    }
    await addDoc(collection(MohamadFireStore, 'checks'), newData);
    setData(null);
    setData2(null);
    setData3(null);
    setCar(null);
    setShowEdite(false);
  }

  const [showType, setShowType] = useState('create');
  const [showModalCheck, setShowModalCheck] = useState(false);
  const [check, setCheck] = useState(null);

  return (
    <div>
      {showModalCar && <ModalCar setCar={(car) => setCar(car)} show={showModalCar} disable={() => setShowModalCar(false)} />}

      <div className="flex justify-center">
        <div className="m-10 w-1/2">
          <div className="flex justify-around bg-white border-2 border-primary rounded-xl shadow-2xl p-5">
            <Button onClick={() => {setShowType("list");setShowEdite(false);setCar(null);setShowModalCheck(false);setCheck(null);}} color="primary" variant="ghost">רשימת תפסים</Button>
            <Button onClick={() => {setShowType("create");setShowEdite(false);setCar(null);setShowModalCheck(false);setCheck(null);}} color="primary" variant="ghost">יצרת טופס</Button>
          </div>
        </div>
      </div>

      {
        showType === 'create' &&
        <div>
          <div className="flex justify-center m-20">
            <div className="w-1/2 shadow-2xl rounded-3xl">
              {
                showEdit ?
                  <div className="flex justify-between items-center m-14">
                    <div></div>
                      <div className="shadow-sm p-4 pl-10 pr-10 rounded-lg shadow-primary">
                        ליצרת טופס בדיקה נא לבחור רכב מתאים
                      </div>
                      <div>
                        <div dir="ltr">
                          <Button onClick={() => { setShowEdite(false); }} size="sm" color="primary">לחזור<FaArrowRight /></Button>
                        </div>
                      </div>
                    </div>
                    :
                    <div className="flex justify-center m-14">
                      <div className="shadow-sm p-4 pl-10 pr-10 rounded-lg shadow-primary">
                      ליצרת טופס בדיקה נא לבחור רכב מתאים
                    </div>
                  </div>
              }
              {
                showEdit
                  ?
                  <div className="flex justify-center">
                    <div>
                      {
                        car && car.car_type === 'רכב מעל 10,000 ק"ג' &&
                        <>
                          <div className="flex justify-center mb-20">
                            <div className="sdfsdf border-2 border-black">
                              <PageFour driver={GetDriverNameByCar(car.Driver_id)} car={car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef4} />
                            </div>
                          </div>

                          {
                            data &&
                            <div className="flex justify-center mt-10 mb-20">
                              <Button color="primary" onClick={() => { saveDataUp10(); handlePrint4(); }}>הדפסה</Button>
                            </div>
                          }
                        </>
                      }
                      {
                        car && car.car_type === 'רכב עד 9,999 ק"ג' &&
                        <>
                          <div className="flex justify-center mb-20">
                            <div className="sdfsdf border-2 border-black">
                              <PageThree driver={GetDriverNameByCar(car.Driver_id)} car={car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef3} />
                            </div>
                          </div>

                          {
                            data &&
                            <div className="flex justify-center mt-10 mb-20">
                              <Button color="primary" onClick={() => { saveDataDown10(); handlePrint3(); }}>הדפסה</Button>
                            </div>
                          }
                        </>
                      }
                      {
                        car && car.car_type === 'גרור' &&
                        <>
                          <div className="flex justify-center mb-20">
                            <div className="sdfsdf border-2 border-black">
                              <PageOne driver={GetDriverNameByCar(car.Driver_id)} car={car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef1} />
                            </div>
                          </div>

                          {
                            data &&
                            <div className="flex justify-center mt-10 mb-20">
                              <Button color="primary" onClick={() => { saveDataTrailer(); handlePrint1(); }}>הדפסה</Button>
                            </div>
                          }
                        </>
                      }
                      {
                        car && car.car_type === `ציוד הנדס'` &&
                        <>
                          <div className="flex justify-center mb-20">
                            <div className="sdfsdf border-2 border-black">
                              <PageTwo driver={GetDriverNameByCar(car.Driver_id)} car={car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef2} />
                            </div>
                          </div>

                          {
                            data &&
                            <div className="flex justify-center mt-10 mb-20">
                              <Button color="primary" onClick={() => { saveDataTools(); handlePrint2(); }}>הדפסה</Button>
                            </div>
                          }
                        </>
                      }
                    </div>
                  </div>
                  :
                  <>
                    <div className="mt-10 flex justify-center">

                      {
                        car
                          ?
                          <div dir="rtl" className="text-center">
                            <div>נבחר רכב מספר : {car.car_num}</div>
                            <div>נבחר שם לקוח : {GetCusNameByCar(car.customer_id)?.customer_name}</div>
                            <div>נבחר שם נהג : {GetDriverNameByCar(car.Driver_id)?.driver_name}</div>
                            <Button className="mt-10" color="danger" variant="bordered" onClick={() => setCar(null)}>למחוק</Button>
                          </div>
                          :
                          <Button className="m-10" color="primary" variant="bordered" onClick={() => setShowModalCar(true)}>בחר רכב</Button>
                      }

                    </div>

                    {
                      car && <div className="flex justify-center m-10">
                        <Button onClick={() => setShowEdite(true)} color="primary" variant="solid">המשך</Button>
                      </div>
                    }
                  </>
              }
            </div>
          </div>
        </div>
      }

      {
        showType === 'list' &&
        <div>
          <div className="flex justify-center mt-20">
            <div className="w-1/2 shadow-2xl rounded-3xl" dir="rtl">
              <div className="flex justify-center m-14">
                <div className="shadow-sm p-4 pl-10 pr-10 rounded-lg shadow-primary">רשימת טפסים</div>
              </div>
              <div className="m-5">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <th className="bordering_tebles_1 w-28">מספר בדיקה</th>
                      <th className="bordering_tebles_1 w-28">מספר הרכב</th>
                      <th className="bordering_tebles_1 w-28">יצרן</th>
                      <th className="bordering_tebles_1 w-28">שם הלקוח</th>
                      <th className="bordering_tebles_1 w-28">שם הנהג</th>
                      <th className="bordering_tebles_1 w-40">סוג הבדיקה</th>
                    </tr>
                    <tr>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                    {
                      Checks.map(check => {
                        return <>
                          <tr onClick={() => { setShowType(''); setShowModalCheck(true); setCheck(check); }} className="hover:bg-primary cursor-pointer hover:text-white">
                            <th className="bordering_tebles_1 text-xs">{check.check_id}</th>
                            <th className="bordering_tebles_1 text-xs">{GetCarById(check.car_id)?.car_num}</th>
                            <th className="bordering_tebles_1 text-xs">{GetCarById(check.car_id)?.car_product}</th>
                            <th className="bordering_tebles_1 text-xs">{GetCusNameByCar(GetCarById(check.car_id).customer_id).customer_name}</th>
                            <th className="bordering_tebles_1 text-xs">{GetDriverNameByCar(GetCarById(check.car_id).Driver_id).driver_name}</th>
                            <th className="bordering_tebles_1 text-xs">{GetCarById(check.car_id)?.car_type}</th>
                          </tr>
                        </>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
      {
        showModalCheck &&
        <div>
          <div className="flex justify-center mt-20">
            <div className="w-1/2 shadow-2xl rounded-3xl" dir="rtl">
              <div className="flex justify-between items-center m-5">
                <div dir="ltr">
                  <Button onClick={() => { setCheck(null); setShowModalCheck(false); setShowType('list'); }} size="sm" color="primary">לחזור<FaArrowRight /></Button>
                </div>
                <div className="shadow-sm p-4 pl-10 pr-10 rounded-lg shadow-primary">טופס מספר : {check.check_id}</div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20 mb-20">
            {
              GetCarById(check.car_id)?.car_type === `ציוד הנדס'` && <div className="sdfsdf">
                <PageTwoWithData car={GetCarById(check.car_id)} ref={componentRef1} date={check.date} driver={GetDriverNameByCar(GetCarById(check.car_id).Driver_id)} checks={check.checks} data1={check.data2} data2={check.data3} />
                <div className="flex justify-center">
                  <Button color="primary" onClick={handlePrint1}>הדפסה</Button>
                </div>
              </div>
            }
            {
              GetCarById(check.car_id)?.car_type === 'רכב עד 9,999 ק"ג' && <div className="sdfsdf">
                <PageThreeWithData car={GetCarById(check.car_id)} ref={componentRef3} date={check.date} driver={GetDriverNameByCar(GetCarById(check.car_id).Driver_id)} checks={check.checks} data1={check.data2} data2={check.data3} />
                <div className="flex justify-center">
                  <Button color="primary" onClick={handlePrint3}>הדפסה</Button>
                </div>
              </div>
            }
            {
              GetCarById(check.car_id)?.car_type === 'גרור' && <div className="sdfsdf">
                <PageOneWithData car={GetCarById(check.car_id)} ref={componentRef2} date={check.date} driver={GetDriverNameByCar(GetCarById(check.car_id).Driver_id)} checks={check.checks} data1={check.data2} data2={check.data3} />
                <div className="flex justify-center">
                  <Button color="primary" onClick={handlePrint2}>הדפסה</Button>
                </div>
              </div>
            }
            {
              GetCarById(check.car_id)?.car_type === 'רכב מעל 10,000 ק"ג' && <div className="sdfsdf">
                <PageFourWithData car={GetCarById(check.car_id)} ref={componentRef4} date={check.date} driver={GetDriverNameByCar(GetCarById(check.car_id).Driver_id)} checks={check.checks} data1={check.data2} data2={check.data3} />
                <div className="flex justify-center">
                  <Button color="primary" onClick={handlePrint4}>הדפסה</Button>
                </div>
              </div>
            }
          </div>
        </div>
      }




    </div>
  );
}
