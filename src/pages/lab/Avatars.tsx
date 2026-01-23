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
    const wrapperClasses = 'ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout';
    const circleClasses = `${wrapperClasses} ui-circle-1st`;
    const roundClasses = `${wrapperClasses} ui-round-1st`;

    const countHolderClasses = `${wrapperClasses} ui-p-5 ui-circle ui-circle-1st`;
    const countHolderBorderClasses = `${countHolderClasses} ui-border`;

    const avatarClasses = 'ui-m-5-h';
    const selfAnimatedClasses = 'ui-hover-scale-more ui-hover-shadow';
    const themedBorderedClasses = 'ui-border ui-border-dual ui-stroke ui-theme-';
    const themeClasses = 'ui-fill-dark-100 ui-theme-';

    const textClasses = 'ui-text ui-theme-';

    return (
        <>
        <BreadcrumbsWrapper>
            <Breadcrumbs.Item position={'3'}>Avatars</Breadcrumbs.Item>
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
                <Avatar noease size='sm' className={`${avatarClasses} ${themeClasses}yellow`}>
                    <span>EKY</span>
                </Avatar>
                <Avatar noease className={`${avatarClasses} ${themeClasses}redPurple`}>
                    <span>HY</span>
                </Avatar>
                <Avatar noease size='lg' className={`${avatarClasses} ${themeClasses}redPurple`}>
                    <span>AEY</span>
                </Avatar>

                <Spacer size={10} />

                <Avatar noease size='xs' className={`${avatarClasses} ${themeClasses}purple`}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease size='sm' className={`${avatarClasses} ${themeClasses}purple`}>
                    <SvgIcon as='js' src={IconFire} />
                </Avatar>
                <Avatar noease className={`${avatarClasses} ${themeClasses}purpleBlue`}>
                    <SvgIcon as='js' src={IconTrees} />
                </Avatar>
                <Avatar noease size='lg' className={`${avatarClasses} ${themeClasses}purpleBlue`}>
                    <SvgIcon as='js' src={IconStore} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars can be linked to a URL.
        </Description>
        <Preview>
            <div className={circleClasses}>
                <Avatar noease className={avatarClasses}>
                    <a href='#'>
                        <span>AEY</span>
                    </a>
                </Avatar>
                <Avatar noease className={avatarClasses}>
                    <a href='#'>
                        <img src={profileImage3} />
                    </a>
                </Avatar>
                <Avatar noease className={avatarClasses}>
                    <a href='#'>
                        <span>EKY</span>
                    </a>
                </Avatar>
                <Avatar noease className={avatarClasses}>
                    <a href='#'>
                        <img src={profileImage6} />
                    </a>
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
            Avatar groups can be linked to a URL and include a circular border along with a total‑count indicator.
        </Description>
        <Preview>
            <Avatar.Holder className={countHolderBorderClasses}>
                <Avatar noease className={`${themeClasses}purple`}>
                    <a href='#'>
                        <SvgIcon as='js' src={IconUser} />
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <span>AEY</span>
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <img src={profileImage4} />
                    </a>
                </Avatar>
                <Avatar noease className={`${themeClasses}purpleBlue`}>
                    <a href='#'>
                        <span>L</span>
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <img src={profileImage6} />
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <span>+27</span>
                    </a>
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>
            Avatar groups can use custom background colors or theme colors.
        </Description>
        <Preview>
            <Avatar.Holder className={`${countHolderBorderClasses} ${themeClasses}purpleBlue`}>
                <Avatar noease>
                    <span>AEY</span>
                </Avatar>
                <Avatar noease>
                    <img src={profileImage2} />
                </Avatar>
                <Avatar noease>
                    <img src={profileImage4} />
                </Avatar>
                <Avatar noease className={`${themeClasses}redPurple`}>
                    <span>HY</span>
                </Avatar>
                <Avatar noease>
                    <img src={profileImage5} />
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <span>+113</span>
                    </a>
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>
            Avatar groups include tooltip text that corresponds to the colored borders, referencing the descriptive text written below.
        </Description>
        <Preview>
            <Avatar.Holder className={countHolderClasses}>
                <span className='ui-m-30-r ui-inline-block'>
                    Written by
                </span>
                <Avatar size='sm' title='Claire' data={{ 'tooltip': 't' }} className={`${selfAnimatedClasses} ${themedBorderedClasses}yellow`}>
                    <img src={profileImage6} />
                </Avatar>
                <Avatar size='sm' title='Matthew' data={{ 'tooltip': 't' }} className={`${selfAnimatedClasses} ${themedBorderedClasses}orangeRed`}>
                    <img src={profileImage3} />
                </Avatar>
                 <Avatar size='sm' title='Tom' data={{ 'tooltip': 't' }} className={`${selfAnimatedClasses} ${themedBorderedClasses}green`}>
                    <img src={profileImage1} />
                </Avatar>
                <span className='ui-m-10-l ui-inline-block'>
                    is shown below:
                </span>
            </Avatar.Holder>

            <Spacer size={20} />

            <p className='ui-p-15-h' >
                <span className={`${textClasses}yellow`}>Claire said something wonderful. </span>
                <span className={`${textClasses}orangeRed`}>Matthew said something awesome. </span>
                <span className={`${textClasses}green`}>Tom said something great.</span>
            </p>
        </Preview>
        </>
    );
}
