import Button from '@ui/Button';
import Heading from '@ui/Heading';
import Item from '@ui/Item';

export default function () {
    return (
        <Item as='div' className='ui-align-c ui-set-absolute ui-set-c'>
            <Heading as='h1' className='ui-font-8xl'>
                Server Error
            </Heading>
            <Item as='p' className='ui-font-xl ui-m-30-b'>Oops! Server error</Item>
            <Button className='ui-circle' to='/'>Go to Home</Button>
        </Item>
    )
}