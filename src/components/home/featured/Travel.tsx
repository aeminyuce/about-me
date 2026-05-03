import * as React from 'react';
import Card from 'uilab/react/Card';
import Image from 'uilab/react/Image';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

export default function() {
    const { themeA, api } = useStoreContext();
    const travel = api?.home_featured?.travel;

    return (
        <Card className={`ui-round ui-shadow ${themeA}`}>
            <Grid.Row fluid='no' gap='xxs'>
                <Grid.Col size={4}>
                    <Image fluid src={travel?.img1} aspect='square' className='ui-round-l ui-no-round-bl' />
                </Grid.Col>
                <Grid.Col size={4}>
                    <Image fluid src={travel?.img2} aspect='square' />
                </Grid.Col>
                <Grid.Col size={4}>
                    <Image fluid src={travel?.img3} aspect='square' className='ui-round-r ui-no-round-br' />
                </Grid.Col>
            </Grid.Row>
            <Grid.Row fluid='sm' gap='lg' className='ui-color-black-50 ui-font-readable ui-align-c'>
                <Grid.Col size={6}>{travel?.text1}</Grid.Col>
                <Grid.Col size={6}>{travel?.text2}</Grid.Col>
            </Grid.Row>
        </Card>
    )
}