import * as React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Heading from 'uilab/react/Heading';
import Grid from 'uilab/react/Grid';

// misc
import { useStoreContext } from '../states/StoreContext';

export default function () {
    const { api } = useStoreContext();

    const blog = api?.blog;
    const archives = blog?.archives;

    const [searchParams] = useSearchParams();
    const post = searchParams.get('post');


    return (
        <Grid.Row>
            <Grid.Col size={12}>
                {post ?
                    <>
                    <Heading as='h1'>{post}</Heading>
                    Post {post} contents:
                    {blog && post && blog[post]?.map((item: any) => {
                        const name = item?.type;
                        return <div key={name} className='ui-m-10-l'>{name}</div>
                    })}
                    </>
                :
                    <>
                    <Heading as='h1'>Archives</Heading>
                    {archives && Object.keys(archives).map((name: any) => (
                        <Link key={name} to={`/blog?post=${name}`} className='ui-block'>{name}</Link>
                    ))}
                    </>
                }
            </Grid.Col>
        </Grid.Row>
    );
}
