import React ,{useState} from "react";
import axios from "axios"

function Create(){

    const [input,setInput]=useState({
        title:'',
        content:''
    });
    function handleChange(event){
        const{name,value}=event.target;
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]:value
            }
        });

    }

    function handleClick(event){
        event.preventDefault();

        const newEvent ={
            title:input.title,
            content:input.content
        }


        axios.post('http://localhost:3001/create',newEvent)
        alert("The event is added to the database");
    }


    return <div className="container">
        <h1>Create a Event</h1>
        <form >
            <div className="form-group">
            <input onChange={handleChange} name="title" value = {input.title} autoComplete="off" className="form-control"placeholder="Event name"></input>
            </div>
            <br />
            <div className="form-group">
            <textarea onChange={handleChange} name="content" value = {input.content} autoComplete="off" className="form-control" placeholder="insert image url"></textarea>
            </div>
            <br />
            

            <button onClick={handleClick} className="btn btn-large btn-info">Add event</button>
        </form>

        

    </div>
}

export default Create;
