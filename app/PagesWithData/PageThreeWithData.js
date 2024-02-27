'use client';
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import ModalPageFour from "../ModalsCom/ModalPageFour";

export const PageThreeWithData = React.forwardRef((props, ref) =>{
    return(
        <div ref={ref} className="bg-white p-7">
            <div className="flex justify-center text-sm" dir="rtl">
                טופס בדיקת תקינות לרכב פרטי ומסחרי עד 9,999 ק"ג
            </div>
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
                    <div className="absoulte_date_page_four15">{props.date}</div>
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
                            <th className="bordering_tebles_1">{props.checks[0] === '✓' ? props.checks[0] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[0] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[1] === '✓' ? props.checks[1] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[1] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">מפלסי נוזלים דלק / נוזל קירור / שמן מנוע</th>
                            <th className="bordering_tebles_1">{props.checks[2] === '✓' ? props.checks[2] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[2] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[3] === '✓' ? props.checks[3] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[3] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות צמיגים בסרן אחורי</th>
                            <th className="bordering_tebles_1">{props.checks[4] === '✓' ? props.checks[4] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[4] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות גלגל חילוף</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓' ? props.checks[5] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[6] === '✓' ? props.checks[6] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[6] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות אור : בלם / חנייה / ערפל / נסיעה לאחור</th>
                            <th className="bordering_tebles_1">{props.checks[7] === '✓' ? props.checks[7] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[7] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[8] === '✓' ? props.checks[8] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[8] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[9] === '✓' ? props.checks[9] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[9] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div dir="rtl" className="mr-32 ml-32 mt-20">

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