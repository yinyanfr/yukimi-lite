import React from 'react'
import ReactMarkdown from 'react-markdown'

const Article = ({text}) => {

    return (
        <ReactMarkdown className="md">{text}</ReactMarkdown>
    )
}

export default Article
