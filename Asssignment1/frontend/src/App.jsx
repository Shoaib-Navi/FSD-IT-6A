// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>FS Model For Node</h1>
//       <label htmlFor="text-box">Enter Text:</label>
//       <input type="text" name="text-box" />
//       <div >
//         <br />
//         <button>FS Create</button>
//         <button>FS Read</button>
//       </div>
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [fileData, setFileData] = useState("");

  const createFile = async () => {
    const res = await fetch("http://localhost:5000/fs-create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    alert(data.message);
  };

  const readFile = async () => {
    const res = await fetch("http://localhost:5000/fs-read");
    const data = await res.json();
    setFileData(data.data);
  };

  return (
    <>
      <h1>FS Model For Node</h1>

      <label>Enter Text:</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <br />
        <button onClick={createFile}>FS Create</button>
        <button onClick={readFile}>FS Read</button>
      </div>

      <h3>File Content:</h3>
      <p>{fileData}</p>
    </>
  );
}

export default App;
