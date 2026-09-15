import Heading from '@ui/Heading';

// misc
import { useStoreContext } from '@stores/StoreContext';

export const Title = () => {
    const { api } = useStoreContext();

    return (
        <Heading as='h1' className='ui-font-light ui-font-5xl ui-m-30-v'>
            {api?.lab?.intro?.title}
        </Heading>
    )
}

export const SubTitle = () => {
    const { api } = useStoreContext();

    return (
        <Heading as='h3' className='ui-font-3xl ui-m-30-b ui-theme-greenYellow ui-text'>
            {api?.lab?.intro?.subTitle}
        </Heading>
    )
}