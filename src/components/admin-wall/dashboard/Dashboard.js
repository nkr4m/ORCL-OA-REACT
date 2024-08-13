import React, { useEffect, useState } from 'react'
import { fetchSurveys } from '../../../core/apis/Apis'
import SurveyCard from './SurveyCard'
export default function Dashboard() {

  const [surveys, setSurveys] = useState([])


  useEffect(() => {

    fetchAllSurvey();
  }, [])


  const fetchAllSurvey = async () => {
    await fetchSurveys().then((res) => {
      console.log(res.data)
      setSurveys(res.data.content);
    })
  }


  return (

    <>

      

      <div className="container">

      <div class="col-12">
        <h1 class="display-5 fw-bold">Creator Wall</h1>

        <div class="mb-2">
          <h1 class="display-5 fw-bold text-primary">Creator Dashboard. </h1>
          <p class="m-0">Create/Edit survey(s) of your choice.</p>
        </div>
      </div>


        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            surveys.length > 0 ?
              surveys.map((survey) => {
                return (
                  <div key={survey.surveyId} className="col-md-3">
                    <SurveyCard survey={survey}></SurveyCard>
                  </div>)
              })
              : <p>No Survey found!</p>
          }

        </div>
      </div>


    </>


  )
}
