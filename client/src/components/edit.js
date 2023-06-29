import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   projectName: "",
   position: "",
   startTime: "",
   endTime: "",
   level: "",
   PPR: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
    projectName: form.projectName,
     position: form.position,
     startTime: form.startTime,
     endTime: form.endTime,
     PPR: form.PPR,
     level: form.level,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5050/record/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update tnpm install --save react-zoom-pan-pinchhe data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>

      {/*Project Name Entry Field*/}
       <div className="form-group">
         <label htmlFor="projectName">Project Name: </label>
         <input
           type="text"
           className="form-control"
           id="projectName"
           value={form.projectName}
           onChange={(e) => updateForm({ projectName: e.target.value })}
         />
       </div>

      {/*Location Entry Field*/}
       <div className="form-group">
         <label htmlFor="location">Location: </label>
         <input
           type="text"
           className="form-control"
           id="location"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>

      {/*Start Time Entry Field*/}
       <div className="form-group">
         <label htmlFor="startTime">Start Time: </label>
         <input
           type="datetime-local"
           className="form-control"
           id="startTime"
           value={form.startTime}
           onChange={(e) => updateForm({ startTime: e.target.value })}
         />
       </div>

      {/*End Time Entry Field*/}
       <div className="form-group">
         <label htmlFor="endTime">End Time: </label>
         <input
           type="datetime-local"
           className="form-control"
           id="endTime"
           value={form.endTime}
           onChange={(e) => updateForm({ endTime: e.target.value })}
         />
       </div>

      {/*PPR Entry Field*/}
       <div className="form-group">
         <label htmlFor="PPR">PPR: </label>
         <input
           type="text"
           className="form-control"
           id="PPR"
           value={form.PPR}
           onChange={(e) => updateForm({ PPR: e.target.value })}
         />
       </div>

       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}