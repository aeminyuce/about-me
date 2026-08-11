import React from 'react';
import { useSearchParams } from 'react-router';
import Heading from '@ui/Heading';
import Grid from '@ui/Grid';
import Image from '@ui/Image';
import Item from '@ui/Item';

// misc
import { useStoreContext } from '@stores/StoreContext';
import PageTitle from '@components/common/PageTitle';

export default function () {
    const { api } = useStoreContext();
    const blog = api?.blog;

    const [ searchParams ] = useSearchParams();
    const post = searchParams.get('post');

    // page title
    let pageTitle = 'Blog';

    if (post) {
        const titleItem = blog[post]?.find((item: any) => item?.type === 'postTitle');

        if (titleItem?.data?.text) {
            pageTitle = titleItem.data.text;
        }
    }

    return (
        <PageTitle title={`${pageTitle} | Blog`}>
            <Grid.Row>
                <Grid.Col xl={{ size: 8, push: 2 }} lg={{ size: 8, push: 2 }} size={12} className='blog-post ui-p-30-v'>

                    {post && blog[post]?.map((item: any) => {
                        const name = item?.type;
                        switch (name) {
                            case 'postTitle':
                                return <Heading key={name} as='h1'>{item?.data?.text}</Heading>;
                            case 'postDate':
                                return <Item key={name} as='div'>{item?.data?.text}</Item>;
                            case 'postImage':
                                return <Image key={name} lazy fluid='all' src={item?.data?.url} alt={item?.data?.alt} aspect='photo' className='blog-post-image ui-round ui-shadow-lg' />;
                            case 'text':
                                return <Item as='p' key={name} className='ui-font-readable'>{item?.data?.text}</Item>;
                            default:
                                break;
                        }
                    })}

                </Grid.Col>
            </Grid.Row>
        </PageTitle>
    )
}
