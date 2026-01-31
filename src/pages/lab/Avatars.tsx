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

    const desc = {
        'circle': 'Circular avatars come in multiple sizes and are typically used for profile images. The avatars animate when hovered with the mouse.',
        'round': 'Rounded avatars with different sizes.',
        'noimg': 'Avatars can be used without an image, in which case they display placeholder text.',
        'icon': 'Avatars can also display icons instead of images or text.',
        'theme': 'Avatars without an image can use custom background colors or theme colors.',
        'url': 'Avatars can be linked to a URL.',
        'group': 'Avatar groups are ideal for displaying multiple avatars together.',
        'count': 'Avatar groups can be linked to a URL and include a circular border along with a total‑count indicator.',
        'groupTheme': 'Avatar groups can use custom background colors or theme colors.',
        'ref': 'Avatar groups include tooltip text that corresponds to the colored borders, referencing the descriptive text written below.',
    };
    const text = {
        'ph1': 'AEY',
        'ph2': 'HY',
        'ph3': 'EKY',
        'ph4': 'L',
        'count1': '+27',
        'count2': '+113',
        'refPrefix': 'Written by',
        'refSuffix': 'is shown below:',
        'name1': 'Claire',
        'name2': 'Matthew',
        'name3': 'Tom',
        'ref1': 'Claire said something wonderful.',
        'ref2': 'Matthew said something awesome.',
        'ref3': 'Tom said something great.',
    };

    const img = [
        'profile-image1.jpg',
        'profile-image2.jpg',
        'profile-image3.jpg',
        'profile-image4.jpg',
        'profile-image5.jpg',
        'profile-image6.jpg',
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
        txt: 'ui-text ui-theme-',
        prefix: 'ui-m-30-r ui-inline-block',
        suffix: 'ui-m-10-l ui-inline-block',
        refs: 'ui-p-15-h',
    };

    return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.circle}</Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease size='xs' className={avatar.marginH}>
                    <img src={getImg(img[0])} />
                </Avatar>
                <Avatar noease size='sm' className={avatar.marginH}>
                    <img src={getImg(img[1])} />
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <img src={getImg(img[2])} />
                </Avatar>
                <Avatar noease size='lg' className={avatar.marginH}>
                    <img src={getImg(img[3])} />
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.round}</Description>
        <Preview>
            <div className={avatar.round}>
                <Avatar noease size='xs' className={avatar.marginH}>
                    <img src={getImg(img[2])} />
                </Avatar>
                <Avatar noease size='sm' className={avatar.marginH}>
                    <img src={getImg(img[3])} />
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <img src={getImg(img[4])} />
                </Avatar>
                <Avatar noease size='lg' className={avatar.marginH}>
                    <img src={getImg(img[5])} />
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.noimg}</Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease size='xs' className={avatar.marginH}>
                    <span>{text?.ph4}</span>
                </Avatar>
                <Avatar noease size='sm' className={avatar.marginH}>
                    <span>{text?.ph3}</span>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <span>{text?.ph2}</span>
                </Avatar>
                <Avatar noease size='lg' className={avatar.marginH}>
                    <span>{text?.ph1}</span>
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.icon}</Description>
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

        <Description>{desc?.theme}</Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease size='xs' className={`${avatar.marginH} ${avatar.theme}yellow`}>
                    <span>{text?.ph4}</span>
                </Avatar>
                <Avatar noease size='sm' className={`${avatar.marginH} ${avatar.theme}yellow`}>
                    <span>{text?.ph3}</span>
                </Avatar>
                <Avatar noease className={`${avatar.marginH} ${avatar.theme}redPurple`}>
                    <span>{text?.ph2}</span>
                </Avatar>
                <Avatar noease size='lg' className={`${avatar.marginH} ${avatar.theme}redPurple`}>
                    <span>{text?.ph1}</span>
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

        <Description>{desc?.url}</Description>
        <Preview>
            <div className={avatar.circle}>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <span>{text?.ph1}</span>
                    </a>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <img src={getImg(img[2])} />
                    </a>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <span>{text?.ph3}</span>
                    </a>
                </Avatar>
                <Avatar noease className={avatar.marginH}>
                    <a href='#'>
                        <img src={getImg(img[5])} />
                    </a>
                </Avatar>
            </div>
        </Preview>

        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Description>{desc?.group}</Description>
        <Preview>
            <Avatar.Holder className={avatar.circle}>
                <Avatar noease className={`${avatar.theme}purple`}>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease>
                    <span>{text?.ph1}</span>
                </Avatar>
                <Avatar noease>
                    <img src={getImg(img[2])} />
                </Avatar>
                <Avatar noease>
                    <img src={getImg(img[3])} />
                </Avatar>
                <Avatar noease className={`${avatar.theme}purpleBlue`}>
                    <span>{text?.ph4}</span>
                </Avatar>
                <Avatar noease>
                    <img src={getImg(img[5])} />
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.count}</Description>
        <Preview>
            <Avatar.Holder className={avatar.countBorder}>
                <Avatar noease className={`${avatar.theme}purple`}>
                    <a href='#'>
                        <SvgIcon as='js' src={IconUser} />
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <span>{text?.ph1}</span>
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <img src={getImg(img[3])} />
                    </a>
                </Avatar>
                <Avatar noease className={`${avatar.theme}purpleBlue`}>
                    <a href='#'>
                        <span>{text?.ph4}</span>
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <img src={getImg(img[5])} />
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <span>{text?.count1}</span>
                    </a>
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.groupTheme}</Description>
        <Preview>
            <Avatar.Holder className={`${avatar.countBorder} ${avatar.theme}purpleBlue`}>
                <Avatar noease>
                    <span>{text?.ph1}</span>
                </Avatar>
                <Avatar noease>
                    <img src={getImg(img[1])} />
                </Avatar>
                <Avatar noease>
                    <img src={getImg(img[3])} />
                </Avatar>
                <Avatar noease className={`${avatar.theme}redPurple`}>
                    <span>{text?.ph2}</span>
                </Avatar>
                <Avatar noease>
                    <img src={getImg(img[4])} />
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <span>{text?.count2}</span>
                    </a>
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.ref}</Description>
        <Preview>
            <Avatar.Holder className={avatar.count}>
                <span className={avatar.prefix}>
                    {text?.refPrefix}
                </span>
                <Avatar size='sm' title={text?.name1} data={{ 'tooltip': 't' }} className={`${avatar.animate} ${avatar.border}yellow`}>
                    <img src={getImg(img[5])} />
                </Avatar>
                <Avatar size='sm' title={text?.name1} data={{ 'tooltip': 't' }} className={`${avatar.animate} ${avatar.border}orangeRed`}>
                    <img src={getImg(img[2])} />
                </Avatar>
                 <Avatar size='sm' title={text?.name1} data={{ 'tooltip': 't' }} className={`${avatar.animate} ${avatar.border}green`}>
                    <img src={getImg(img[0])} />
                </Avatar>
                <span className={avatar.suffix}>
                    {text?.refSuffix}
                </span>
            </Avatar.Holder>

            <Spacer size={20} />

            <p className={avatar.refs}>
                <span className={`${avatar.txt}yellow`}>{text?.ref1}</span>{' '}
                <span className={`${avatar.txt}orangeRed`}>{text?.ref2}</span>{' '}
                <span className={`${avatar.txt}green`}>{text?.ref3}</span>
            </p>
        </Preview>
        </>
    );
}
