type ModalContainerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
  const { isOpen, onClose, children } = props;

  return (
    <section
      className={`fixed w-full h-full top-0 left-0 flex justify-center items-center transition-all duration-300 z-50 px-5 lg:px-0 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute w-full h-full bg-black bg-opacity-50 top-0 left-0 -z-[1]"
        onClick={onClose}
      ></div>
      {children}
    </section>
  );
};

export default ModalContainer;
