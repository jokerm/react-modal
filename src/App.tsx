import React from "react";
import useModal from "components/ModalBase/useModal";
import ModalDialog from "components/Modal";
import "./App.css";

function App() {
  const { isOpen, toggleModal } = useModal();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Hello World</h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
        <button onClick={toggleModal}>Click me!</button>
      </div>
      {isOpen && (
        <ModalDialog showCloseBtn={false}>
          <header>Modal Title</header>
          <body>Modal Body</body>
          <footer>
            <button onClick={toggleModal}>Save</button>
            <button onClick={toggleModal}>Cancel</button>
          </footer>
        </ModalDialog>
      )}
    </section>
  );
}

export default App;
