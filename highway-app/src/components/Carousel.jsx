import React from "react";
import Mariem from "./images/review1.png";
import Malek from "./images/review2.png";
import Hanene from "./images/review3.png";
import "./styles/Carousel.css";

var RepeatModule = React.createClass({
    getDefaultProps: function () {
        return {
            Persons: [{
                "Name": "Malek Sghairi",
                "Path": "Mariem",
                "Testimony": "Highway happened fast and unexpectedly, yet it was one of the best decisions I made this Summer. Opening up to the world and looking for opportunities to study abroad has been one of the main goals I am focusing on, and Highway made it possible. The team was the best combination of serious and fun, and it was really comfortable having a lesson from you room. This opportunity also allowed me to meet people who studied with Highway and managed to achieve their goals which gave me motivation to go forward and to work harder everyday."
            },
            {
                "Name": " Mariem Msilini",
                "Path": "Malek",
                "Testimony": "I've always wanted to broaden my horizons and study abroad, but I constantly held myself back because I thought the process was too complicated.  When I accidentally discovered Highways, it was an opportunity to get started, to ask questions, and to give my self a chance. Highway paved the way for my beginning. I soon started to realize that enough research can unveil the confusing parts of the process and that asking the right questions can ultimately be the key to unlock all the challenging parts. Whether it is the great tutors or the amazing university guide, I felt I was surrounded by genuinely invested individuals. I got my start at Highway, I hope you get lucky too!"
            }, {
                "Name": " Hanene Bergaoui",
                "Path": "Hanene",
                "Testimony": "Preparing for the SAT as an international student was not an easy task and especially that I intend to apply to US colleges. Although the session only lasted three and a half months, I feel now that I know more and that I am more informed on how to approach colleges thanks to the amazing tips that I received during the session and even afterward.Becoming a student at Highway didn't restrain me from establishing friendships with the tutors, they all are very friendly and almost our age.besides, the classes were very engaging and I always went back home with a spark of motivation given from the tutors."
            },]
        };
    },
    render: function () {
        // Path to the person image 
        var listItems = this.props.Persons.map(function (person) {
            return (
                <div>
                    <img src={"person.Path"} alt="BigCo Inc. logo" />
                </div>
            );


        });


    },
    GetPersonsName: function () {
        return (
            <div>
                <h3 key="{person.Name}"></h3>
            </div>
        );
    },
    GetPersonTestimony: function () {
        return (
            <div>
                <p key="{person.Testimonie}"></p>
            </div>
        );
    }
});

export default getDefaultProps;
