const Contact = ({ contacts }) => {
    return (
        <div className="w-full rounded-md mt-4 lg:mt-0 h-[430px] overflow-y-auto">
            {contacts.map((contact, index) => (
                <div key={index} className=" h-auto rounded-md p-2 font-bold flex mb-2 text-white bg-black bg-opacity-40 hover:bg-gray-800 hover:bg-opacity-55 hover:cursor-pointer">
                    <div className="p-4 rounded-full w-[55px] text-center bg-1 text-white mr-5">{contact.name.split(' ').map((word) => word[0]).join('')}</div>
                    <div className="flex flex-col">
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contact;
