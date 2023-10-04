import { FunctionComponent, useState } from 'react';
import {
    Box,
    TextField,
    Button
  } from '@mui/material';

export const SpoilsCalculator: FunctionComponent<unknown> = () => {
    const [deckSize, setDeckSize] = useState(0);
    const [cardsLeft, setCardsLeft] = useState(0);
    const [lifeTotal, setLifeTotal] = useState(0);
    const [avgLifeLoss, setAvgLifeLoss] = useState(0);
    const [deathPct, setDeathPct] = useState(0);

    // in-place Durstenfeld shuffle
    function shuffle(array: Array<number>) {
        for (let i = array.length - 1; i > 0; i-=1) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function calculate(): void {
        const numIters = 10000;
        let avg = 0.0;
        let deathCounter = 0.0;

        for (let i = 0; i < numIters; i+=1) {
            let cardsSeen = 0;
            let deathFlag = false;
            const deck = [...Array(deckSize).keys()]
            shuffle(deck);
            while (cardsSeen < deckSize) {
                cardsSeen += 1;
                if (cardsSeen > lifeTotal) {
                    deathFlag = true;
                }

                if (deck[cardsSeen] < cardsLeft) {
                    avg += cardsSeen;
                    break;
                }
            } 
            
            if (deathFlag) {
                deathCounter += 1;
            }
        }

        avg /= numIters;
        setAvgLifeLoss(avg);
        setDeathPct((deathCounter/numIters)*100);
    }

    return (
        <Box>s
            <TextField
                label="Deck size"
                id="deck-size"
                value={deckSize}
                onChange={t => setDeckSize(+t)}
            />
            <TextField
                label="Cards left"
                id="cards-left"
                value={cardsLeft}
                onChange={t => setCardsLeft(+t)}
            />
            <TextField
                label="Life total"
                id="life-total"
                value={lifeTotal}
                onChange={t => setLifeTotal(+t)}
            />
            <Button variant="contained"
                onClick={calculate}
                >Calculate</Button>
            <TextField
                disabled
                label="Avg. life loss"
                id="avg-life-loss"
                value={avgLifeLoss}
            />
            <TextField
                disabled
                label="Death Percent"
                id="death-pct"
                value={deathPct}
            />
        </Box>
    );
};
