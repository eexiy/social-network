import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status || '--------------'} </span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} 
                        onBlur={deactivateEditMode} 
                        autoFocus={true}
                        value={status} ></input>
                </div>}
        </div>
    )
}

export default ProfileStatus