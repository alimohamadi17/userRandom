import React, { FC, useEffect, useState } from 'react'
import { fetchUsers } from '../redux/userList'
import { useAppSelector, useAppDispatch } from '../redux/Hooks/hook'
import './user.css'
import SkeletonText from './Skeleton/skeletonText'





const Users: FC = () => {

  const [btnText, setBtnText] = useState('Hide Users');
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { loading, userList } = useAppSelector(state => state.userLists)


  //for fetching data at first time without any condition
  useEffect(() => {
    dispatch(fetchUsers())
    setOpen(true)
  }, [dispatch])//[] for only run once


  //for fetching data after click button
  const handleUser = () => {
    setOpen(!open)
    if (!open) {
      dispatch(fetchUsers())
      setBtnText("Hide User")

    }
    if (open) {
      loading
      setBtnText("Show User")
    }
  }
  //end of handleUser


  return (
    <>
      <div className="user-list" data-testid='userTest'>


        {open &&

          <div className='container'>{
            loading ? <SkeletonText /> :

              userList.map(user =>
                <div key={user.id.value}>
                  <div>
                    <img className='img' src={user.picture.large} alt="user" />
                  </div>
                  <div className='userItem'>
                    <div className='userText'>First Name : <b>{user.name.first}</b> </div>
                    <div className='userText'>Last Name : <b>{user.name.last}</b></div>
                    <div className='userText'>Country :  <b>{user.location.country}</b></div>
                  </div>

                </div>
              )}
          </div>
        }

        <button className='btn' onClick={handleUser}>click For : {btnText}</button>
      </div>
    </>
  )
}

export default Users;