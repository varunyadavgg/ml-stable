import React,{useEffect,useState} from "react";
import "./eventimage.css"
import 'bootstrap/dist/css/bootstrap.css';
function Events(){

    const[Events,setEvents]=useState([{
        title:'',
        content:''
    }])

    useEffect(()=>{
        fetch("/events").then(res=>{
            if (res.ok){
                return res.json()
            }
        }).then(jsonRes =>setEvents(jsonRes));
    })

    return <div className="container">
        <h1>Event page </h1>

        {Events.map(Event => 
            <div>
            <br />
            <br />
            <br />
            
            <h1>{Event.title}</h1><div >
            <a href={Event.content} ><img className=" imagex" src={Event.content} alt="the event"></img></a>
            </div></div>
            )}




    </div>
}

export default Events;
