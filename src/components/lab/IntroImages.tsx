import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import type { IntroImagesProps } from '../../models/Lab';

export default function IntroImages() {
    const { apiResponse } = useStoreContext();

    return (
        <Grid.Row fluid='no' gap='sm' className='images ui-m-auto ui-p-30-t ui-m-30-v ui-block-2nd ui-round-2nd ui-shadow-2nd ui-hover-shadow-2nd ui-hover-scale-more-2nd ui-ease-2nd-layout'>

            {apiResponse?.lab?.intro?.images.map((item: IntroImagesProps) => (
                <Grid.Col key={item.img} size={'7x'} xs={3}>
                    <Button noease nostyle href={`https://dribbble.com/shots/${item.url}`} target='_blank'>
                        <img className='ui-img-fluid' src={`/images/lab/aeminyuce-${item.img}`} />
                    </Button>
                </Grid.Col>
            ))}

        </Grid.Row>
    )
}