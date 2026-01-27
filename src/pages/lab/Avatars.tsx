import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { getImg } from '../../helpers/General';
import { headings } from '../../helpers/Lab';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconUser } from 'uilab-icons/react/general/user';
import { IconTrees } from 'uilab-icons/react/general/trees';
import { IconFire } from 'uilab-icons/react/general/fire';
import { IconStore } from 'uilab-icons/react/commerce/store';

export default function () {
    const title = headings('avatars');

    const desc = {};
    const text = {};

    const img = [
        getImg('profile-image1.jpg'),
        getImg('profile-image2.jpg'),
        getImg('profile-image3.jpg'),
        getImg('profile-image4.jpg'),
        getImg('profile-image5.jpg'),
        getImg('profile-image6.jpg'),
    ];

    // classes
    const wrap = 'ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout';
    const count = `${wrap} ui-p-5 ui-circle ui-circle-1st`;

    const avatar = {
        wrap: wrap,
        circle: `${wrap} ui-circle-1st`,
        round: `${wrap} ui-round-1st`,
        count: count,
        countBorder: `${count} ui-border`,
        marginH: 'ui-m-5-h',
        animate: 'ui-hover-scale-more ui-hover-shadow',
        theme: 'ui-fill-dark-100 ui-theme-',
        border: 'ui-border ui-border-lg ui-stroke ui-theme-',
        text: 'ui-text ui-theme-',
    };

    return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>
            Circular avatars come in multiple sizes and are typically used for profile images. The avatars animate when hovered with the mouse.
        </Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease size='xs' className={avatar.marginH}>
                    <img src={img[0]} />
                </Avatar>
                <Avatar noease size='sm' className={avatar.marginH}>
                    <img src={img[1]} />
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <img src={img[2]} />
                </Avatar>
                <Avatar noease size='lg' className={avatar.marginH}>
                    <img src={img[3]} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Rounded avatars with different sizes.
        </Description>
        <Preview>
            <div className={avatar.round}>
                <Avatar noease size='xs' className={avatar.marginH}>
                    <img src={img[2]} />
                </Avatar>
                <Avatar noease size='sm' className={avatar.marginH}>
                    <img src={img[3]} />
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <img src={img[4]} />
                </Avatar>
                <Avatar noease size='lg' className={avatar.marginH}>
                    <img src={img[5]} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars can be used without an image, in which case they display placeholder text.
        </Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease size='xs' className={avatar.marginH}>
                    <span>L</span>
                </Avatar>
                <Avatar noease size='sm' className={avatar.marginH}>
                    <span>EKY</span>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <span>HY</span>
                </Avatar>
                <Avatar noease size='lg' className={avatar.marginH}>
                    <span>AEY</span>
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars can also display icons instead of images or text.
        </Description>
        <Preview>
            <div className={avatar.round}>
                <Avatar noease size='xs' className={avatar.marginH}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease size='sm' className={avatar.marginH}>
                    <SvgIcon as='js' src={IconFire} />
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <SvgIcon as='js' src={IconTrees} />
                </Avatar>
                <Avatar noease size='lg' className={avatar.marginH}>
                    <SvgIcon as='js' src={IconStore} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars without an image can use custom background colors or theme colors.
        </Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease size='xs' className={`${avatar.marginH} ${avatar.theme}yellow`}>
                    <span>L</span>
                </Avatar>
                <Avatar noease size='sm' className={`${avatar.marginH} ${avatar.theme}yellow`}>
                    <span>EKY</span>
                </Avatar>
                <Avatar noease className={`${avatar.marginH} ${avatar.theme}redPurple`}>
                    <span>HY</span>
                </Avatar>
                <Avatar noease size='lg' className={`${avatar.marginH} ${avatar.theme}redPurple`}>
                    <span>AEY</span>
                </Avatar>

                <Spacer size={10} />

                <Avatar noease size='xs' className={`${avatar.marginH} ${avatar.theme}purple`}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease size='sm' className={`${avatar.marginH} ${avatar.theme}purple`}>
                    <SvgIcon as='js' src={IconFire} />
                </Avatar>
                <Avatar noease className={`${avatar.marginH} ${avatar.theme}purpleBlue`}>
                    <SvgIcon as='js' src={IconTrees} />
                </Avatar>
                <Avatar noease size='lg' className={`${avatar.marginH} ${avatar.theme}purpleBlue`}>
                    <SvgIcon as='js' src={IconStore} />
                </Avatar>
            </div>
        </Preview>

        <Description>
            Avatars can be linked to a URL.
        </Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <span>AEY</span>
                    </a>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <img src={img[2]} />
                    </a>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <span>EKY</span>
                    </a>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <img src={img[5]} />
                    </a>
                </Avatar>
            </div>
        </Preview>

        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Description>
            Avatar groups are ideal for displaying multiple avatars together.
        </Description>
        <Preview>
            <Avatar.Holder className={avatar.circle}>
                <Avatar noease className={`${avatar.theme}purple`}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease>
                    <span>AEY</span>
                </Avatar>
                <Avatar noease>
                    <img src={img[2]} />
                </Avatar>
                <Avatar noease>
                    <img src={img[3]} />
                </Avatar>
                <Avatar noease className={`${avatar.theme}purpleBlue`}>
                    <span>L</span>
                </Avatar>
                <Avatar noease>
                    <img src={img[5]} />
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>
            Avatar groups can be linked to a URL and include a circular border along with a total‑count indicator.
        </Description>
        <Preview>
            <Avatar.Holder className={avatar.countBorder}>
                <Avatar noease className={`${avatar.theme}purple`}>
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
                        <img src={img[3]} />
                    </a>
                </Avatar>
                <Avatar noease className={`${avatar.theme}purpleBlue`}>
                    <a href='#'>
                        <span>L</span>
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <img src={img[5]} />
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
            <Avatar.Holder className={`${avatar.countBorder} ${avatar.theme}purpleBlue`}>
                <Avatar noease>
                    <span>AEY</span>
                </Avatar>
                <Avatar noease>
                    <img src={img[1]} />
                </Avatar>
                <Avatar noease>
                    <img src={img[3]} />
                </Avatar>
                <Avatar noease className={`${avatar.theme}redPurple`}>
                    <span>HY</span>
                </Avatar>
                <Avatar noease>
                    <img src={img[4]} />
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
            <Avatar.Holder className={avatar.count}>
                <span className='ui-m-30-r ui-inline-block'>
                    Written by
                </span>
                <Avatar size='sm' title='Claire' data={{ 'tooltip': 't' }} className={`${avatar.animate} ${avatar.border}yellow`}>
                    <img src={img[5]} />
                </Avatar>
                <Avatar size='sm' title='Matthew' data={{ 'tooltip': 't' }} className={`${avatar.animate} ${avatar.border}orangeRed`}>
                    <img src={img[2]} />
                </Avatar>
                 <Avatar size='sm' title='Tom' data={{ 'tooltip': 't' }} className={`${avatar.animate} ${avatar.border}green`}>
                    <img src={img[0]} />
                </Avatar>
                <span className='ui-m-10-l ui-inline-block'>
                    is shown below:
                </span>
            </Avatar.Holder>

            <Spacer size={20} />

            <p className='ui-p-15-h' >
                <span className={`${avatar.text}yellow`}>Claire said something wonderful. </span>
                <span className={`${avatar.text}orangeRed`}>Matthew said something awesome. </span>
                <span className={`${avatar.text}green`}>Tom said something great.</span>
            </p>
        </Preview>
        </>
    );
}
