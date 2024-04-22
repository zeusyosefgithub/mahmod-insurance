import { useEffect, useState } from "react";
import LoadingSpinner from "./loadingSpin";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { MohamadFireStore } from "./firebase";


export const GetDataByCondition = (myCollection, value1, value2, value3) => {
    const [list, setList] = useState([]);
    const colle = collection(MohamadFireStore, myCollection);
    const condition = where(value1, value2, value3);

    useEffect(() => {
        const q = query(colle, condition);
        const unsubscribe = onSnapshot(q, (snap) => {
            setList(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
        return () => unsubscribe();
    }, [myCollection, value1, value2, value3]);

    return list;
};