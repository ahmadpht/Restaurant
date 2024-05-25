import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Area = () => {
    const params = useParams()
    useEffect(() => {
        axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${params}`)
        .then(res => )
    })
  return (
    <div>
      
    </div>
  )
}

export default Area
