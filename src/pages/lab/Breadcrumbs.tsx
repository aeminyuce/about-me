import React from 'react';
import Breadcrumbs from '@ui/Breadcrumbs';
import Button from '@ui/Button';
import Dropdown from '@ui/Dropdown';
import Grid from '@ui/Grid';
import Heading from '@ui/Heading';
import Item from '@ui/Item';
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
import { IconHome } from '@icon/general/home';
import { IconAngleLeft } from '@icon/general/angle-left';
import { IconLongArrowLeft } from '@icon/general/long-arrow-left';
import { IconEllipsisH } from '@icon/general/ellipsis-h';

export default function () {
    const { api } = useStoreContext();
    const title = headings('breadcrumbs');

    const breadcrumbs = api?.lab?.breadcrumbs;
    const desc = breadcrumbs?.desc;
    const text = breadcrumbs?.text;

    if (breadcrumbs) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h1' className='ui-align-l'>{title?.h1}</Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42} className='ui-p-2-v'>
                    <ShowCode id='variants' className='ui-m-5-t' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.simple}</Description>
        <Preview>
            <Breadcrumbs sep='arrow' className='ui-color-black-25'>
                <Breadcrumbs.Item to='#' className='ui-font-hoverline'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className='ui-font-hoverline'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className='ui-color-black-25'>
                <Breadcrumbs.Item to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='pipe' className='ui-color-black-25'>
                <Breadcrumbs.Item to='#' className='ui-font-hoverline'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className='ui-font-hoverline'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item className='ui-opacity ui-ease-layout' to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className='ui-opacity ui-ease-layout' to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull'>
                <Breadcrumbs.Item className='ui-opacity ui-ease-layout' to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className='ui-opacity ui-ease-layout' to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='pipe'>
                <Breadcrumbs.Item className='ui-opacity ui-ease-layout' to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className='ui-opacity ui-ease-layout' to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.icon}</Description>
        <Preview>
            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item to='#' className='ui-opacity ui-ease-layout'>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className='ui-font-hoverline'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='bull' className='ui-text ui-theme-greenYellow'>
                <Breadcrumbs.Item to='#' className='ui-opacity ui-ease-layout'>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className='ui-font-hoverline'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='pipe' className='ui-text ui-theme-blueGreen'>
                <Breadcrumbs.Item to='#' className='ui-opacity ui-ease-layout'>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className='ui-font-hoverline'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Item as='b'>{text?.item3}</Item>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.btn}</Description>
        <Preview>
            <Breadcrumbs sep='bull' className='ui-circle-2nd'>
                <Breadcrumbs.Item >
                    <Button ghost square className='ui-border'>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button ghost className='ui-border'>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button ghost as='span' className='ui-border'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className='ui-circle-2nd'>
                <Breadcrumbs.Item>
                    <Button square >
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className='ui-circle-2nd'>
                <Breadcrumbs.Item>
                    <Button square className='ui-fill-dark-100 ui-theme-purple'>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className='ui-fill-dark-100 ui-theme-purple'>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className='ui-fill-dark-100 ui-theme-purple'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={30} />

            <Breadcrumbs sep='arrow' className='ui-round-2nd'>
                <Breadcrumbs.Item>
                    <Button square>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='arrow' className='ui-round-2nd'>
                <Breadcrumbs.Item>
                    <Button square className='ui-fill-dark-100 ui-theme-greenYellow'>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className='ui-fill-dark-100 ui-theme-greenYellow'>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className='ui-fill-dark-100 ui-theme-greenYellow'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='arrow' className='ui-round-2nd'>
                <Breadcrumbs.Item>
                    <Button square className='ui-fill-dark-100 ui-theme-blueGreen'>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className='ui-fill-dark-100 ui-theme-blueGreen'>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' r={10} v={4} />
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className='ui-fill-dark-100 ui-theme-blueGreen'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.noSep}</Description>
        <Preview>
            <Breadcrumbs sep='no' className='ui-circle-2nd'>
                <Breadcrumbs.Item>
                    <Button square className='ui-fill-dark-100 ui-theme-purpleBlue'>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className='ui-fill-dark-100 ui-theme-purpleBlue'>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' r={10} v={4} />
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className='ui-fill-dark-100 ui-theme-purpleBlue'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={5} />

            <Breadcrumbs sep='no' className='ui-round-2nd'>
                <Breadcrumbs.Item>
                    <Button square className='ui-fill-dark-100 ui-theme-blueGreen'>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className='ui-fill-dark-100 ui-theme-blueGreen'>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' r={10} v={4} />
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className='ui-fill-dark-100 ui-theme-blueGreen'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.dropdown}</Description>
        <Preview>
            <Breadcrumbs sep='arrow' className='ui-round-2nd'>
                <Breadcrumbs.Item>
                    <Button square className='ui-fill-dark-100 ui-theme-yellowOrange'>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Dropdown className='ui-round-1st'>
                        <Button square>
                            <SvgIcon as='js' src={IconEllipsisH} />
                        </Button>
                        <Dropdown.Menu className='ui-shadow-lg'>
                            <Dropdown.Item>{text?.item2}</Dropdown.Item>
                            <Dropdown.Item>{text?.item2a}</Dropdown.Item>
                            <Dropdown.Item>{text?.item2b}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className='ui-fill-dark-100 ui-theme-yellowOrange'>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <CodePanel type='react' id='variants'>
{`<Breadcrumbs microdata sep='arrow'>
    // with icon
    <Breadcrumbs.Item microdata pos='1' to='#'>
        <SvgIcon as='js' src={IconHome} />
    </Breadcrumbs.Item>

    // with texts
    <Breadcrumbs.Item microdata pos='2' to='#'>
        Search Results
    </Breadcrumbs.Item>
    <Breadcrumbs.Item microdata pos='3'>
        <Item as='b'>Detail</Item>
    </Breadcrumbs.Item>
</Breadcrumbs>

// sep              : no | arrow | bull | pipe
// microdata        : adds semantic attributes
// pos              : adds positional offset when microdata is set
// to               : converts the item into a clickable URL`}
        </CodePanel>
        </>
    )
}
