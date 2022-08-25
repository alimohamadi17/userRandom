import React, { useEffect, useState } from 'react'
import './user.css'
import FetchUser from './FetchUser'

import { useAppDispatch, useAppSelector } from '../redux/Hooks/hook'
import { fetchUsers } from '../redux/userList'




const Users = () => {



  const [open, setOpen] = useState(false)
  const { loading, userList } = useAppSelector(state => state.userLists)
  const dispatch = useAppDispatch()

  //for fetching data at first time without any condition
  useEffect(() => {


    dispatch(fetchUsers())
    setOpen(true)

    return () => {
      fetchUsers()
    }
  }, [dispatch])//[] for only run once


  //for fetching data after click button
  const handleUser = () => {
    setOpen(!open)
    !open ? dispatch(fetchUsers()) : null

  }
  //end of handleUser


  return (
    <>
      <div className="user-list" data-testid='userTest'>


        {(open) && (<FetchUser loading={loading} userList={userList} />)}

        <button className='btn' onClick={handleUser}>click For : {open ? "Hide User" : "Show User"}</button>
      </div>
    </>
  )
}

export default Users;