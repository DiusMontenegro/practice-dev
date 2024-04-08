import TextExpander from './TextExpander';

const App = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <TextExpander>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi fugit magni cum tenetur quia aliquam debitis. Id
                blanditiis culpa dignissimos.
            </TextExpander>

            <TextExpander
                collapseButtonText="Collapse Text"
                expandButtonText="Show Text"
                buttonColor="red"
                expand={true}
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
                debitis similique et accusantium sequi odit nesciunt doloremque
                ipsum possimus voluptatem aut officiis quae, enim in sint? Dolor
                aspernatur inventore quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Esse sunt eum alias corporis
                numquam eligendi facere blanditiis, voluptate placeat non
                corrupti culpa, commodi vitae doloribus velit consequuntur id
                suscipit enim!
            </TextExpander>

            <TextExpander buttonInline={false} className="box">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis nesciunt natus praesentium culpa iste. Ab quisquam
                deserunt explicabo eius non, tempore qui similique ratione sint,
                animi ipsam laborum! Nisi, sint aspernatur! Quia vero corporis
                ducimus sequi, mollitia, vitae unde a voluptas laborum illo,
                recusandae sint dicta libero pariatur fugit enim.
            </TextExpander>
        </div>
    );
};

export default App;
