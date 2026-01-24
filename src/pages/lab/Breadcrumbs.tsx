import * as React from 'react';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconHome } from 'uilab-icons/react/general/home';

export default function () {
    // values
    const item1 = 'Home';
    const item2 = 'Search Results';
    const item3 = 'Content Details';

    // classes
    const colorWrapperClasses = 'ui-color-black-25';

    const underlineClasses = 'ui-font-hoverline';
    const opacityClasses = 'ui-opacity ui-ease-layout';
    const themeClasses = 'ui-text ui-theme-';

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
                <Breadcrumbs.Item pos={'1'} to='#' className={underlineClasses}>{item1}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} to='#' className={underlineClasses}>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>
            <Breadcrumbs sep='bull' className={colorWrapperClasses}>
                <Breadcrumbs.Item pos={'1'} to='#'>{item1}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} to='#'>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>
            <Breadcrumbs sep='pipe' className={colorWrapperClasses}>
                <Breadcrumbs.Item pos={'1'} to='#' className={underlineClasses}>{item1}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} to='#' className={underlineClasses}>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item pos={'1'} className={opacityClasses} to='#'>{item1}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} className={opacityClasses} to='#'>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>
            <Breadcrumbs sep='bull'>
                <Breadcrumbs.Item pos={'1'} className={opacityClasses} to='#'>{item1}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} className={opacityClasses} to='#'>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>
            <Breadcrumbs sep='pipe'>
                <Breadcrumbs.Item pos={'1'} className={opacityClasses} to='#'>{item1}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} className={opacityClasses} to='#'>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>

        <Description>
            Breadcrumb navigation with the first item replaced by an icon. The second and third variants use custom theme colors, while the separators remain unstyled and do not adopt theme colors.
        </Description>
        <Preview>
            <Breadcrumbs sep='arrow'>
                <Breadcrumbs.Item pos={'1'} to='#' className={`${opacityClasses} ${underlineClasses}`}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} to='#' className={`${opacityClasses} ${underlineClasses}`}>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='bull' className={`${themeClasses}greenYellow`}>
                <Breadcrumbs.Item pos={'1'} to='#' className={`${opacityClasses} ${underlineClasses}`}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} to='#' className={`${opacityClasses} ${underlineClasses}`}>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>

            <Spacer size={15} />

            <Breadcrumbs sep='pipe' className={`${themeClasses}blueGreen`}>
                <Breadcrumbs.Item pos={'1'} to='#' className={`${opacityClasses} ${underlineClasses}`}>
                    <SvgIcon as='js' src={IconHome} />
                </Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'2'} to='#' className={`${opacityClasses} ${underlineClasses}`}>{item2}</Breadcrumbs.Item>
                <Breadcrumbs.Item pos={'3'}>{item3}</Breadcrumbs.Item>
            </Breadcrumbs>
        </Preview>
        </>
    );
}
