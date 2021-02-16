import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import Article from './Article'

const Novel = ({novel}) => {

    const [page, setPage] = useState(1)
    

    return (
        <div>
            <Article text={novel[page-1].content} />
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
