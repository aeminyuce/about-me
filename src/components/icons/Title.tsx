import Heading from '@ui/Heading';

// misc
import { useStoreContext } from '@stores/StoreContext';

export default function () {
    const { api } = useStoreContext();

    return (
        <Heading as='h1' className='ui-font-light ui-font-5xl ui-m-30-v'>
            {api?.icons?.info?.title}
        </Heading>
    )
}