import { Card, Button } from 'react-bootstrap';

const cardList = [
    {
        title: 'Breaking Down Next.js 14',
        image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/c29f3db42fa4bb04669316106c6e6a39?_a=AQAEufR',
        description: `Next.js 14 introduces new features such as server components, dynamic image generation, improved data fetching, caching strategies, and metadata management.`,
        link: 'https://focusreactive.com/breaking-down-next-js-14/?ref=dailydev',
    },
    {
        title: 'Git commands every senior software developer needs to know',
        image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/caacb2275cf7496f0fe83a4e9ab74635?_a=AQAEufR',
        description: `Learn advanced git commands that can help you improve productivity and optimize your workflow.`,
        link: 'https://optimizedbyotto.com/post/advanced-git-commands/?ref=dailydev',
    },
    {
        title: '5 Rust Project Ideas For Absolutely Beginners Devs 🦀',
        image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/0ebaca0756fcdabcd0577557bd12a275?_a=AQAEufR',
        description: `The post suggests 5 Rust project ideas for beginners that cover topics such as file compression, reading from CSV and JSON files, and writing JSON data.`,
        link: 'https://eleftheriabatsou.hashnode.dev/5-rust-project-ideas-for-absolutely-beginners-devs?ref=dailydev',
    },
    {
        title: '100 Days of Code - The Complete Python Course',
        image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/025bc670dd8821996bb0f6bad9807d28?_a=AQAEufR',
        description: `Learn programming basics, master Python, and build projects in this 100-day course. Join a fun and supportive community and get coding instantly with Replit.`,
        link: 'https://replit.com/learn/100-days-of-python?ref=dailydev',
    },
];

const Cards = () => {
    return (
        <div className="row my-4 text-dark ">
            {cardList.map((item, index) => (
                <div className="col-md-3 mb-4" key={index}>
                    <Card className='h-100'>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <a href={item.link}>
                                <Button variant="primary">Read More </Button>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Cards;
