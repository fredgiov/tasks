import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    const requested = parseInt(request);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Attempts to gain:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequest(event.target.value);
                    }}
                />
            </Form.Group>
            <div>Attempts left: {attempts}</div>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    if (!isNaN(requested)) {
                        setAttempts(attempts + requested);
                    }
                }}
            >
                gain
            </Button>
        </div>
    );
}
