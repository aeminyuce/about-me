import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import Heading from 'uilab/react/Heading';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../../states/StoreContext';
import PageTitle from '../../components/common/PageTitle';

export default function () {
    const { api } = useStoreContext();
    const blog = api?.blog;

    const [searchParams] = useSearchParams();
    const post = searchParams.get('post');

    // get title
    let title: 'Blog';

    {blog[post]?.forEach((item: any) => {
        if (item?.type === 'postTitle') title = item?.data?.text;
    })}

    return (
        <PageTitle title={`${title} | Blog`}>
            <Grid.Row>
                <Grid.Col size={12}>
                    <Heading as='h1'>{post}</Heading>

                    {blog[post]?.map((item: any) => {
                        const name = item?.type;
                        return <div key={name} className='ui-m-10-l'>{name}</div>
                    })}

                </Grid.Col>
            </Grid.Row>
        </PageTitle>
    );
}
