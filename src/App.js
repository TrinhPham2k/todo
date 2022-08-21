import React, { useMemo, useReducer, useRef, useState } from "react";
import "./styles.css";

// const initState

function App() {
  // const [job, dispatch] = useReducer(reducer,initState );
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const ref = useRef();
  const handleAdd = () => {
    setJobs([...jobs, job]);
    // setJobs((prev)=> [...prev, job])
    setJob(" ");
    ref.current.focus();
  };
  const handelDel = (index) => {
    let newjob = [...jobs];
    newjob.splice(index, 1);
    setJobs(newjob);
  };

  return (
    <>
      <input
        ref={ref}
        value={job}
        onChange={(e) => setJob(e.target.value)}
        type="text"
        placeholder="nhap ten cong viec"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li>
              {job} <p onClick={() => handelDel(index)}>delete</p>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
