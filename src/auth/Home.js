import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://m.media-amazon.com/images/G/01/AlexaSkills/2020/SkillsStore/DisneyStories/disney_stories_desktop_1600x500.jpg"
                alt="" />

            <div className = "home__title">
                <h4>"Hi Alexa What's Your top skills?"</h4>
            </div>  

            {/* Product id, title, price , rating, image  */}
            <div className="home__row">
                <Product
                    id="876545678"
                    title="Cursed Painting"
                    price={11.6}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ljEE5F8YL.png"
                />
                 <Product
                    id="876545678"
                    title="Song Quiz"
                    price={11.6}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71UDTEgBvaL.png"
                />
                 <Product
                    id="876545678"
                    title="Inspire Me"
                    price={11.6}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/719CKNIbSeL.png"
                />
                 <Product
                    id="876545678"
                    title="Puzzel of the day"
                    price={11.6}
                    rating={1}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wQSMB69dL.png"
                />
                <Product
                    id="345678765"
                    title="Rain Sound"
                    price={256.6}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51cmQaJByUL.png"
                />
            </div>
            <div className = "home__title">
                <h4>Premium Skills</h4>
            </div>
            <div className="home__row">
                <Product
                    id="876545678"
                    title="Trivia Battle"
                    price={11.6}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61MAaIYeszL.png"
                />
                 <Product
                    id="876545678"
                    title="Jeopardy"
                    price={11.6}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/61MAaIYeszL.png"
                />
                 <Product
                    id="876545678"
                    title="True or False"
                    price={11.6}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/611++JwteLL.png"
                />
                 <Product
                    id="876545678"
                    title="7-Minutes Workout"
                    price={11.6}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61r8zVbK-JL.png"
                />
                <Product
                    id="345678765"
                    title="Quiz of the Day"
                    price={256.6}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61dbmWlwZDL.png"
                />
            </div>
            <div className = "home__title">
                <h4>"Alexa, what are your trending skills?</h4>
            </div>
            <div className="home__row">
                <Product
                    id="876545678"
                    title="Jurassic Bark"
                    price={11.6}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Do4pwPgwL.png"
                />
                 <Product
                    id="876545678"
                    title="CBC News"
                    price={11.6}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51L0eY+2nAL.png"
                />
                 <Product
                    id="876545678"
                    title="Bed-Time Stories"
                    price={11.6}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vlXORYPTL.png"
                />
                 <Product
                    id="876545678"
                    title="Ted Talk"
                    price={11.6}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41gRbE5Uy3L.png"
                />
                <Product
                    id="345678765"
                    title="Sleep Sound"
                    price={256.6}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71yAZXjGVwL.png"
                />
            </div>
            {/* Product End */}
        </div>
    )
}

export default Home
