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
import { headings } from '../../helpers/Lab';

// assets
import { IconHome } from 'uilab-icons/react/general/home';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconLongArrowLeft } from 'uilab-icons/react/general/long-arrow-left';
import { IconEllipsisH } from 'uilab-icons/react/general/ellipsis-h';

export default function () {
    const title = headings('breadcrumbs');

    const desc = {
        'simple': 'Simple breadcrumb navigation with linked items separated by different symbols. In the first variant group, links show an underline on hover except for the last item; in the second, links change opacity on hover.',
        'icon': 'Breadcrumb navigation with the first item replaced by an icon. The second and third variants use custom theme colors, while the separators remain unstyled and do not adopt theme colors.',
        'btn': 'Breadcrumb navigation can also be used with buttons, and it supports combining separators, icons, and custom theme colors.',
        'noSep': 'Separators can be disabled, which works well when using button‑based breadcrumb variations.',
        'dropdown': 'Breadcrumb navigation with a dropdown menu that collapses the middle items between the first and last. This approach works well when the navigation path is too long. The dropdown menu remains unstyled and does not adopt the theme colors.',
    };

    const text = {
        'item1': 'Home',
        'item2': 'Results',
        'item2a': 'Options',
        'item2b': 'Variants',
        'item3': 'Details',
    }

    // classes
    const bc = {
        color: 'ui-color-black-25',
        circle: 'ui-circle-2nd',
        round: 'ui-round-2nd',
        hoverline: 'ui-font-hoverline',
        opacity: 'ui-opacity ui-ease-layout',
        border: 'ui-border',
        dropdown: 'ui-round ui-shadow-lg',
        btnTheme: 'ui-fill-dark-100 ui-theme-',
        txtTheme: 'ui-text ui-theme-',
        iconM: 'ui-m-4-v ui-m-10-r',
    };

    return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Description>{desc?.simple}</Description>
        <Preview>
            <Breadcrumbs sep='arrow' className={bc.color}>
                <Breadcrumbs.Item to='#' className={bc.hoverline}>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={bc.hoverline}>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {text?.item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className={bc.color}>
                <Breadcrumbs.Item to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {text?.item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='pipe' className={bc.color}>
                <Breadcrumbs.Item to='#' className={bc.hoverline}>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={bc.hoverline}>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {text?.item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item className={bc.opacity} to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className={bc.opacity} to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>{text?.item3}</Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull'>
                <Breadcrumbs.Item className={bc.opacity} to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className={bc.opacity} to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>{text?.item3}</Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='pipe'>
                <Breadcrumbs.Item className={bc.opacity} to='#'>
                    {text?.item1}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item className={bc.opacity} to='#'>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {text?.item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.icon}</Description>
        <Preview>
            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item to='#' className={bc.opacity}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={bc.hoverline}>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {text?.item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='bull' className={`${bc.txtTheme}greenYellow`}>
                <Breadcrumbs.Item to='#' className={bc.opacity}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={bc.hoverline}>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {text?.item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='pipe' className={`${bc.txtTheme}blueGreen`}>
                <Breadcrumbs.Item to='#' className={bc.opacity}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item to='#' className={bc.hoverline}>
                    {text?.item2}
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    {text?.item3}
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.btn}</Description>
        <Preview>
            <Breadcrumbs sep='bull' className={bc.circle}>
                <Breadcrumbs.Item >
                    <Button ghost square className={bc.border}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button ghost className={bc.border}>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button ghost as='span' className={bc.border}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className={bc.circle}>
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

            <Breadcrumbs sep='bull' className={bc.circle}>
                <Breadcrumbs.Item>
                    <Button square className={`${bc.btnTheme}purple`}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${bc.btnTheme}purple`}>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${bc.btnTheme}purple`}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='bull' className={bc.circle}>
                <Breadcrumbs.Item>
                    <Button square className={`${bc.btnTheme}purpleBlue`}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${bc.btnTheme}purpleBlue`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={bc.iconM} />
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${bc.btnTheme}purpleBlue`}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={30} />

            <Breadcrumbs sep='arrow' className={bc.round}>
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

            <Breadcrumbs sep='arrow' className={bc.round}>
                <Breadcrumbs.Item>
                    <Button square className={`${bc.btnTheme}greenYellow`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${bc.btnTheme}greenYellow`}>
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${bc.btnTheme}greenYellow`}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Breadcrumbs sep='arrow' className={bc.round}>
                <Breadcrumbs.Item>
                    <Button square className={`${bc.btnTheme}blueGreen`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${bc.btnTheme}blueGreen`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={bc.iconM} />
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${bc.btnTheme}blueGreen`}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.noSep}</Description>
        <Preview>
            <Breadcrumbs sep='no' className={bc.circle}>
                <Breadcrumbs.Item>
                    <Button square className={`${bc.btnTheme}purpleBlue`}>
                        <SvgIcon as='js' src={IconLongArrowLeft} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${bc.btnTheme}purpleBlue`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={bc.iconM} />
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${bc.btnTheme}purpleBlue`}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={5} />

            <Breadcrumbs sep='no' className={bc.round}>
                <Breadcrumbs.Item>
                    <Button square className={`${bc.btnTheme}blueGreen`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button className={`${bc.btnTheme}blueGreen`}>
                        <SvgIcon as='js' src={IconAngleLeft} size='xs' className={bc.iconM} />
                        {text?.item2}
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${bc.btnTheme}blueGreen`}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>{desc?.dropdown}</Description>
        <Preview>
            <Breadcrumbs sep='no' className={bc.round}>
                <Breadcrumbs.Item>
                    <Button square className={`${bc.btnTheme}yellowOrange`}>
                        <SvgIcon as='js' src={IconHome} />
                    </Button>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Dropdown>
                        <Button square className={`ui-round ${bc.btnTheme}yellowOrange`}>
                            <SvgIcon as='js' src={IconEllipsisH} />
                        </Button>
                        <Dropdown.Menu className={bc.dropdown}>
                            <Dropdown.Item>{text?.item2}</Dropdown.Item>
                            <Dropdown.Item>{text?.item2a}</Dropdown.Item>
                            <Dropdown.Item>{text?.item2b}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                    <Button as='span' className={`${bc.btnTheme}yellowOrange`}>
                        {text?.item3}
                    </Button>
                </Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>
        </>
    );
}
