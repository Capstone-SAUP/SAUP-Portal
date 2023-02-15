import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewOutreachMutation } from "./outreachApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { STATUS } from "../../config/status";

const NewOutreachForm = ({ users }) => {
  const [addNewOutreach, { isLoading, isSuccess, isError, error }] =
    useAddNewOutreachMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(users[0].id);
  const [status, setCompleted] = useState("Pending");

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      setCompleted("");
      navigate("/dash/outreach");
    }
  }, [isSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const onSaveOutreachClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewOutreach({ user: userId, title, text, status });
    }
  };

  const options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.user_id}
      </option>
    );
  });

  console.log(status);

  const errClass = isError ? "errmsg" : "offscreen";
  const validTitleClass = !title
    ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"
    : "";
  const validTextClass = !text
    ? "bg-gray-50 border-2 border-rose-500 text-gray-900 text-sm rounded-lg w-full"
    : "";

  const content = (
    <>
      <img
        className=" w-1/2 h-screen float-left mix-blend-multiply object-cover "
        src={require("../../img/background.jpg")}
        alt="background"
      ></img>
      <div className="">
        <form
          className="h-full gap-3 px-20 grid text-black"
          onSubmit={onSaveOutreachClicked}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold pb-2 text-black mb-4 font-sans">
              New <span className="text-rose-900">Outreach</span>
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

          <div className="text-center m-5">
            <button
              className="text-white inline-flex bg-red-900 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              title="Save"
              disabled={!canSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <p className={errClass}>{error?.data?.message}</p>
    </>
  );

  return content;
};

export default NewOutreachForm;
