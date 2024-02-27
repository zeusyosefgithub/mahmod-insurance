'use client';
import { collection,onSnapshot } from "firebase/firestore";
import { MohamadFireStore } from "./firebase";
import { useEffect, useState } from "react";

export default function GetData(myCollection){

    const [list,setList] = useState([]);
    const [loading,setLoading] = useState(false);
    const colle = collection(MohamadFireStore,myCollection);

    function getList(){
        setLoading(true);
        onSnapshot(colle,(snap) => {
            setList(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        })
        setLoading(false);
    }
    
    useEffect(() => {
        getList();
    },[])

    return loading ? <LoadingSpinner/> : list;
}