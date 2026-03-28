import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import Heading from 'uilab/react/Heading';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import GetImage from '../common/GetImage';
import PageTitle from '../../components/common/PageTitle';

export default function () {
    const { api } = useStoreContext();
    const blog = api?.blog;

    const [searchParams] = useSearchParams();
    const post = searchParams.get('post');

    // page title
    let pageTitle: 'Blog';

    {blog[post]?.forEach((item: any) => {
        if (item?.type === 'postTitle') pageTitle = item?.data?.text;
    })}

    return (
        <PageTitle title={`${pageTitle} | Blog`}>
            <Grid.Row>
                <Grid.Col xl={{ size: 8, push: 2}} lg={{ size: 8, push: 2}} size={12} className='blog-post ui-p-30-v'>

                    {blog[post]?.map((item: any) => {
                        const name = item?.type;
                        switch (name) {
                            case 'postTitle':
                                return <Heading key={name} as='h1'>{item?.data?.text}</Heading>;
                            case 'postDate':
                                return <div key={name}>{item?.data?.text}</div>;
                            case 'postImage':
                                return <GetImage key={name} src={item?.data?.url} alt={item?.data?.alt} ratio='3/2' className='blog-post-image ui-round ui-img-fluid ui-shadow-lg' />;
                            case 'text':
                                return <p key={name} className='ui-font-readable'>{item?.data?.text}</p>;
                            default:
                                break;
                        }
                    })}

                </Grid.Col>
            </Grid.Row>
        </PageTitle>
    );
}
