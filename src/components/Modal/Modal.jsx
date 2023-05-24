import "./Modal.css";
const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return <div className="Modal">{children}</div>;
};

export { Modal };

