'use client';
import { useState } from "react";
import GetData from "../FireBase/GetData";
import { Button, Card, CardFooter, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Spinner, Table, TableBody, TableCell, TableHeader, TableRow } from "@nextui-org/react";
import ModalEditKinds from "../ModalsCom/ModalEditKinds";
import ModalEditDrivers from "../ModalsCom/ModalEditDrivers";
import ModalEditCustomer from "../ModalsCom/ModalEditCustomer";
import ModalEditCar from "../ModalsCom/ModalEditCar";
import AllFormsCar from "../Components/AllFormsCar";
import { CiSearch, CiSettings } from "react-icons/ci";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CardContent from "@geist-ui/react/esm/card/card-content";
import Link from "next/link";
import { GoPlus } from "react-icons/go";


export default function Checks() {


    const Customers = GetData('Customer');
    const Cars = GetData('car');
    const Drivers = GetData('Driver');
    const Type2 = GetData('type2');
    const checks = GetData('checks');
    const router = useRouter();

    const [loading, setLoading] = useState(false);

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

    const [optionChoise, setOptionChoise] = useState('cars');

    return loading ? <Spinner className="absolute left-0 right-0 bottom-0 top-0 z-50" /> : (
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
                        {/* <div className="flex justify-center">
                            <div className="w-full max-w-[1000px] bg-primary-200 m-5 flex justify-between">
                                <div className="bg-green-200 w-full max-w-[400px]">
1
                                </div>
                                <div className="bg-red-200 w-full max-w-[700px] min-w-[500px]">
2
                                </div>
                            </div>
                        </div> */}

                        <div className="flex justify-center text-xl m-14">
                            <div className="bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest font-black">
                                פירטים
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="flex justify-center bg-white rounded-2xl shadow-xl w-[1400px]">
                                <div className="grid min-h-[800px] w-full lg:grid-cols-[280px_1fr]">
                                    <div className=" border-r bg-[#F4F4F5] lg:block rounded-tr-2xl rounded-br-2xl">
                                        <div className="flex h-full max-h-screen flex-col gap-6 p-6 ">
                                            <div className="flex items-center justify-between ">
                                                <h2 className="text-xl font-semibold">לוח פירטים</h2>
                                                <Button className="h-8 w-8" size="icon" variant="outline">
                                                    <GoPlus className="text-2xl" />
                                                    <span className="sr-only">Add new</span>
                                                </Button>
                                            </div>
                                            <div className="flex-1 overflow-auto">
                                                <nav className="grid gap-2">
                                                    <Button
                                                        onClick={() => setOptionChoise('cars')}
                                                        color={optionChoise === 'cars' && "primary"}
                                                        className="max-w-[400px] justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                                                        size="sm"
                                                        variant="bordered"
                                                    >
                                                        רכבים
                                                    </Button>
                                                    <Button
                                                        color={optionChoise === 'drivers' && "primary"}
                                                        onClick={() => setOptionChoise('drivers')}
                                                        className="max-w-[400px] justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                                                        size="sm"
                                                        variant="bordered"
                                                    >
                                                        נהגים
                                                    </Button>
                                                    <Button
                                                        color={optionChoise === 'customers' && "primary"}
                                                        onClick={() => setOptionChoise('customers')}
                                                        className="max-w-[400px] justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                                                        size="sm"
                                                        variant="bordered"
                                                    >
                                                        לקחות
                                                    </Button>
                                                    <Button
                                                        color={optionChoise === 'types' && "primary"}
                                                        onClick={() => setOptionChoise('types')}
                                                        className="max-w-[400px] justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                                                        size="sm"
                                                        variant="bordered"
                                                    >
                                                        סוגים רכב
                                                    </Button>

                                                    <Button
                                                        color={optionChoise === 'accidents' && "primary"}
                                                        onClick={() => setOptionChoise('accidents')}
                                                        className="max-w-[400px] justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                                                        size="sm"
                                                        variant="bordered"
                                                    >
                                                        תאונות
                                                    </Button>

                                                    <Button
                                                        color={optionChoise === 'repairOrder' && "primary"}
                                                        onClick={() => setOptionChoise('repairOrder')}
                                                        className="max-w-[400px] justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                                                        size="sm"
                                                        variant="bordered"
                                                    >
                                                        הזמנה לתיקון
                                                    </Button>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="bg-[#F4F4F5] flex justify-end p-4">
                                            <Dropdown>
                                                <DropdownTrigger asChild>
                                                    <Button
                                                        className="rounded-full border border-gray-200  dark:border-gray-800"
                                                        size="icon"

                                                    >
                                                        <CiSettings className="text-2xl" />
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu align="end">
                                                    <DropdownItem>My Account</DropdownItem>
                                                    <DropdownItem>Settings</DropdownItem>
                                                    <DropdownItem>Support</DropdownItem>
                                                    <DropdownItem>Logout</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <main className="flex-1 flex flex-col gap-6 p-6 md:gap-8 md:p-8 border-r-2 border-t-2">
                                            <div className="h-[700px] overflow-auto no-scrollbar">
                                                {
                                                    optionChoise === 'cars' &&
                                                    <div className="">
                                                        <div className="">
                                                            <table className="w-full table-auto border-collapse">
                                                                <thead>
                                                                    <tr className="bg-gray-100 dark:bg-gray-800">
                                                                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">רכב</th>
                                                                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">יצרן</th>
                                                                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">סוג</th>
                                                                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">לקוח</th>
                                                                        <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">נהג</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        (!Cars.length && !Type2.length) ? <tr>
                                                                            <th colSpan={5} className="bg-white h-[200px] border-r-4 border-white">
                                                                                <Spinner className="p-10">טוען...</Spinner>
                                                                            </th>
                                                                        </tr>
                                                                            : (!Cars.length && Type2.length) ?
                                                                                <tr className="">
                                                                                    <th colSpan={5} className="bg-white h-[200px] border-r-4 border-white">
                                                                                        <div>
                                                                                            <div>עדין לא הוספת רכבים להרשימה...</div>
                                                                                            <Button onClick={() => { setLoading(true); router.push('/add'); }}><FaArrowRight />להוספת רכב</Button>
                                                                                        </div>
                                                                                    </th>
                                                                                </tr>
                                                                                :
                                                                                null
                                                                    }
                                                                    {
                                                                        Cars.map((car) => {
                                                                            return <tr onClick={() => { setData(car); setModalCar(true); }} className="hover:bg-primary-100 hover:cursor-pointer border-b border-gray-200 dark:border-gray-700">
                                                                                <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{car.car_num}</td>
                                                                                <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{car.car_product}</td>
                                                                                <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{car.car_type2}</td>
                                                                                <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{GetCusNameByCar(car.customer_id)?.customer_name}</td>
                                                                                <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{GetDriverNameByCar(car.Driver_id)?.driver_name}</td>
                                                                            </tr>
                                                                        })
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                }
                                                {
                                                    optionChoise === 'customers' &&
                                                    <div>
                                                        <table className="w-full table-auto border-collapse">
                                                            <thead>
                                                                <tr className="bg-gray-100 dark:bg-gray-800">
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">לקוח</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">פלפון</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">עיר</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">מיקום</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    (!Customers.length && !Type2.length) ? <tr>
                                                                        <th colSpan={4}>
                                                                            <Spinner className="p-10">טוען...</Spinner>
                                                                        </th>
                                                                    </tr>
                                                                        : (!Customers.length && Type2.length) ?
                                                                            <tr className="">
                                                                                <th colSpan={5} className="bg-white h-[200px] border-r-4 border-white">
                                                                                    <div>
                                                                                        <div>עדין לא הוספת לקוחות להרשימה...</div>
                                                                                        <Button onClick={() => { setLoading(true); router.push('/add'); }}><FaArrowRight />להוספת לקוח</Button>
                                                                                    </div>
                                                                                </th>
                                                                            </tr>
                                                                            :
                                                                            null
                                                                }
                                                                {
                                                                    Customers.map((cus) => {
                                                                        return <tr onClick={() => { setData(cus); setModalCustomer(true); }} className="hover:bg-primary-100 hover:cursor-pointer border-b border-gray-200 dark:border-gray-700">
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{cus.customer_name}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{cus.customer_phone}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{cus.customer_city}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{cus.customer_site}</td>
                                                                        </tr>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                }
                                                {
                                                    optionChoise === 'drivers' &&
                                                    <div>
                                                        <table className="w-full table-auto border-collapse">
                                                            <thead>
                                                                <tr className="bg-gray-100 dark:bg-gray-800">
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">נהג</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">פלפון</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">עיר</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">מיקום</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">לקוח</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    (!Drivers.length && !Type2.length) ? <tr>
                                                                        <th colSpan={5}>
                                                                            <Spinner className="p-10">טוען...</Spinner>
                                                                        </th>
                                                                    </tr>
                                                                        : (!Drivers.length && Type2.length) ?
                                                                            <tr className="">
                                                                                <th colSpan={5} className="bg-white h-[200px] border-r-4 border-white">
                                                                                    <div>
                                                                                        <div>עדין לא הוספת נהגים להרשימה...</div>
                                                                                        <Button onClick={() => { setLoading(true); router.push('/add'); }}><FaArrowRight />להוספת נהג</Button>
                                                                                    </div>
                                                                                </th>
                                                                            </tr>
                                                                            :
                                                                            null
                                                                }
                                                                {
                                                                    Drivers.map((driver) => {
                                                                        return <tr onClick={() => { setData(driver); setModalCustomer(true); }} className="hover:bg-primary-100 hover:cursor-pointer border-b border-gray-200 dark:border-gray-700">
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{driver.driver_name}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{driver.driver_phone}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{driver.city}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{driver.address}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{GetCustomerByDriver(driver.driver_id)?.customer_name}</td>
                                                                        </tr>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                }
                                                {
                                                    optionChoise === 'types' &&
                                                    <div>
                                                        <table className="w-full table-auto border-collapse">
                                                            <thead>
                                                                <tr className="bg-gray-100 dark:bg-gray-800">
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">שםהסוג</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">טסט</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">טכוגרף</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">ביטוח</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">סקירה</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">בולמים</th>
                                                                    <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">בדיקתחורף</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    !Type2.length && <tr>
                                                                        <th colSpan={7}>
                                                                            <Spinner className="p-10">טוען...</Spinner>
                                                                        </th>
                                                                    </tr>
                                                                }
                                                                {
                                                                    Type2.map((type) => {
                                                                        return <tr onClick={() => { setData(type); setModalKind(true); }} className="hover:bg-primary-100 hover:cursor-pointer border-b border-gray-200 dark:border-gray-700">
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{type.name}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{type.munthstest}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{type.munthstachograph}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{type.munthsinsurance}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{type.monthlyreview}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{type.approvalabsorbers}</td>
                                                                            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{type.winterinspection}</td>
                                                                        </tr>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                }
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}


