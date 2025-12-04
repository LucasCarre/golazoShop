import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { app } from "./config.js"

const db = getFirestore(app);

export const getProducts = async (setItems)=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = []
        querySnapshot.forEach((doc) => {
            products.push({ ...doc.data(), id: doc.id})
        });
    setItems(products)
}

export const getCategories = async ()=>{
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = []
        querySnapshot.forEach((doc) => {
            categories.push(doc.data().name)
        });
    return categories
}

export const getProductsByCategory = async (category, setItems) => {
    const q = query(collection(db, "products"), where("category", "==", category));

    const querySnapshot = await getDocs(q);
    const products = []

        querySnapshot.forEach((doc) => {
            products.push({ ...doc.data(), id: doc.id})
        });
    setItems(products)
}

export const getSingleProduct = async (id, setDetailItem) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setDetailItem({ ...docSnap.data(), id: doc.id})
    } else {
        console.log("No such document!");
    }
}