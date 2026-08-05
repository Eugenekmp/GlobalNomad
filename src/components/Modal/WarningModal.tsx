import Button from "../Button/Button";
import Modal from "./Modal";
import type { WarningModalProps } from "./type";

const WarningModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  buttonTextLeft = "아니오",
  buttonTextRight = "네",
}: WarningModalProps) => {
  return (
    <Modal
      className="flex flex-col gap-5 items-center justify-center"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex flex-col justify-center items-center">
        <Modal.Icon src="/warningIcon.svg" alt="경고 아이콘" />
        <Modal.Message>{message}</Modal.Message>
      </div>

      <Modal.Action>
        <Button
          variant="whitenGray"
          height="custom"
          className="w-28 h-10 px-5 py-1 md:px-10 md:py-3 text-[14px] rounded-xl md:w-34 md:h-[47px] md:py-[14px]"
          onClick={onClose}
        >
          {buttonTextLeft}
        </Button>
        <Button
          variant="mainBlue"
          height="custom"
          className="w-28 h-10 px-5 py-1 md:px-10 md:py-3 text-[14px] rounded-xl md:w-34 md:h-12 md:py-[14px] "
          onClick={onConfirm}
        >
          {buttonTextRight}
        </Button>
      </Modal.Action>
    </Modal>
  );
};

export default WarningModal;
