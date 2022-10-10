import s from './Users.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div className={s.users__num}>
                {
                    pages.map(page => {
                        return <span className={currentPage === page && s.users__selectPage}
                            onClick={(e) => { onPageChange(page) }}>{page}</span>
                    })
                }
            </div>
    )
}

export default Paginator;