import React, { useState } from "react";
import styles from './Paginator.module.css';
import cn from 'classnames'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({ totalItemsCount, pageSize,
    currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages: Array<number>  = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNubmer = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button className={styles.button} onClick={() => { setPortionNumber(portionNumber - 1) }} >{'<'}</button>}

        {pages
            .filter(p => p >= leftPortionNubmer && p <= rightPortionNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>

            })}

        {portionCount > portionNumber &&
            <button className={styles.button} onClick={() => { setPortionNumber(portionNumber + 1) }}>{'>'}</button>}

    </div>

}

export default Paginator