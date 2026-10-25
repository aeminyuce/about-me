import Button from '@ui/Button';
import Card from '@ui/Card';
import Item from '@ui/Item';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';

// assets
import { IconChef } from '@icon/kitchen/chef';
import { IconPlate } from '@icon/kitchen/plate';
import { IconCup } from '@icon/kitchen/cup';
import { IconCoffee } from '@icon/kitchen/coffee';
import { IconForkKnife } from '@icon/kitchen/fork-knife';
import { IconMitten } from '@icon/kitchen/mitten';

export default function () {
    const { themeA, api } = useStoreContext();
    const foods = api?.home_featured?.foods;

    return (
        <Card className={`ui-p-15 ui-round ui-shadow-sm ${themeA}`}>
            <Card.Side className='ui-items-c ui-m-15-b'>
                <Item as='p' className='ui-font-ellipsis ui-p-2-t ui-p-2-b'>{foods?.food}</Item>
            </Card.Side>
            <Card.Side className='ui-icons-no-opacity ui-icons-lg'>
                <Button.Wrapper type='holder' as='div' ease='1st' className='ui-m-2-b ui-round-t-1st'>
                    <Button noease multi vertical gap={5} className='ui-p-10'>
                        <SvgIcon as='js' src={IconChef} className='ui-text' />
                        {foods?.foodBtn1}
                    </Button>
                    <Button noease multi vertical gap={5} className='ui-p-10'>
                        <SvgIcon as='js' src={IconPlate} className='ui-text' />
                        <Item as='span' className='ui-font-ellipsis'>{foods?.foodBtn2}</Item>
                    </Button>
                    <Button noease multi vertical gap={5} className='ui-p-10'>
                        <SvgIcon as='js' src={IconCup} className='ui-text' />
                        {foods?.foodBtn3}
                    </Button>
                </Button.Wrapper>
                <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-b-1st'>
                    <Button noease multi vertical gap={5} className='ui-p-10'>
                        <SvgIcon as='js' src={IconCoffee} className='ui-text' />
                        {foods?.foodBtn4}
                    </Button>
                    <Button noease multi vertical gap={5} className='ui-p-10'>
                        <SvgIcon as='js' src={IconForkKnife} className='ui-text' />
                        {foods?.foodBtn5}
                    </Button>
                    <Button noease multi vertical gap={5} className='ui-p-10'>
                        <SvgIcon as='js' src={IconMitten} className='ui-text' />
                        {foods?.foodBtn6}
                    </Button>
                </Button.Wrapper>
            </Card.Side>
        </Card>
    )
}