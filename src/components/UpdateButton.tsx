type Props = {
  onClick: () => void;
  isClickedUpdateButton: boolean;
};

function UpdateButton({ onClick, isClickedUpdateButton }: Props) {
  return (
    <button
      onClick={onClick}
      className={`update-button ${isClickedUpdateButton ? "ing" : ""}`}
    >
      {isClickedUpdateButton ? "title 수정 완료" : "title 수정"}
    </button>
  );
}

export default UpdateButton;
