import SplitForm from './SplitForm';

const Content = ({ selectedFriend, onSplit, setSelectedFriend }) => {
    return (
        <div className="col-span-6 py-4 px-8 text-gray-200">
            {selectedFriend ? (
                <SplitForm
                    selectedFriend={selectedFriend}
                    setSelectedFriend={setSelectedFriend}
                    onSplit={onSplit}
                    key={selectedFriend.id}
                />
            ) : (
                <h2 className="text-center text-2xl font-semibold py-20">
                    SELECT A FRIEND YOU&apos;D TO SHARE WITH THE BILL
                </h2>
            )}
        </div>
    );
};

export default Content;
