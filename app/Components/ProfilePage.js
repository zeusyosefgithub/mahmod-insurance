'use client';
import Image from 'next/image';
import profileImage from '../../images/profileImage.jpg';
import GetData from '../FireBase/GetData';
import NavBar from './NavBar';
import { useAuth } from '../Auth/AuthContext';
import { Button, Divider, Spinner } from '@nextui-org/react';
import { useState } from 'react';
import ModalWarningSign from '../ModalsCom/ModalWarningSign';



export default function ProfilePage() {

    const { resetPassword, currentUser } = useAuth();

    const Admin = GetData('Admins');

    const GetAdminProps = () => {
        for (let index = 0; index < Admin.length; index++) {
            if (Admin[index].id === currentUser.uid) {
                return Admin[index];
            }
        }
        return null;
    }

    let Cars = GetData('numbers')[0]?.number;
    let Customers = GetData('numbers')[1]?.number;
    let Drivers = GetData('numbers')[2]?.number;

    const Alerts = GetData('alerts');

    const WarningSign = () => {
        for (let index = 0; index < Alerts?.length; index++) {
            if (Alerts[index]?.id === 'WarningSign') {
                return Alerts[index]?.value;
            }
        }
    }

    const [modalWarningSign,setModalWarningSign] = useState(false);

    return !Admin ? <Spinner className='absolute left-0 right-0 bottom-0 top-0'/> : (
        <div className='flex justify-center'>
            {modalWarningSign && <ModalWarningSign WarningSign={WarningSign()} show={modalWarningSign} disable={() => setModalWarningSign(false)}/>}
            <div class="pr-7 pl-7 max-w-[1300px] w-full">
                <div class="p-8 bg-white mt-24 rounded-lg shadow-2xl">
                    <div class="grid grid-cols-1 md:grid-cols-3">
                        <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <div class="font-bold text-gray-700 text-xl">{Cars}</div>
                                <div class="text-gray-400">רכבים</div>
                                <div className='flex justify-center'>
                                <Divider className='w-[70px] h-[3px] bg-primary-200'/>
                                </div>
                            </div>
                            
                            <div>
                                <div class="font-bold text-gray-700 text-xl">{Drivers}</div>
                                <div class="text-gray-400">נהגים</div>
                                <div className='flex justify-center'>
                                <Divider className='w-[70px] h-[3px] bg-primary-200'/>
                                </div>
                            </div>
                            <div>
                                <div class="font-bold text-gray-700 text-xl">{Customers}</div>
                                <div class="text-gray-400">לקחות</div>
                                <div className='flex justify-center'>
                                <Divider className='w-[70px] h-[3px] bg-primary-200'/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative">
                            <div class="w-48 h-48 bg-black mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <Image className='h-[180px] w-[180px] rounded-full' src={profileImage}/>
                            </div>
                        </div>
                        

                        <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <Button color='primary' className='max-[900px]:text-[12px]'>עדכון פרטיים</Button>
                            <Button color='default' className='max-[900px]:text-[12px]'>רשימת חשבונות בעסק</Button>
                        </div>
                    </div>
                    

                    <div class="mt-20 text-center border-b pb-12">
                        <h1 class="text-4xl font-medium text-gray-700">{GetAdminProps()?.name}&nbsp;{GetAdminProps()?.last_name}</h1>
                        <div class="font-light text-gray-600 mt-3">{GetAdminProps()?.country}</div>

                        <div class="mt-8 text-gray-500">קצין ביטחות</div>
                    </div>

                    <div class="mt-8 mb-8 flex flex-col justify-center">
                        <div class="text-gray-600 font-light lg:px-16 text-right">הגדרות</div>
                        <div className='text-[14px] mt-6' dir='rtl'>
                            <div className='flex'>1.<div onClick={() => setModalWarningSign(true)} className='text-primary mr-2 cursor-pointer'>סימן התראה</div></div>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <Divider className='max-w-[200px] h-[3px]'/>
                    </div>

                    <div class="mt-8 mb-8 flex flex-col justify-center">
                        <div class="text-gray-600 font-light lg:px-16 text-right">לוח בקרה</div>
                        <div className='text-[14px] mt-6' dir='rtl'>
                            <div className='flex'>1.<div className='text-primary mr-2 cursor-pointer'>יצירת חשבון חדש לעסק</div></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}