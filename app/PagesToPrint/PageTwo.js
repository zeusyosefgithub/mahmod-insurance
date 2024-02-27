'use client';
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import ModalPageFour from "../ModalsCom/ModalPageFour";

export const PageTwo = React.forwardRef((props, ref) => {

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
        index14
    ]

    const [showModalPage, setShowModalPage] = useState(false);
    const [typeShow, setTypeShow] = useState('');

    const [discr1, setDiscr1] = useState(null);
    const [discr2, setDiscr2] = useState(null);

    var date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let currentdate = `${day}/${month}/${year}`;

    return (
        <div ref={ref} className="bg-white p-5">
            {
                showModalPage && <ModalPageFour typeShow={typeShow} show={showModalPage} disable={() => setShowModalPage(false)}
                    saveDiscr1={(discr1) => setDiscr1(discr1)}
                    saveDiscr2={(discr2) => setDiscr2(discr2)}
                />
            }
            <div className="flex justify-center text-sm" dir="rtl">
                טופס בדיקת בטיחותית לצמ"ה - ציוד הנדס'
            </div>
            <div dir="rtl">
                <div className="flex justify-around text-xs mt-5">
                    <div>
                        מספר רישום מע"צ : ___________________
                    </div>
                    <div>
                        אתר בדיקה : ___________________
                    </div>
                    <div>
                        סוג : דיזל / חשמל
                    </div>
                </div>
                <div className="flex justify-around text-xs mt-5">
                    <div className="absoulte_date_page_four21">{currentdate}</div>
                    <div>
                        תאריך בדיקה : ___________________
                    </div>
                    <div>
                        קריאת מונה שע"מ : ___________________
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
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תוקף רישיון רכב / תעודת ביטוח / תסקיר מהנדס / טבלת כושר הרמה</th>
                            <th onClick={() => setIndex0('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index0 === '✓' ? index0 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex0('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index0 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_ text-xs-ss">2</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מרכב :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">מסגרת בטיחות / כיסא מפעיל / חגורת בטיחות / מראות תשקיף / מצלמה</th>
                            <th onClick={() => setIndex1('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index1 === '✓' ? index1 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex1('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index1 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_ text-xs-ss">5</th>
                            <th className="bordering_tebles_ text-start pr-3 text-xs-ss">צמיגים ואופנים :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">הידוק בורגי אופנים / שחיקת צמיגים / לחץ אוויר</th>
                            <th onClick={() => setIndex2('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index2 === '✓' ? index2 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex2('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index2 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_ text-xs-ss">6</th>
                            <th className="bordering_tebles_ text-start pr-3 text-xs-ss">מערכת היגוי :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות צנרת גמישה - קשיחה / חיבורי הגה - חופשים</th>
                            <th onClick={() => setIndex3('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index3 === '✓' ? index3 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex3('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index3 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">8</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מערכת דלק ומנוע :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">מפלסי נוזלים מים / שמן נוע / נוזל הידראולי / חומצה במצבר</th>
                            <th onClick={() => setIndex4('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index4 === '✓' ? index4 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex4('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index4 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">מפלט : רעש חריג / פליטת עשן / חופשים</th>
                            <th onClick={() => setIndex5('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index5 === '✓' ? index5 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex5('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index5 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">9</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מתקן הידראולי :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">צנרת היראולית / מתח שרשראות / שחיקת קילשונים / צידוד / חיבור מהיר</th>
                            <th onClick={() => setIndex6('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index6 === '✓' ? index6 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex6('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index6 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">עבודת תורן : הרמה / הטיה / ציוד / פיני אבטחה של מתקן לצמ"ה</th>
                            <th onClick={() => setIndex7('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index7 === '✓' ? index7 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex7('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index7 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={6} className="bordering_tebles_ text-xs-ss">11</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מערכת חשמל :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">מצב מצבר כללי / ניקיון / חיבורי חשמל / מטען חשמלי</th>
                            <th onClick={() => setIndex8('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index8 === '✓' ? index8 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex8('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index8 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">זמזם נסיעה לאחור / פנס מהבהב / צופר</th>
                            <th onClick={() => setIndex9('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index9 === '✓' ? index9 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex9('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index9 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות ושלימות פנסים קדמיים / אחוריים</th>
                            <th onClick={() => setIndex10('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index10 === '✓' ? index10 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex10('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index10 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות אור : בלם / חנייה / ערפל / עמם אורות / תא נהג</th>
                            <th onClick={() => setIndex11('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index11 === '✓' ? index11 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex11('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index11 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">שעונים / לחצני פיקוד /</th>
                            <th onClick={() => setIndex12('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index12 === '✓' ? index12 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex12('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index12 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">15</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">בדיקת רכב בזמן נסיעה :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">נסיעה לפנים / לאחור / הפניות</th>
                            <th onClick={() => setIndex13('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index13 === '✓' ? index13 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex13('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index13 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">בלימה / נעילת בלם חנייה</th>
                            <th onClick={() => setIndex14('✓')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index14 === '✓' ? index14 : <div>&nbsp;</div>}</th>
                            <th onClick={() => setIndex14('✓n')} className="bordering_tebles_1 cursor-pointer hover:bg-primary hover:bg-opacity-20">{index14 === '✓n' ? "✓" : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
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
                <Button isDisabled={props.showSave} color="primary" onClick={() => props.sendData(data, discr1, discr2)}>שמירה</Button>
            </div>
        </div>
    )
})