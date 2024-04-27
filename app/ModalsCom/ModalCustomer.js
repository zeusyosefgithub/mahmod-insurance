'use client';
import { Button } from "@nextui-org/button";
import { Avatar, Card, CardBody, CardFooter, CardHeader, CheckboxGroup, CustomCheckbox, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import GetData from "../FireBase/GetData";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getDownloadURL, getMetadata, ref } from "firebase/storage";
import { storagee } from "../FireBase/firebase";


export default function ModalCustomer(props) {

    const Customers = GetData('Customer').sort((a, b) => {
        return a.customer_id - b.customer_id;
    });
    const colors = ["[#e2e8f0]", "[#e5e7eb]", "[#e4e4e7]", "[#e5e5e5]", "[#d4d4d4]", "[#d6d3d1]"];

    const [imageUrls, setImageUrls] = useState({});
    useEffect(() => {
        Customers.forEach(customer => {
            const imagePath = `gs://mahmod-insurance.appspot.com/${customer.customer_phone}/CustomerImage`; // Assuming the image is named 'profile.jpg'
            const imageRef = ref(storagee, imagePath);
            getDownloadURL(imageRef)
                .then((url) => {
                    console.log(url)
                    setImageUrls(prevUrls => ({ ...prevUrls, [customer.customer_phone]: url }));
                })
                .catch((error) => {
                    console.error('Error fetching image:', error);
                    setImageUrls(prevUrls => ({ ...prevUrls, [customer.customer_phone]: '' })); // Handle missing images or errors
                });
        });
    }, [Customers]);

    console.log(imageUrls);

    //style={{backgroundColor:getRandomColor()}}
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); // Red: 0-255
        const g = Math.floor(Math.random() * 256); // Green: 0-255
        const b = Math.floor(Math.random() * 256); // Blue: 0-255
        return `rgb(${r},${g},${b})`; // Return RGB color string
    }


    return (
        <div className="m-1 pr-5 pl-5 pb-5 bg-white rounded-xl overflow-auto no-scrollbar max-h-[500px]">
            {
                Customers.map((cus, i) => {
                    return <div key={i} onClick={() => { props.setCustomer(cus); props.disable(); }} className={`cursor-pointer`}>
                        <Card className={`mb-4 h-fit`} >
                            <CardHeader dir="rtl" className="flex justify-between">
                                <div className="min-w-[80px]">
                                    <Avatar size="lg" isBordered color="primary" src={imageUrls[cus.customer_phone] || 'default_image_url_here'}/>
                                </div>
                                <div className="flex w-full">
                                    <div className="w-[40px]">
                                        {cus.customer_id}
                                    </div>
                                    <div>
                                        {cus.customer_name}
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                })
            }
        </div>

    )
}

//customer_phone