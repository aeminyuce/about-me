import * as React from 'react';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import Image from 'uilab/react/Image';
import Heading from 'uilab/react/Heading';
import ListGroup from 'uilab/react/ListGroup';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

export default function() {
    const { themeA, api } = useStoreContext();
    const race = api?.home_featured?.race;

    return (
        <Card className='ui-round ui-shadow'>
            <Card.Side>
                <Image fluid src={race?.img} aspect='landscape' className='ui-round-t' />
            </Card.Side>
            <Card.Side className='ui-p-10-h ui-p-20-v'>
                <Heading as='h4'>{race?.title}</Heading>
                <p className='ui-color-black-50'>{race?.text}</p>
            </Card.Side>
            <Card.Side>
                <ListGroup>
                    <ListGroup.List>
                        <ListGroup.Item>
                            <a href='#'>{race?.url1}</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href='#'>{race?.url2}</a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href='#'>{race?.url3}</a>
                        </ListGroup.Item>
                    </ListGroup.List>
                </ListGroup>
            </Card.Side>
            <Card.Side className='ui-p-10'>
                <Button block='all' className={`ui-round ${themeA} ui-fill-dark-100`}>
                    {race?.more}
                </Button>
            </Card.Side>
        </Card>
    )
}