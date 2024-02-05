import React from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'
import { AddEvents } from './addevents/addEvents'
import './dashboard.css'
import { AddSponsor } from './addSponser/addSponsor'
import { AddCategory } from './addCategory/addCategory'
import { AddSpeaker } from './addSpeaker/AddSpeaker'
 const Dashboard = ({handleAdmin}) => {
  return (
    <BrowserRouter>
    <div className="dashboard">
        <div className="sidebar">
          <Link className='imglink' to="/addevents"><img src="logo.png" alt="" width="100%"/></Link>
          <Link className='dashlink' to="/addspeaker">speakers</Link>
          <Link className='dashlink' to="/addevents">events</Link>
          <Link className='dashlink' to="/addsponsors">sponsors</Link>
          <Link className='dashlink' to="/addCategory">Category</Link>
          <Link className='dashlink' to="/" onClick={()=>{handleAdmin(false)}} style={{color:"red"}}>Log out</Link>
        </div>
        <div className='content'>
        <Route>
          <Route path='/addspeaker' component={AddSpeaker} />
          <Route path='/addevents' component={AddEvents} />
          <Route path='/Addsponsors' component={AddSponsor} />
          <Route path='/addcategory' component={AddCategory} />
        </Route>
        </div>
    </div>
      </BrowserRouter>
  )
}
export default Dashboard;