import React from 'react'
import { useParams } from 'react-router-dom'

export default function Survey() {

    const {id} = useParams();

    console.log(id)

  return (
    <div>Survey id - {id}</div>
  )
}

