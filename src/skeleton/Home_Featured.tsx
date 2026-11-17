import Grid from '@ui/Grid';
import Skeleton from '@ui/Skeleton';

export default function () {
    return (
        <Grid.Row className='ui-round-2nd'>

            <Grid.Col lg={2} size={3} md={6}>
                <Skeleton w='100%' h='405px' />
            </Grid.Col>

            <Grid.Col lg={3} size={4} md={6}>
                <Skeleton w='50%' h='133px' className='ui-round-l ui-m-20-b' />
                <Skeleton w='calc(50% - 1px)' h='133px' className='ui-m-1-l ui-m-20-b ui-round-r' />
                <Skeleton w='100%' h='253px' />
            </Grid.Col>

            <Grid.Col lg={3} size={5} md={6}>
                <Skeleton w='100%' h='299px' className='ui-m-20-b' />
                <Skeleton w='100%' h='86px' />
            </Grid.Col>

            <Grid.Col size={4} md={6}>
                <Skeleton w='100%' h='405px' />
            </Grid.Col>

            <Grid.Col lg={8} size={8} md={12}>
                <Skeleton w='100%' h='378px' />
            </Grid.Col>

            <Grid.Col size={4} md={6}>
                <Skeleton w='100%' h='378px' />
            </Grid.Col>

            <Grid.Col size={4} md={6}>
                <Skeleton repeat={2} vGap={20} w='100%' h='70px' />
                <Skeleton w='100%' h='217px' className='ui-m-20-t' />
            </Grid.Col>

            <Grid.Col lg={5} size={4} md={6}>
                <Skeleton w='100%' h='395px' />
            </Grid.Col>

            <Grid.Col lg={3} size={4} md={6}>
                <Skeleton w='100%' h='395px' />
            </Grid.Col>

        </Grid.Row>
    )
}