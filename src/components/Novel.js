import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import Article from './Article'
import { useHistory, useLocation } from "react-router-dom"


const Novel = ({novel}) => {

    const [page, setPage] = useState(1)
    const [text, setText] = useState(novel[page-1].content)
    const [title, setTitle] = useState("")

    const history = useHistory()
    const location = useLocation()
    const paths = location?.pathname.split("/")

    useEffect(() => {
        if(paths?.length){
            setTitle(paths[1])
            setPage(parseInt(paths[2]))
        }
    }, [paths])

    useEffect(() => {
        setTimeout(() => {
            setText("")
        }, 0)
        setTimeout(() => {
            setText(novel[page-1].content)
        }, 50)
    }, [page, novel])
    

    return (
        <div>
            <Article text={text} />
            <div className="pagination">
                <Pagination 
                    current={page}
                    total={novel.length}
                    pageSize={1}
                    showQuickJumper
                    onChange={page => {
                        setPage(page)
                        history.push(`/${title}/${page}`)
                    }}
                />
            </div>
        </div>
    )
}

export default Novel
