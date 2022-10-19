import { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber === 1
                ? <button disabled={true} className={s.paginatorBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
                : <button disabled={false} className={s.paginatorBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }
            {
                pages
                    .filter(page => page >= leftPortionNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <div key={page} className={s.paginatorNum}>
                            <span className={currentPage === page ? s.paginator__selectedPage : ''}
                                onClick={(e) => { onPageChange(page) }}>{page}</span>
                        </div>
                    })
            }
            {portionCount > portionNumber &&
                <button className={s.paginatorBtn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}

export default Paginator;