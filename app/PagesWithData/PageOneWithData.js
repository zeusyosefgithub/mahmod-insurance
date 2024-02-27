'use client';
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import ModalPageFour from "../ModalsCom/ModalPageFour";
import { MdEdit } from "react-icons/md";

export const PageOneWithData = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white p-7">
            <div className="flex justify-center text-sm">
                טופס בדיקת תקינות לנתמך / גרור
            </div>
            <div dir="rtl">
                <div className="flex justify-around text-sm">
                    <div className="flex">
                        <div className="absoulte_date_page_four16">{props.car?.car_num}</div>
                        <div>מספר גרור / נתמך : &nbsp;</div>
                        <div>___________________</div>
                    </div>
                    <div className="flex">
                        <div className="absoulte_date_page_four17">{props.car?.car_type2}</div>
                        <div>סוג : &nbsp;</div>
                        <div>___________________</div>
                    </div>
                </div>
                <div className="flex justify-around text-sm">
                    <div className="flex">
                        <div className="absoulte_date_page_four18">{props.date}</div>
                        <div>תאריך בדיקה : &nbsp;</div>
                        <div>_________________________</div>
                    </div>
                    <div className="flex">
                        <div className="absoulte_date_page_four19">{props.driver?.driver_name}</div>
                        <div>שם נהג : &nbsp;</div>
                        <div>___________________</div>
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
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">1</th>
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
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">אישור בלמים חצי שנתי לרכב מ:16,000 ק"ג</th>
                            <th className="bordering_tebles_1">{props.checks[1] === '✓' ? props.checks[1] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[1] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={4} className="bordering_tebles_ text-xs-ss">2</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מרכב :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">נזקי תאונה אי המצאות סדקים בקורות אורך / פגוש אחורי / התקן גלגל חילוף</th>
                            <th className="bordering_tebles_1">{props.checks[2] === '✓' ? props.checks[2] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[2] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות פין גרירה בנתמך / עין גרירה ושרשראות אבטחה (בגרור בלבד)</th>
                            <th className="bordering_tebles_1">{props.checks[3] === '✓' ? props.checks[3] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[3] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">ארגז כלי נהג / סל לאחסון ציוד / מגיני בוץ / מחזירי אור ומבקת איך אני נוהג</th>
                            <th className="bordering_tebles_1">{props.checks[4] === '✓' ? props.checks[4] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[4] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={2} className="bordering_tebles_ text-xs-ss">4</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מתלים וסרים :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">שלמות סרנים / קפיצים / מתלי אוויר / בולמי זעזועים / נזילות בטבורים</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓' ? props.checks[5] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">5</th>
                            <th className="bordering_tebles_ text-start pr-3 text-xs-ss">צמיגים ואופנים :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">הידוק אומי אופנים / התאמת גודל צמיגים בהתאם לרישיון רכב</th>
                            <th className="bordering_tebles_1">{props.checks[6] === '✓' ? props.checks[6] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[6] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות צמיגים בסרנים 6-5-4-3-2-1</th>
                            <th className="bordering_tebles_1">{props.checks[7] === '✓' ? props.checks[7] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[7] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">6</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">מערכת בילום :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">שלמות והידוק מיכלי אוויר / צנרת אוויר גמישה / דליפות אוויר</th>
                            <th className="bordering_tebles_1">{props.checks[8] === '✓' ? props.checks[8] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[8] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות בוסטרים / מוטות הפעלה / חיבורי אוויר / בלם חנייה</th>
                            <th className="bordering_tebles_1">{props.checks[9] === '✓' ? props.checks[9] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[9] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} className="bordering_tebles_ text-xs-ss">7</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">אורות ופנסים :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות ושלימות פנסים אחוריים / מהבהבים / תאורת רוחב</th>
                            <th className="bordering_tebles_1">{props.checks[10] === '✓' ? props.checks[10] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[10] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות אור : בלם / חנייה / ערפל</th>
                            <th className="bordering_tebles_1">{props.checks[11] === '✓' ? props.checks[11] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[11] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th rowSpan={5} className="bordering_tebles_ text-xs-ss">8</th>
                            <th className="bordering_tebles_ text-start pr-3  text-xs-ss">אמצעים ואבזרים לריתום ואבטחת מטען :</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות נקינות נקודות עיגון : ווי קשירה / טבעות הטייה / כבלי מתיחה / טוויסטלוקים</th>
                            <th className="bordering_tebles_1">{props.checks[12] === '✓' ? props.checks[12] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[12] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות מנגנון נעילת ארגז (גרור חליפי)</th>
                            <th className="bordering_tebles_1">{props.checks[13] === '✓' ? props.checks[13] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[13] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_ text-start pr-3 font-medium text-xs-ss">תקינות מערכת הידראולית (גרור - נתמך רכין)</th>
                            <th className="bordering_tebles_1">{props.checks[14] === '✓' ? props.checks[14] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[14] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
                            <th className="bordering_tebles_">&nbsp;</th>
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
            <div className="mt-5" />
            <div dir="rtl" className="flex justify-between mr-32 ml-32 text-xs">
                <div>
                    רישיון מוביל על ידי קצין בטיחות - כן / לא
                </div>
                {
                    props.data2 &&
                    <div className="absoulte_date_page_four20">{props.data2}</div>
                }
                <div>
                    תוקף האישור עד : _________________________
                </div>
            </div>
            <div className="mr-32 ml-32 mt-10">
                <div dir="rtl" className="text-xs-ss">פרטי הנהג</div>
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
                פרטי קצין בטיחות
            </div>
            <div dir="rtl" className="flex justify-around mr-32 ml-32 text-xs mt-5">
                <div>שם ומשפחה : __________________</div>
                <div>חתימה וחותמת : __________________</div>
            </div>
            <div dir="rtl" className="flex justify-around mr-32 ml-32 text-xs mt-5">
                <div>דף ליקויים נמסר ל- : __________________</div>
                <div>אתר בדיקה : __________________</div>
            </div>
        </div>
    )
})