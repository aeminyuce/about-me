import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings } from '../../helpers/Lab';

// assets
import { IconAi } from 'uilab-icons/react/general/ai';
import { IconFolder } from 'uilab-icons/react/general/folder';
import { IconTrash } from 'uilab-icons/react/general/trash';

export default function () {
    const { api } = useStoreContext();
    const title = headings('buttons');

    const buttons = api?.lab?.buttons;
    const desc = buttons?.desc;
    const text = buttons?.text;

    return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.noStyle}</Description>
        <Preview>
            <Button nostyle>{text?.noStyleBtn}</Button>
            <Spacer size={5} />
            <Button nostyle href='#'>{text?.noStyleLink}</Button>
        </Preview>

        <Description>{desc?.style}</Description>
        <Preview>
            <Grid.Row fluid='xs' className='ui-block-2nd ui-ease-2nd-btn'>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button>{text?.default}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-round'>{text?.default}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-circle'>{text?.default}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-circle ui-border ui-border-dual'>{text?.default}</Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border-l ui-border-lg'>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border-b ui-border-dual'>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border-b ui-border-lg'>{text?.ghost}</Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-round ui-border'>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-circle ui-border ui-border-dual'>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border'>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-round ui-border'>{text?.default}</Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.theme}</Description>
        <Preview>
            <Grid.Row fluid='xs' className='ui-block-2nd ui-ease-2nd-btn'>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-fill-dark-100 ui-theme-red'>
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-round ui-fill-dark-100 ui-theme-orange'>
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-circle ui-fill-dark-100 ui-theme-yellow'>
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-circle ui-border ui-border-dual ui-fill-dark-100 ui-stroke ui-theme-blue'>
                        {text?.default}
                    </Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-text ui-theme-green'>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border-l ui-border-lg ui-fill-light-100 ui-stroke ui-theme-blueGreen'>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border-b ui-border-dual ui-fill-light-100 ui-stroke ui-theme-purpleBlue'>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border-b ui-border-lg ui-fill-dark-100 ui-stroke ui-theme-green'>
                        {text?.ghost}
                    </Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-round ui-border ui-fill-dark-100 ui-theme-orange'>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-circle ui-border ui-border-dual ui-text ui-stroke ui-theme-yellow'>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className='ui-border ui-fill-light-100 ui-stroke ui-theme-purple'>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className='ui-round ui-border ui-fill-dark-100 ui-stroke ui-theme-greenYellow'>
                        {text?.default}
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.size}</Description>
        <Preview>
            <Grid.Row fluid='xs' className='ui-align-l ui-block-2nd ui-ease-2nd-btn'>
                <Grid.Col size={6}>
                    <Button noease ghost size='lg' className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} className='ui-m-10-r' />
                        {text?.lg}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} className='ui-m-10-r' />
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost size='sm' className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} className='ui-m-10-r' />
                        {text?.sm}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost size='xs' className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} className='ui-m-10-r' />
                        {text?.xs}
                    </Button>
                </Grid.Col>

                <Grid.Col size={6}>
                    <Button noease size='lg' className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} className='ui-m-10-r' />
                        {text?.lg}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} className='ui-m-10-r' />
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease size='sm' className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} className='ui-m-10-r' />
                        {text?.sm}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease size='xs' className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} className='ui-m-10-r' />
                        {text?.xs}
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.square}</Description>
        <Preview className='ui-round-1st ui-theme-blueGreen'>
            <Button square size='xs' className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button square size='sm' className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button square className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button square size='lg' className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>
        </Preview>

        <Description>{desc?.responsive}</Description>
        <Preview className='ui-round-1st'>
            <Button square fluid='xs' className='ui-m-10-b'>{text?.resXsShort}</Button>{' '}
            <Button fluid='md' className='ui-m-10-b'>{text?.resMd}</Button>{' '}
            <Button fluid='sm' className='ui-m-10-b'>{text?.resSm}</Button>{' '}
            <Button fluid='xs' className='ui-m-10-b'>{text?.resXs}</Button>
        </Preview>

        <Description>{desc?.block}</Description>
        <Preview>
            <Grid.Row className='ui-round-2nd ui-theme-orange'>
                <Grid.Col size={6} className='ui-align-c'>
                    <Button fluid='xs' className='ui-fill-dark-100'>{text?.resSm}</Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button block='all' className='ui-fill-dark-100'>{text?.block}</Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>
        </>
    );
}
