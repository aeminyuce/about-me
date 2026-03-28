import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import GetImage from '../../components/common/GetImage';

export default function () {
    const { api } = useStoreContext();

    const blog = api?.blog;
    const archives = blog?.archives;

    return (
        <Grid.Row>
            <Grid.Col xl={{ size: 8, push: 2}} lg={{ size: 8, push: 2}} size={12} className='ui-p-30-v'>
                <Button.Wrapper as='div' ease='1st' block='1st' className='blog-archive ui-align-l ui-round-1st'>

                    {archives && Object.keys(archives).sort((a, b) => Number(b) - Number(a))
                        .map((name: string, index: number) => {
                            const item = archives[name][0];
                            if (!item) return;

                            const image = item?.postImage;
                            const imageUrl = image?.url;
                            const imageAlt = image?.alt;

                            const date = item?.postDate?.text;
                            const title = item?.postTitle?.text;

                            const isFirst = index === 0;

                            const classes = isFirst ? 'ui-align-c ui-block-1st' : 'ui-border ui-inline-block-1st';
                            const imgClasses = isFirst ? 'ui-round ui-img-fluid ui-shadow-lg' : 'ui-round-inner';
                            const titleClasses = isFirst ? 'ui-font-30 ui-font-condensed' : 'ui-font-22';

                            return (
                                <Button key={name} noease ghost multi to={`/blog?post=${name}`} className={classes}>
                                    <GetImage src={imageUrl} alt={imageAlt} aspect='photo' className={imgClasses} />
                                    <span className='ui-block-1st'>
                                        <span className='ui-color-black-50 ui-m-10-b'>{date}</span>
                                        <span className={titleClasses}>{title}</span>
                                    </span>
                                </Button>
                            )
                        })
                    }

                </Button.Wrapper>
            </Grid.Col>
        </Grid.Row>
    );
}
