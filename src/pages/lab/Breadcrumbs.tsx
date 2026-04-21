import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { headings } from '../../helpers/Lab';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconHome } from 'uilab-icons/react/general/home';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconLongArrowLeft } from 'uilab-icons/react/general/long-arrow-left';
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';

export default function () {
    const { api } = useStoreContext();
    const title = headings('breadcrumbs');

    const breadcrumbs = api?.lab?.breadcrumbs;
    const desc = breadcrumbs?.desc;
    const text = breadcrumbs?.text;

    if (breadcrumbs) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                    <b>{text?.item3}</b>
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
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className='ui-m-4-v ui-m-10-r' />
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
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className='ui-m-4-v ui-m-10-r' />
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
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className='ui-m-4-v ui-m-10-r' />
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
                    <Dropdown>
                        <Button square className='ui-round'>
                            <SvgIcon as='js' src={IconEllipsisH} />
                        </Button>
                        <Dropdown.Menu className='ui-round ui-shadow-lg'>
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
        </>
    );
}
