import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";
import "./App.css";

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  function hideModalHandler() {
    setIsModalOpen(false)
  }
  function showModalHandler() {
    setIsModalOpen(true)
  }


  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isModalOpen={isModalOpen} onCloseModal={hideModalHandler}/>
      </main>
    </>

  );
}

export default App;
