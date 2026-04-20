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

    // classes
    const btn = {
        blockW: 'ui-block-2nd ui-ease-2nd-btn',
        fillDark: 'ui-fill-dark-100',
        blockWL: 'ui-align-l ui-block-2nd ui-ease-2nd-btn',
        themeW: 'ui-round-1st ui-theme-',
        borderCirc: 'ui-circle ui-border',
        borderCirc2x: 'ui-circle ui-border ui-border-dual',
        borderRnd: 'ui-round ui-border',
        borderL: 'ui-border-l ui-border-lg',
        borderB: 'ui-border-b ui-border-dual',
        borderBL: 'ui-border-b ui-border-lg',
        themeFill: 'ui-fill-dark-100 ui-theme-',
        themeDarkStr: 'ui-fill-dark-100 ui-stroke ui-theme-',
        themeLightStr: 'ui-fill-light-100 ui-stroke ui-theme-',
        themeBrd: 'ui-stroke ui-theme-',
        themeClr: 'ui-text ui-theme-',
        themeBrdClr: 'ui-text ui-stroke ui-theme-',
        iconR: 'ui-m-5-l ui-float-r',
        iconL: 'ui-m-10-r',
        bottomSp: 'ui-m-10-b',
        round: 'ui-round',
        circle: 'ui-circle',
        border: 'ui-border',    };

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
            <Grid.Row fluid='xs' className={btn.blockW}>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button>{text?.default}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={btn.round}>{text?.default}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={btn.circle}>{text?.default}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={btn.borderCirc2x}>{text?.default}</Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={btn.borderL}>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={btn.borderB}>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={btn.borderBL}>{text?.ghost}</Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={btn.borderRnd}>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={btn.borderCirc2x}>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={btn.border}>{text?.ghost}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={btn.borderRnd}>{text?.default}</Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.theme}</Description>
        <Preview>
            <Grid.Row fluid='xs' className={btn.blockW}>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={`${btn.themeFill}red`}>
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={`${btn.round} ${btn.themeFill}orange`}>
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={`${btn.circle} ${btn.themeFill}yellow`}>
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={`${btn.borderCirc2x} ${btn.themeDarkStr}blue`}>
                        {text?.default}
                    </Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={`${btn.themeClr}green`}>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={`${btn.borderL} ${btn.themeLightStr}blueGreen`}>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={`${btn.borderB} ${btn.themeLightStr}purpleBlue`}>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={`${btn.borderBL} ${btn.themeDarkStr}green`}>
                        {text?.ghost}
                    </Button>
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={`${btn.borderRnd} ${btn.themeFill}orange`}>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={`${btn.borderCirc2x} ${btn.themeBrdClr}yellow`}>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease ghost className={`${btn.border} ${btn.themeLightStr}purple`}>
                        {text?.ghost}
                    </Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease className={`${btn.borderRnd} ${btn.themeDarkStr}greenYellow`}>
                        {text?.default}
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.size}</Description>
        <Preview>
            <Grid.Row fluid='xs' className={btn.blockWL}>
                <Grid.Col size={6}>
                    <Button noease ghost size='lg' className={btn.borderCirc}>
                        <SvgIcon as='js' src={IconAi} className={btn.iconL} />
                        {text?.lg}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost className={btn.borderCirc}>
                        <SvgIcon as='js' src={IconAi} className={btn.iconL} />
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost size='sm' className={btn.borderCirc}>
                        <SvgIcon as='js' src={IconAi} className={btn.iconL} />
                        {text?.sm}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost size='xs' className={btn.borderCirc}>
                        <SvgIcon as='js' src={IconAi} className={btn.iconL} />
                        {text?.xs}
                    </Button>
                </Grid.Col>

                <Grid.Col size={6}>
                    <Button noease size='lg' className={btn.round}>
                        <SvgIcon as='js' src={IconFolder} className={btn.iconL} />
                        {text?.lg}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease className={btn.round}>
                        <SvgIcon as='js' src={IconFolder} className={btn.iconL} />
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease size='sm' className={btn.round}>
                        <SvgIcon as='js' src={IconFolder} className={btn.iconL} />
                        {text?.sm}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease size='xs' className={btn.round}>
                        <SvgIcon as='js' src={IconFolder} className={btn.iconL} />
                        {text?.xs}
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.square}</Description>
        <Preview className={`${btn.themeW}blueGreen`}>
            <Button square size='xs' className={btn.fillDark}>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button square size='sm' className={btn.fillDark}>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button square className={btn.fillDark}>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button square size='lg' className={btn.fillDark}>
                <SvgIcon as='js' src={IconTrash} />
            </Button>
        </Preview>

        <Description>{desc?.responsive}</Description>
        <Preview className={btn.themeW}>
            <Button square fluid='xs' className={btn.bottomSp}>{text?.resXsShort}</Button>{' '}
            <Button fluid='md' className={btn.bottomSp}>{text?.resMd}</Button>{' '}
            <Button fluid='sm' className={btn.bottomSp}>{text?.resSm}</Button>{' '}
            <Button fluid='xs' className={btn.bottomSp}>{text?.resXs}</Button>
        </Preview>
        </>
    );
}
