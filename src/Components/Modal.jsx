import PropTypes from 'prop-types';
import './Modal.css';


export default function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }

  

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-header">
          <h4 className="modal-title">PDF</h4>
          <button onClick={handleClose}  className="close-button">&times;</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,         
  onClose: PropTypes.func.isRequired,      
  children: PropTypes.node,           
};
