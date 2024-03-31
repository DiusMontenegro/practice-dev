const Contact = ({ contacts }) => {
    return (
        <div className="border">
            {contacts.map((contact, index) => (
                <div key={index}>
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                    <div>
                        {contact.name.split(' ').map((word) => word[0]).join('')}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contact;
