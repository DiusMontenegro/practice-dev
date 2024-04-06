import { Accordion, AccordionItem } from '@nextui-org/react';
import data from './constants/data';

const App = () => {
    return (
        <>
            <Accordion
                variant="splitted"
                className="w-[600px] mx-auto pt-[80px]"
            >
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        aria-label="Accordion 1"
                        title={item.title}
                        className="mb-1"
                    >
                        {item.description}
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default App;
