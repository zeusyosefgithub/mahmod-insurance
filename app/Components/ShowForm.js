import { Button, Spinner } from "@nextui-org/react";
import { PageFour } from "../PagesToPrint/PageFour";
import { PageThree } from "../PagesToPrint/PageThree";
import { PageOne } from "../PagesToPrint/PageOne";
import { PageTwo } from "../PagesToPrint/PageTwo";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import GetData from "../FireBase/GetData";
import { addDoc, collection } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";
import { PageTwoWithData } from "../PagesWithData/PageTwoWithData";
import { PageThreeWithData } from "../PagesWithData/PageThreeWithData";
import { PageOneWithData } from "../PagesWithData/PageOneWithData";
import { PageFourWithData } from "../PagesWithData/PageFourWithData";

export default function ShowForm(props) {

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

    const GetDriverNameByCar = (id) => {
        for (let index = 0; index < Drivers.length; index++) {
            if (Drivers[index]?.driver_id === id) {
                return Drivers[index];
            }
        }
    }

    const [data, setData] = useState(null);
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

    const saveData = async () => {
        setLoading(true);
        const newData = {
            checks: data,
            data2: data2,
            data3: data3,
            car_id: props.car.car_id,
            check_id: currectCheckId(),
            date: currentdate
        }
        await addDoc(collection(MohamadFireStore, 'checks'), newData);
        setData(null);
        setData2(null);
        setData3(null);
        setLoading(false);
        props.disable();
    }


    return (
        <div className="flex justify-center">
            {loading && <Spinner className="absolute left-0 right-0 bottom-0 top-0" />}
            <div>
                {
                    console.log(props)
                }
                {
                    props.withData ?
                        <div className="mb-32">
                            {
                                props.car?.car_type === `ציוד הנדס'` && <div className="sdfsdf">
                                    <PageTwoWithData car={props.car} ref={componentRef1} date={props.check.date} driver={props.driver} checks={props.check.checks} data1={props.check.data2} data2={props.check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint1}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                            {
                                props.car?.car_type === 'רכב עד 9,999 ק"ג' && <div className="sdfsdf">
                                    <PageThreeWithData car={props.car} ref={componentRef3} date={props.check.date} driver={props.driver} checks={props.check.checks} data1={props.check.data2} data2={props.check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint3}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                            {
                                props.car?.car_type === 'גרור' && <div className="sdfsdf">
                                    <PageOneWithData car={props.car} ref={componentRef2} date={props.check.date} driver={props.driver} checks={props.check.checks} data1={props.check.data2} data2={props.check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint2}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                            {
                                props.car?.car_type === 'רכב מעל 10,000 ק"ג' && <div className="sdfsdf">
                                    <PageFourWithData car={props.car} ref={componentRef4} date={props.check.date} driver={props.driver} checks={props.check.checks} data1={props.check.data2} data2={props.check.data3} />
                                    <div className="flex justify-center">
                                        <Button color="primary" onClick={handlePrint4}>הדפסה</Button>
                                    </div>
                                </div>
                            }
                        </div>
                        :
                        <>
                            {
                                props.car && props.car.car_type === 'רכב מעל 10,000 ק"ג' &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf border-2 border-black">
                                            <PageFour driver={props.driver} car={props.car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef4} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => { saveData(); handlePrint4(); }}>הדפסה</Button>
                                        </div>
                                    }
                                </>
                            }
                            {
                                props.car && props.car.car_type === 'רכב עד 9,999 ק"ג' &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf border-2 border-black">
                                            <PageThree driver={props.driver} car={props.car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef3} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => { saveData(); handlePrint3(); }}>הדפסה</Button>
                                        </div>
                                    }
                                </>
                            }
                            {
                                props.car && props.car.car_type === 'גרור' &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf border-2 border-black">
                                            <PageOne driver={props.driver} car={props.car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef1} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => { saveData(); handlePrint1(); }}>הדפסה</Button>
                                        </div>
                                    }
                                </>
                            }
                            {
                                props.car && props.car.car_type === `ציוד הנדס'` &&
                                <>
                                    <div className="flex justify-center mb-20">
                                        <div className="sdfsdf border-2 border-black">
                                            <PageTwo driver={props.driver} car={props.car} showSave={!data ? false : true} sendData={(data, data2, data3) => { setData(data); setData2(data2); setData3(data3); }} ref={componentRef2} />
                                        </div>
                                    </div>

                                    {
                                        data &&
                                        <div className="flex justify-center mt-10 mb-20">
                                            <Button color="primary" onClick={() => { saveData(); handlePrint2(); }}>הדפסה</Button>
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