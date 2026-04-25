import * as React from 'react';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';
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
import { IconShield } from 'uilab-icons/react/general/shield';
import { IconClock } from 'uilab-icons/react/general/clock';
import { IconSettings } from 'uilab-icons/react/general/settings';
import { IconAngleDown } from 'uilab-icons/react/general/angle-down';
import { IconArrowLeft } from 'uilab-icons/react/general/arrow-left';
import { IconArrowRight } from 'uilab-icons/react/general/arrow-right';
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';

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
                    <input type='text' className='ui-btn ui-btn-active' defaultValue={text?.active3} />
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <input type='submit' className='ui-btn ui-btn-active' defaultValue={text?.active4} />
                </Grid.Col>

                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease passive href='#'>{text?.passive1}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <Button noease passive>{text?.passive2}</Button>
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <input type='button' className='ui-btn ui-btn-passive' defaultValue={text?.passive3} />
                </Grid.Col>
                <Grid.Col xl={3} lg={3} size={6}>
                    <input type='submit' className='ui-btn ui-btn-passive' defaultValue={text?.passive4} />
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

        <Heading as='h3' id={title?.hash[2]}>
            {title?.h3[2]}
        </Heading>

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
                            <SvgIcon as='js' src={IconShield} className='ui-float-r' />
                        </Button>
                        <Button noease className='ui-fill-dark-100'>
                            {text?.listB}
                            <SvgIcon as='js' src={IconClock} className='ui-float-r' />
                        </Button>
                        <Button noease className='ui-fill-dark-100'>
                            {text?.listC}
                            <SvgIcon as='js' src={IconSettings} className='ui-float-r' />
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
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-m-10-l ui-icons-no-opacity ui-theme-purpleBlue'>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listA}
                            <SvgIcon as='js' src={IconShield} className='ui-text ui-float-r' />
                        </Button>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listB}
                            <SvgIcon as='js' src={IconClock} className='ui-text ui-float-r' />
                        </Button>
                        <Button noease className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listC}
                            <SvgIcon as='js' src={IconSettings} className='ui-text ui-float-r' />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
                <Grid.Col size={6}>
                    <Button.Wrapper type='list' as='div' ease='1st' className='ui-align-l ui-round-1st ui-icons-m-10-l ui-icons-no-opacity ui-theme-purpleBlue'>
                        <Button noease ghost className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listA}
                            <SvgIcon as='js' src={IconShield} className='ui-text ui-float-r' />
                        </Button>
                        <Button noease ghost className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listB}
                            <SvgIcon as='js' src={IconClock} className='ui-text ui-float-r' />
                        </Button>
                        <Button noease ghost className='ui-border ui-border-dual ui-stroke ui-fill-light-100'>
                            {text?.listC}
                            <SvgIcon as='js' src={IconSettings} className='ui-text ui-float-r' />
                        </Button>
                    </Button.Wrapper>
                </Grid.Col>
            </Grid.Row>
        </Preview>

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
            <Grid.Row fluid='xs'>
                <Grid.Col size={6} offset={3}>
                    <Button.Wrapper type='holder' as='div' ease='1st' fluid='xs' className='ui-round-1st'>
                        <Dropdown className='ui-round-1st'>
                            <Button>
                                {text?.one}
                                <SvgIcon toggle as='js' src={IconAngleDown} className='ui-m-10-l' />
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
                                <SvgIcon toggle as='js' src={IconAngleDown} className='ui-m-10-l' />
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
                                <SvgIcon toggle as='js' src={IconAngleDown} className='ui-m-10-l' />
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
                                <SvgIcon toggle as='js' src={IconAngleDown} className='ui-m-10-l' />
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

         <Heading as='h3' id={title?.hash[3]}>
            {title?.h3[3]}
        </Heading>

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
            </Grid.Row>
        </Preview>
        </>
    );
}
