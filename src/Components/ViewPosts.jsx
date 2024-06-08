import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPosts = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response) => {
                changeData(response.data)
            }
        ).catch().finally()
    }   
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        {data.map(
                            (value, index) => {
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div class="card">
                                        <div class="card-body">

                                            <p class="card-text">{value.userId}</p>
                                            <p class="card-text">{value.id}</p>
                                            <p class="card-text">{value.title}</p>

                                        </div>
                                    </div>

                                </div>
                            }
                        )

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPosts