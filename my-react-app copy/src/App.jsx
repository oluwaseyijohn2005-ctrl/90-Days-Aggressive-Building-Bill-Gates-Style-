import {useState} from "react"

function App(){
    const [inputSearch, setInputSearch]= useState("")
    const [all, setAll]= useState(true)
    const [available, setAvailable]= useState(false)
    
    const freelancers = [
  {
    id: 1,
    name: "John",
    role: "Frontend Developer",
    skills: ["JavaScript", "React"],
    rate: 150000,
    available: true
  },
  {
    id: 2,
    name: "Sarah",
    role: "UI Designer",
    skills: ["Figma", "Photoshop"],
    rate: 120000,
    available: false
  },
  {
    id: 3,
    name: "David",
    role: "Backend Developer",
    skills: ["Node.js", "MongoDB"],
    rate: 180000,
    available: true
  },
  {
    id: 4,
    name: "Mary",
    role: "Frontend Developer",
    skills: ["JavaScript", "React", "CSS"],
    rate: 170000,
    available: true
  },
  {
    id: 5,
    name: "Daniel",
    role: "Graphic Designer",
    skills: ["Photoshop", "Illustrator"],
    rate: 100000,
    available: false
  }
];
function handleSearch(event){
    setInputSearch(event.target.value)
}
const filteredSearch = freelancers.filter(filtered => filtered.role.toLowerCase().includes(inputSearch.toLowerCase()))

function handleAll(){
    setAll(true)
    setAvailable(false)
}



function handleavailable(){
    setAll(false)
    setAvailable(true)
} 
const availableFreelancers = freelancers.filter(filter => filter.available === true && filter.role.toLowerCase().includes(inputSearch.toLowerCase()))

function lowestRate(){
    return freelancers.reduce((current, coming)=>{
        if(current.rate < coming.rate){
            return current
        }else{
            return coming
        }
    })
}


    return (
     <>
          <h1>Freelance Searcher 💼</h1>  
       <p>Search:<input value={inputSearch} onChange={handleSearch} ></input> </p>
       <p>Total Freelancer: {filteredSearch.length} </p>
       <p>Available Freelancers: {availableFreelancers.length}</p>
       <p>Lowest Rate:{lowestRate().rate} </p>
       <p><button onClick={handleAll}>All</button> <button onClick={handleavailable}>Available</button>   </p>
       <hr/>
        {all && <>
             {filteredSearch.map(freelancer =>(
       <div key={freelancer.id}>
       <p>Name: {freelancer.name}</p>
       <p>Role: {freelancer.role}</p>
       Skills: {freelancer.skills.map((skill,index) => (<p key={index}>{skill}</p>) )}
       <p>Rate: ${freelancer.rate}</p>
       <p>{freelancer.available ? <p>🟢Available</p> : <p>🔴Unavailable</p>}</p>
       <hr/>
       </div>
       ))}
        </>}
        
        {available &&
        <>
         {availableFreelancers.map(freelancer =>(
       <div key={freelancer.id}>
       <p>Name: {freelancer.name}</p>
       <p>Role: {freelancer.role}</p>
       Skills: {freelancer.skills.map((skill,index)=> (<p key={index}>{skill}</p>))}
       <p>Rate: ${freelancer.rate}</p>
       <p>{freelancer.available && <p>🟢Available</p>}</p>
       <hr/>
       </div>
        ))}
        </>}
       
      </>  
       ) 
}
export default App