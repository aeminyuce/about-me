import Button from '@ui/Button';
import Box from '@ui/Box';
import Grid from '@ui/Grid';
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
                <Item as='section' className='blog-archive'>
                    <Button.Wrapper vertical as='div' ease='2nd' className='ui-round-2nd'>

                        {archives && Object.entries(archives).sort((a, b) => Number(b[0]) - Number(a[0]))
                            .map(([name, value]: [string, any], index: number) => {
                                const item = value[0];
                                if (!item) return;

                                const image = item?.postImage;
                                const isFirst = index === 0;

                                const classes = isFirst ? undefined : 'ui-border';
                                const imgClasses = isFirst ? 'ui-round ui-shadow-lg' : 'ui-round-inner';
                                const titleClasses = isFirst ? 'ui-font-2xl' : 'ui-font-xl ui-font-tight';

                                return (
                                    <Item key={name} as='article'>
                                        <Button noease ghost multi
                                        vertical={isFirst} fullWidth={isFirst} gap={isFirst ? 30 : 15} align={isFirst ? undefined : 'l'}
                                        to={`/blog?post=${name}`} className={classes} data-discover='true'>

                                            <Image lazy fluid={isFirst ? 'all' : undefined} src={image?.url} alt={image?.alt} aspect='photo' className={imgClasses} />

                                            <Box as='span' vertical gap={5} align={isFirst ? 'c' : 'l'}>
                                                <Item as='time' className='ui-color-black-50'>{item?.postDate?.text}</Item>
                                                <Item as='span' className={titleClasses}>{item?.postTitle?.text}</Item>
                                            </Box>

                                        </Button>
                                    </Item>
                                )
                            })
                        }

                    </Button.Wrapper>
                </Item>
            </Grid.Col>
        </Grid.Row>
    )
}
