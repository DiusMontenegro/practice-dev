import { FaAnglesDown } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="text-[12px] text-center">
            <p className="mb-2 cursor-pointer">
                See More
                <FaAnglesDown className="ml-1 inline-block align-middle" />
            </p>
            <p className="mb-2">
                Visit our page at V88 Portugal for innovative solutions.
            </p>
            <button className="border border-[#00AEEF] font-semibold text-[#00AEEF] tracking-wider rounded-sm px-[6px] py-[4px] mb-2 hover:bg-[#00AEEF] hover:border-0 hover:text-white">
                Visit Page
            </button>
        </div>
    );
};

export default Footer;
