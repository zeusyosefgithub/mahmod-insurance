'use client';
import { useState } from "react";
import GetData from "../FireBase/GetData";
import { Input, Spinner } from "@nextui-org/react";
import ModalEditKinds from "../ModalsCom/ModalEditKinds";
import ModalEditDrivers from "../ModalsCom/ModalEditDrivers";
import ModalEditCustomer from "../ModalsCom/ModalEditCustomer";
import ModalEditCar from "../ModalsCom/ModalEditCar";
import AllFormsCar from "../Components/AllFormsCar";
import { CiSearch } from "react-icons/ci";


export default function Checks() {


    const Customers = GetData('Customer');
    const Cars = GetData('car');
    const Drivers = GetData('Driver');
    const Type2 = GetData('type2');
    const checks = GetData('checks');

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

    const GetCustomerByDriver = (id) => {
        for (let index = 0; index < Cars.length; index++) {
            if (Cars[index].Driver_id === id) {
                return GetCusNameByCar(Cars[index].customer_id);
            }
        }
    }

    const GetChecks = (id) => {
        let Listchecks = [];
        for (let index = 0; index < checks?.length; index++) {
            if (checks[index]?.car_id === id) {
                Listchecks.push(checks[index]);
            }
        }
        return Listchecks;
    }

    const [modalCar, setModalCar] = useState(false);
    const [modalDriver, setModalDriver] = useState(false);
    const [modalCustomer, setModalCustomer] = useState(false);
    const [modalKind, setModalKind] = useState(false);
    const [data, setData] = useState(null);

    const [showAllForms, setShowAllForms] = useState(false);

    return (
        <div dir="rtl">
            {modalCar && <ModalEditCar showAllForms={() => setShowAllForms(true)} data={data} show={modalCar} disable={() => { setModalCar(false); }} />}
            {modalCustomer && <ModalEditCustomer data={data} show={modalCustomer} disable={() => { setModalCustomer(false); setData(null); }} />}
            {modalDriver && <ModalEditDrivers data={data} show={modalDriver} disable={() => { setModalDriver(false); setData(null); }} />}
            {modalKind && <ModalEditKinds data={data} show={modalKind} disable={() => { setModalKind(false); setData(null); }} />}
            {
                showAllForms ?
                    <div>
                        <AllFormsCar car={data} checks={GetChecks(data?.car_id)} driver={GetDriverNameByCar(data?.Driver_id)} customer={GetCusNameByCar(data?.customer_id)} disable={() => { setShowAllForms(false); setModalCar(true); }} />
                    </div>
                    :
                    <>
                        <div className="flex justify-center text-xl m-14">
                            <div className="bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest font-black">
                                פירטים
                            </div>
                        </div>
                        <div className="m-20 flex justify-center">
                            <div className="w-9/12">
                                <div className="flex justify-around">
                                    <div className="w-full bg-gray-300 p-5 rounded-lg overflow-auto h-72 shadow-xl">
                                        <div className="flex border-b-2 border-primary items-center pb-3">
                                            <div className="text-2xl text-primary tracking-widest font-black">רכבים</div>
                                            <div className="mr-14">
                                                <Input size="xs" variant="faded" color="primary" label={<CiSearch className="text-2xl" />} labelPlacement="outside" />
                                            </div>
                                        </div>
                                        <table className="bg-gray-200 w-full">
                                            <tbody>
                                                <tr className="bg-gray-300 sticky top-0 z-10 border-r-4 border-r-gray-300">
                                                    <th className="w-24 p-1">רכב</th>
                                                    <th className="w-24 p-1">יצרן</th>
                                                    <th className="w-24 p-1">סוג</th>
                                                    <th className="w-24 p-1">לקוח</th>
                                                    <th className="w-24 p-1">נהג</th>
                                                </tr>


                                                {
                                                    !Cars.length && <tr>
                                                        <th colSpan={5}>
                                                            <Spinner className="p-10">טוען...</Spinner>
                                                        </th>
                                                    </tr>
                                                }

                                                {
                                                    Cars.map((car) => {
                                                        return <tr onClick={() => { setData(car); setModalCar(true); }} className="cursor-pointer hover:bg-primary-200 hover:text-white border-r-4 hover:border-primary">
                                                            <th className="p-1 font-extralight">{car.car_num}</th>
                                                            <th className="p-1 font-extralight">{car.car_product}</th>
                                                            <th className="p-1 font-extralight">{car.car_type2}</th>
                                                            <th className="p-1 font-extralight">{GetCusNameByCar(car.customer_id)?.customer_name}</th>
                                                            <th className="p-1 font-extralight">{GetDriverNameByCar(car.Driver_id)?.driver_name}</th>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="m-10"></div>
                                    <div className="w-full bg-gray-300 p-5 rounded-lg overflow-auto h-72 shadow-xl">
                                        <div className="flex border-b-2 border-primary items-center pb-3">
                                            <div className="text-2xl text-primary tracking-widest font-black">לקחות</div>
                                            <div className="mr-14">
                                                <Input size="xs" variant="faded" color="primary" label={<CiSearch className="text-2xl" />} labelPlacement="outside" />
                                            </div>
                                        </div>
                                        <table className="bg-gray-200 w-full">
                                            <tbody>
                                                <tr className="bg-gray-300 sticky top-0 z-10 border-r-4 border-r-gray-300">
                                                    <th className="w-24 p-1">לקוח</th>
                                                    <th className="w-24 p-1">פלפון</th>
                                                    <th className="w-24 p-1">עיר</th>
                                                    <th className="w-24 p-1">מיקום</th>
                                                </tr>

                                                {
                                                    !Customers.length && <tr>
                                                        <th colSpan={4}>
                                                            <Spinner className="p-10">טוען...</Spinner>
                                                        </th>
                                                    </tr>
                                                }

                                                {
                                                    Customers.map((cus) => {
                                                        return <tr onClick={() => { setData(cus); setModalCustomer(true); }} className="cursor-pointer hover:bg-primary-200 hover:text-white border-r-4 hover:border-primary">
                                                            <th className="p-1 font-extralight">{cus.customer_name}</th>
                                                            <th className="p-1 font-extralight">{cus.customer_phone}</th>
                                                            <th className="p-1 font-extralight">{cus.customer_city}</th>
                                                            <th className="p-1 font-extralight">{cus.customer_site}</th>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="flex justify-around mt-10">
                                    <div className="w-full bg-gray-300 p-5 rounded-lg overflow-auto h-72 shadow-xl">
                                        <div className="flex border-b-2 border-primary items-center pb-3">
                                            <div className="text-2xl text-primary tracking-widest font-black">נהגים</div>
                                            <div className="mr-14">
                                                <Input size="xs" variant="faded" color="primary" label={<CiSearch className="text-2xl" />} labelPlacement="outside" />
                                            </div>
                                        </div>
                                        <table className="bg-gray-200 w-full">
                                            <tbody>
                                                <tr className="bg-gray-300 sticky top-0 z-10 border-r-4 border-r-gray-300">
                                                    <th className="w-24 p-1">נהג</th>
                                                    <th className="w-24 p-1">פלפון</th>
                                                    <th className="w-24 p-1">עיר</th>
                                                    <th className="w-24 p-1">מיקום</th>
                                                    <th className="w-24 p-1">לקוח</th>
                                                </tr>

                                                {
                                                    !Drivers.length && <tr>
                                                        <th colSpan={5}>
                                                            <Spinner className="p-10">טוען...</Spinner>
                                                        </th>
                                                    </tr>
                                                }

                                                {
                                                    Drivers.map((driver) => {
                                                        return <tr onClick={() => { setData(driver); setModalDriver(true); }} className="cursor-pointer hover:bg-primary-200 hover:text-white border-r-4 hover:border-primary">
                                                            <th className="p-1 font-extralight">{driver.driver_name}</th>
                                                            <th className="p-1 font-extralight">{driver.driver_phone}</th>
                                                            <th className="p-1 font-extralight">{driver.city}</th>
                                                            <th className="p-1 font-extralight">{driver.address}</th>
                                                            <th className="p-1 font-extralight">{GetCustomerByDriver(driver.driver_id)?.customer_name}</th>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="m-10"></div>
                                    <div className="w-full bg-gray-300 p-5 rounded-lg overflow-auto h-72 shadow-xl">
                                        <div className="flex border-b-2 border-primary items-center pb-3">
                                            <div className="text-2xl text-primary tracking-widest font-black">סוגים</div>
                                            <div className="mr-14">
                                                <Input size="xs" variant="faded" color="primary" label={<CiSearch className="text-2xl" />} labelPlacement="outside" />
                                            </div>
                                        </div>                                        <table className="bg-gray-200 w-full">
                                            <tbody>
                                                <tr className="bg-gray-300 sticky top-0 z-10 border-r-4 border-r-gray-300">
                                                    <th className="w-24 p-1">ש הסוג</th>
                                                    <th className="w-24 p-1">טסט</th>
                                                    <th className="w-24 p-1">טכוגרף</th>
                                                    <th className="w-24 p-1">ביטוח</th>
                                                    <th className="w-24 p-1">סקירה</th>
                                                    <th className="w-24 p-1">בולמים</th>
                                                    <th className="w-24 p-1">בדיקת חורף</th>
                                                </tr>

                                                {
                                                    !Type2.length && <tr>
                                                        <th colSpan={7}>
                                                            <Spinner className="p-10">טוען...</Spinner>
                                                        </th>
                                                    </tr>
                                                }

                                                {
                                                    Type2.map((type) => {
                                                        return <tr onClick={() => { setData(type); setModalKind(true); }} className="cursor-pointer hover:bg-primary-200 hover:text-white border-r-4 hover:border-primary">
                                                            <th className="p-1 font-extralight">{type.name}</th>
                                                            <th className="p-1 font-extralight">{type.munthstest}</th>
                                                            <th className="p-1 font-extralight">{type.munthstachograph}</th>
                                                            <th className="p-1 font-extralight">{type.munthsinsurance}</th>
                                                            <th className="p-1 font-extralight">{type.monthlyreview}</th>
                                                            <th className="p-1 font-extralight">{type.approvalabsorbers}</th>
                                                            <th className="p-1 font-extralight">{type.winterinspection}</th>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="flex justify-around">

                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}