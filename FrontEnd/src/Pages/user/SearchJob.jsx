




import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchJob() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/api/Jobs/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
   const apply=()=>{

    window.location.replace("/user/dashboard/apply-job");




   }
    const searchItems = (searchValue) => {

        window.localStorage.setItem('apply', JSON.stringify(searchValue));

        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
          
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />SEARCH JOB 
           
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            
      <table className="table table-bordered table-striped">
         <tbody>
                            <tr key={item.id}>
                            <td>{item.occupationTittle}</td>
                            <td>{item.numberOfEmloyeesRequired}</td>
                            <td>{item.durationOfEmployment}</td>
                            <td>{item.workExperienceRequired}</td>
                            <td>{item.jobDiscription}</td>
                            <td>{item.preferedSex}</td> 
                            <td>{item.skill}</td>            
                            <td>
                                                
                   <button style={{marginLeft: "10px"}} onClick={ () => apply()} className="btn btn-success">Apply</button>
                                               
                         </td>
                          </tr>
                          </tbody>
                          </table>
      
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <table className="table table-bordered table-striped">
         <tbody>
                            <tr key={item.id}>
                            <td>{item.occupationTittle}</td>
                            <td>{item.numberOfEmloyeesRequired}</td>
                            <td>{item.durationOfEmployment}</td>
                            <td>{item.workExperienceRequired}</td>
                            <td>{item.jobDiscription}</td>
                            <td>{item.preferedSex}</td> 
                            <td>{item.skill}</td>            
                           
                          </tr>
                          </tbody>
                          </table>
      
                        )
                    })
                )}
        
        </div>
    )
}

