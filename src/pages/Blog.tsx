import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

// misc
import { useStoreContext } from '../states/StoreContext';
import PageTitle from '../components/common/PageTitle';
import Archives from '../components/blog/Archives';
import Post from '../components/blog/Post';

// styles
import '../../src/assets/blog.less';

export default function () {
    const { api } = useStoreContext();
    const blog = api?.blog;

    const [searchParams] = useSearchParams();
    const post = searchParams.get('post');

    if (blog) return (
        <>
        {post ?
            <Post />
            :
            <PageTitle title='Blog'>
                <Archives />
            </PageTitle>
        }
        </>
    );
}
