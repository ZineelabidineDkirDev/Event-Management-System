import React, { useState } from 'react'
import "./addEvents.css"
import Map from './Map'
import Select from 'react-select'
export const AddEvents = () => {


  const [form,setform]=useState({
    "id": 0,
  "startDateTime": "2024-02-05T13:00:11.053Z",
  "endDateTime": "2024-02-05T13:00:11.053Z",
  "location": "string",
  "horizontal": "string",
  "vertical": "string",
  "description": "string",
  "isOnline": true,
  "maxAttendees": 0,
  "isActive": true,
  "organizerId": 0,
  "eventId": 0
  })
  const [location,setlocation]=useState({})
  const position=(location)=>{
    setlocation(location)
    console.log(location)
    setform({...form,Vertical:location.lng})
    setform({...form,Horizontal:location.lng})
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setform({...form,Image:file})
  };

  const SponsorSelect = () => {
  const [Sponsor, setSponsor] = useState([]);

  const handleSponsorClick = (selectedOption) => {
    // Check if the selected option is not already in the selected options
    if (!Sponsor.some((option) => option.value === selectedOption.value)) {
      setSponsor([...Sponsor, selectedOption]);
    }
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
    backgroundColor: "rgba(255, 255, 255, 0.367)",
    color: 'black',
    borderRadius: "3px",
    border: 0,
    width:"95%",
    boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.309)",
    margin: "10px 5%",
    }),
  };
  return (
    <div  >
      <Select
        id="multiSelect"
        isMulti
        styles={customStyles}
        options={options}
        value={Sponsor}
        onChange={(selectedValues) => setform({...form,Sponsor:selectedValues})}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        onOptionClick={handleSponsorClick} 
        placeholder="Sponsors"
      />

      
      <div>
        
      </div>
    </div>
  );
};

const OrgianizerSelect = () => {
  const [Orgianizer, setOrgianizer] = useState([]);

const handleOrgianizerClick = (selectedOption) => {
  // Check if the selected option is not already in the selected options
  if (!Orgianizer.some((option) => option.value === selectedOption.value)) {
    setOrgianizer([...Orgianizer, selectedOption]);
  }
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];

const customStyles = {
  control: (provided) => ({
    ...provided,
  backgroundColor: "rgba(255, 255, 255, 0.367)",
  color: 'black',
  borderRadius: "3px",
  border: 0,
  width:"95%",
  boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.309)",
  margin: "10px 5%",
  }),
};
return (
  <div  >
    <Select
      id="multiSelect"
      isMulti
      styles={customStyles}
      options={options}
      value={Orgianizer}
      onChange={(selectedValues) => {setform({...form,OrganizerId:selectedValues})}}
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      onOptionClick={handleOrgianizerClick} 
      placeholder="Orgianizers"
    />

    
    <div>
      
    </div>
  </div>
);
};
const [platform,setplatform]=useState()
const handle=(e)=>{
  const {name,value}=e.target
  setform({...form,[name]:value})
}

const handlesubmit=(e)=>{
e.preventDefault();
console.log(form)
}
  return (<>

    <form onSubmit={handlesubmit}>
    <div className="eventheader">
      <button onClick={()=>{setform({...form,IsOnline:false})}} className="typeheaderl" style={{color:form.IsOnline? 'white':'white',background:form.IsOnline? 'orange':'rgb(201, 200, 200)'}}>
        Face-to-face
      </button>
      <button onClick={()=>{setform({...form,IsOnline:true})}} className="typeheaderr" style={{color:form.IsOnline? 'white':'white',background:form.IsOnline? 'rgb(201, 200, 200)':'orange'}}>
        Remote
      </button>
    </div>
    <div className='eventspage'>
      <div className="eventform">
        <input className='eventinput' type="text" name='EventName' onChange={handle} placeholder='Event name' />
        {
          !form.IsOnline? <input className='eventinput' type="text" name="Location" onChange={handle} placeholder='Event URL' />:
        <>
        <input className='eventinput' type="text" name='Location' onChange={handle} placeholder='Event address' />
        <input className='eventinput' type="number" onChange={handle} placeholder='Price (MAD)' />
        </>
        }
        <input className='eventinput' type="number" onChange={handle} placeholder='Max attendees' />
        <OrgianizerSelect/>
        <SponsorSelect/>
        <textarea className='eventinput' type="text" onChange={handle} placeholder='description' name='Description' style={{resize:"vertical",maxHeight:"100px",minHeight:"50px"}} />
        <div className="datesevent">
          <div className='eventlabel'>Start date time</div>
          <div className='eventlabel'>End time</div>
        </div>
        <div className="datesevent">
          <input className='eventinputi' type="datetime-local" /><div style={{width:"10px"}}></div>
          <input className='eventinputi' type="time" />
        </div>
          
      </div>
      <div className="eventmap">
        
        {!form.IsOnline? <Map position={position}/> 
        :<div> 
        <div className="label">choose a platform</div>
        <div className='platforms'>
          <div className="platform"><img src="teams.png" style={{opacity:form.Platform=='teams'?'1':'0.7'}} alt="" width="100%" height="100%" onClick={()=>{setform({...form,platform:"teams"})}} /></div>
          <div className="platform"><img src="meet.webp" style={{opacity:form.Platform=='meet'?'1':'0.7'}} alt="" width="100%" height="100%" onClick={()=>{setform({...form,platform:"meet"})}} /></div>
          <div className="platform"><img src="zoom.png" style={{opacity:form.Platform=='zoom'?'1':'0.7'}} alt="" width="100%" height="100%" onClick={()=>{setform({...form,platform:"zoom"})}} /></div>
        </div>
        
        </div>
        } 
        
      </div>
    </div>
    <input type="file" style={{visibility:"hidden"}} name="" accept="image/*"  onChange={handleFileChange} id="filess" />
        <label htmlFor="filess" style={{width:"100%"}} >
          <div className='imageupload'>
           
            </div>
      </label>
      
  <button type="submit" className="addspeakerbtn">Submit</button>
    </form>
    </>
  )
}
