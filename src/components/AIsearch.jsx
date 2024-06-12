import { useSelector } from "react-redux";

function AIsearch() {
    const showAIsearch = useSelector(store => store.AIshow.showSearch)
    console.log(showAIsearch)
    return <div 
        className={
            `flex gap-5 my-10 absolute z-20 p-10 bg-gray-500 rounded top-5 left-72 transition-transform ease-in-out duration-200 delay-0
            ${showAIsearch ? "-translate-y-0" : "-translate-y-48"}`
        }>
        <input type="text" className="border-white bg-black text-white  px-5 py-2"/>
        <button className="text-white bg-black px-5 py-2 rounded">Search</button>
    </div>;
}

export default AIsearch;