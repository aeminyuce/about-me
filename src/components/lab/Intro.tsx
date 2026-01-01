import * as React from 'react';
import Grid from 'uilab/react/Grid';
import Spacer from 'uilab/react/Spacer';

// misc
import { useStoreContext } from '../../states/StoreContext';
import MyAvatar from '../common/MyAvatar';

export default function() {
    const { apiResponse } = useStoreContext();
    const intro = apiResponse?.lab?.intro;

    const title = intro?.title;
    const subtitle = intro?.subtitle;
    const images = intro?.images;

    const leadText = intro?.leadText;
    const textPart1 = intro?.textPart1;
    const textPart2 = intro?.textPart2;
    const textPart3 = intro?.textPart3;

    return (
        <div className='ui-align-c ui-p-30-v ui-md-no-p'>
            <MyAvatar />
            {title &&
                <h1 className='ui-h1 ui-font-light ui-m-30-v'>{title}</h1>
            }
            {subtitle &&
                <h3 className='ui-h3 ui-font-bold ui-m-30-b ui-theme-greenYellow ui-text'>{subtitle}</h3>
            }

            <Spacer size={30} />

            <Grid.Row fluid='no' gap='sm' className='images ui-m-auto ui-m-30-b ui-round-2nd ui-shadow-2nd'>

                {images.map((path: string) => (
                    <Grid.Col key={path} size={'7x'}>
                        <img className='ui-img-fluid' src={path} />
                    </Grid.Col>
                ))}

            </Grid.Row>

            <div className='ui-m-30-h ui-sm-no-m'>
                {leadText &&
                    <p className='ui-font-22 ui-font-readable ui-p-30 ui-sm-no-p ui-theme-yellow ui-text'>
                        {leadText}
                    </p>
                }
                {(textPart1 || textPart2 || textPart3) &&
                    <p className='ui-font-18 ui-font-readable ui-p-30 ui-sm-no-p ui-m-30-h'>
                        {textPart1 && textPart1}
                        <br /><br />
                        {textPart2 && textPart2}
                        <br /><br />
                        {textPart3 && textPart3}
                    </p>
                }
            </div>
        </div>
    )
}