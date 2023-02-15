import { useState, useEffect } from "react";
import {
  useUpdateOutreachMutation,
  useDeleteOutreachMutation,
} from "./outreachApiSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import { STATUS } from "../../config/status";

const EditOutreachForm = ({ outreach, users }) => {
  const { isAdmin } = useAuth();

  const [updateOutreach, { isLoading, isSuccess, isError, error }] =
    useUpdateOutreachMutation();

  const [
    deleteOutreach,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
  ] = useDeleteOutreachMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState(outreach.title);
  const [text, setText] = useState(outreach.text);
  const [status, setCompleted] = useState(outreach.status);
  const [userId, setUserId] = useState(outreach.user);

  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      setCompleted("");
      navigate("/dash/outreach");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const onCompletedChanged = (e) => setCompleted(e.target.value);

  const canSave = [title, text, userId ].every(Boolean) && !isLoading;

  const onSaveOutreachClicked = async (e) => {
    if (canSave) {
      await updateOutreach({
        id: outreach.id,
        user: userId,
        title,
        text,
        status,
      });
    }
  };

  const onDeleteOutreachClicked = async () => {
    await deleteOutreach({ id: outreach.id });
  };

  const list = Object.values(STATUS).map((status) => {
    return (
      <option key={status} value={status}>
        {" "}
        {status}
      </option>
    );
  });

  const created = new Date(outreach.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const updated = new Date(outreach.updatedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  // const status = users.map

  const options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.user_id}
      </option>
    );
  });

  const errClass = isError || isDelError ? "errmsg" : "offscreen";
  const validTitleClass = !title
    ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"
    : "";
  const validTextClass = !text
    ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"
    : "";

  const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

  let deleteButton = null;
  if (isAdmin) {
    deleteButton = (
      <button
        className="icon-button-black"
        title="Delete"
        onClick={onDeleteOutreachClicked}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    );
  }

  const content = (
    <>
      <img
        className=" w-1/2 h-screen float-right mix-blend-multiply object-cover "
        src={require("../../img/background.jpg")}
        alt="background"
      ></img>
      <p className={errClass}>{errContent}</p>

      <form
        className="h-full w-1/2 grid gap-3 px-20 text-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-5xl  font-bold pb-2 text-black mb-4 font-sans">
            Edit <span className="text-rose-900">Outreach </span>
            <span className="text-3xl text-gray-600">#{outreach.ticket}</span>
          </h1>
        </div>
        <div className="">
          <label className="text-base align-middle" htmlFor="user_id">
            Title:
          </label>
          <input
            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full ${validTitleClass}`}
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            value={title}
            onChange={onTitleChanged}
          />
        </div>

        <div>
          <label className="text-base" htmlFor="text">
            Description:
          </label>
          <textarea
            className={`bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full h-40 ${validTextClass}`}
            id="text"
            name="text"
            value={text}
            onChange={onTextChanged}
          />
        </div>
        <div className="">
          <p className="text-gray-500 text-sm">Created: {created}</p>
          <p className="text-gray-500 text-sm">Updated: {updated}</p>
        </div>
        <div className="w-full grid">
          <label className="text-base align-middle" htmlFor="user_id">
            Status:
          </label>
          <select
            id="status"
            name="status"
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2"
            value={status}
            onChange={onCompletedChanged}
          >
            {list}
          </select>
        </div>

        <div className="w-full grid">
          <label className="text-base align-middle" htmlFor="user_id">
            Assign To:
          </label>
          <select
            id="user_id"
            name="user_id"
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-1/2"
            value={userId}
            onChange={onUserIdChanged}
          >
            {options}
          </select>
        </div>
        <div className="grid-cols-2 flex justify-evenly">
          <div className="text-center">
            <button
              className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              title="Save"
              onClick={onDeleteOutreachClicked}
              disabled={!canSave}
            >
              Delete
            </button>
          </div>
          <div className="text-center">
            <button
              className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              title="Save"
              onClick={onSaveOutreachClicked}
              disabled={!canSave}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );

  return content;
};

export default EditOutreachForm;
