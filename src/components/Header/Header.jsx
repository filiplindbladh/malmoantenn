import React from "react";
import "./Header.css";
import HeaderLogo from "../../img/Gradient_wave_filil.png";

const Menu = ({ events }) => {
    // might wanna remove this if we're not gonna use it
    // if (events) {
    //     const latest = [];
    //     latest.push(events.filter(item => item.website));
    //     const sorted = () => {
    //         if (latest.length > 1) {
    //             return sortByDate(latest[0], latest[1])[0];
    //         } else {
    //             return latest[0];
    //         }
    //     };
    //     if (latest) {
    //         console.log("lwl", sorted());
    //     }
    // }
    // const sortByDate = arr => {
    //     arr.sort(function(a, b) {
    //         return (
    //             Number(new Date(a.readableDate)) -
    //             Number(new Date(b.readableDate))
    //         );
    //     });
    //     console.log(arr);
    //     return arr[0];
    // };
    return (
        <div className="Header">
            <img className="Float" src={HeaderLogo} alt="headerlogo" />
            <div className="Page-container">
                <h1 className="Heading-large">Malmö Antenn</h1>
                <p>A web based radio from Sweden.</p>
            </div>
        </div>
    );
};

export default Menu;
