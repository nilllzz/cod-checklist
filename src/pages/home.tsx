import * as React from "react";
import { Button } from "react-bootstrap";

export default class HomePage extends React.Component<any, any> {

    render() {
        return (
            <div>
                Hello World from routed React.
                <Button>
                    Hi
                </Button>
            </div>
        )
    }

}