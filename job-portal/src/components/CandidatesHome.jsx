/* This component is used to render the list of all users using the API URL*/

import React  from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
var apiURL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";



export default class Candidates extends React.Component{
  

    constructor()
    {
        super();
        
       this.state ={
                error : null ,
                isLoaded: false,
                items: null,
                searchName:"",
                shortlistedCandidates:[],
                rejectedCandidates:[],
            }
        
    }
    async fetchUserInfo()
    {
      await fetch(`${apiURL}`)
      .then(res => res.json())
      .then(
        (result) => {
    
            this.setState({isLoaded:true,items:result})
         
          console.log(JSON.stringify(result))
        },
        (error) => {
            this.setState({isLoaded:true,error:error})
         
        }
      )
    
    }
  
handleSearch =(event)  =>
  {
     
    
    this.setState({
        searchName:event.target.value
    }, () => { 
        console.log(this.state.searchName) 
    if(this.state.searchName !== "")
    {
        var itemLower;
        for(var item of this.state.items)
        {

    //alert(item.name+"   "+ searchName)

    itemLower = item.name.toString().toLowerCase();
    document.getElementById(item.id).style.display = "block"; 
        if(!(itemLower.includes(this.state.searchName))){
            document.getElementById(item.id).style.display = "none"; 
        }
     
    }
   
    }
    
       
    });
    
   
}

shortlist= (candidateName) =>
{
  alert(candidateName)
  this.setState({shortlistedCandidates:this.state.shortlistedCandidates.concat(candidateName)})
}


componentDidMount()
{
 this.fetchUserInfo();
}


render(){

    if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!this.state.isLoaded) {
        return <div>Loading...</div>;
      } else if(this.state.items === null) {
        return <div>Loading...</div>;
      }
      else{
        return (
          <div className="parentDiv">
          
  <header>
    <h2>Job Portal</h2>
  </header>
  <section>
    <nav>

    <Link to={{ pathname:"/shortlisted",
  state: {

    candidateDetails: this.state.shortlistedCandidates
  }
}}><Button>Shorlisted</Button></Link>
    <br></br>
    <br></br>
    <Link to={{ pathname:"/rejected",
  state: {

    candidateDetails: this.state.shortlistedCandidates
  }
}}><Button>Rejected</Button></Link>
    </nav>
    <article>
    <label>Search Candidate</label>    
    <input type="text"  placeholder="Enter candidate Name" onChange={this.handleSearch}></input>
   
    <div className="flex-container">
   
      {
      (this.state.items !==null && this.state.items.length > 0) ? 
      
        this.state.items.map(item => {
           
   
            
      return(
          

          <div id={item.id} className="card">
          <img className="cardImg" src={item.Image} alt="Profile Pic not available"/>
          <h6>{item.name}</h6>
         
          <p>        <Link to={{ pathname: `/candidate/:${item.id}`,
  state: {
    prevRoute: "/home",
    candidateDetails: item
  }
}}><button>View More</button></Link></p>
        </div>
    
  ) 
  })
   : <div> No users available.</div>
      
    }
  
  </div></article>
  </section>
  
  <footer>
    <p></p>
  </footer>
  
  </div>
       
        );
      }
    
  }
}

  

