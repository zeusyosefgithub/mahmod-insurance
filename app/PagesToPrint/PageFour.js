'use client';
import { Button } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import ModalPageFour from "../ModalsCom/ModalPageFour";


export const PageFour = React.forwardRef((props, ref) => {

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
    const [index10, setIndex10] = useState('');
    const [index11, setIndex11] = useState('');
    const [index12, setIndex12] = useState('');
    const [index13, setIndex13] = useState('');
    const [index14, setIndex14] = useState('');
    const [index15, setIndex15] = useState('');
    const [index16, setIndex16] = useState('');
    const [index17, setIndex17] = useState('');
    const [index18, setIndex18] = useState('');
    const [index19, setIndex19] = useState('');
    const [index20, setIndex20] = useState('');
    const [index21, setIndex21] = useState('');
    const [index22, setIndex22] = useState('');
    const [index23, setIndex23] = useState('');
    const [index24, setIndex24] = useState('');
    const [index25, setIndex25] = useState('');
    const [index26, setIndex26] = useState('');
    const [index27, setIndex27] = useState('');
    const [index28, setIndex28] = useState('');
    const [index29, setIndex29] = useState('');
    const [index30, setIndex30] = useState('');
    const [index31, setIndex31] = useState('');
    const [index32, setIndex32] = useState('');
    const [index33, setIndex33] = useState('');
    const [index34, setIndex34] = useState('');
    const [index35, setIndex35] = useState('');
    const [index36, setIndex36] = useState('');
    const [index37, setIndex37] = useState('');
    const [index38, setIndex38] = useState('');
    const [index39, setIndex39] = useState('');


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
        index9,
        index10,
        index11,
        index12,
        index13,
        index14,
        index15,
        index16,
        index17,
        index18,
        index19,
        index20,
        index21,
        index22,
        index23,
        index24,
        index25,
        index26,
        index27,
        index28,
        index29,
        index30,
        index31,
        index32,
        index33,
        index34,
        index35,
        index36,
        index37,
        index38,
        index39
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

    return (
        <div ref={ref} className={`bg-white p-5`}>
            {
                showModalPage && <ModalPageFour typeShow={typeShow} show={showModalPage} disable={()  => setShowModalPage(false)}
                saveDiscr1={(discr1) => setDiscr1(discr1)}
                saveDiscr2={(discr2) => setDiscr2(discr2)}
                />
            }
            <div className="flex justify-center text-sm" dir="rtl">
                טופס בדיקת בטיחותית לכלי רכב מעל 10,000 ק"ג
            </div>
            <div dir="rtl">
                <div className="flex justify-around text-xs mt-5">
                    <div className="absoulte_date_page_four8">{props.car?.car_num}</div>
                    <div>
                        מספר רכב : ___________________
                    </div>
                    <div className="absoulte_date_page_four9">{props.car?.car_product}</div>
                    <div>
                        תוצר הרכב : ___________________
                    </div>
                    <div className="absoulte_date_page_four10">{props.car?.car_type2}</div>
                    <div>
                        סוג : ___________________
                    </div>
                </div>
                <div className="flex justify-around text-xs mt-5">
                    <div className="absoulte_date_page_four11">{currentdate}</div>
                    <div>
                        תאריך בדיקה : ___________________
                    </div>
                    <div>
                        קריאת מונה שע"מ : ___________________
                    </div>
                    <div className="absoulte_date_page_four12">{props.driver?.driver_name}</div>
                    <div>
                        שם נהג : ___________________
                    </div>
                </div>
            </div>
            <div dir="rtl" className="mr-16 ml-16 mt-5 mb-5">
                <table className="w-full mb-28">
                    <tbody>
                        <tr>
                            <th className="bordering_tebles_1 w-8 text-xs-ss-1">מס"</th>
                            <th className="bordering_tebles_1 text-start pr-3 text-xs-ss-1">מהות טיפול בדיקה</th>
                            <th className="bordering_tebles_1 w-16 text-xs-ss-1">תקין</th>
                            <th className="bordering_tebles_1 w-16 text-xs-ss-1">לא תקין</th>
                            <th className="bordering_tebles_1 w-16 text-xs-ss-1">תוצאות הבדיקה</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_1 text-xs-ss-1">1</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">בדיקת תוקף מסמכים :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תוקף רישיון רכב ונספח / תעודת ביטוח / תעודת כיול סכוגרף לרכב מ: 8,000 ק"ג</th>
                            <th onClick={() => setIndex0('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index0 === '✓' ? index0 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex0('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index0 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">היתרים / אישור בלמים חצי שנתי לרכב מ: 16,000 ק"ג</th>
                            <th onClick={() => setIndex1('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index1 === '✓' ? index1 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex1('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index1 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_1 text-xs-ss-1">2</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">מרכב :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שלמות דלתות / מראות / מושבים / ריפוד / חגורות בטיחות נהג - נוסע</th>
                            <th onClick={() => setIndex2('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index2 === '✓' ? index2 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex2('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index2 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">פגושים / התקן גלגל חילוף / שמשות / מחזרי אור / מרכב כללי</th>
                            <th onClick={() => setIndex3('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index3 === '✓' ? index3 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex3('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index3 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_1 text-xs-ss-1">3</th>
                            <th className="bordering_tebles_1 text-start pr-3 text-xs-ss-1">מסגרת גחון :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">נזקי תאונה / אי הימצאות סדקים בקורות אורך / רוחב</th>
                            <th onClick={() => setIndex4('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index4 === '✓' ? index4 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex4('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index4 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הידוק - שלמות - הבטחת נעילה וביטחון התקן וו / צלחת גרירה (רק אם קיים)</th>
                            <th onClick={() => setIndex5('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index5 === '✓' ? index5 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex5('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index5 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_1 text-xs-ss-1">4</th>
                            <th className="bordering_tebles_1 text-start pr-3 text-xs-ss-1">מתלים וסרנים :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שלמות סרנים / קפיצים / מתלי אוויר / בולמי זעזועים / נזילות בטבורים</th>
                            <th onClick={() => setIndex6('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index6 === '✓' ? index6 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex6('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index6 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={4} className="bordering_tebles_1 text-xs-ss-1">5</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">צמגים ואופנים :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הידוק אומי אופנים / התאמת גודל צמיגים בהתאם לרישיון רכב</th>
                            <th onClick={() => setIndex7('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index7 === '✓' ? index7 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex7('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index7 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות צמיגים בסרן קדמי 2-1</th>
                            <th onClick={() => setIndex8('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index8 === '✓' ? index8 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex8('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index8 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות צמיגים בסרן אחורי 5-4-3-2-1</th>
                            <th onClick={() => setIndex9('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index9 === '✓' ? index9 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex9('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index9 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_1 text-xs-ss-1">6</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">מערכת היגו :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שלמות תיבת הגה / צנרת גמישה - קשיחה / חיבורי הגה</th>
                            <th onClick={() => setIndex10('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index10 === '✓' ? index10 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex10('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index10 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_1 text-xs-ss-1">7</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">מערכת בילום :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שלימות והידק מיכלי אוויר / צנרת אוויר גמישה / דליפות אוויר / תקינות בלם חנייה</th>
                            <th onClick={() => setIndex11('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index11 === '✓' ? index11 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex11('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index11 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_1 text-xs-ss-1">8</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">מערכת דלק ומנוע :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שלימות והידוק מיכל דלק / צנרת גמישה - קשיחה / נזילון: דלק - שמן - מים</th>
                            <th onClick={() => setIndex12('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index12 === '✓' ? index12 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex12('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index12 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">פליטת עשן</th>
                            <th onClick={() => setIndex13('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index13 === '✓' ? index13 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex13('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index13 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_1 text-xs-ss-1">9</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">מתקן על הרכב ערבל / מנוף / דופן הידראולית :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שלמות והידוק מתקן לשלדת רכב / נזילות שמן / אי הימצאות סדקים במתקן</th>
                            <th onClick={() => setIndex14('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index14 === '✓' ? index14 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex14('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index14 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={5} className="bordering_tebles_1 text-xs-ss-1">10</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">נוריות אזהרה ובקרה :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">נורות התרעה צהוב / כתום / אדום / ABS אחר :</th>
                            <th onClick={() => setIndex15('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index15 === '✓' ? index15 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex15('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index15 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות מד לחץ אוויר / לחץ שמן / טעינה / דלק / ADBLUE / בלם חנייה / אורות</th>
                            <th onClick={() => setIndex16('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index16 === '✓' ? index16 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex16('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index16 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות צופר / זמזם נסיעה לאחור</th>
                            <th onClick={() => setIndex17('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index17 === '✓' ? index17 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex17('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index17 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות מתג הפעלת תפריט ראשי : היסטורית תקלות / הודעות</th>
                            <th onClick={() => setIndex18('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index18 === '✓' ? index18 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex18('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index18 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_1 text-xs-ss-1">11</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">אורות ופנסים :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות ושלימות פנסים ראשיים / אחוריים / מהבהבים / תאור רוחב</th>
                            <th onClick={() => setIndex19('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index19 === '✓' ? index19 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex19('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index19 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות אור : בלם / חנייה / ערפל / עמם אורות / תא נהג</th>
                            <th onClick={() => setIndex20('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index20 === '✓' ? index20 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex20('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index20 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                    </tbody>
                </table>
                <div>&nbsp;</div>
                <table className="w-full">
                    <tbody>
                        <tr>
                            <th className="bordering_tebles_1 w-8 text-xs-ss-1">מס"</th>
                            <th className="bordering_tebles_1 text-start pr-3 text-xs-ss-1">מהות טיפול בדיקה</th>
                            <th className="bordering_tebles_1 w-16 text-xs-ss-1">תקין</th>
                            <th className="bordering_tebles_1 w-16 text-xs-ss-1">לא תקין</th>
                            <th className="bordering_tebles_1 w-16 text-xs-ss-1">תוצאות הבדיקה</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_1 text-xs-ss-1">12</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">אבזרים וכלי עבודה :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">מגבים וזרועות / מתזי מים / מראות / מטף כיבוי / אפוד זןהר / מגבה ומפתח גלגלים</th>
                            <th onClick={() => setIndex21('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index21 === '✓' ? index21 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex21('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index21 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">משולש אזהרה / תיק עזרה ראשונה</th>
                            <th onClick={() => setIndex22('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index22 === '✓' ? index22 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex22('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index22 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_1 text-xs-ss-1">13</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">טכוגרף :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות ושלימות מכשיר - מגש מסך / כיוון שעון זמן</th>
                            <th onClick={() => setIndex23('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index23 === '✓' ? index23 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex23('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index23 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_1 text-xs-ss-1">14</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">אמצעים ואבזרים לריתום ואבטחת מטען :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות ושלימות נקודות עיגון: ווי קשירה / טבעות הטייה / כבלי מתיחה / סוויסטלוקים</th>
                            <th onClick={() => setIndex24('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index24 === '✓' ? index24 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex24('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index24 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_1 text-xs-ss-1">15</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">בדיקת רכב בזמן נסיעה (אחת לרבעון) :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">רעידות הגה / סטייה מנתיב תוך כדי בלימה / תקינות סייעני האטה / נורות בקרה</th>
                            <th onClick={() => setIndex25('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index25 === '✓' ? index25 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex25('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index25 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_1 text-xs-ss-1">17</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">חומרים מסוכנים (ייבדק ברכב המוביל חומרים מסוכנים) :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">ערכת מיגון לנהג להובלת חומרים מסוכנים בהתאם לתקנות שירותי הובלה</th>
                            <th onClick={() => setIndex26('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index26 === '✓' ? index26 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex26('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index26 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שילוט בהתאם לחומר המוביל ב- 3 הדופנות</th>
                            <th onClick={() => setIndex27('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index27 === '✓' ? index27 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex27('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index27 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={5} className="bordering_tebles_1 text-xs-ss-1">18</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">דיסקות טכוגרף :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">נבדקו ___________ דיסקות סכוגרף נמצא כי</th>
                            <th onClick={() => setIndex28('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index28 === '✓' ? index28 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex28('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index28 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">א. יש ______ חריגות בהירות נסיעה</th>
                            <th onClick={() => setIndex29('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index29 === '✓' ? index29 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex29('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index29 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">ב. יש _____ חריגות בשעות עבודה ומנוחה בהתאם לתקנה 168 לת"ת</th>
                            <th onClick={() => setIndex30('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index30 === '✓' ? index30 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex30('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index30 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">ג. יש _____ אי סימון תקין של דיסקות סכוגרף</th>
                            <th onClick={() => setIndex31('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index31 === '✓' ? index31 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex31('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index31 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={9} className="bordering_tebles_1 text-xs-ss-1">19</th>
                            <th className="bordering_tebles_1 text-start pr-3  text-xs-ss-1">הגורם האנושי :</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">בוצעה שיחה פתוחה אודות מצבו המקצועי, הכלכלי, הרפואי והמשפחתי</th>
                            <th onClick={() => setIndex32('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index32 === '✓' ? index32 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex32('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index32 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג נתקל בחודש האחרון בבעיה טכנית</th>
                            <th onClick={() => setIndex33('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index33 === '✓' ? index33 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex33('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index33 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג נעצר בחודש האחרון לבדיקה בטיחות ע"י ניידות הבטיחות או המשטרה</th>
                            <th onClick={() => setIndex34('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index34 === '✓' ? index34 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex34('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index34 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג שאל שאלות בנושא חוק ותקנות שירותי הובלה</th>
                            <th onClick={() => setIndex35('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index35 === '✓' ? index35 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex35('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index35 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג ביקש לברר בנושא תפעול הרכב בהתאם לתקנה 25 לת"ת</th>
                            <th onClick={() => setIndex36('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index36 === '✓' ? index36 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex36('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index36 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">קצב"ת את בקיאות הנהג בתקנות חדשות וביצע ריענון לתקנות ישנות</th>
                            <th onClick={() => setIndex37('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index37 === '✓' ? index37 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex37('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index37 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">קצב"ת בדק דיסקות סכוגרף יחד עם הנהג</th>
                            <th onClick={() => setIndex38('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index38 === '✓' ? index38 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex38('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index38 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">קצב"ת וידא הנהג בדרישות על פי דין של עבודה ומנוחה</th>
                            <th onClick={() => setIndex39('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index39 === '✓' ? index39 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex39('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index39 === '✓n' ?  "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div dir="rtl" className="mr-32 ml-32">
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
            <div dir="rtl" className="mr-32 ml-32 text-xs mt-5">
                {
                    !props.showSave && <Button onClick={() => { setTypeShow('2'); setShowModalPage(true) }} color="primary" variant="bordered" size="sm" className="ml-10">לכתוב<MdEdit className="text-sm" /></Button>
                }
                <div>תוקף רישיון מוביל הוחתם על ידי קצין בטיחות - כן / לא</div>
                {discr2 && <div className="absoulte_date_page_four2">{discr2[0]}</div>}
                <div className="text-xs-xx">תוקף  האישור עד: _______________</div>
                {discr2 && <div className="absoulte_date_page_four3">{discr2[1]}</div>}
                <div className="text-xs-xx">תוקף רישיון כלי הרכב: _______________</div>
                {discr2 && <div className="absoulte_date_page_four4">{discr2[2]}</div>}
                <div className="text-xs-xx">תוקף הביטוח: _______________</div>
                {discr2 && <div className="absoulte_date_page_four5">{discr2[3]}</div>}
                <div className="text-xs-xx">תוקף תעודת כיול הטכוגרף: _______________</div>
                {discr2 && <div className="absoulte_date_page_four6">{discr2[4]}</div>}
                <div className="text-xs-xx">תוקף היתר לנהג המוביל חומרים מסוכנים: _______________</div>
                {discr2 && <div className="absoulte_date_page_four7">{discr2[5]}</div>}
                <div className="text-xs-xx">תוקף רישיון המוביל לכלי הרכב: _______________</div>
            </div>
            <div className="mr-32 ml-32 mt-5">
                <div dir="rtl" className="text-xs-ss-1">פרטי הנהג</div>
                <table className="w-full" dir="rtl">
                    <tbody>
                        <tr>
                            <th className="bordering_tebles_1 text-xs-ss-1">נהג קבוע ברכב</th>
                            <th className="bordering_tebles_1 text-xs-ss-1">מס' זהות</th>
                            <th className="bordering_tebles_1 text-xs-ss-1">שם ומשפחה</th>
                            <th className="bordering_tebles_1 text-xs-ss-1">תוקף רישיון הנהיגה</th>
                            <th className="bordering_tebles_1 text-xs-ss-1">חתימת נהג מלאה</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-xs-ss-1">כן / לא</th>
                            <th className="bordering_tebles_1"></th>
                            <th className="bordering_tebles_1"></th>
                            <th className="bordering_tebles_1"></th>
                            <th className="bordering_tebles_1"></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div dir="rtl" className="mt-5 mr-32 ml-32 text-xs">
                <div dir="rtl" className="text-xs-ss-1">פרטי קצין בטיחות</div>
                <div className="flex">
                    <div className="text-xs-xx">
                        שם ומשפחה: ___________________________
                    </div>
                    <div className="text-xs-xx">
                        חתימה וחותמת: ___________________________
                    </div>
                    <div className="text-xs-xx">
                        אתר בדיקה: ___________________________
                    </div>
                </div>
                <div className="text-xs-xx">
                    דף ליקויים נמסר ל-___________________________
                </div>
            </div>
            <div className={`mt-10 flex justify-center ${props.showSave && "hidden"}`}>
                <Button isDisabled={props.showSave} color="primary" onClick={() => props.sendData(data,discr1,discr2)}>שמירה</Button>
            </div>
        </div>
    )
})