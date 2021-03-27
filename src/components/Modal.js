function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.closeModalHandler}>
        Cancel
      </button>
      <button className="btn" onClick={props.closeModalHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
