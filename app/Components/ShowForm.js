import { Button, Spinner } from "@nextui-org/react";
import { PageFour } from "../PagesToPrint/PageFour";
import { PageThree } from "../PagesToPrint/PageThree";
import { PageOne } from "../PagesToPrint/PageOne";
import { PageTwo } from "../PagesToPrint/PageTwo";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import GetData from "../FireBase/GetData";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";
import { PageTwoWithData } from "../PagesWithData/PageTwoWithData";
import { PageThreeWithData } from "../PagesWithData/PageThreeWithData";
import { PageOneWithData } from "../PagesWithData/PageOneWithData";
import { PageFourWithData } from "../PagesWithData/PageFourWithData";
import { format } from "date-fns";

export default function ShowForm({ withData,disable, car,driver,customer,check }) {


    const [gettingCarShowForm,setGittingCarShowForm] = useState(car);
    useEffect(() => {
    }, [car,driver,customer]);

    useEffect(() => {
        setGittingCarShowForm(car);
    }, [car]);

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

    const [data, setData] = useState(false);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);

    var date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let currentdate = `${day}/${month}/${year}`;


    const Checks = GetData('checks');

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

    const [loading, setLoading] = useState(false);

    const saveData = async (data1,data2,data3) => {
        if (!car) {
            console.log("No car data available");
            return <p>No data</p>;
        }
        setData(true);
        setLoading(true);
        await updateDoc(doc(MohamadFireStore,'car',gettingCarShowForm?.id),{
            enddate : data3.enddate,
            hazmatDate : gettingCarShowForm.hazmat ? data3.hazmatDate : null,
            insurance : data3.insurance,
            monthlyReview : data3.monthlyReview,
            shockabsorbers : gettingCarShowForm.car_type === 'רכב מעל 10,000 ק"ג' ? data3.shockabsorbers : null,
            tachographDate : gettingCarShowForm.tachograph ? data3.tachographDate : null,
            winterreview : data3.winterreview
        });
        const newData = {
            checks: data1,
            data2: data2,
            data3: data3,
            customer_id: customer.customer_id,
            driver_id: driver ? driver.driver_id : null,
            car_id: gettingCarShowForm.car_id,
            check_id: currectCheckId(),
            date: currentdate,
            mtsavTofs: !driver ? 'driver' : true
        }
        await addDoc(collection(MohamadFireStore, 'checks'), newData);
        setData(null);
        setData2(null);
        setData3(null);
        setLoading(false);
        disable();
    }

    const type2 = GetData('type2');

    const GetCurrentMonthlyReview = () => {
        for (let index = 0; index < type2.length; index++) {
            if (type2[index]?.name === gettingCarShowForm.car_type2) {
                let newMonthlyReview = new Date();
                let monthlyReviewDate = `${newMonthlyReview.getFullYear()}-${newMonthlyReview.getMonth() + type2[index].monthlyreview + 1 < 10 ? `0${newMonthlyReview.getMonth() + type2[index].monthlyreview + 1}` : newMonthlyReview.getMonth()}-${newMonthlyReview.getDate() < 10 ? `0${newMonthlyReview.getDate()}` : newMonthlyReview.getDate()}`
                return monthlyReviewDate;
            }
        }

    }

    const updatePropsCar = async () => {
    //     const NewDataCarCurrent = {
    //         monthlyReview : GetCurrentMonthlyReview()
    //     }
    //     const invId = doc(MohamadFireStore, "car", gettingCarShowForm.id);
    //     await updateDoc(invId, NewDataCarCurrent);
    }


    return (
        <div className="flex justify-center">
            {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0" />}
            <div>
                {
                    withData ?
                        <div className="mb-32">
                            {
                                gettingCarShowForm?.car_type === `ציוד הנדס'` && <div className="sdfsdf">
                                    <PageTwoWithData car={gettingCarShowForm} ref={componentRef1} date={props.check.date} driver={driver} checks={check.checks} data1={check.data2} data2={check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint1}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                            {
                                gettingCarShowForm?.car_type === 'רכב עד 9,999 ק"ג' && <div className="sdfsdf">
                                    <PageThreeWithData car={gettingCarShowForm} ref={componentRef3} date={props.check.date} driver={driver} checks={check.checks} data1={check.data2} data2={check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint3}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                            {
                                gettingCarShowForm?.car_type === 'גרור' && <div className="sdfsdf">
                                    <PageOneWithData car={gettingCarShowForm} ref={componentRef2} date={props.check.date} driver={driver} checks={check.checks} data1={check.data2} data2={check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint2}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                            {
                                gettingCarShowForm?.car_type === 'רכב מעל 10,000 ק"ג' && <div className="sdfsdf">
                                    <PageFourWithData car={gettingCarShowForm} ref={componentRef4} date={check.date} driver={driver} checks={check.checks} data1={check.data2} data2={check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint4}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                        </div>
                        :
                        <>
                            {
                                gettingCarShowForm && gettingCarShowForm.car_type === 'רכב מעל 10,000 ק"ג' &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf">
                                            <PageFour updateCar={updatePropsCar} driver={driver} car={gettingCarShowForm} showSave={data} sendData={(data, data2, data3) => {saveData(data,data2,data3);}} ref={componentRef4} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => { handlePrint4(); }}>הדפסה</Button>
                                        </div>
                                    }
                                </>
                            }
                            {
                                gettingCarShowForm && gettingCarShowForm.car_type === 'רכב עד 9,999 ק"ג' &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf">
                                            <PageThree driver={driver} car={gettingCarShowForm} showSave={data} sendData={(data, data2, data3) => {saveData(data,data2,data3);}} ref={componentRef3} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => {handlePrint3(); }}>הדפסה</Button>
                                        </div>
                                    }
                                </>
                            }
                            {
                                gettingCarShowForm && gettingCarShowForm.car_type === 'גרור' &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf">
                                            <PageOne driver={driver} car={gettingCarShowForm} showSave={data} sendData={(data, data2, data3) => {saveData(data,data2,data3);}} ref={componentRef1} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => {handlePrint1(); }}>הדפסה</Button>
                                        </div>
                                    }
                                </>
                            }
                            {
                                gettingCarShowForm && gettingCarShowForm.car_type === `ציוד הנדס'` &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf">
                                            <PageTwo driver={driver} car={gettingCarShowForm} showSave={data} sendData={(data, data2, data3) => {saveData(data,data2,data3);}} ref={componentRef2} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => {handlePrint2(); }}>הדפסה</Button>
                                        </div>
                                    }
                                </>
                            }
                        </>
                }

            </div>
        </div>
    )
}


