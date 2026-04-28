import * as React from 'react';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import Image from 'uilab/react/Image';
import ListGroup from 'uilab/react/ListGroup';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

// assets
import { IconTrophyStar } from 'uilab-icons/react/general/trophy-star';

export default function() {
    const { themeA, api } = useStoreContext();
    const race = api?.home_featured?.race;

    return (
        <Card className='ui-round ui-shadow'>
            <Card.Side className='ui-set-relative'>
                <span className='ui-p-15 ui-set-absolute'>
                    <SvgIcon as='js' src={IconTrophyStar} size='lg' r={5} />
                    {race?.winner}
                </span>
                <Image fluid src={race?.img} aspect='landscape' className='ui-round-t' />
            </Card.Side>
            <Card.Side className='ui-color-black-50 ui-p-10-h ui-p-15-v'>
                {race?.text}
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