import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [data,ChangeData]=useState([])

    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{

          console.log(response.data)
          ChangeData(response.data)
        }
      ).catch()
    }

    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                {data.map(
                    (value,index)=>
                        {
                            return <div class="card">
                            <div class="card-header">
                              Featured
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">{value.userId}</li>
                              <li class="list-group-item">{value.id}</li>
                              <li class="list-group-item">{value.title}</li>
                              <li class="list-group-item">{value.body}</li>
                            </ul>
                          </div> 
                        
                        }
                )

                }
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default View