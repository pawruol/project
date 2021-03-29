import React from 'react';
import './App.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

function App() {
    const classes = useStyles(

    );

  return (
    <div className="App">
    </div>
  );
}

export default App;
