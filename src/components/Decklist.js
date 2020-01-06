import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Decklist extends React.PureComponent {

    //this class gets a decklist name from its props, loads up all the decks from the 'decklists' folder, and displays the one with the name it was given
    render() {

        const { deckFile } = this.props;

        const deckData = require('../../decklists/' + deckFile);
        let mainKeys = Object.keys(deckData.main);
        let midpoint = Math.floor(mainKeys.length / 2);
        let mainHalf1 = mainKeys.slice(0, midpoint);
        let mainHalf2 = mainKeys.slice(midpoint, mainKeys.length);

        return (
            <div style={{background:'whitesmoke', padding:"15px"}}>
                <Typography variant="h5">{deckData.name}</Typography>
                <hr/>
                <Grid container alignItems="flex-start" wrap="nowrap" justify="space-around" spacing={8}>
                    <Grid item xs zeroMinWidth>
                        <div>
                        <Typography variant="h5">Maindeck</Typography>
                        <List>
                            {mainHalf1.map( (it, index) => {
                                return (<Typography noWrap >{deckData.main[it]} {it}</Typography>)
                            }
                            )}
                        </List>
                        </div>
                    </Grid>
                    <Grid item xs wrap="nowrap">
                        <div>
                        <Typography variant="h5">&#10240;</Typography>
                        <List>
                            {mainHalf2.map( (it, index) => {
                                return (<Typography noWrap>{deckData.main[it]} {it}</Typography>);
                            }
                            )}
                        </List>
                        </div>
                    </Grid>
                    <Grid item xs wrap="nowrap" >
                        <div>
                        <Typography variant="h5">Sideboard</Typography>
                        <List>
                            {Object.keys(deckData.side).map( (it, index) => {
                                return (<Typography noWrap>{deckData.side[it]} {it}</Typography>);
                            }
                            )}
                        </List>
                        </div>
                    </Grid>
                </Grid>
                <hr/>
            </div>
        );
    }

}