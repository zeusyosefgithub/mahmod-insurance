'use client';
import Image from "next/image";
import { MohamadFireStore } from "./FireBase/firebase";
import { addDoc,collection } from "firebase/firestore";
import { Button } from "@nextui-org/react";

export default function Home() {

  const add = async() => {
    await addDoc(collection(MohamadFireStore,'test'),{test:1});
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={add}>123</Button>
    </main>
  );
}
