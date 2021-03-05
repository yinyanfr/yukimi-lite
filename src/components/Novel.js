import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import Article from './Article'

const Novel = ({novel}) => {

    const [page, setPage] = useState(1)
    const [text, setText] = useState(novel[page-1].content)

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
                    }}
                />
            </div>
        </div>
    )
}

export default Novel
