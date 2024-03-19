import React, { useState } from "react";
import Card from "./Card";
import { initalState } from "./data";

function Carousel()
{

    const [cards, setCards] = useState(initalState);

    const handleLeftClick = (isLeft) =>
    {
        const prevState = [...cards];
        // find next inactive card index - top
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
        // reset
        prevState.find((f) => f.active === false).active = true;
        // update
        prevState.find((f) => f.idx === nextCardIdx).active = false;
        // maximize pos
        prevState.find((f) => f.idx === nextCardIdx).pos =
            Math.max.apply(
                null,
                prevState.map(function (o)
                {
                    return o.pos;
                })
            ) + 1;

        // update state
        setCards(prevState);
    };

    const handleRightClick = () =>
    {
        const prevState = [...cards];
        // find next inactive card index - bottom
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
            .pop(1).idx;
        // minimize pos
        prevState.find((f) => f.active === false).pos =
            Math.min.apply(
                null,
                prevState.map(function (o)
                {
                    return o.pos;
                })
            ) - 1;
        // reset
        prevState.find((f) => f.active === false).active = true;
        // update
        prevState.find((f) => f.idx === nextCardIdx).active = false;

        // update state
        setCards(prevState);
    };

    return (
        <>
            <button
                className="bg-yellow-500 text-xl flex items-center justify-center cursor-pointer rounded-full w-12 h-12"
                onClick={() => handleLeftClick()}
            >
                {"<"}
            </button>
            {cards
                .filter((f) => f.active === true)
                .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                .map((card, index) => (
                    <Card key={index} prop={card.imageUrl} text={card.text} />
                ))}
            <div
                className="bg-green-500 text-xl flex items-center justify-center cursor-pointer rounded-full w-12 h-12"
                onClick={() => handleRightClick()}
            >
                {">"}
            </div>
        </>
    );
}

export default Carousel;