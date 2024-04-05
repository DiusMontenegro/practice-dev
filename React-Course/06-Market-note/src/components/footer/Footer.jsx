import Status from './Status';

const Footer = () => {
    return (
        <footer className="w-[960px] h-[60px] mx-auto">
            <Status />
            <p className="text-[10px] mt-2 text-end">
                &copy; Market List. Dius Montenegro. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
