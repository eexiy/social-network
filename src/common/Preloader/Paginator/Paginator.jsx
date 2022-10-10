import { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
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
            <div className={s.users__num}>
                {portionNumber > 1 && 
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
                {
                    pages
                    .filter(page => page >= leftPortionNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <span className={currentPage === page && s.users__selectPage}
                            onClick={(e) => { onPageChange(page) }}>{page}</span>
                    })
                }
                {portionCount > portionNumber && 
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            </div>
    )
}

export default Paginator;