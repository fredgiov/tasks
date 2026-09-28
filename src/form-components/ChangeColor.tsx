import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((option: string) => (
                <Form.Check
                    inline
                    key={option}
                    type="radio"
                    name="color-choice"
                    id={`color-${option}`}
                    label={option}
                    value={option}
                    checked={color === option}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    display: "inline-block",
                    padding: "8px",
                    marginTop: "8px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
