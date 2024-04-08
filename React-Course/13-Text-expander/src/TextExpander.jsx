import { useState } from 'react';

const TextExpander = ({
    expand = false,
    collapseNumWords = 10,
    collapseButtonText = 'Show Less',
    expandButtonText = 'Show More',
    buttonColor = '#1f09cd',
    buttonInline = true,
    className,
    children,
}) => {
    const [isExpanded, setIsExpanded] = useState(expand);

    function handleClick() {
        setIsExpanded((expanded) => !expanded);
    }

    return (
        <div style={{ width: '960px', margin: '0px auto' }}>
            {isExpanded
                ? children
                : children.split(' ').slice(0, collapseNumWords).join(' ') +
                  '...'}
            <button
                className={className}
                style={{
                    cursor: 'pointer',
                    color: buttonColor,
                    display: buttonInline ? 'inline-block' : 'block',
                    marginLeft: '4px',
                }}
                onClick={handleClick}
            >
                {isExpanded ? collapseButtonText : expandButtonText}
            </button>
        </div>
    );
};

export default TextExpander;
