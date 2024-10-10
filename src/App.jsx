import { useState } from 'react';
import PdfViewer from 'react-pdfjs-viewonly'
import Modal from './Components/Modal';


function App() {

  const [openModal, setOpenModal] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

  const customStyles = {
    height: '70vh',
    width: '100%',
  };

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
          setFileUrl("https://pdfobject.com/pdf/sample.pdf")
        }}
      >
        Sample pdf
      </button>

      <Modal
        show={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <PdfViewer pdfUrl={fileUrl} styles={customStyles} />

      </Modal>
    </>
  )
}

export default App