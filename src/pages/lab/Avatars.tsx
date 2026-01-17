import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Breadcrumbs from 'uilab/react/Breadcrumbs';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconUser } from 'uilab-icons/react/general/user';
import { IconTrees } from 'uilab-icons/react/general/trees';
import { IconFire } from 'uilab-icons/react/general/fire';
import { IconStore } from 'uilab-icons/react/commerce/store';

export default function () {
    // image paths
    const profileImage1 = '/images/profile-image1.jpg';
    const profileImage2 = '/images/profile-image2.jpg';
    const profileImage3 = '/images/profile-image3.jpg';
    const profileImage4 = '/images/profile-image4.jpg';
    const profileImage5 = '/images/profile-image5.jpg';
    const profileImage6 = '/images/profile-image6.jpg';

    // classes
    const wrapperClasses = 'ui-hover-scale-more-1st ui-ease-1st-layout';
    const circleClasses = `${wrapperClasses} ui-circle-1st`;
    const roundClasses = `${wrapperClasses} ui-round-1st`;

    const countHolderClasses = 'ui-p-5 ui-circle ui-circle-1st';
    const countHolderBorderClasses = `${countHolderClasses} ui-border`;

    const avatarClasses = 'ui-m-5-h';
    const selfAnimatedClasses = 'ui-hover-scale-more';
    const themeClasses = 'ui-fill-dark-100 ui-theme-';

    return (
        <>
        <BreadcrumbsWrapper>
            <Breadcrumbs.Item>Avatars</Breadcrumbs.Item>
        </BreadcrumbsWrapper>

        <Heading as='h1'>Avatars</Heading>

        <Description>
            Circular avatars come in multiple sizes and are typically used for profile images. The avatars animate when hovered with the mouse.
        </Description>
        <Preview>
            <div className={circleClasses}>
                <Avatar noease size='xs' className={avatarClasses}>
                    <img src={profileImage1} />
                </Avatar>
                <Avatar noease size='sm' className={avatarClasses}>
                    <img src={profileImage2} />
                </Avatar>
                <Avatar noease className={avatarClasses}>
                    <img src={profileImage3} />
                </Avatar>
                <Avatar noease size='lg' className={avatarClasses}>
                    <img src={profileImage4} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Rounded avatars with different sizes.
        </Description>
        <Preview>
            <div className={roundClasses}>
                <Avatar noease size='xs' className={avatarClasses}>
                    <img src={profileImage3} />
                </Avatar>
                <Avatar noease size='sm' className={avatarClasses}>
                    <img src={profileImage4} />
                </Avatar>
                <Avatar noease className={avatarClasses}>
                    <img src={profileImage5} />
                </Avatar>
                <Avatar noease size='lg' className={avatarClasses}>
                    <img src={profileImage6} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars can be used without an image, in which case they display placeholder text.
        </Description>
        <Preview>
            <div className={circleClasses}>
                <Avatar noease size='xs' className={avatarClasses}>
                    <span>L</span>
                </Avatar>
                <Avatar noease size='sm' className={avatarClasses}>
                    <span>EKY</span>
                </Avatar>
                <Avatar noease className={avatarClasses}>
                    <span>HY</span>
                </Avatar>
                <Avatar noease size='lg' className={avatarClasses}>
                    <span>AEY</span>
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars can also display icons instead of images or text.
        </Description>
        <Preview>
            <div className={roundClasses}>
                <Avatar noease size='xs' className={avatarClasses}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease size='sm' className={avatarClasses}>
                    <SvgIcon as='js' src={IconFire} />
                </Avatar>
                <Avatar noease className={avatarClasses}>
                    <SvgIcon as='js' src={IconTrees} />
                </Avatar>
                <Avatar noease size='lg' className={avatarClasses}>
                    <SvgIcon as='js' src={IconStore} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars without an image can use custom background colors or theme colors.
        </Description>
        <Preview>
            <div className={circleClasses}>
                <Avatar noease size='xs' className={`${avatarClasses} ${themeClasses}yellow`}>
                    <span>L</span>
                </Avatar>
                <Avatar noease size='sm' className={`${avatarClasses} ${themeClasses}yellowOrange`}>
                    <span>EKY</span>
                </Avatar>
                <Avatar noease className={`${avatarClasses} ${themeClasses}orangeRed`}>
                    <span>HY</span>
                </Avatar>
                <Avatar noease size='lg' className={`${avatarClasses} ${themeClasses}red`}>
                    <span>AEY</span>
                </Avatar>

                <Spacer size={10} />

                <Avatar noease size='xs' className={`${avatarClasses} ${themeClasses}redPurple`}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease size='sm' className={`${avatarClasses} ${themeClasses}purple`}>
                    <SvgIcon as='js' src={IconFire} />
                </Avatar>
                <Avatar noease className={`${avatarClasses} ${themeClasses}purpleBlue`}>
                    <SvgIcon as='js' src={IconTrees} />
                </Avatar>
                <Avatar noease size='lg' className={`${avatarClasses} ${themeClasses}blue`}>
                    <SvgIcon as='js' src={IconStore} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatar groups are ideal for displaying multiple avatars together.
        </Description>
        <Preview>
            <Avatar.Holder className={circleClasses}>
                <Avatar noease className={`${themeClasses}purple`}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease>
                    <span>AEY</span>
                </Avatar>
                <Avatar noease>
                    <img src={profileImage3} />
                </Avatar>
                <Avatar noease>
                    <img src={profileImage4} />
                </Avatar>
                <Avatar noease className={`${themeClasses}purpleBlue`}>
                    <span>L</span>
                </Avatar>
                <Avatar noease>
                    <img src={profileImage6} />
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>
            Avatar groups with a circular border and a total‑count indicator.
        </Description>
        <Preview>
            <Avatar.Holder className={countHolderBorderClasses}>
                <Avatar className={`${selfAnimatedClasses} ${themeClasses}purple`}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar className={selfAnimatedClasses}>
                    <span>AEY</span>
                </Avatar>
                <Avatar className={selfAnimatedClasses}>
                    <img src={profileImage4} />
                </Avatar>
                <Avatar className={`${selfAnimatedClasses} ${themeClasses}purpleBlue`}>
                    <span>L</span>
                </Avatar>
                <Avatar className={selfAnimatedClasses}>
                    <img src={profileImage6} />
                </Avatar>
                <span className='ui-m-20-h ui-inline-block'>
                    +27
                </span>
            </Avatar.Holder>
        </Preview>

        <Description>
            Avatar groups can use custom background colors or theme colors.
        </Description>
        <Preview>
            <Avatar.Holder className={`${countHolderClasses} ${themeClasses}purpleBlue`}>
                <Avatar className={selfAnimatedClasses}>
                    <span>AEY</span>
                </Avatar>
                <Avatar className={selfAnimatedClasses}>
                    <img src={profileImage2} />
                </Avatar>
                <Avatar className={selfAnimatedClasses}>
                    <img src={profileImage4} />
                </Avatar>
                <Avatar className={selfAnimatedClasses}>
                    <span>HY</span>
                </Avatar>
                <Avatar className={selfAnimatedClasses}>
                    <img src={profileImage5} />
                </Avatar>
                <span className='ui-m-20-h ui-inline-block'>
                    +113
                </span>
            </Avatar.Holder>
        </Preview>
        </>
    );
}
