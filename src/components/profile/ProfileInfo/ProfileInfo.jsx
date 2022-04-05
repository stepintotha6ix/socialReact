import React, { useState } from "react";
import s from './ProfileInfo.module.css'
import Loader from "../../command/loader/loader";
import noPhoto from './../../../assets/images/noPhoto.jfif'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./profileDataForm";



const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [menuActive, setMenuActive] = useState(false)


  if (!profile) {
    return <Loader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }



  return (
    <div>
      <div className={s.DescInfo}>
        <div className={s.photoBlock}>
          <img className={s.photo} src={profile.photos.large || noPhoto} />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div className={s.descBlock}>
          <div className={s.mainInfo}>
            <div className={s.fullName}>{profile.fullName}</div>
            <div className={s.statusBlock}>
              <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
          </div>
          <div className={s.aboutMeBlock}>
            <nav>
              <div className={s.moreInfo} onClick={() => setMenuActive(!menuActive)}>More info</div>
            </nav>
            <Menu profile={profile}
              isOwner={isOwner} saveProfile={saveProfile}
              active={menuActive} setActive={setMenuActive} />
          </div>
        </div>
      </div>

    </div>
  )
}
const Menu = ({ profile, isOwner, saveProfile, active, setActive }) => {

  let [editMode, setEditMode] = useState(false)

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }
  return (
    <div className={active ? s.menu.active : s.menu}>
      <div className={s.menuContent}>
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    <div>
      <div className={s.moreInfoItem}>
        <div className={s.moreInfoItemName}>
          Looking for a job:
        </div>
        {profile.lookingForAJob ? 'yes' : 'no'}

      </div>
      <div className={s.moreInfoItem}>
        <div className={s.moreInfoItemName}>
          My professional skills:
        </div>
        {profile.lookingForAJobDescription}

      </div>
      <div className={s.moreInfoItem}>
        <div className={s.moreInfoItemName}>
          About me:
        </div>
        {profile.aboutMe}


      </div>
      
    </div>
    {isOwner && <div>
      <button onClick={goToEditMode}>edit</button>
    </div>
    }
  </div>
}


export default ProfileInfo