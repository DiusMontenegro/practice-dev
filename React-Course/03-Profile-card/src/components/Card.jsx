import { GiTargetShot } from 'react-icons/gi';

const Card = ({ info }) => {
    return (
        <div className="border-[2px] rounded-md shadow-lg border-[#1c1c1c] w-[250px]">
            <img src={info.image} alt={info.name} />
            <div className="p-3">
                <h1 className="font-semibold mb-2 text-lg">{info.name}</h1>
                <p className="text-xs mb-2">{info.description}</p>
                <div className="w-full p-1">
                    {info.skills.map((skill) => {
                        let skillClass = '';
                        switch (skill) {
                            case 'HTML+CSS':
                                skillClass = 'hover:bg-blue-400';
                                break;
                            case 'Javascript':
                                skillClass = 'hover:bg-yellow-400';
                                break;
                            case 'Web Design':
                                skillClass = 'hover:bg-green-400';
                                break;
                            case 'Git and Github':
                                skillClass = 'hover:bg-orange-400';
                                break;
                            case 'React JS':
                                skillClass = 'hover:bg-[#00AEEF]';
                                break;
                            case 'PHP':
                                skillClass = 'hover:bg-purple-500';
                                break;
                            case 'CodeIgniter':
                                skillClass = 'hover:bg-red-500';
                                break;
                            default:
                                break;
                        }
                        return (
                            <p
                                key={skill}
                                className={`border-[#1c1c1c] font-semibold inline-block border text-xs mx-1 mb-1 p-1 cursor-pointer hover:text-white hover:border-gray-200 rounded-sm ${skillClass}`}
                            >
                                {skill}
                                <GiTargetShot className="inline-block align-middle ml-1" />
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card;
