import Box from '@ui/Box';
import Item from '@ui/Item';

export default function () {
    return (
        <Box as='div' alignItems='l' className='bg-bubbles ui-full-w ui-set-absolute ui-set-t ui-circle-1st'>
            <Item as='span' className='ui-theme-greenYellow ui-fill-dark-100' />
            <Item as='span' className='ui-theme-blueGreen ui-fill-dark-100' />
            <Item as='span' className='ui-item-r ui-theme-redPurple ui-fill-dark-100' />
        </Box>
    )
}
