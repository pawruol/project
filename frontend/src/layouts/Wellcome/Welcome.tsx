import React from 'react';
import './Welcome.css';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Login from "../../components/welcome/Login/Login";
import Register from "../../components/welcome/Register/Register";
import {Container, Row, Col} from 'react-grid-system';
import {Switch, Route} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

function Welcome() {
    const classes = useStyles();

    return (
        <>
            <Switch>
                <Container>
                    <Row justify="center">
                        <Col sm={4}>
                            <Route exact path={'/'}>
                                <Login/>
                            </Route>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={4}>
                            <Route path={'/register'}>
                                <Register/>
                            </Route>
                        </Col>
                    </Row>
                </Container>
            </Switch>
        </>
    );
}

export default Welcome;
