import React from 'react';
import { Button, Card, SvgIcon } from 'uilab';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

// assets
import { IconChef } from 'uilab-icons/react/kitchen/chef';
import { IconPlate } from 'uilab-icons/react/kitchen/plate';
import { IconCup } from 'uilab-icons/react/kitchen/cup';
import { IconCoffee } from 'uilab-icons/react/kitchen/coffee';
import { IconForkKnife } from 'uilab-icons/react/kitchen/fork-knife';
import { IconMitten } from 'uilab-icons/react/kitchen/mitten';

export default function() {
    const { themeA, api } = useStoreContext();
    const foods = api?.home_featured?.foods;

    return (
        <Card className={`ui-p-15 ui-round ui-shadow-sm ${themeA}`}>
            <Card.Side className='ui-align-c ui-m-15-b'>
                <p className='ui-font-ellipsis'>{foods?.food}</p>
            </Card.Side>
            <Card.Side className='ui-icons-no-opacity ui-icons-lg'>
                <Button.Wrapper type='holder' as='div' ease='1st' className='ui-m-1-b ui-round-t-1st ui-block-2nd'>
                    <Button noease multi className='ui-font-ellipsis ui-p-10'>
                        <SvgIcon as='js' src={IconChef} b={5} className='ui-m-auto ui-text' />
                        {foods?.foodBtn1}
                    </Button>
                    <Button noease multi className='ui-font-ellipsis ui-p-10'>
                        <SvgIcon as='js' src={IconPlate} b={5} className='ui-m-auto ui-text' />
                        {foods?.foodBtn2}
                    </Button>
                    <Button noease multi className='ui-font-ellipsis ui-p-10'>
                        <SvgIcon as='js' src={IconCup} b={5} className='ui-m-auto ui-text' />
                        {foods?.foodBtn3}
                    </Button>
                </Button.Wrapper>
                <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-b-1st ui-block-2nd'>
                    <Button noease multi className='ui-font-ellipsis ui-p-10'>
                        <SvgIcon as='js' src={IconCoffee} b={5} className='ui-m-auto ui-text' />
                        {foods?.foodBtn4}
                    </Button>
                    <Button noease multi className='ui-font-ellipsis ui-p-10'>
                        <SvgIcon as='js' src={IconForkKnife} b={5} className='ui-m-auto ui-text' />
                        {foods?.foodBtn5}
                    </Button>
                    <Button noease multi className='ui-font-ellipsis ui-p-10'>
                        <SvgIcon as='js' src={IconMitten} b={5} className='ui-m-auto ui-text' />
                        {foods?.foodBtn6}
                    </Button>
                </Button.Wrapper>
            </Card.Side>
        </Card>
    )
}