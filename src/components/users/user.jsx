import React from "react";
import { NavLink } from "react-router-dom";
import noPhoto from '../../assets/images/noPhoto.jfif';
import styles from './user.module.css';

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (

        <div className={styles.blockUser}>
            <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : noPhoto}
                                className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div className={styles.name}>
                        <div>{user.name}</div>
                    </div>
                    <div>
                        {user.followed
                            ? <button className={styles.follow}
                                disabled={followingInProgress
                                    .some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button>
                            : <button className={styles.follow}
                                disabled={followingInProgress
                                    .some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>}
                    </div>
                </span>

            </div>
        </div>
    )
}

export default User