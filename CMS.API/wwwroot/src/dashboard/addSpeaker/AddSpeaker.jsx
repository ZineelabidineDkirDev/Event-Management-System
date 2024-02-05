import React, { useEffect, useState } from 'react'
import './AddSpeaker.css'
import axios from 'axios'
import { PiLinkedinLogo } from 'react-icons/pi'
import { FaXTwitter } from 'react-icons/fa6'
export const AddSpeaker = () => {
 const [form,setform]=useState({
  Name:'',
  Bio:'',
  Company:'',
  Position:'',
  LinkedInProfile:'',
  TwitterProfile:'',
  Image:null,
  DesactivateAccount:'',
  ImageName:''
 })

 const [speaker,setspeaker]=useState([])
 useEffect(()=>{
  axios.get('http://localhost:5164/api/speaker').then((res)=>{
    setspeaker(res.data)
    console.log(res.data)
  })
 },[])
 const handle=(e)=>{
  const {name,value}=e.target
  setform({...form,[name]:value})
 }

 const handleimage=(e)=>{
  setform({...form,Image:e.target.files[0]})
 }

 const handlecheck=(e)=>{
  setform({...form,DesactivateAccount:e.target.checked})
 }

 const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(form)
  axios.post("http://localhost:5164/api/Speaker",form).then((res)=>{
    console.log(res.data)
  })
 }
  return (
  <div className='addSpeaker'>
    <form onSubmit={handlesubmit}>
    <input type="file" name="" id="imagefile" style={{visibility:"hidden"}} onChange={handleimage} />
  <div style={{display:'flex'}}>
    <div className="speakerinputs" style={{width:"70%"}}>
      <input type="text" className="eventinput" onChange={handle} value={form.Name} name='Name' placeholder='Name' />
      <input type="text" className="eventinput" onChange={handle} value={form.Bio} name='Bio' placeholder='Bio'/>
      <input type="text" className="eventinput" onChange={handle} value={form.Company} name='Company' placeholder='Company'/>
      <input type="text" className="eventinput" onChange={handle} value={form.Position} name='Position' placeholder='Position'/>
      <input type="text" className="eventinput" onChange={handle} value={form.LinkedInProfile} name='LinkedInProfile' placeholder='LinkedInProfile'/>
      <input type="text" className="eventinput" onChange={handle} value={form.TwitterProfile} name='TwitterProfile' placeholder='TwitterProfile'/>
      <input type="checkbox" className="eventcheck" onChange={handlecheck}  name='DesactivateAccount' placeholder='DesactivateAccount'/>DesactivateAccount
    </div>
    <div className="speakerimg" style={{width:"30%",padding:"0 5% ",height:"fit-content",display:"flex",alignItems:'center',justifyContent:"center"}}>
      <label htmlFor="imagefile" style={{margin:"auto",display:'block'}}>
        <img src="imageprofil.png" style={{width:"100%"}} alt="" />
        <p style={{color:"black",fontWeight:"700",textAlign:"center"}}>Add profile image</p>
      </label>
    </div>
  </div>
  <button type="submit" className="addspeakerbtn">Submit</button>
    </form>

    <div className='cards'>
      {
        speaker.map((speaker,index)=>{
          return <div to={`/speakerdetails/${speaker.id}`} className="card" key={index}>
          <div className="social">
            <a href={speaker.LinkedInProfile} target="_blank" style={{color:'white'}}><PiLinkedinLogo className='slinkedin'/></a>
            <a href={speaker.TwitterProfile} target="_blank" style={{color:'white'}}><FaXTwitter className='sx'/></a>
          </div>
          <img className='speakerimg' src={speaker.imageName} width="100%" height="100%" alt="" />
          <div className="black"></div>
          <div className="speakername">{speaker.name} <br /><span className='speaker'>speaker</span></div>
        </div>
        })
      }
        
    </div>
  </div>
  )
}
