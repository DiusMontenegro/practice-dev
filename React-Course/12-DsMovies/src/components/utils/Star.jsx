import { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const Star = ({
    maxStars = 5,
    color = '#FACC14',
    size = 20,
    className,
    messages = [],
    defaultRating = 0,
}) => {
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState(0);

    function handleRating(value) {
        setRating(value);
    }

    return (
        <div className={className}>
            <div className="flex gap-[2px] h-[26px] items-center">
                {Array.from({ length: maxStars }, (_, i) => (
                    <span
                        role="button"
                        key={i}
                        onClick={() => handleRating(i + 1)}
                        onMouseEnter={() => setTempRating(i + 1)}
                        onMouseLeave={() => setTempRating(0)}
                        className={`text-[${color}] text-[${size}px]`}
                    >
                        {tempRating < i + 1 && rating < i + 1 ? (
                            <FaRegStar />
                        ) : (
                            <FaStar />
                        )}
                    </span>
                ))}
            </div>
            <div
                className={`text-[${color}] text-[${
                    size / 1.5
                }px] font-semibold text-center w-[80px]`}
            >
                {messages.length === maxStars
                    ? messages[tempRating ? tempRating - 1 : rating - 1]
                    : tempRating || rating || ''}
            </div>
        </div>
    );
};

export default Star;
