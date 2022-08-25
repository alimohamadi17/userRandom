import React from 'react'
import { IUser } from "../redux/userList"



const FetchUser = (props: any) => {
    const { loading, userList } = props


    return (
        <>
            <div className='container'>
                {(loading
                ) ? (
                    "Loading..."
                ) : (userList &&
                    userList.map(({ id, name, location, picture }: IUser) =>
                        <div key={id.value}>
                            <div>
                                <img className='img' src={picture.large} alt="user" />
                            </div>
                            <div className='userItem'>
                                <div className='userText'>First Name : <b>{name.first}</b> </div>
                                <div className='userText'>Last Name : <b>{name.last}</b></div>
                                <div className='userText'>Country :  <b>{location.country}</b></div>
                            </div>

                        </div>
                    )
                )}
            </div>

        </>
    )
}

export default FetchUser