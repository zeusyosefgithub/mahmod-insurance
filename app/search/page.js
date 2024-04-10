'use client';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function searchPage() {

    const [searchValue,setSearchValue] = useState(null);
    const [resualt,setResualt] = useState(null);

    async function GetVichel() {
        const response = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${searchValue}`);
        const movies = await response.json();
        const ress = movies.result.records;
        setResualt(ress[0])
    }


    return (
        <div className="hsd flex justify-center items-center">
            <div className="w-[500px]">
                <div dir="rtl" className="flex justify-center">
                    <Input type="number" value={searchValue} onValueChange={(value) => setSearchValue(value)} variant="flat" color="primary" className="max-w-[350px]" label="מספר הרכב" />
                </div>
                <div className="mt-20 flex justify-center">
                    <Button onClick={GetVichel} color="primary" className="text-xl"><CiSearch className="text-2xl" />חיפוש</Button>
                </div>
                {
                        resualt &&
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>{resualt.mispar_rechev}</th>
                                        <th>מספר הרכב</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.sug_degem}</th>
                                        <th>סוג דגם</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.tozeret_nm}</th>
                                        <th>תוצרת</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.degem_nm}</th>
                                        <th>מספר דגם</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.ramat_gimur}</th>
                                        <th>רמת גימור</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.kvutzat_zihum}</th>
                                        <th>קבוצת זיהום</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.shnat_yitzur}</th>
                                        <th>שנת יצור</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.degem_manoa}</th>
                                        <th>דגם מנוע</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.mivchan_acharon_dt}</th>
                                        <th>מבחן אחרון</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.tokef_dt}</th>
                                        <th>תוקף</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.baalut}</th>
                                        <th>בעלות</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.misgeret}</th>
                                        <th>מסגרת</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.tzeva_rechev}</th>
                                        <th>צבע רכב</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.zmig_kidmi}</th>
                                        <th>צמיג קדמי</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.zmig_ahori}</th>
                                        <th>צמיג אחורי</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.sug_delek_nm}</th>
                                        <th>סוג דלק</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.horaat_rishum}</th>
                                        <th>הוראת רישום</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.moed_aliya_lakvish}</th>
                                        <th>מועד עליה לכביש</th>
                                    </tr>
                                    <tr>
                                        <th>{resualt.kinuy_mishari}</th>
                                        <th>קינוי מסחרי</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
            </div>
        </div>
    )
}