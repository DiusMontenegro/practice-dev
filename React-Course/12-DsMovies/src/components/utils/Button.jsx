import { IoOpenOutline, MdOutlineClose } from '../../imports';

const Button = ({ setIsOpen, isOpen }) => {
    return (
        <button
            className="absolute right-1 top-1 w-[16px] font-bold text-center  bg-opacity-50 text-white rounded-full z-10"
            onClick={() => setIsOpen((open) => !open)}
        >
            {isOpen ? <MdOutlineClose /> : <IoOpenOutline />}
        </button>
    );
};

export default Button;
