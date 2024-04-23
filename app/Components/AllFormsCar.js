import { Button } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { useState } from "react";
import ShowForm from "./ShowForm";
import GetData from "../FireBase/GetData";



export default function AllFormsCar(props) {

    const [openForm, setOpenForm] = useState(false);
    const [check,setCheck] = useState(null);

    const checks = GetData('checks');

    const GetClickedCheck = (id) => {
        for (let index = 0; index < checks.length; index++) {
            if(checks[index]?.check_id === id){
                return checks[index];
            }
        }
        return;
    }

    return (
        <div>
            {
                openForm ?
                    <div className="flex justify-center">
                        <div className="w-[800px]">
                            <div className="flex justify-center">
                                <div className="w-fit m-5 mb-10">
                                    <Button onClick={() => setOpenForm(false)} color="primary" className="text-xl">
                                        לחזור<GoArrowRight />
                                    </Button>
                                </div>
                            </div>
                            <div className="absolute overflow-auto w-full flex">
                                <ShowForm check={GetClickedCheck(check.check_id)} disable={() => { setOpenForm(false); }} car={props.car} driver={props.driver} customer={props.customer} />
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="flex justify-center">
                            <div className="w-[800px] items-center">
                                <div className="m-5 border-b-2 border-primary p-5">
                                    <div>
                                        <Button onClick={props.disable} color="primary" className="text-xl">
                                            לחזור<GoArrowRight />
                                        </Button>
                                    </div>
                                    <div className="max-[500px]:text-base text-2xl text-center mt-3 text-primary tracking-widest font-black">
                                        רשימת טפסים של רכב : {props.car.car_num}
                                    </div>
                                </div>
                                <div className="m-5 flex flex-wrap justify-around">
                                    <div className="w-[350px] m-auto mt-3 mb-3 mr-2 ml-2">
                                        <div className="bg-gray-300 rounded-3xl">
                                            <div className="flex justify-between items-center">
                                                <div className="p-3 tracking-widest font-black">
                                                    <div>שם הנהג : {props.driver.driver_name}</div>
                                                    <div>כתובת הנהג : {props.driver.address}</div>
                                                    <div>ישוב הנהג : {props.driver.city}</div>
                                                    <div>מס' זהות הנהג : {props.driver.driver_id_card}</div>
                                                    <div>פלפון הנהג : {props.driver.driver_phone}</div>
                                                </div>
                                                <TbSteeringWheel className="text-8xl text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[350px] m-auto mt-3 mb-3 mr-2 ml-2">
                                        <div className="bg-gray-300 rounded-3xl">
                                            <div className="flex justify-between items-center">
                                                <div className="p-3 tracking-widest font-black">
                                                    <div>שם הלקוח : {props.customer.customer_name}</div>
                                                    <div>כתובת הלקוח : {props.customer.customer_site}</div>
                                                    <div>ישוב הלקוח : {props.customer.customer_city}</div>
                                                    <div>מספר סידורי : {props.customer.serial}</div>
                                                    <div>פלפון הלקוח : {props.customer.customer_phone}</div>
                                                </div>
                                                <FaUserFriends className="text-8xl text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-5 mt-5">
                                    <table className="w-full">
                                        <tbody>
                                            <tr className="max-[500px]:text-[13px]">
                                                <th className="w-32 p-3 rounded-r-full bg-gray-300">מספר טופס</th>
                                                <th className="text-right mr-10 p-3 bg-gray-200">טופס</th>
                                                <th className="w-72 p-3 rounded-l-full bg-gray-300">תאריך</th>
                                            </tr>

                                            {
                                                props.checks.map((check, i) => {
                                                    return <>
                                                        <tr>
                                                            <th className="p-2"></th>
                                                            <th className="p-2"></th>
                                                            <th className="p-2"></th>
                                                        </tr>
                                                        <tr className="hover:text-primary cursor-pointer max-[500px]:text-[13px]" onClick={() => {setOpenForm(true);setCheck(check)}}>
                                                            <th className="w-32 p-3 rounded-r-full bg-gray-300">{i + 1}</th>
                                                            <th className="text-right mr-10 p-3 bg-gray-200"><SiGoogleforms className="text-2xl max-[500px]:text-[16px]" /></th>
                                                            <th className="w-72 p-3 rounded-l-full bg-gray-300">{check.date}</th>
                                                        </tr>
                                                    </>
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}