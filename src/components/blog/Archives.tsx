import React from 'react';
import Button from '@ui/Button';
import Grid from '@ui/Grid';
import Heading from '@ui/Heading';
import Item from '@ui/Item';
import Image from '@ui/Image';

// misc
import { useStoreContext } from '@stores/StoreContext';

export default function () {
    const { api } = useStoreContext();

    const blog = api?.blog;
    const archives = blog?.archives;

    return (
        <Grid.Row>
            <Grid.Col xl={{ size: 8, push: 2 }} lg={{ size: 8, push: 2 }} size={12} className='ui-p-30-v'>
                <Button.Wrapper as='section' ease='2nd' block='2nd' className='blog-archive ui-align-l ui-round-2nd'>

                    {archives && Object.entries(archives).sort((a, b) => Number(b[0]) - Number(a[0]))
                        .map(([name, value]: [string, any], index: number) => {
                            const item = value[0];
                            if (!item) return;

                            const image = item?.postImage;
                            const isFirst = index === 0;

                            const classes = isFirst ? 'ui-align-c ui-block-1st' : 'ui-border ui-inline-block-1st';
                            const imgClasses = isFirst ? 'ui-round ui-shadow-lg' : 'ui-round-inner';
                            const titleClasses = isFirst ? '' : 'ui-font-22';

                            return (
                                <Item key={name} as='article'>
                                    <Button noease ghost multi to={`/blog?post=${name}`} className={classes} data-discover='true'>
                                        <Image lazy fluid={isFirst ? 'all' : undefined} src={image?.url} alt={image?.alt} aspect='photo' className={imgClasses} />
                                        <Item as='span' className='ui-block-1st'>
                                            <Item as='time' className='ui-color-black-50 ui-m-10-b'>{item?.postDate?.text}</Item>
                                            <Heading as='h2' className={titleClasses}>{item?.postTitle?.text}</Heading>
                                        </Item>
                                    </Button>
                                </Item>
                            )
                        })
                    }

                </Button.Wrapper>
            </Grid.Col>
        </Grid.Row>
    )
}
