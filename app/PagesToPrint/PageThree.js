'use client';
import { Button, Card, CardBody } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import ModalPageFour from "../ModalsCom/ModalPageFour";
import { format, parseISO, subDays } from "date-fns";
import { IoIosWarning } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export const PageThree = React.forwardRef((props, ref) =>{

    const [index0, setIndex0] = useState('');
    const [index1, setIndex1] = useState('');
    const [index2, setIndex2] = useState('');
    const [index3, setIndex3] = useState('');
    const [index4, setIndex4] = useState('');
    const [index5, setIndex5] = useState('');
    const [index6, setIndex6] = useState('');
    const [index7, setIndex7] = useState('');
    const [index8, setIndex8] = useState('');
    const [index9, setIndex9] = useState('');

    const data = [
        index0,
        index1,
        index2,
        index3,
        index4,
        index5,
        index6,
        index7,
        index8,
        index9
    ]

    const [showModalPage,setShowModalPage] = useState(false);
    const [typeShow,setTypeShow] = useState('');

    const [discr1,setDiscr1] = useState(null);
    const [discr2,setDiscr2] = useState(null);

    var date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let currentdate = `${day}/${month}/${year}`;


    function isDateBeforeToday1(date) {
        return new Date(date) < new Date(new Date());
    }

    const [enddateCheck,setenddateCheck] = useState(discr2 ? discr2.enddate : props.car?.enddate);
    const [hazmatDateCheck,sethazmatDateCheck] = useState(discr2 ? discr2.hazmatDate : props.car?.hazmatDate);
    const [monthlyReviewCheck,setmonthlyReviewCheck] = useState(discr2 ? discr2.monthlyReview : props.car?.monthlyReview);
    const [shockabsorbersCheck,setshockabsorbersCheck] = useState(discr2 ? discr2.shockabsorbers : props.car?.shockabsorbers);
    const [tachographDateCheck,settachographDateCheck] = useState(discr2 ? discr2.tachographDate : props.car?.tachographDate);
    const [winterreviewCheck,setwinterreviewCheck] = useState(discr2 ? discr2.winterreview : props.car?.winterreview);
    const [insuranceCheck,setinsuranceCheck] = useState(discr2 ? discr2.insurance : props.car?.insurance);

    const CheckAllDates = () => {
        let count = 0;
        let messageWrnings = '';
        let count2 = 0;
        let messageWrnings2 = '';
        let res1 = subDays(parseISO(enddateCheck), 6);
        let res2 = hazmatDateCheck ? subDays(parseISO(hazmatDateCheck), 6) : null;
        let res3 = monthlyReviewCheck ? subDays(parseISO(monthlyReviewCheck), 6) : null;
        let res4 = shockabsorbersCheck ? subDays(parseISO(shockabsorbersCheck), 6) : null;
        let res5 = tachographDateCheck ? subDays(parseISO(tachographDateCheck), 6) : null;
        let res6 = subDays(parseISO(winterreviewCheck), 6);
        let res7 = subDays(parseISO(insuranceCheck), 6);
        if(isDateBeforeToday1(enddateCheck)){
            count++;
            messageWrnings += ' תוקף רישיון,';
        }
        else if(isDateBeforeToday1(format(res1, 'yyyy-MM-dd'))){
            count2++;
            messageWrnings2 += ' תוקף רישיון,';
        }
        if(props.car?.hazmatDate && isDateBeforeToday1(hazmatDateCheck)){
            count++;
            messageWrnings += ' חו"מס,';
        }
        else if(props.car?.hazmatDate && isDateBeforeToday1(format(res2, 'yyyy-MM-dd'))){
            count2++;
            messageWrnings2 += ' חו"מס,';
        }
        if (props.car?.monthlyReview && isDateBeforeToday1(monthlyReviewCheck)) {
            count++;
            messageWrnings += ' ביקורת חודשית,';
        }
        else if (props.car?.monthlyReview && isDateBeforeToday1(format(res3, 'yyyy-MM-dd'))) {
            count2++;
            messageWrnings2 += ' ביקורת חודשית,';
        }
        if (props.car?.shockabsorbers && isDateBeforeToday1(shockabsorbersCheck)) {
            count++;
            messageWrnings += ' אישור בולמים,';
        }
        else if (props.car?.shockabsorbers && isDateBeforeToday1(format(res4, 'yyyy-MM-dd'))) {
            count2++;
            messageWrnings2 += ' אישור בולמים,';
        }
        if (props.car?.tachographDate && isDateBeforeToday1(tachographDateCheck)) {
            count++;
            messageWrnings += ' טכוגרף,';
        }
        else if (props.car?.tachographDate && isDateBeforeToday1(format(res5, 'yyyy-MM-dd'))) {
            count2++;
            messageWrnings2 += ' טכוגרף,';
        }
        if (isDateBeforeToday1(winterreviewCheck)) {
            count++;
            messageWrnings += ' ביקורת חורף,';
        }
        else if (isDateBeforeToday1(format(res6, 'yyyy-MM-dd'))) {
            count2++;
            messageWrnings2 += ' ביקורת חורף,';
        }
        if (isDateBeforeToday1(insuranceCheck)) {
            count++;
            messageWrnings += ' ביטוח';
        }
        else if (isDateBeforeToday1(format(res7, 'yyyy-MM-dd'))) {
            count2++;
            messageWrnings2 += ' ביטוח';
        }
        return {
            message: messageWrnings,
            numberWrnings: count,
            message2: messageWrnings2,
            numberWrnings2: count2
        }
    }

    useEffect(() => {
        setenddateCheck(discr2 ? discr2.enddate : props.car?.enddate);
        sethazmatDateCheck(discr2 ? discr2.hazmatDate : props.car?.hazmatDate);
        setmonthlyReviewCheck(discr2 ? discr2.monthlyReview : props.car?.monthlyReview);
        setshockabsorbersCheck(discr2 ? discr2.shockabsorbers : props.car?.shockabsorbers);
        settachographDateCheck(discr2 ? discr2.tachographDate : props.car?.tachographDate);
        setwinterreviewCheck(discr2 ? discr2.winterreview : props.car?.winterreview);
        setinsuranceCheck(discr2 ? discr2.insurance : props.car?.insurance);
    }, [discr2, props.car])

    return (
        <div ref={ref} className="bg-white p-7">
            {
                showModalPage && <ModalPageFour car={props.car} typeShow={typeShow} show={showModalPage} disable={() => setShowModalPage(false)}
                    saveDiscr1={(discr1) => setDiscr1(discr1)}
                    saveDiscr2={(discr2) => setDiscr2(discr2)}
                    dates={{
                        monthlyReview: props.car.monthlyReview,
                        enddate: enddateCheck,
                        insurance: insuranceCheck,
                        tachographDate: tachographDateCheck,
                        hazmatDate: hazmatDateCheck,
                        shockabsorbers: shockabsorbersCheck,
                        winterreview: winterreviewCheck,
                        hazmat: props.car?.hazmat,
                        car_type: props.car?.car_type,
                        tachograph: props.car?.tachograph
                    }}
                />
            }
            <div className="flex justify-center text-sm" dir="rtl">
                טופס בדיקת תקינות לרכב פרטי ומסחרי עד 9,999 ק"ג
            </div>
            <div>{CheckAllDates()?.message}</div>
            <div>{CheckAllDates()?.message2}</div>
            <div dir="rtl">
                <div className="flex justify-around text-xs mt-5">
                    <div className="absoulte_date_page_four13">{props.car?.car_num}</div>
                    <div>
                        מספר רכב : ___________________
                    </div>
                    <div className="absoulte_date_page_four14">{props.car?.car_type2}</div>
                    <div>
                        סוג : ___________________
                    </div>
                </div>
                <div className="flex justify-around text-xs mt-5">
                    <div>
                        קריאות מונים : ___________________
                    </div>
                    <div className="absoulte_date_page_four15">{currentdate}</div>
                    <div>
                        תאריך בדיקה : ___________________
                    </div>
                </div>
            </div>
            <div dir="rtl" className="mr-16 ml-16 mt-5 mb-5">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <th className="bordering_tebles_ w-8 text-xs-ss">מס"</th>
                            <th className="bordering_tebles_ text-start pr-3 text-xs-ss">מהות טיפול בדיקה</th>
                            <th className="bordering_tebles_ w-16 text-xs-ss">תקין</th>
                            <th className="bordering_tebles_ w-16 text-xs-ss">לא תקין</th>
                            <th className="bordering_tebles_ w-16 text-xs-ss">תוצאות הבדיקה</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_ text-xs-ss">1</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">בדיקת תוקף מסמכים :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תוקף רישיון רכב ונספח / תעודת ביטוח</th>
                            <th onClick={() => setIndex0('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index0 === '✓' ? index0 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex0('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index0 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">2</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מרכב :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">בדיקת הרכב (בדיקה חזותית) / נזלות לסוגיהן</th>
                            <th onClick={() => setIndex1('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index1 === '✓' ? index1 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex1('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index1 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">מפלסי נוזלים דלק / נוזל קירור / שמן מנוע</th>
                            <th onClick={() => setIndex2('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index2 === '✓' ? index2 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex2('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index2 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={4} className="bordering_tebles_ text-xs-ss">3</th>
                            <th className="bordering_tebles_ text-start pr-3 text-xs-ss">צמיגים ואופנים :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות צמיגים בסרן קדמי</th>
                            <th onClick={() => setIndex3('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index3 === '✓' ? index3 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex3('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index3 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות צמיגים בסרן אחורי</th>
                            <th onClick={() => setIndex4('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index4 === '✓' ? index4 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex4('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index4 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות גלגל חילוף</th>
                            <th onClick={() => setIndex5('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index5 === '✓' ? index5 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex5('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index5 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">4</th>
                            <th className="bordering_tebles_ text-start pr-3 text-xs-ss">אורות ופנסים :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות ושלמות פהסים אחוריים / מהבהבים</th>
                            <th onClick={() => setIndex6('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index6 === '✓' ? index6 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex6('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index6 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות אור : בלם / חנייה / ערפל / נסיעה לאחור</th>
                            <th onClick={() => setIndex7('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index7 === '✓' ? index7 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex7('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index7 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_ text-xs-ss">5</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">אבזר בטיחות  :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">אפוד זוהר / משולש אזהרה / מגבה + מפתח גלגל / מגבים</th>
                            <th onClick={() => setIndex8('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index8 === '✓' ? index8 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex8('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index8 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_ text-xs-ss">6</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">נסעת מבחן :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">בדיקת מערכת היגוי ויצבות הרכב בתנועה</th>
                            <th onClick={() => setIndex9('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index9 === '✓' ? index9 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex9('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index9 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div dir="rtl" className="mr-32 ml-32 mt-20">

                <div className="flex items-center">
                    {
                        !props.showSave && <Button onClick={() => { setTypeShow('1'); setShowModalPage(true) }} color="primary" variant="bordered" size="sm" className="ml-10">לכתוב<MdEdit className="text-sm" /></Button>
                    }
                    <div className="text-xs">הערות קצין בטיחות בתעבורה / הוראת תיקון</div>
                </div>
                {
                    discr1 && 
                    <div className="absoulte_date_page_four1">{discr1}</div>
                }
                <div>____________________________________________________________________________________</div>
                <div>____________________________________________________________________________________</div>
            </div>
            <div className="mr-32 ml-32 mt-5 mb-5">

                {
                    !props.showSave &&
                    <>
                        {
                            CheckAllDates().numberWrnings != 0 &&
                            <Card className="border-red-600 border-1">
                                <CardBody>
                                    <div className="flex items-center">
                                        <div>
                                            <IoIosWarning className="text-red-600 text-2xl" />
                                        </div>
                                        <div className="text-base mr-4">
                                            {CheckAllDates().numberWrnings} תאריכים פגים
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        }
                        {
                            CheckAllDates().numberWrnings2 != 0 &&
                            <Card className="border-yellow-500 border-1 mt-3">
                                <CardBody>
                                    <div className="flex items-center">
                                        <div>
                                            <IoIosWarning className="text-yellow-500 text-2xl" />
                                        </div>
                                        <div className="text-base mr-4">
                                            {CheckAllDates().numberWrnings2} תאריכים חרגים
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        }
                        {
                            (CheckAllDates().numberWrnings == 0) && (CheckAllDates().numberWrnings2 == 0) &&
                            <Card className="border-green-600 border-1 mt-5">
                                <CardBody>
                                    <div className="flex items-center">
                                        <div>
                                            <FaCheck className="text-green-600 text-2xl" />
                                        </div>
                                        <div className="text-base mr-4">
                                            כל התארכים תקנים
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        }
                    </>
                }
            </div>
            {
                !props.showSave &&
                <div dir="rtl" className="mr-32 ml-32 text-xs mt-5">
                    <Button onClick={() => { setTypeShow('2'); setShowModalPage(true) }} color="primary" variant="bordered" size="sm" className="ml-10">לכתוב<MdEdit className="text-sm" /></Button>
                    <div>תוקף רישיון מוביל הוחתם על ידי קצין בטיחות - כן / לא</div>
                    {discr2 && <div className="absoulte_date_page_four2">{discr2.monthlyReview}</div>}
                    <div className="text-xs-xx">תוקף  האישור עד: _______________</div>
                    {discr2 && <div className="absoulte_date_page_four3">{discr2.enddate}</div>}
                    <div className="text-xs-xx">תוקף רישיון כלי הרכב: _______________</div>
                    {discr2 && <div className="absoulte_date_page_four4">{discr2.insurance}</div>}
                    <div className="text-xs-xx">תוקף הביטוח: _______________</div>
                    {discr2 && <div className="absoulte_date_page_four5">{discr2.tachographDate}</div>}
                    <div className="text-xs-xx">תוקף תעודת כיול הטכוגרף: _______________</div>
                    {discr2 && <div className="absoulte_date_page_four6">{discr2.hazmatDate}</div>}
                    <div className="text-xs-xx">תוקף היתר לנהג המוביל חומרים מסוכנים: _______________</div>
                    {discr2 && <div className="absoulte_date_page_four7">{discr2.reshionMovel}</div>}
                    <div className="text-xs-xx">תוקף רישיון המוביל לכלי הרכב: _______________</div>
                </div>
            }
            <div dir="rtl" className="mr-32 ml-32 text-xs mt-5">
                <div>
                    1. מוסך יצבצע את התיקונים הדרושים והחלפת חלקים רק באישור קצין בטיחות או מנהל צי הרכב.
                </div>
                <div>
                    2. אם היצרן הורה על בדיקות מיוחדות נוספות על אלה המפורטות לעיל, יש לבצען.
                </div>
            </div>
            <div className="mr-32 ml-32 mt-5">
                <div dir="rtl" className="text-xs-ss">פרטי מפעיל</div>
                <table className="w-full" dir="rtl">
                    <tbody>
                        <tr>
                            <th className="bordering_tebles_ text-xs-ss">נהג קבוע ברכב</th>
                            <th className="bordering_tebles_ text-xs-ss">מס' זהות</th>
                            <th className="bordering_tebles_ text-xs-ss">שם ומשפחה</th>
                            <th className="bordering_tebles_ text-xs-ss">תוקף רישיון הנהיגה</th>
                            <th className="bordering_tebles_ text-xs-ss">חתימת נהג מלאה</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-xs-ss">כן / לא</th>
                            <th className="bordering_tebles_"></th>
                            <th className="bordering_tebles_"></th>
                            <th className="bordering_tebles_"></th>
                            <th className="bordering_tebles_"></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div dir="rtl" className="mt-5 mr-32 ml-32 text-xs">
                החלטת קצין בטיחות :
            </div>
            <div dir="rtl" className="flex justify-between mt-5 mr-32 ml-32 text-xs">
                <div>
                    הרכב כשיר לנסיעה ועבודה / לא כשיר לנסיעה ועבודה
                </div>
                <div>
                    <div>
                    ___________________________________
                    </div>
                    <div className="text-center">
                        חתימת קצין הבטיחות
                    </div>
                </div>
            </div>
            <div className={`mt-10 flex justify-center ${props.showSave && "hidden"}`}>
                <Button isDisabled={props.showSave || (CheckAllDates().numberWrnings != 0 ? true : false)} color="primary" onClick={() => props.sendData(data,discr1,discr2)}>שמירה</Button>
            </div>
        </div>
    )
})