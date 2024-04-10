'use client';

import nearestDate from "nearest-date";
import GetData from "./FireBase/GetData";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext, useState } from "react";
import { Spinner } from "@nextui-org/react";
import ContactContext from "./Components/ContactContext";
import { useRouter } from "next/navigation";


export default function Home() {

  const { setContactName } = useContext(ContactContext);
  const Cars = GetData('car');
  const router = useRouter();

  const [loading,setLoading] = useState(false);

  const Alerts = GetData('alerts');

  const WarningSign = () => {
    for (let index = 0; index < Alerts?.length; index++) {
      if (Alerts[index]?.id === 'WarningSign') {
        return Alerts[index]?.value;
      }
    }
  }

  function createNewForm(carid){
    setLoading(true);
    setContactName(carid);
    router.push('/add');
  }

  function SortResualt(car, KindWarning, amountWarning, dateWarning,rest) {
    return <tr onClick={() => createNewForm(car.car_id)} className="cursor-pointer hover:bg-primary-200">
      <th className="p-2"><div className="flex justify-center text-primary"><div className="w-fit bg-white p-2 rounded-full flex items-center"><AiOutlinePlus /><div className="text-xl font-normal">{amountWarning}</div></div></div></th>
      <th className="p-2 font-normal">{KindWarning}</th>
      <th className="p-2 font-normal">{rest}</th>
      <th className="p-2 font-normal">{dateWarning}</th>
      <th className="p-2 font-normal">{car.car_num}</th>
    </tr>
  }

  function ShowWarnings(car) {
    let amountWarning = GetWarningProps(car).amount;
    let dateWarning = GetWarningProps(car).date;
    let KindWarning = GetWarningProps(car).kind;
    let rest = GetWarningProps(car).rest;
    return SortResualt(car,KindWarning,amountWarning,dateWarning,rest);
  }
  
  function GetWarningProps(car){
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

    let closerDate = nearestDate(ArrayDates,new Date());
    let asdate = addDays(new Date(),WarningSign());
    let count = 0;
    for (let index = 0; index < ArrayDates.length; index++) {
      if(index != closerDate && dateCheck(new Date(),new Date(convertDigitIn(asdate,true)),new Date(ArrayDates[index]))){
        count++;
      }
    }
    const diffInMs = new Date(ArrayDates[closerDate]) - new Date()
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return { kind : ArrayDatesNames[closerDate], date: convertDigitIn(ArrayDates[closerDate]), amount: count ,rest : parseInt(diffInDays)}
  }

  function convertDigitIn(str,defaultt) {
    let newDate = new Date(str);
    return defaultt ? `${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}` : `${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${newDate.getFullYear()}`;
  }

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function dateCheck(from,to,check) {

    var fDate,lDate,cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(check);

    if((cDate <= lDate && cDate >= fDate)) {
        return true;
    }
    return false;
}

  

  


  return loading ? <Spinner className="absolute left-0 right-0 bottom-0 top-0"/> : (
    <div>
      <div className="flex justify-center mt-32 ml-3 mr-3">
        <div className="w-full">
          <div className="flex justify-center">
            <div className="text-xl bg-primary-200 p-5 pl-14 pr-14 rounded-full tracking-widest">
              דף הבית
            </div>
          </div>
          <div className="mt-20 flex flex-wrap justify-around">
            <div className="w-[800px]">
              
            </div>
            <div className="w-[800px]">
              <div className="w-full bg-white p-5 rounded-lg overflow-auto h-[400px] shadow-xl">
                <div className="mb-3 text-2xl text-primary border-b-2 border-primary tracking-widest font-black text-right">התראות</div>
                <table className="bg-gray-200 w-full">
                  <tbody>
                    <tr className="bg-gray-300 sticky top-0 z-10 border-r-4 border-r-gray-300 text-lg">
                      <th className="w-24 p-1">כמות</th>
                      <th className="w-24 p-1">סוג התראה</th>
                      <th className="w-24 p-1">זמן נשאר</th>
                      <th className="w-24 p-1">מועד ההתראה</th>
                      <th className="w-24 p-1">מספר הרכב</th>
                    </tr>

                    {
                      Cars.map(car => {
                        return ShowWarnings(car);
                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
