'use client';
import React, { useEffect, useRef, useState } from "react";

export const PageFourWithData = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className={`bg-white p-5`}>
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
                    <div className="absoulte_date_page_four11">{props.date}</div>
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
                            <th className="bordering_tebles_1">{props.checks[0] === '✓' ? props.checks[0] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[0] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">היתרים / אישור בלמים חצי שנתי לרכב מ: 16,000 ק"ג</th>
                            <th className="bordering_tebles_1">{props.checks[1] === '✓' ? props.checks[1] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[1] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[2] === '✓' ? props.checks[2] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[2] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">פגושים / התקן גלגל חילוף / שמשות / מחזרי אור / מרכב כללי</th>
                            <th className="bordering_tebles_1">{props.checks[3] === '✓' ? props.checks[3] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[3] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[4] === '✓' ? props.checks[4] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[4] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הידוק - שלמות - הבטחת נעילה וביטחון התקן וו / צלחת גרירה (רק אם קיים)</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓' ? props.checks[5] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[5] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[6] === '✓' ? props.checks[6] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[6] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[7] === '✓' ? props.checks[7] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[7] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות צמיגים בסרן קדמי 2-1</th>
                            <th className="bordering_tebles_1">{props.checks[8] === '✓' ? props.checks[8] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[8] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות צמיגים בסרן אחורי 5-4-3-2-1</th>
                            <th className="bordering_tebles_1">{props.checks[9] === '✓' ? props.checks[9] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[9] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[10] === '✓' ? props.checks[10] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[10] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[11] === '✓' ? props.checks[11] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[11] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[12] === '✓' ? props.checks[12] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[12] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">פליטת עשן</th>
                            <th className="bordering_tebles_1">{props.checks[13] === '✓' ? props.checks[13] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[13] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[14] === '✓' ? props.checks[14] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[14] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[15] === '✓' ? props.checks[15] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[15] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות מד לחץ אוויר / לחץ שמן / טעינה / דלק / ADBLUE / בלם חנייה / אורות</th>
                            <th className="bordering_tebles_1">{props.checks[16] === '✓' ? props.checks[16] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[16] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות צופר / זמזם נסיעה לאחור</th>
                            <th className="bordering_tebles_1">{props.checks[17] === '✓' ? props.checks[17] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[17] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות מתג הפעלת תפריט ראשי : היסטורית תקלות / הודעות</th>
                            <th className="bordering_tebles_1">{props.checks[18] === '✓' ? props.checks[18] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[18] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[19] === '✓' ? props.checks[19] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[19] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">תקינות אור : בלם / חנייה / ערפל / עמם אורות / תא נהג</th>
                            <th className="bordering_tebles_1">{props.checks[20] === '✓' ? props.checks[20] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[20] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[21] === '✓' ? props.checks[21] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[21] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">משולש אזהרה / תיק עזרה ראשונה</th>
                            <th className="bordering_tebles_1">{props.checks[22] === '✓' ? props.checks[22] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[22] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[23] === '✓' ? props.checks[23] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[23] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[24] === '✓' ? props.checks[24] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[24] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[25] === '✓' ? props.checks[25] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[25] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[26] === '✓' ? props.checks[26] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[26] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">שילוט בהתאם לחומר המוביל ב- 3 הדופנות</th>
                            <th className="bordering_tebles_1">{props.checks[27] === '✓' ? props.checks[27] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[27] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[28] === '✓' ? props.checks[28] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[28] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">א. יש ______ חריגות בהירות נסיעה</th>
                            <th className="bordering_tebles_1">{props.checks[29] === '✓' ? props.checks[29] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[29] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">ב. יש _____ חריגות בשעות עבודה ומנוחה בהתאם לתקנה 168 לת"ת</th>
                            <th className="bordering_tebles_1">{props.checks[30] === '✓' ? props.checks[30] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[30] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">ג. יש _____ אי סימון תקין של דיסקות סכוגרף</th>
                            <th className="bordering_tebles_1">{props.checks[31] === '✓' ? props.checks[31] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[31] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
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
                            <th className="bordering_tebles_1">{props.checks[32] === '✓' ? props.checks[32] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[32] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג נתקל בחודש האחרון בבעיה טכנית</th>
                            <th className="bordering_tebles_1">{props.checks[33] === '✓' ? props.checks[33] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[33] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג נעצר בחודש האחרון לבדיקה בטיחות ע"י ניידות הבטיחות או המשטרה</th>
                            <th className="bordering_tebles_1">{props.checks[34] === '✓' ? props.checks[34] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[34] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג שאל שאלות בנושא חוק ותקנות שירותי הובלה</th>
                            <th className="bordering_tebles_1">{props.checks[35] === '✓' ? props.checks[35] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[35] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">הנהג ביקש לברר בנושא תפעול הרכב בהתאם לתקנה 25 לת"ת</th>
                            <th className="bordering_tebles_1">{props.checks[36] === '✓' ? props.checks[36] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[36] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">קצב"ת את בקיאות הנהג בתקנות חדשות וביצע ריענון לתקנות ישנות</th>
                            <th className="bordering_tebles_1">{props.checks[37] === '✓' ? props.checks[37] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[37] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">קצב"ת בדק דיסקות סכוגרף יחד עם הנהג</th>
                            <th className="bordering_tebles_1">{props.checks[38] === '✓' ? props.checks[38] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[38] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
                        </tr>
                        <tr>
                            <th className="bordering_tebles_1 text-start pr-3 font-medium text-xs-ss-1">קצב"ת וידא הנהג בדרישות על פי דין של עבודה ומנוחה</th>
                            <th className="bordering_tebles_1">{props.checks[39] === '✓' ? props.checks[39] : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">{props.checks[39] === '✓n' ? '✓' : <div>&nbsp;</div>}</th>
                            <th className="bordering_tebles_1">&nbsp;</th>
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
                <div>תוקף רישיון מוביל הוחתם על ידי קצין בטיחות - כן / לא</div>
                {props.data2 && <div className="absoulte_date_page_four2">{props.data2.monthlyReview}</div>}
                <div className="text-xs-xx">תוקף  האישור עד: _______________</div>
                {props.data2 && <div className="absoulte_date_page_four3">{props.data2.enddate}</div>}
                <div className="text-xs-xx">תוקף רישיון כלי הרכב: _______________</div>
                {props.data2 && <div className="absoulte_date_page_four4">{props.data2.insurance}</div>}
                <div className="text-xs-xx">תוקף הביטוח: _______________</div>
                {props.data2 && <div className="absoulte_date_page_four5">{props.data2.tachographDate}</div>}
                <div className="text-xs-xx">תוקף תעודת כיול הטכוגרף: _______________</div>
                {props.data2 && <div className="absoulte_date_page_four6">{props.data2.hazmatDate}</div>}
                <div className="text-xs-xx">תוקף היתר לנהג המוביל חומרים מסוכנים: _______________</div>
                {props.data2 && <div className="absoulte_date_page_four7">{props.data2.ddd}</div>}
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
                            <th className="bordering_tebles_1 text-xs-ss-1">{props.driver?.driver_id_card}</th>
                            <th className="bordering_tebles_1 text-xs-ss-1">{props.driver?.driver_name} {props.driver?.last_name}</th>
                            <th className="bordering_tebles_1 text-xs-ss-1">{props.driver?.driver_license_validity}</th>
                            <th className="bordering_tebles_1 text-xs-ss-1"></th>
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
        </div>
    )
})