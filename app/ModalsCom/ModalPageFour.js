'use client';
import { Button } from "@nextui-org/button";
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { useEffect, useState } from "react";
import { subMonths, addMonths, format, parseISO, subDays } from "date-fns";
import { doc, onSnapshot } from "firebase/firestore";
import { MohamadFireStore } from "../FireBase/firebase";
export default function ModalPageFour(props) {

    const type2 = GetData('type2');

    const [discr1, setDiscr1] = useState('');

    const [discr3, setDiscr3] = useState(null);

    const GetType2 = () => {
        for (let index = 0; index < type2.length; index++) {
            if (type2[index].name === props.car.car_type2) {
                return type2[index];
            }
        }
    }

    // const [carData, setCarData] = useState(null);
    // useEffect(() => {
    //     const unsubscribe = onSnapshot(doc(MohamadFireStore, 'car', props.car.id), (doc) => {
    //         setCarData({ id: doc.id, ...doc.data() });
    //     });

    //     return () => unsubscribe();
    // }, [props.car.id]);

    const [carData, setCarData] = useState(props.dates);
    useEffect(() => {
        setCarData(props.dates);
    }, [props.dates]);




    function isDateBeforeToday1(date) {
        return new Date(date) < new Date(new Date());
    }

    ////------------------------ winterinspection
    const [isWrongDatewinterreview, setIsWrongDatewinterreview] = useState(false);
    const [inputwinterreview, setInputwinterreview] = useState(GetType2()?.winterinspection);
    const [inputOnewinterreview, setInputOnewinterreview] = useState(carData?.winterreview);
    const [inputTwowinterreview, setInputTwowinterreview] = useState(() => {
        try {
            return format(subMonths(parseISO(carData?.winterreview), inputwinterreview), 'yyyy-MM-dd');
        }
        catch (e) {
            console.log(e);
        }
    });

    useEffect(() => {
        setInputwinterreview(GetType2()?.winterinspection);
    }, [GetType2()?.winterinspection])

    useEffect(() => {
        try {
            const newDate = addMonths(parseISO(inputTwowinterreview), inputwinterreview);
            setInputOnewinterreview(format(newDate, 'yyyy-MM-dd'));
            setIsWrongDatewinterreview(isDateBeforeToday1(newDate));
        }
        catch (e) {
            console.log(e)
        }
    }, [inputTwowinterreview, inputwinterreview]);

    useEffect(() => {
        try {
            const newDate = subMonths(parseISO(inputOnewinterreview), inputwinterreview);
            setInputTwowinterreview(format(newDate, 'yyyy-MM-dd'));
        }
        catch (e) {
            console.log(e);
        }
    }, [inputOnewinterreview, inputwinterreview]);

    ////------------------------ approvalabsorbers
    const [isWrongDateshockabsorbers, setIsWrongDateshockabsorbers] = useState(false);
    const [inputshockabsorbers, setInputshockabsorbers] = useState(GetType2()?.approvalabsorbers);
    const [inputOneshockabsorbers, setInputOneshockabsorbers] = useState(carData?.shockabsorbers);
    const [inputTwoshockabsorbers, setInputTwoshockabsorbers] = useState(() => {
        try {
            return format(subMonths(parseISO(carData?.shockabsorbers), inputshockabsorbers), 'yyyy-MM-dd');
        }
        catch (e) {
            console.log(e);
        }
    });

    useEffect(() => {
        setInputshockabsorbers(GetType2()?.approvalabsorbers);
    }, [GetType2()?.approvalabsorbers])

    useEffect(() => {
        try {
            const newDate = addMonths(parseISO(inputTwoshockabsorbers), inputshockabsorbers);
            setInputOneshockabsorbers(format(newDate, 'yyyy-MM-dd'));
            setIsWrongDateshockabsorbers(isDateBeforeToday1(newDate));
        }
        catch (e) {
            console.log(e)
        }
    }, [inputTwoshockabsorbers, inputshockabsorbers]);

    useEffect(() => {
        try {
            const newDate = subMonths(parseISO(inputOneshockabsorbers), inputshockabsorbers);
            setInputTwoshockabsorbers(format(newDate, 'yyyy-MM-dd'));
        }
        catch (e) {
            console.log(e);
        }
    }, [inputOneshockabsorbers, inputshockabsorbers]);

     ////------------------------ monthlyreview
     const [isWrongDatemonthly, setIsWrongDatemonthly] = useState(false);
     const [inputmonthly, setInputmonthly] = useState(GetType2()?.monthlyreview);
     const [inputOnemonthly, setInputOnemonthly] = useState(carData?.monthlyReview);
     const [inputTwomonthly, setInputTwomonthly] = useState(() => {
         try {
             return format(subMonths(parseISO(carData?.monthlyReview), inputmonthly), 'yyyy-MM-dd');
         }
         catch (e) {
             console.log(e);
         }
     });
 
     useEffect(() => {
         setInputmonthly(GetType2()?.monthlyreview);
     }, [GetType2()?.monthlyreview])
 
     useEffect(() => {
         try {
             const newDate = addMonths(parseISO(inputTwomonthly), inputmonthly);
             setInputOnemonthly(format(newDate, 'yyyy-MM-dd'));
             setIsWrongDatemonthly(isDateBeforeToday1(newDate));
         }
         catch (e) {
             console.log(e)
         }
     }, [inputTwomonthly, inputmonthly]);
 
     useEffect(() => {
         try {
             const newDate = subMonths(parseISO(inputOnemonthly), inputmonthly);
             setInputTwomonthly(format(newDate, 'yyyy-MM-dd'));
         }
         catch (e) {
             console.log(e);
         }
     }, [inputOnemonthly, inputmonthly]);


    ////------------------------ insurance
    const [isWrongDateInsurance, setIsWrongDateInsurance] = useState(false);
    const [inputInsurance, setInputInsurance] = useState(GetType2()?.munthsinsurance);
    const [inputOneInsurance, setInputOneInsurance] = useState(carData?.insurance);
    const [inputTwoInsurance, setInputTwoInsurance] = useState(() => {
        try {
            return format(subMonths(parseISO(carData?.insurance), inputInsurance), 'yyyy-MM-dd');
        }
        catch (e) {
            console.log(e);
        }
    });

    useEffect(() => {
        setInputInsurance(GetType2()?.munthsinsurance);
    }, [GetType2()?.munthsinsurance])

    useEffect(() => {
        try {
            const newDate = addMonths(parseISO(inputTwoInsurance), inputInsurance);
            setInputOneInsurance(format(newDate, 'yyyy-MM-dd'));
            setIsWrongDateInsurance(isDateBeforeToday1(newDate));
        }
        catch (e) {
            console.log(e)
        }
    }, [inputTwoInsurance, inputInsurance]);

    useEffect(() => {
        try {
            const newDate = subMonths(parseISO(inputOneInsurance), inputInsurance);
            setInputTwoInsurance(format(newDate, 'yyyy-MM-dd'));
        }
        catch (e) {
            console.log(e);
        }
    }, [inputOneInsurance, inputInsurance]);


    //------------------------ EndDate
    const [isWrongDateEndDate, setIsWrongDateEndDate] = useState(false);
    const [inputEndDate, setInputEndDate] = useState(GetType2()?.munthstest);
    const [inputOneEndDate, setInputOneEndDate] = useState(carData?.enddate);
    const [inputTwoEndDate, setInputTwoEndDate] = useState(() => {
        try {
            return format(subMonths(parseISO(carData?.enddate), inputEndDate), 'yyyy-MM-dd');
        }
        catch (e) {
            console.log(e);
        }
    });

    useEffect(() => {
        setInputEndDate(GetType2()?.munthstest);
    }, [GetType2()?.munthstest])

    useEffect(() => {
        try {
            const newDate = addMonths(parseISO(inputTwoEndDate), inputEndDate);
            setInputOneEndDate(format(newDate, 'yyyy-MM-dd'));
            setIsWrongDateEndDate(isDateBeforeToday1(newDate));
        }
        catch (e) {
            console.log(e)
        }
    }, [inputTwoEndDate, inputEndDate]);

    useEffect(() => {
        try {
            const newDate = subMonths(parseISO(inputOneEndDate), inputEndDate);
            setInputTwoEndDate(format(newDate, 'yyyy-MM-dd'));
        }
        catch (e) {
            console.log(e);
        }
    }, [inputOneEndDate, inputEndDate]);

    //------------------------ hazmatDate
    const [isWrongHazmat, setIsWrongHazmat] = useState(false);
    const [inputHazmat, setInputHazmat] = useState(GetType2()?.hazmatDate);
    const [inputOneHazmat, setInputOneHazmat] = useState(carData?.hazmatDate);
    const [inputTwoHazmat, setInputTwoHazmat] = useState(() => {
        try {
            return format(subMonths(parseISO(carData?.hazmatDate), inputHazmat), 'yyyy-MM-dd');
        }
        catch (e) {
            console.log(e);
        }
    });

    useEffect(() => {
        setInputHazmat(GetType2()?.hazmatDate);
    }, [GetType2()?.hazmatDate])

    useEffect(() => {
        try {
            const newDate = addMonths(parseISO(inputTwoHazmat), inputHazmat);
            setInputOneHazmat(format(newDate, 'yyyy-MM-dd'));
            setIsWrongHazmat(isDateBeforeToday1(newDate));
        }
        catch (e) {
            console.log(e)
        }
    }, [inputTwoHazmat, inputHazmat]);

    useEffect(() => {
        try {
            const newDate = subMonths(parseISO(inputOneHazmat), inputHazmat);
            setInputTwoHazmat(format(newDate, 'yyyy-MM-dd'));
        }
        catch (e) {
            console.log(e);
        }
    }, [inputOneHazmat, inputHazmat]);

    //------------------------ tachographDate
    const [isWrongTachograph, setIsWrongTachograph] = useState(false);
    const [inputTachograph, setInputTachograph] = useState(GetType2()?.munthstachograph);
    const [inputOneTachograph, setInputOneTachograph] = useState(carData?.tachographDate);
    const [inputTwoTachograph, setInputTwoTachograph] = useState(() => {
        try {
            return format(subMonths(parseISO(carData?.tachographDate), inputTachograph), 'yyyy-MM-dd');
        }
        catch (e) {
            console.log(e);
        }
    });

    useEffect(() => {
        setInputTachograph(GetType2()?.munthstachograph);
    }, [GetType2()?.munthstachograph])

    useEffect(() => {
        try {
            const newDate = addMonths(parseISO(inputTwoTachograph), inputTachograph);
            setInputOneTachograph(format(newDate, 'yyyy-MM-dd'));
            setIsWrongTachograph(isDateBeforeToday1(newDate));
        }
        catch (e) {
            console.log(e)
        }
    }, [inputTwoTachograph, inputTachograph]);

    useEffect(() => {
        try {
            const newDate = subMonths(parseISO(inputOneTachograph), inputTachograph);
            setInputTwoTachograph(format(newDate, 'yyyy-MM-dd'));
        }
        catch (e) {
            console.log(e);
        }
    }, [inputOneTachograph, inputTachograph]);

    const send = () => {
        if (props.typeShow === '1') {
            props.saveDiscr1(discr1);
        }
        else if (props.typeShow === '2') {
            let newMonthlyRevRes = format(new Date(),'yyyy-MM-dd');
            const discr2 = {
                monthlyReview : resMonthlyRev === undefined ? newMonthlyRevRes : resMonthlyRev,
                enddate : inputOneEndDate,
                insurance : inputOneInsurance,
                tachographDate : inputOneTachograph,
                hazmatDate : inputOneHazmat,
                shockabsorbers : inputOneshockabsorbers,
                winterreview : inputOnewinterreview,
                reshionMovel : null
            }
            props.saveDiscr2(discr2);
        }
        else if (props.typeShow === '3') {
            props.saveDiscr2(discr3);
        }
        props.disable();
    }
    // const CheckAllDates = () => {
    //     let count = 0;
    //     let messageWrnings = '';
    //     if(isDateBeforeToday1(enddateCheck)){
    //         count++;
    //         messageWrnings += ' תוקף רישיון,';
    //     }
    //     if(isDateBeforeToday1(hazmatDateCheck)){
    //         count++;
    //         messageWrnings += ' חו"מס,';
    //     }
    //     if(isDateBeforeToday1(monthlyReviewCheck)){
    //         count++;
    //         messageWrnings += ' ביקורת חודשית,';
    //     }
    //     if(isDateBeforeToday1(shockabsorbersCheck)){
    //         count++;
    //         messageWrnings += ' אישור בולמים,';
    //     }
    //     if(isDateBeforeToday1(tachographDateCheck)){
    //         count++;
    //         messageWrnings += ' טכוגרף,';
    //     }
    //     if(isDateBeforeToday1(winterreviewCheck)){
    //         count++;
    //         messageWrnings += ' ביקורת חורף,';
    //     }
    //     if(isDateBeforeToday1(insuranceCheck)){
    //         count++;
    //         messageWrnings += ' ביטוח';
    //     }
    //     let count2 = 0;
    //     let messageWrnings2 = '';
    //     let res1 = ;
    //     if (isDateBeforeToday1(format(subDays(parseISO(enddateCheck), 6), 'yyyy-MM-dd'))) {
    //         count2++;
    //         messageWrnings2 += ' תוקף רישיון,';
    //     }
    //     let res2 = ;
    //     if () {
    //         count2++;
    //         messageWrnings2 += ' חו"מס,';
    //     }
    //     let res3 = ;
    //     if (isDateBeforeToday1(format(subDays(parseISO(monthlyReviewCheck), 6), 'yyyy-MM-dd'))) {
    //         count2++;
    //         messageWrnings2 += ' ביקורת חודשית,';
    //     }
    //     let res4 = ;
    //     if (isDateBeforeToday1(format(subDays(parseISO(shockabsorbersCheck), 6), 'yyyy-MM-dd'))) {
    //         count2++;
    //         messageWrnings2 += ' אישור בולמים,';
    //     }
    //     let res5 = ;
    //     if (isDateBeforeToday1(format(subDays(parseISO(tachographDateCheck), 6), 'yyyy-MM-dd'))) {
    //         count2++;
    //         messageWrnings2 += ' טכוגרף,';
    //     }
    //     let res6 = ;
    //     if (isDateBeforeToday1(format(subDays(parseISO(winterreviewCheck), 6), 'yyyy-MM-dd'))) {
    //         count2++;
    //         messageWrnings2 += ' ביקורת חורף,';
    //     }
    //     let res7 = ;
    //     if (isDateBeforeToday1(format(subDays(parseISO(insuranceCheck), 6), 'yyyy-MM-dd'))) {
    //         count2++;
    //         messageWrnings2 += ' ביטוח';
    //     }
    //     return {
    //         message: messageWrnings,
    //         numberWrnings: count,
    //         message2: messageWrnings2,
    //         numberWrnings2: count2
    //     }
    // }

    //let fff = new Date();
    //console.log(format(fff, 'yyyy-MM-dd'));

    const [resMonthlyRev,setResMonthlyRev] = useState();
    useEffect(() => {
        try{
            const monthlyRevStatus = addMonths(parseISO(inputOnemonthly), GetType2()?.monthlyreview);
            setResMonthlyRev(format(monthlyRevStatus,'yyyy-MM-dd'));
        }
        catch(e){
            console.log(e);
        }
    },[inputOnemonthly,GetType2()?.monthlyreview]);


    const [EndResWrning,setEndDateResWrning] = useState(false);
    useEffect(() => {
        try{
            const HazRes = subDays(parseISO(inputOneEndDate), 6);
            const HazmatWrningCheck = isDateBeforeToday1(format(HazRes,'yyyy-MM-dd'));
            setEndDateResWrning(HazmatWrningCheck);
        }
        catch(e){
            console.log(e);
        }
    },[inputOneEndDate]);
    const [InsuranceResWrning,setInsuranceResWrning] = useState(false);
    useEffect(() => {
        try{
            const HazRes = subDays(parseISO(inputOneInsurance), 6);
            const HazmatWrningCheck = isDateBeforeToday1(format(HazRes,'yyyy-MM-dd'));
            setInsuranceResWrning(HazmatWrningCheck);
        }
        catch(e){
            console.log(e);
        }
    },[inputOneInsurance]);
    const [TachographResWrning,setTachographResWrning] = useState(false);
    useEffect(() => {
        try{
            const HazRes = subDays(parseISO(inputOneTachograph), 6);
            const HazmatWrningCheck = isDateBeforeToday1(format(HazRes,'yyyy-MM-dd'));
            setTachographResWrning(HazmatWrningCheck);
        }
        catch(e){
            console.log(e);
        }
    },[inputOneTachograph]);
    const [MonthlyResWrning,setMonthlyResWrning] = useState(false);
    useEffect(() => {
        try{
            const HazRes = subDays(parseISO(resMonthlyRev), 6);
            const HazmatWrningCheck = isDateBeforeToday1(format(HazRes,'yyyy-MM-dd'));
            setMonthlyResWrning(HazmatWrningCheck);
        }
        catch(e){
            console.log(e);
        }
    },[resMonthlyRev]);
    const [WinterResWrning,setWinterResWrning] = useState(false);
    useEffect(() => {
        try{
            const HazRes = subDays(parseISO(inputOnewinterreview), 6);
            const HazmatWrningCheck = isDateBeforeToday1(format(HazRes,'yyyy-MM-dd'));
            setWinterResWrning(HazmatWrningCheck);
        }
        catch(e){
            console.log(e);
        }
    },[inputOnewinterreview]);
    const [ShokabResWrning,setShokabResWrning] = useState(false);
    useEffect(() => {
        try{
            const HazRes = subDays(parseISO(inputOneshockabsorbers), 6);
            const HazmatWrningCheck = isDateBeforeToday1(format(HazRes,'yyyy-MM-dd'));
            setShokabResWrning(HazmatWrningCheck);
        }
        catch(e){
            console.log(e);
        }
    },[inputOneshockabsorbers]);
    const [HazResWrning,setHazmatResWrning] = useState(false);
    useEffect(() => {
        try{
            const HazRes = subDays(parseISO(inputOneHazmat), 6);
            const HazmatWrningCheck = isDateBeforeToday1(format(HazRes,'yyyy-MM-dd'));
            setHazmatResWrning(HazmatWrningCheck);
        }
        catch(e){
            console.log(e);
        }
    },[inputOneHazmat]);

    useEffect(() => {
        setInputOnewinterreview(carData?.winterreview);
        setInputOneshockabsorbers(carData?.shockabsorbers);
        setInputOnemonthly(carData?.monthlyReview);
        setInputOneInsurance(carData?.insurance);
        setInputOneEndDate(carData?.enddate);
        setInputOneHazmat(carData?.hazmatDate);
        setInputOneTachograph(carData?.tachographDate);
    },[carData]);


    // useEffect(() => {
    //     let currentDate = new Date();
    //     console.log(carData?.enddate);
    //     if ((currentDate.getMonth() + 1) >= 4 && (currentDate.getMonth() + 1) < 6 && (carData?.enddate != inputTwoEndDate)) {
    //         setInputTwowinterreview(inputTwoEndDate);
    //     }
    // }, [inputTwoEndDate,carData?.enddate])
    return (
        <>
            <Modal placement="center" className="test-fontt sizeForModals" backdrop={"blur"} size="5xl" isOpen={props.show} onClose={props.disable}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex justify-center">
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                {
                                    props.typeShow === '1' ?
                                        <div dir="rtl" className="flex items-center">
                                            <div className="w-28">הערות :</div>
                                            <Input value={discr1} onValueChange={(value) => setDiscr1(value)} type="text" />
                                        </div>
                                        :
                                        props.typeShow === '2' ?
                                            <div className="no-scrollbar overflow-auto sizeingForDivsModals">
                                                <table className="w-full">
                                                    <tbody>
                                                        <tr>
                                                            <th><div className="text-2xl tracking-widest">תוקף</div></th>
                                                            <th><div className="text-2xl tracking-widest">בתיחה</div></th>
                                                        </tr>
                                                        {
                                                            props.car?.monthlyReview &&
                                                            <tr className="border-t">
                                                                <th className="pt-3 pb-3">
                                                                    <div className="mr-5">
                                                                        <Input isReadOnly color={isDateBeforeToday1(resMonthlyRev) ? 'danger' : MonthlyResWrning ? 'warning' : 'default'} value={resMonthlyRev} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="pt-3 pb-3">
                                                                    <div className="ml-5">
                                                                        <Input isReadOnly color={isWrongDatemonthly ? 'danger' : MonthlyResWrning ? 'warning' : 'default'} value={inputOnemonthly} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="text-right">האישור עד</th>
                                                            </tr>
                                                        }
                                                        <tr className="border-t">
                                                            <th className="pt-3 pb-3">
                                                                <div className="mr-5">
                                                                    <Input color={isWrongDateEndDate ? 'danger' : EndResWrning ? 'warning' : 'default'} value={inputOneEndDate} onValueChange={(value) => setInputOneEndDate(value)} type="date" />
                                                                </div>
                                                            </th>
                                                            <th className="pt-3 pb-3">
                                                                <div className="ml-5">
                                                                    <Input color={isWrongDateEndDate ? 'danger' : EndResWrning ? 'warning' : 'default'} value={inputTwoEndDate} onValueChange={(value) => setInputTwoEndDate(value)} type="date" />
                                                                </div>
                                                            </th>
                                                            <th className="text-right">רישיון כלי הרכב</th>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <th className="pt-3 pb-3">
                                                                <div className="mr-5">
                                                                    <Input color={isWrongDateInsurance ? 'danger' : InsuranceResWrning ? 'warning' : 'default'} value={inputOneInsurance} onValueChange={(value) => { setInputOneInsurance(value); }} type="date" />
                                                                </div>
                                                            </th>
                                                            <th className="pt-3 pb-3">
                                                                <div className="ml-5">
                                                                    <Input color={isWrongDateInsurance ? 'danger' : InsuranceResWrning ? 'warning' : 'default'} value={inputTwoInsurance} onValueChange={(value) => setInputTwoInsurance(value)} type="date" />
                                                                </div>
                                                            </th>
                                                            <th className="text-right">הביטוח</th>
                                                        </tr>
                                                        {
                                                            (carData?.car_type === 'רכב מעל 10,000 ק"ג') && carData?.tachograph &&
                                                            <tr className="border-t">
                                                                <th className="pt-3 pb-3">
                                                                    <div className="mr-5">
                                                                        <Input color={isWrongTachograph ? 'danger' : TachographResWrning ? 'warning' : 'default'} value={inputOneTachograph} onValueChange={(value) => setInputOneTachograph(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="pt-3 pb-3">
                                                                    <div className="ml-5">
                                                                        <Input color={isWrongTachograph ? 'danger' : TachographResWrning ? 'warning' : 'default'} value={inputTwoTachograph} onValueChange={(value) => setInputTwoTachograph(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="text-right">תעודת כיול הטכוגרף</th>
                                                            </tr>
                                                        }
                                                        {
                                                            (carData?.car_type != `ציוד הנדס'`) && carData?.hazmat &&
                                                            <tr className="border-t">
                                                                <th className="pt-3 pb-3">
                                                                    <div className="mr-5">
                                                                        <Input color={isWrongHazmat ? 'danger' : HazResWrning ? 'warning' : 'default'} value={inputOneHazmat} onValueChange={(value) => setInputOneHazmat(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="pt-3 pb-3">
                                                                    <div className="ml-5">
                                                                        <Input color={isWrongHazmat ? 'danger' : HazResWrning ? 'warning' : 'default'} value={inputTwoHazmat} onValueChange={(value) => setInputTwoHazmat(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="text-right">חומ"ס</th>
                                                            </tr>
                                                        }
                                                        {
                                                            (carData?.car_type != `ציוד הנדס'`) &&
                                                            <tr className="border-t">
                                                                <th className="pt-3 pb-3">
                                                                    <div className="mr-5">
                                                                        <Input color={isWrongDatewinterreview ? 'danger' : WinterResWrning ? 'warning' : 'default'} value={inputOnewinterreview} onValueChange={(value) => setInputOnewinterreview(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="pt-3 pb-3">
                                                                    <div className="ml-5">
                                                                        <Input color={isWrongDatewinterreview ? 'danger' : WinterResWrning ? 'warning' : 'default'} value={inputTwowinterreview} onValueChange={(value) => setInputTwowinterreview(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="text-right">ביקורת חורף</th>
                                                            </tr>
                                                        }
                                                        {
                                                            (carData?.car_type === 'רכב מעל 10,000 ק"ג') || (carData?.car_type === 'גרור') &&
                                                            <tr className="border-t">
                                                                <th className="pt-3 pb-3">
                                                                    <div className="mr-5">
                                                                        <Input color={isWrongDateshockabsorbers ? 'danger' : ShokabResWrning ? 'warning' : 'default'} value={inputOneshockabsorbers} onValueChange={(value) => setInputOneshockabsorbers(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="pt-3 pb-3">
                                                                    <div className="ml-5">
                                                                        <Input color={isWrongDateshockabsorbers ? 'danger' : ShokabResWrning ? 'warning' : 'default'} value={inputTwoshockabsorbers} onValueChange={(value) => setInputTwoshockabsorbers(value)} type="date" />
                                                                    </div>
                                                                </th>
                                                                <th className="text-right">אישור בולמים</th>
                                                            </tr>
                                                        }
                                                        {/* <tr className="border-t border-b">
                                                            <th className="pt-3 pb-3">
                                                                <div className="mr-5">
                                                                    <Input value={discr26Open} onValueChange={(value) => setDiscr26Open(value)} type="date" />
                                                                </div>
                                                            </th>
                                                            <th className="pt-3 pb-3">
                                                                <div className="ml-5">
                                                                    <Input value={discr26} onValueChange={(value) => setDiscr26(value)} type="date" />
                                                                </div>
                                                            </th>
                                                            <th className="text-right">רישיון המוביל לכלי הרכב</th>
                                                        </tr> */}
                                                    </tbody>
                                                </table>
                                            </div>
                                            :
                                            props.typeShow === '3' ?
                                                <div>
                                                    <div dir="rtl" className="flex items-center">
                                                        <div className="w-1/2">תוקף האישור עד :</div>
                                                        <Input value={discr3} onValueChange={(value) => setDiscr3(value)} type="text" />
                                                    </div>
                                                </div>
                                                :
                                                null
                                }
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button size="lg" color="primary" variant="bordered" onClick={props.disable}>
                                סגור
                            </Button>
                            <Button size="lg" color="primary" onClick={send}>
                                שמירה
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>

    )
}