'use client';
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import ModalPageFour from "../ModalsCom/ModalPageFour";

export const PageTwoWithData = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white p-5">
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
                    <div className="absoulte_date_page_four21">{props.date}</div>
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
                            <th className="bordering_tebles_1">{props.checks[0] === '✓' ? props.checks[0] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[0] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[1] === '✓' ? props.checks[1] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[1] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[2] === '✓' ? props.checks[2] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[2] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[3] === '✓' ? props.checks[3] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[3] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[4] === '✓' ? props.checks[4] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[4] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">מפלט : רעש חריג / פליטת עשן / חופשים</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓' ? props.checks[5] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[6] === '✓' ? props.checks[6] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[6] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">עבודת תורן : הרמה / הטיה / ציוד / פיני אבטחה של מתקן לצמ"ה</th>
                            <th className="bordering_tebles_1">{props.checks[7] === '✓' ? props.checks[7] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[7] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[8] === '✓' ? props.checks[8] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[8] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">זמזם נסיעה לאחור / פנס מהבהב / צופר</th>
                            <th className="bordering_tebles_1">{props.checks[9] === '✓' ? props.checks[9] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[9] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות ושלימות פנסים קדמיים / אחוריים</th>
                            <th className="bordering_tebles_1">{props.checks[10] === '✓' ? props.checks[10] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[10] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות אור : בלם / חנייה / ערפל / עמם אורות / תא נהג</th>
                            <th className="bordering_tebles_1">{props.checks[11] === '✓' ? props.checks[11] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[11] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">שעונים / לחצני פיקוד /</th>
                            <th className="bordering_tebles_1">{props.checks[12] === '✓' ? props.checks[12] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[12] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[13] === '✓' ? props.checks[13] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[13] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">בלימה / נעילת בלם חנייה</th>
                            <th className="bordering_tebles_1">{props.checks[14] === '✓' ? props.checks[14] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[14] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div dir="rtl" className="mr-32 ml-32">
                <div className="flex items-center">
                    <div className="text-xs">הערות קצין בטיחות בתעבורה / הוראת תיקון</div>
                </div>
                {
                    props.data1 &&
                    <div className="absoulte_date_page_four1">{props.data1}</div>
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
        </div>
    )
})