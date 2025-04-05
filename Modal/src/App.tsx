import { useState } from "react";
import Modal from "./components/Modals/Modal";

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <main>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        It is modal window!
      </Modal>
    </main>
  );
};

export default App;
