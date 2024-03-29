import { Carousel } from 'react-bootstrap';

const carouselItems = [
    {
        title: '5 Best API Testing Tools in 2024',
        image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/31d2cf5f019e191927cd243b3ab75efb?_a=AQAEufR',
        description: `This post discusses the concept of APIs, API testing,
        and highlights the 5 Best API Testing Tools for 2024.`,
    },
    {
        title: 'Flutter takes the stage at GDC',
        image: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/8845c55d867d7d250d67fae97a4002b8?_a=AQAEufR',
        description: `Flutter made its debut at the Game Developers Conference
        (GDC) in San Francisco, showcasing the progress made in
        building games with Flutter. Over 15,000 new mobile
        games have been developed using Flutter in the last
        year.`,
    },
    {
        title: 'A Guide to Building CLI Tools in JavaScript',
        image: 'https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsxusox6rx0607ruxg3yc.gif',
        description: `This guide provides step-by-step instructions on
        building CLI tools in JavaScript, including setting up
        the development environment, crafting the CLI
        application, testing and linking the tool locally,
        enhancing functionality, and sharing the tool on npm`,
    },
];

function MyCarousel() {
    return (
        <Carousel>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={item.image} alt="First slide" />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MyCarousel;
