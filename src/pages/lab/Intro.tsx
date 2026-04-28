import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { Title, SubTitle } from '../../components/lab/IntroTitles';
import { LeadText, Paragraphs } from '../../components/lab/IntroTexts';
import MyAvatar from '../../components/common/MyAvatar';
import IntroImages from '../../components/lab/IntroImages';

export default function() {
    const { api } = useStoreContext();
    const intro = api?.lab?.intro;

    return (
        <Grid.Row>
            <Grid.Col xl={{ size: 10, push: 1 }} lg={{ size: 10, push: 1 }} size={12} className='ui-align-c ui-p-30-v'>

                {intro?.title &&
                    <>
                    <MyAvatar />
                    <Title />
                    </>
                }

                {intro?.subTitle && <SubTitle />}
                {intro?.images && <IntroImages />}

                <div className='ui-m-30-h ui-sm-no-m'>
                    {intro?.leadText && <LeadText />}
                    {(intro?.textPart1 || intro?.textPart2 || intro?.textPart3) && <Paragraphs />}
                </div>

            </Grid.Col>
        </Grid.Row>
    )
}