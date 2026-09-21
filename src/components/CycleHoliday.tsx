import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Christmas"
    | "Thanksgiving"
    | "Halloween"
    | "Independence Day"
    | "Valentine's Day";

const EMOJIS: Record<Holiday, string> = {
    "Christmas": "🎄",
    "Thanksgiving": "🦃",
    "Halloween": "🎃",
    "Independence Day": "🎆",
    "Valentine's Day": "💘"
};

const ALPHABET_ORDER: Holiday[] = (
    Object.keys(EMOJIS) as Holiday[]
).sort();

const YEAR_ORDER: Holiday[] = [
    "Valentine's Day",
    "Independence Day",
    "Halloween",
    "Thanksgiving",
    "Christmas"
];

function nextInOrder(current: Holiday, order: Holiday[]): Holiday {
    const index = order.indexOf(current);
    return order[(index + 1) % order.length];
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(ALPHABET_ORDER[0]);

    return (
        <div>
            <span>Holiday: {EMOJIS[holiday]}</span>
            <hr />
            <Button
                onClick={() => {
                    setHoliday(nextInOrder(holiday, ALPHABET_ORDER));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextInOrder(holiday, YEAR_ORDER));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
