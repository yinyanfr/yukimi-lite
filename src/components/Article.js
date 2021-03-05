import React from 'react'
import ReactMarkdown from 'react-markdown'

const Article = ({text, name}) => {

    return (
        <div>
            {
                name
                ? <h2>{name}</h2>
                : ""
            }
            <ReactMarkdown className="md">{text}</ReactMarkdown>
        </div>
    )
}

export default Article
