import React from "react";
import User from "./user";
import Paginator from '../command/Paginator/Paginator'
import { UserType } from "../../types/types";

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    
}

const Users: React.FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>

        <Paginator currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize} />
        {
            users.map(u =>
                <User user={u}
                    unfollow={props.unfollow} follow={props.follow}
                    followingInProgress={props.followingInProgress}
                    key={u.id} />
            )
        }
    </div>
}

export default Users