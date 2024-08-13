import React from 'react'

export default function SurveyCard({survey}) {

    const {title, surveyId, description, createdOn} = survey

    return (
        <div className="card h-100 shadow-sm p-2 mb-2 bg-body-tertiary rounded border-0">
            <div className="card-body">
                <h4>{title}</h4>
                <hr/>
                {description}
            </div>
        </div>
    )
}
