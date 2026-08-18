import React from 'react';
import Button from '@ui/Button';
import Dropdown from '@ui/Dropdown';
import Grid from '@ui/Grid';
import Heading from '@ui/Heading';
import Spacer from '@ui/Spacer';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';
import { headings } from '@helpers/Lab';
import Description from '@components/common/Description';
import Preview from '@components/common/Preview';
import BreadcrumbsWrapper from '@components/lab/BreadcrumbsWrapper';
import ShowCode from '@components/lab/ShowCode';
import CodePanel from '@components/common/CodePanel';

// assets
import { IconAi } from '@icon/general/ai';
import { IconFolder } from '@icon/general/folder';
import { IconTrash } from '@icon/general/trash';
import { IconShield } from '@icon/general/shield';
import { IconClock } from '@icon/general/clock';
import { IconSettings } from '@icon/general/settings';
import { IconAngleDown } from '@icon/general/angle-down';
import { IconArrowLeft } from '@icon/general/arrow-left';
import { IconArrowRight } from '@icon/general/arrow-right';
import { IconEllipsisH } from '@icon/general/ellipsis-h';

export default function () {
    const { api } = useStoreContext();
    const title = headings('buttons');

    const buttons = api?.lab?.buttons;
    const desc = buttons?.desc;
    const text = buttons?.text;

    if (buttons) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[0]} className='ui-align-l'>
                            {title?.h3[0]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='variants' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

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
                    <Button noease>{text?.default}</Button>
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
            <Grid.Row fluid='xs' className='ui-align-l ui-block-2nd ui-ease-2nd-btn ui-icons-m-10-r'>
                <Grid.Col size={6}>
                    <Button noease ghost size='lg' className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} />
                        {text?.lg}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} />
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost size='sm' className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} />
                        {text?.sm}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease ghost size='xs' className='ui-circle ui-border'>
                        <SvgIcon as='js' src={IconAi} />
                        {text?.xs}
                    </Button>
                </Grid.Col>

                <Grid.Col size={6}>
                    <Button noease size='lg' className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} />
                        {text?.lg}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} />
                        {text?.default}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease size='sm' className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} />
                        {text?.sm}
                    </Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease size='xs' className='ui-round'>
                        <SvgIcon as='js' src={IconFolder} />
                        {text?.xs}
                    </Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.square}</Description>
        <Preview className='ui-round-1st ui-theme-blueGreen ui-ease-1st-btn'>
            <Button noease square size='xs' className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button noease square size='sm' className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button noease square className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>{' '}
            <Button noease square size='lg' className='ui-fill-dark-100'>
                <SvgIcon as='js' src={IconTrash} />
            </Button>
        </Preview>

        <Description>{desc?.responsive}</Description>
        <Preview className='ui-round-1st ui-ease-1st-btn'>
            <Button noease square fluid='xs' className='ui-m-10-b'>{text?.resXsShort}</Button>{' '}
            <Button noease fluid='md' className='ui-m-10-b'>{text?.resMd}</Button>{' '}
            <Button noease fluid='sm' className='ui-m-10-b'>{text?.resSm}</Button>{' '}
            <Button noease fluid='xs' className='ui-m-10-b'>{text?.resXs}</Button>
        </Preview>

        <Description>{desc?.block}</Description>
        <Preview>
            <Grid.Row className='ui-round-2nd ui-ease-2nd-btn'>
                <Grid.Col size={6} className='ui-align-c'>
                    <Button noease fluid='xs' className='ui-theme-yellow ui-fill-dark-100'>{text?.resSm}</Button>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button noease block='all' className='ui-theme-yellowOrange ui-fill-dark-100'>{text?.block}</Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.activePassive}</Description>
        <Preview>
            <Grid.Row fluid='xs' className='ui-block-2nd ui-circle-2nd ui-ease-2nd-btn'>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease active href='#'>{text?.active1}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease active>{text?.active2}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button active as='input' type='button' defaultValue={text?.active3} />
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button active as='input' type='submit' defaultValue={text?.active4} />
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease passive href='#'>{text?.passive1}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease passive>{text?.passive2}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button passive as='input' type='button' defaultValue={text?.passive3} />
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button passive as='input' type='submit' defaultValue={text?.passive4} />
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.multi}</Description>
        <Preview>
            <Grid.Row fluid='xs' className='ui-block-2nd ui-round-2nd ui-ease-2nd-btn ui-theme-green'>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi size='lg' className='ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi className='ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi size='sm' className='ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi size='xs' className='ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.multiCon}</Description>
        <Preview>
            <Grid.Row fluid='xs' className='ui-block-2nd ui-round-2nd ui-ease-2nd-btn ui-theme-purple'>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi size='lg' className='ui-font-condensed ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi className='ui-font-condensed ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi size='sm' className='ui-font-condensed ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease multi size='xs' className='ui-font-condensed ui-fill-dark-100'>{text?.lipsum}</Button>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='variants'>
{`code example`}
        </CodePanel>

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[1]} className='ui-align-l'>
                            {title?.h3[1]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='list' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.list}</Description>
        <Preview>
            <Grid.Row fluid='xs'>
                <Grid.Col size={6}>
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-m-10-r ui-icons-no-opacity ui-theme-greenYellow'>
                        <Button noease>
                            <SvgIcon as='js' src={IconShield} className='ui-text' />
                            {text?.listA}
                        </Button>
                        <Button noease>
                            <SvgIcon as='js' src={IconClock} className='ui-text' />
                            {text?.listB}
                        </Button>
                        <Button noease>
                            <SvgIcon as='js' src={IconSettings} className='ui-text' />
                            {text?.listC}
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-m-10-l ui-icons-no-opacity ui-theme-purpleBlue'>
                        <Button noease className='ui-fill-dark-100'>
                            {text?.listA}
                            <SvgIcon as='js' src={IconShield} float='r' />
                        </Button>
                        <Button noease className='ui-fill-dark-100'>
                            {text?.listB}
                            <SvgIcon as='js' src={IconClock} float='r' />
                        </Button>
                        <Button noease className='ui-fill-dark-100'>
                            {text?.listC}
                            <SvgIcon as='js' src={IconSettings} float='r' />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.listBorder}</Description>
        <Preview>
            <Grid.Row fluid='xs'>
                <Grid.Col size={6}>
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-m-10-r ui-icons-no-opacity ui-theme-greenYellow'>
                        <Button noease className='ui-border-b'>
                            <SvgIcon as='js' src={IconShield} className='ui-text' />
                            {text?.listA}
                        </Button>
                        <Button noease className='ui-border-b'>
                            <SvgIcon as='js' src={IconClock} className='ui-text' />
                            {text?.listB}
                        </Button>
                        <Button noease className='ui-border-b'>
                            <SvgIcon as='js' src={IconSettings} className='ui-text' />
                            {text?.listC}
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-m-10-r ui-icons-no-opacity ui-theme-greenYellow'>
                        <Button noease ghost className='ui-border'>
                            <SvgIcon as='js' src={IconShield} className='ui-text' />
                            {text?.listA}
                        </Button>
                        <Button noease ghost className='ui-border'>
                            <SvgIcon as='js' src={IconClock} className='ui-text' />
                            {text?.listB}
                        </Button>
                        <Button noease ghost className='ui-border'>
                            <SvgIcon as='js' src={IconSettings} className='ui-text' />
                            {text?.listC}
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-no-opacity ui-theme-purpleBlue'>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listA}
                            <SvgIcon as='js' src={IconShield} float='r' className='ui-text' />
                        </Button>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listB}
                            <SvgIcon as='js' src={IconClock} float='r' className='ui-text' />
                        </Button>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listC}
                            <SvgIcon as='js' src={IconSettings} float='r' className='ui-text' />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-no-opacity ui-theme-purpleBlue'>
                        <Button noease ghost className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listA}
                            <SvgIcon as='js' src={IconShield} float='r' className='ui-text' />
                        </Button>
                        <Button noease ghost className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listB}
                            <SvgIcon as='js' src={IconClock} float='r' className='ui-text' />
                        </Button>
                        <Button noease ghost className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listC}
                            <SvgIcon as='js' src={IconSettings} float='r' className='ui-text' />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='list'>
{`code example`}
        </CodePanel>

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[2]} className='ui-align-l'>
                            {title?.h3[2]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='holder' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.holder}</Description>
        <Preview>
            <Grid.Row fluid='xs'>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st'>
                        <Button noease>{text?.num1}</Button>
                        <Button noease>{text?.num2}</Button>
                        <Button noease>{text?.num3}</Button>
                        <Button noease>{text?.num4}</Button>
                        <Button noease>{text?.num5}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-blue'>
                        <Button noease className='ui-fill-dark-100'>{text?.num1}</Button>
                        <Button noease className='ui-fill-dark-100'>{text?.num2}</Button>
                        <Button noease className='ui-fill-dark-100'>{text?.num3}</Button>
                        <Button noease className='ui-fill-dark-100'>{text?.num4}</Button>
                        <Button noease className='ui-fill-dark-100'>{text?.num5}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st'>
                        <Button noease>{text?.one}</Button>
                        <Button noease>{text?.two}</Button>
                        <Button noease>{text?.three}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-blue'>
                        <Button noease className='ui-fill-dark-100'>{text?.one}</Button>
                        <Button noease className='ui-fill-dark-100'>{text?.two}</Button>
                        <Button noease className='ui-fill-dark-100'>{text?.three}</Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.holderBorder}</Description>
        <Preview>
            <Grid.Row fluid='xs'>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st'>
                        <Button noease className='ui-border-r'>{text?.num1}</Button>
                        <Button noease className='ui-border-r'>{text?.num2}</Button>
                        <Button noease className='ui-border-r'>{text?.num3}</Button>
                        <Button noease className='ui-border-r'>{text?.num4}</Button>
                        <Button noease className='ui-border-r'>{text?.num5}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-yellow'>
                        <Button noease className='ui-border ui-stroke ui-fill-light-100'>{text?.num1}</Button>
                        <Button noease className='ui-border ui-stroke ui-fill-light-100'>{text?.num2}</Button>
                        <Button noease className='ui-border ui-stroke ui-fill-light-100'>{text?.num3}</Button>
                        <Button noease className='ui-border ui-stroke ui-fill-light-100'>{text?.num4}</Button>
                        <Button noease className='ui-border ui-stroke ui-fill-light-100'>{text?.num5}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st'>
                        <Button noease className='ui-border'>{text?.one}</Button>
                        <Button noease className='ui-border'>{text?.two}</Button>
                        <Button noease className='ui-border'>{text?.three}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-yellowOrange'>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>{text?.one}</Button>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>{text?.two}</Button>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>{text?.three}</Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.holderRes}</Description>
        <Preview>
            <Grid.Row fluid='sm'>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper type='holder' as='div' ease='1st' fluid='sm' className='ui-round-1st'>
                        <Button noease>{text?.num1}</Button>
                        <Button noease>{text?.num2}</Button>
                        <Button noease>{text?.num3}</Button>
                        <Button noease>{text?.num4}</Button>
                        <Button noease>{text?.num5}</Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
            <Grid.Row fluid='xs'>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper type='holder' as='div' ease='1st' fluid='xs' className='ui-round-1st'>
                        <Button noease>{text?.one}</Button>
                        <Button noease>{text?.two}</Button>
                        <Button noease>{text?.three}</Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Description>{desc?.holderDrop}</Description>
        <Preview>
            <Grid.Row fluid='xs' className='ui-icons-m-10-l'>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper type='holder' as='div' ease='1st' fluid='xs' className='ui-round-1st'>
                        <Dropdown className='ui-round-1st'>
                            <Button>
                                {text?.one}
                                <SvgIcon toggle as='js' src={IconAngleDown} />
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item>{text?.one}</Dropdown.Item>
                                <Dropdown.Item>{text?.two}</Dropdown.Item>
                                <Dropdown.Item>{text?.three}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button noease>{text?.two}</Button>
                        <Button noease>{text?.three}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper type='holder' as='div' ease='1st' fluid='xs' className='ui-round-1st'>
                        <Button noease className='ui-border-r'>{text?.one}</Button>
                        <Dropdown className='ui-round-1st'>
                            <Button className='ui-border-r'>
                                {text?.two}
                                <SvgIcon toggle as='js' src={IconAngleDown} />
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item>{text?.one}</Dropdown.Item>
                                <Dropdown.Item>{text?.two}</Dropdown.Item>
                                <Dropdown.Item>{text?.three}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button noease className='ui-border-r'>{text?.three}</Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper type='holder' as='div' ease='1st' fluid='xs' className='ui-round-1st'>
                        <Button noease className='ui-border'>{text?.one}</Button>
                        <Button noease className='ui-border'>{text?.two}</Button>
                        <Dropdown className='ui-round-1st'>
                            <Button className='ui-border'>
                                {text?.three}
                                <SvgIcon toggle as='js' src={IconAngleDown} />
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item>{text?.one}</Dropdown.Item>
                                <Dropdown.Item>{text?.two}</Dropdown.Item>
                                <Dropdown.Item>{text?.three}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper type='holder' as='div' ease='1st' fluid='xs' className='ui-round-1st'>
                        <Button noease className='ui-border ui-border-dual'>{text?.one}</Button>
                        <Button noease className='ui-border ui-border-dual'>{text?.two}</Button>
                        <Dropdown className='ui-round-1st'>
                            <Button className='ui-border ui-border-dual'>
                                {text?.three}
                                <SvgIcon toggle as='js' src={IconAngleDown}/>
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item>{text?.one}</Dropdown.Item>
                                <Dropdown.Item>{text?.two}</Dropdown.Item>
                                <Dropdown.Item>{text?.three}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='holder'>
        {`code example`}
        </CodePanel>

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[3]} className='ui-align-l'>
                            {title?.h3[3]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='pagination' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.paging}</Description>
        <Preview>
            <Button.Wrapper paging as='div' ease='1st' className='ui-round-1st ui-theme-redPurple'>
                <Button noease ghost size='xs' pagingPrev>
                    <SvgIcon as='js' src={IconArrowLeft} />
                </Button>
                <Button noease size='xs' active className='ui-fill-dark-100'>{text?.num1}</Button>
                <Button noease ghost size='xs'>{text?.num2}</Button>
                <Button noease ghost size='xs'>{text?.num3}</Button>
                <Button noease ghost size='xs'>{text?.num4}</Button>
                <Button noease ghost size='xs'>{text?.num5}</Button>
                <Button noease ghost size='xs' passive>
                    <SvgIcon as='js' src={IconEllipsisH} />
                </Button>
                <Button noease ghost size='xs'>{text?.num10}</Button>
                <Button noease ghost size='xs' pagingNext>
                    <SvgIcon as='js' src={IconArrowRight} />
                </Button>
            </Button.Wrapper>

            <Button.Wrapper paging as='div' ease='1st' className='ui-round-1st ui-theme-redPurple'>
                <Button noease ghost size='sm' pagingPrev className='ui-border'>
                    <SvgIcon as='js' src={IconArrowLeft} />
                </Button>
                <Button noease size='sm' active className='ui-border ui-fill-dark-100'>{text?.num1}</Button>
                <Button noease ghost size='sm' className='ui-border'>{text?.num2}</Button>
                <Button noease ghost size='sm' className='ui-border'>{text?.num3}</Button>
                <Button noease ghost size='sm' className='ui-border'>{text?.num4}</Button>
                <Button noease ghost size='sm' className='ui-border'>{text?.num5}</Button>
                <Button noease ghost size='sm' passive className='ui-border'>
                    <SvgIcon as='js' src={IconEllipsisH} />
                </Button>
                <Button noease ghost size='sm' className='ui-border'>{text?.num10}</Button>
                <Button noease ghost size='sm' pagingNext className='ui-border'>
                    <SvgIcon as='js' src={IconArrowRight} />
                </Button>
            </Button.Wrapper>

            <Button.Wrapper paging as='div' ease='1st' className='ui-round-1st ui-theme-redPurple'>
                <Button noease pagingPrev className='ui-fill-light-100'>
                    <SvgIcon as='js' src={IconArrowLeft} />
                </Button>
                <Button noease active className='ui-fill-dark-100 ui-fill-light-100'>{text?.num1}</Button>
                <Button noease className='ui-fill-light-100'>{text?.num2}</Button>
                <Button noease className='ui-fill-light-100'>{text?.num3}</Button>
                <Button noease className='ui-fill-light-100'>{text?.num4}</Button>
                <Button noease className='ui-fill-light-100'>{text?.num5}</Button>
                <Button noease passive className='ui-fill-light-100'>
                    <SvgIcon as='js' src={IconEllipsisH} />
                </Button>
                <Button noease className='ui-fill-light-100'>{text?.num10}</Button>
                <Button noease pagingNext className='ui-fill-light-100'>
                    <SvgIcon as='js' src={IconArrowRight} />
                </Button>
            </Button.Wrapper>

            <Button.Wrapper largeButtons paging as='div' ease='1st' className='ui-round-1st ui-theme-redPurple'>
                <Button noease pagingPrev>
                    <SvgIcon as='js' src={IconArrowLeft} />
                </Button>
                <Button noease active className='ui-fill-dark-100'>{text?.num1}</Button>
                <Button noease>{text?.num2}</Button>
                <Button noease>{text?.num3}</Button>
                <Button noease>{text?.num4}</Button>
                <Button noease>{text?.num5}</Button>
                <Button noease passive>
                    <SvgIcon as='js' src={IconEllipsisH} />
                </Button>
                <Button noease>{text?.num10}</Button>
                <Button noease pagingNext>
                    <SvgIcon as='js' src={IconArrowRight} />
                </Button>
            </Button.Wrapper>

            <Grid.Row fluid='xs'>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper paging type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-redPurple'>
                        <Button noease pagingPrev>
                            <SvgIcon as='js' src={IconArrowLeft} />
                        </Button>
                        <Button noease active className='ui-fill-dark-100'>{text?.num1}</Button>
                        <Button noease>{text?.num2}</Button>
                        <Button noease>{text?.num3}</Button>
                        <Button noease>{text?.num4}</Button>
                        <Button noease>{text?.num5}</Button>
                        <Button noease passive>
                            <SvgIcon as='js' src={IconEllipsisH} />
                        </Button>
                        <Button noease>{text?.num10}</Button>
                        <Button noease pagingNext>
                            <SvgIcon as='js' src={IconArrowRight} />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={4} offset={4}>
                    <Button.Wrapper paging type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-redPurple'>
                        <Button noease pagingPrev>
                            <SvgIcon as='js' src={IconArrowLeft} />
                        </Button>
                        <Button noease active className='ui-fill-dark-100'>{text?.num1}</Button>
                        <Dropdown className='ui-round-1st'>
                            <Button>
                                <SvgIcon as='js' src={IconEllipsisH} />
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item>{text?.num3}</Dropdown.Item>
                                <Dropdown.Item>{text?.num2}</Dropdown.Item>
                                <Dropdown.Item>{text?.num4}</Dropdown.Item>
                                <Dropdown.Item>{text?.num5}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button noease pagingNext>
                            <SvgIcon as='js' src={IconArrowRight} />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={2} offset={5}>
                    <Button.Wrapper paging type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-redPurple'>
                        <Button noease ghost pagingPrev>
                            <SvgIcon as='js' src={IconArrowLeft} />
                        </Button>
                        <Button noease ghost active className='ui-fill-dark-100'>{text?.num1}</Button>
                        <Dropdown className='ui-round-1st'>
                            <Button ghost>
                                <SvgIcon as='js' src={IconEllipsisH} />
                            </Button>
                            <Dropdown.Menu className='ui-shadow-lg'>
                                <Dropdown.Item>{text?.num3}</Dropdown.Item>
                                <Dropdown.Item>{text?.num2}</Dropdown.Item>
                                <Dropdown.Item>{text?.num4}</Dropdown.Item>
                                <Dropdown.Item>{text?.num5}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button noease ghost pagingNext>
                            <SvgIcon as='js' src={IconArrowRight} />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <CodePanel type='react' id='pagination'>
{`code example`}
        </CodePanel>
        </>
    )
}
