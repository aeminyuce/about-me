import Grid from '@ui/Grid';
import Item from '@ui/Item';
import Skeleton from '@ui/Skeleton';

export default function () {
    return (
        <Grid.Row className='ui-sm-no-p ui-items-c ui-p-30-v'>
            <Grid.Col size={12}>

                <Skeleton clear h='92px' aspect='square' className='ui-squircle' />

                <Skeleton w='80%' h='42px' className='ui-m-30-v ui-round ui-hide-sm' />
                <Item as='div' className='ui-p-1-b ui-m-30-v ui-round-1st ui-shown-sm'>
                    <Skeleton repeat={3} w='96%' h='45px' vGap={5} />
                </Item>

                <Grid.Row fluid='sm' className='iconslist-images ui-item-c ui-m-20-b ui-squircle-2nd'>
                    <Grid.Col size={6}>
                        <Skeleton aspect='square' />
                    </Grid.Col>

                    <Grid.Col size={6}>
                        <Skeleton aspect='square' />
                    </Grid.Col>
                </Grid.Row>

                <Item as='div' className='ui-m-25-b ui-round-1st ui-hide-md'>
                    <Skeleton w='96%' h='29px' className='ui-m-15-b' />
                    <Skeleton w='60%' h='29px' />
                </Item>
                <Item as='div' className='ui-p-3-b ui-m-25-b ui-shown-md ui-round-1st'>
                    <Skeleton repeat={5} w='96%' h='24px' vGap={15} />
                </Item>

                <Item as='div' className='ui-m-20-b ui-round-1st'>
                    <Skeleton w='40%' h='27px' className='ui-hide-md' />
                    <Skeleton w='80%' h='27px' className='ui-shown-md' />
                </Item>

                <Grid.Row className='ui-m-30-b'>
                    <Grid.Col size={4} offset={4}>
                        <Skeleton w='100%' h='48px' className='ui-m-20-b ui-round' />
                    </Grid.Col>
                </Grid.Row>

                <Item as='div' className='ui-p-30-t ui-m-20-b ui-round-1st'>
                    <Skeleton w='30%' h='27px' className='ui-hide-md' />
                    <Skeleton w='80%' h='27px' className='ui-shown-md' />
                </Item>
                <Item as='div' className='ui-p-30-b ui-round-1st'>
                    <Skeleton repeat={5} w='172px' h='81px' gap={1} />
                </Item>

                <Item as='div' className='ui-p-30-t ui-m-20-b ui-round-1st'>
                    <Skeleton w='30%' h='27px' className='ui-hide-md' />
                    <Skeleton w='80%' h='27px' className='ui-shown-md' />
                </Item>
                <Item as='div' className='ui-p-30-b ui-round-1st'>
                    <Skeleton repeat={19} w='172px' h='81px' gap={1} />
                </Item>

                <Item as='div' className='ui-p-30-t ui-m-20-b ui-round-1st'>
                    <Skeleton w='30%' h='27px' className='ui-hide-md' />
                    <Skeleton w='80%' h='27px' className='ui-shown-md' />
                </Item>
                <Item as='div' className='ui-p-30-b ui-round-1st'>
                    <Skeleton repeat={27} w='172px' h='81px' gap={1} />
                </Item>
            </Grid.Col>
        </Grid.Row>
    )
}