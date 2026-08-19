import React from 'react';
import Button from '@ui/Button';
import Card from '@ui/Card';
import Image from '@ui/Image';
import Item from '@ui/Item';
import ListGroup from '@ui/ListGroup';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';

// assets
import { IconTrophyStar } from '@icon/general/trophy-star';

export default function () {
    const { themeB, api } = useStoreContext();
    const race = api?.home_featured?.race;

    return (
        <Card className={`home-race ui-round ui-shadow ${themeB}`}>
            <Card.Side className='ui-set-relative'>
                <Item as='span' className='ui-color-white ui-p-10-v ui-p-15-h ui-m-20 ui-round ui-set-absolute ui-set-b ui-fill-light-200 ui-bg-blur'>
                    <SvgIcon as='js' src={IconTrophyStar} size='md' r={10} />
                    {race?.winner}
                </Item>
                <Image lazy fluid='all' src={race?.img} aspect='landscape' className='ui-round-t' />
            </Card.Side>
            <Card.Side className='ui-color-black-50 ui-p-15'>
                <Item as='p' className='ui-font-line-2'>{race?.text}</Item>
            </Card.Side>
            <Card.Side>
                <ListGroup>
                    <ListGroup.List>
                        <ListGroup.Item className='ui-p-15-h'>
                            <Button nostyle href='#'>{race?.url1}</Button>
                        </ListGroup.Item>
                        <ListGroup.Item className='ui-p-15-h'>
                            <Button nostyle href='#'>{race?.url2}</Button>
                        </ListGroup.Item>
                    </ListGroup.List>
                </ListGroup>
            </Card.Side>
            <Card.Side className='ui-p-15'>
                <Button block className='ui-round ui-fill-dark-100'>
                    {race?.more}
                </Button>
            </Card.Side>
        </Card>
    )
}