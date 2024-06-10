import { useState,useEffect } from "react";
export default function Search(props){
    const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
   
    const[moviename,setmovie]=useState("")
    async function fetch1() {
        let API;
        if (moviename=="") {
             API=APIURL;
        }
        else{
         API=SEARCHAPI+moviename;
        }
        var response=await fetch(API);
        const data=await (response.json())

        props.getdata(data.results)
        // console.log(data.results);
    }
    useEffect(
        ()=>{
            fetch1()
        }
        ,[moviename]
    )
    const search=(e)=>{
        setmovie(e.target.value);
    }

    return(


        <div className=" w-[100vw] lg:w-[50vw] mx-auto  p-10">
            <input type="text" className="w-[100%] border p-5 rounded-xl text-[25px] focus:outline-none shadow-lg shadow-[grey]" placeholder="Search" onKeyUp={search}/>
        </div>
    )
}