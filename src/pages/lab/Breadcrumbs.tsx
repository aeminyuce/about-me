import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconHome } from 'uilab-icons/react/general/home';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconLongArrowLeft } from 'uilab-icons/react/general/long-arrow-left';
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';

export default function () {
    // values
    const item1 = 'Home';
    const item2 = 'Results';
    const item2a = 'Options';
    const item2b = 'Variants';
    const item3 = 'Details';

    // classes
    const colorWrapperClasses = 'ui-color-black-25';
    const circleWrapperClasses = 'ui-circle-2nd';
    const roundWrapperClasses = 'ui-round-2nd';

    const underlineClasses = 'ui-font-hoverline';
    const opacityClasses = 'ui-opacity ui-ease-layout';
    const borderClasses = 'ui-border';

    const textThemeClasses = 'ui-text ui-theme-';
    const btnThemeClasses = 'ui-fill-dark-100 ui-theme-';

    const iconWithTextClasses = 'ui-m-4-v ui-m-10-r';

    return (
        <>
        <BreadcrumbsWrapper>
            <Breadcrumbs.Item seoFriendly pos={'3'}>Breadcrumbs</Breadcrumbs.Item>
        </BreadcrumbsWrapper>

        <Heading as='h1'>Breadcrumbs</Heading>

        <Description>
            Simple breadcrumb navigation with linked items separated by different symbols. In the first variant group, links show an underline on hover except for the last item; in the second, links change opacity on hover.
        </Description>
        <Preview>
            <Breadcrumbs sep='arrow' className={colorWrapperClasses}>
                <Breadcrumbs.Item to='#' className={underlineClasses}>
                    {item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={underlineClasses}>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className={colorWrapperClasses}>
                <Breadcrumbs.Item to='#'>
                    {item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#'>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='pipe' className={colorWrapperClasses}>
                <Breadcrumbs.Item to='#' className={underlineClasses}>
                    {item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={underlineClasses}>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item className={opacityClasses} to='#'>
                    {item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className={opacityClasses} to='#'>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull'>
                <Breadcrumbs.Item className={opacityClasses} to='#'>
                    {item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className={opacityClasses} to='#'>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='pipe'>
                <Breadcrumbs.Item className={opacityClasses} to='#'>
                    {item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className={opacityClasses} to='#'>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>
            Breadcrumb navigation with the first item replaced by an icon. The second and third variants use custom theme colors, while the separators remain unstyled and do not adopt theme colors.
        </Description>
        <Preview>
            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item to='#' className={opacityClasses}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={underlineClasses}>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='bull' className={`${textThemeClasses}greenYellow`}>
                <Breadcrumbs.Item to='#' className={opacityClasses}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={underlineClasses}>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='pipe' className={`${textThemeClasses}blueGreen`}>
                <Breadcrumbs.Item to='#' className={opacityClasses}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={underlineClasses}>
                    {item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>
            Breadcrumb navigation can also be used with buttons, and it supports combining separators, icons, and custom theme colors.
        </Description>
        <Preview>
            <Breadcrumbs sep='bull' className={circleWrapperClasses}>
                <Breadcrumbs.Item >
                    <Button ghost square className={borderClasses}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button ghost className={borderClasses}>
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button ghost as='span' className={borderClasses}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className={circleWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square >
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button>
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span'>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className={circleWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square className={`${btnThemeClasses}purple`}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${btnThemeClasses}purple`}>
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${btnThemeClasses}purple`}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className={circleWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square className={`${btnThemeClasses}purpleBlue`}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${btnThemeClasses}purpleBlue`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={iconWithTextClasses} />
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${btnThemeClasses}purpleBlue`}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={30} />

            <Breadcrumbs sep='arrow' className={roundWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button>
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span'>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='arrow' className={roundWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square className={`${btnThemeClasses}greenYellow`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${btnThemeClasses}greenYellow`}>
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${btnThemeClasses}greenYellow`}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='arrow' className={roundWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square className={`${btnThemeClasses}blueGreen`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${btnThemeClasses}blueGreen`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={iconWithTextClasses} />
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${btnThemeClasses}blueGreen`}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>
            Separators can be disabled, which works well when using button‑based breadcrumb variations.
        </Description>
        <Preview>
            <Breadcrumbs sep='no' className={circleWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square className={`${btnThemeClasses}purpleBlue`}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${btnThemeClasses}purpleBlue`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={iconWithTextClasses} />
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${btnThemeClasses}purpleBlue`}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={5} />

            <Breadcrumbs sep='no' className={roundWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square className={`${btnThemeClasses}blueGreen`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${btnThemeClasses}blueGreen`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={iconWithTextClasses} />
                        {item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${btnThemeClasses}blueGreen`}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>
            Breadcrumb navigation with a dropdown menu that collapses the middle items between the first and last. This approach works well when the navigation path is too long. The dropdown menu remains unstyled and does not adopt the theme colors.
        </Description>
        <Preview>
            <Breadcrumbs sep='no' className={roundWrapperClasses}>
                <Breadcrumbs.Item>
                    <Button square className={`${btnThemeClasses}yellowOrange`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Dropdown>
                        <Button square className={`ui-round ${btnThemeClasses}yellowOrange`}>
                            <SvgIcon as='js' src={IconEllipsisH} />
                        </Button>
                        <Dropdown.Menu className='ui-round ui-shadow-lg'>
                            <Dropdown.Item>{item2}</Dropdown.Item>
                            <Dropdown.Item>{item2a}</Dropdown.Item>
                            <Dropdown.Item>{item2b}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${btnThemeClasses}yellowOrange`}>
                        {item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>
        </>
    );
}
