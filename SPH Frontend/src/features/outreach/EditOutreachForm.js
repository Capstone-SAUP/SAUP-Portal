import { useState, useEffect } from "react"
import { useUpdateOutreachMutation, useDeleteOutreachMutation } from "./outreachApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"

const EditOutreachForm = ({ outreach, users }) => {

    const { isManager, isAdmin } = useAuth()

    const [updateOutreach, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateOutreachMutation()

    const [deleteOutreach, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteOutreachMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState(outreach.title)
    const [text, setText] = useState(outreach.text)
    const [completed, setCompleted] = useState(outreach.completed)
    const [userId, setUserId] = useState(outreach.user)

    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setTitle('')
            setText('')
            setUserId('')
            navigate('/dash/outreach')
        }

    }, [isSuccess, isDelSuccess, navigate])

    const onTitleChanged = e => setTitle(e.target.value)
    const onTextChanged = e => setText(e.target.value)
    const onCompletedChanged = e => setCompleted(prev => !prev)
    const onUserIdChanged = e => setUserId(e.target.value)

    const canSave = [title, text, userId].every(Boolean) && !isLoading

    const onSaveOutreachClicked = async (e) => {
        if (canSave) {
            await updateOutreach({ id: outreach.id, user: userId, title, text, completed })
        }
    }

    const onDeleteOutreachClicked = async () => {
        await deleteOutreach({ id: outreach.id })
    }

    const created = new Date(outreach.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
    const updated = new Date(outreach.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}

            > {user.user_id}</option >
        )
    })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
    const validTextClass = !text ? "form__input--incomplete" : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''


    let deleteButton = null
    if (isManager || isAdmin) {
        deleteButton = (
            <button
                className="icon-button-black"
                title="Delete"
                onClick={onDeleteOutreachClicked}
            >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        )
    }

    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit Outreach #{outreach.ticket}</h2>
                    <div className="form__action-buttons">
                        <button
                            className="icon-button-black"
                            title="Save"
                            onClick={onSaveOutreachClicked}
                            disabled={!canSave}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        {deleteButton}
                    </div>
                </div>
                <label className="form__label" htmlFor="outreach-title">
                    Title:</label>
                <input
                    className={`form__input ${validTitleClass}`}
                    id="outreach-title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label className="form__label" htmlFor="outreach-text">
                    Text:</label>
                <textarea
                    className={`form__input form__input--text ${validTextClass}`}
                    id="outreach-text"
                    name="text"
                    value={text}
                    onChange={onTextChanged}
                />
                <div className="form__row">
                    <div className="form__divider">
                        <label className="form__label form__checkbox-container" htmlFor="outreach-completed">
                            WORK COMPLETE:
                            <input
                                className="form__checkbox"
                                id="outreach-completed"
                                name="completed"
                                type="checkbox"
                                checked={completed}
                                onChange={onCompletedChanged}
                            />
                        </label>

                        <label className="form__label form__checkbox-container" htmlFor="outreach-user_id">
                            ASSIGNED TO:</label>
                        <select
                            id="outreach-user_id"
                            name="user_id"
                            className="form__select"
                            value={userId}
                            onChange={onUserIdChanged}
                        >
                            {options}
                        </select>
                    </div>
                    <div className="form__divider">
                        <p className="form__created">Created:<br />{created}</p>
                        <p className="form__updated">Updated:<br />{updated}</p>
                    </div>
                </div>
            </form>
        </>
    )

    return content
}

export default EditOutreachForm