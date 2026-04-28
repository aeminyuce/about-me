import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Image from 'uilab/react/Image';

// misc
import { useStoreContext } from '../../stores/StoreContext';

export default function () {
    const { api } = useStoreContext();

    const blog = api?.blog;
    const archives = blog?.archives;

    return (
        <Grid.Row>
            <Grid.Col xl={{ size: 8, push: 2 }} lg={{ size: 8, push: 2 }} size={12} className='ui-p-30-v'>
                <Button.Wrapper as='div' ease='1st' block='1st' className='blog-archive ui-align-l ui-round-1st'>

                    {archives && Object.keys(archives).sort((a, b) => Number(b) - Number(a))
                        .map((name: string, index: number) => {
                            const item = archives[name][0];
                            if (!item) return;

                            const image = item?.postImage;
                            const isFirst = index === 0;

                            const classes = isFirst ? 'ui-align-c ui-block-1st' : 'ui-border ui-inline-block-1st';
                            const imgClasses = isFirst ? 'ui-round ui-shadow-lg' : 'ui-round-inner';
                            const titleClasses = isFirst ? 'ui-font-30 ui-font-condensed' : 'ui-font-22';

                            return (
                                <Button key={name} noease ghost multi to={`/blog?post=${name}`} className={classes}>
                                    <Image lazy fluid={isFirst} src={image?.url} alt={image?.alt} aspect='photo' className={imgClasses} />
                                    <span className='ui-block-1st'>
                                        <span className='ui-color-black-50 ui-m-10-b'>{item?.postDate?.text}</span>
                                        <span className={titleClasses}>{item?.postTitle?.text}</span>
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
