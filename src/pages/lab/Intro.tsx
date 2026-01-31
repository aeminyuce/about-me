import * as React from 'react';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import MyAvatar from '../../components/common/MyAvatar';
import { Title, SubTitle } from '../../components/lab/IntroTitles';
import IntroImages from '../../components/lab/IntroImages';
import { LeadText, Paragraphs } from '../../components/lab/IntroTexts';

export default function() {
    const { api } = useStoreContext();
    const intro = api?.lab?.intro;

    const title = intro?.title;
    const subTitle = intro?.subTitle;
    const images = intro?.images;

    const leadText = intro?.leadText;
    const textPart1 = intro?.textPart1;
    const textPart2 = intro?.textPart2;
    const textPart3 = intro?.textPart3;

    return (
        <Grid.Row>
            <Grid.Col xl={{ size: 10, push: 1}} lg={{ size: 10, push: 1}} size={12} className='ui-align-c ui-p-30-v'>

                {title &&
                <>
                <MyAvatar />
                <Title />
                </>
                }

                {subTitle && <SubTitle />}
                {images && <IntroImages />}

                <div className='ui-m-30-h ui-sm-no-m'>
                    {leadText && <LeadText />}
                    {(textPart1 && textPart2 && textPart3) && <Paragraphs />}
                </div>

            </Grid.Col>
        </Grid.Row>
    )
}