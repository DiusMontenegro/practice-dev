import CreateUser from '../features/user/CreateUser';

function Home() {
    return (
        <div className="my-10 px-4 text-center">
            <h1 className="mb-8 text-xl font-bold md:text-3xl">
                The best pizza.
                <br />
                <span className="text-accent">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            <CreateUser />
        </div>
    );
}

export default Home;
