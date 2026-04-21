import * as React from 'react';
import Avatar from 'uilab/react/Avatar';
import Heading from 'uilab/react/Heading';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { headings } from '../../helpers/Lab';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import GetImage from '../../components/common/GetImage';

// assets
import { IconUser } from 'uilab-icons/react/general/user';
import { IconTrees } from 'uilab-icons/react/general/trees';
import { IconFire } from 'uilab-icons/react/general/fire';
import { IconStore } from 'uilab-icons/react/commerce/store';

export default function () {
    const { api } = useStoreContext();
    const title = headings('avatars');

    const avatars = api?.lab?.avatars;
    const desc = avatars?.desc;
    const text = avatars?.text;
    const img = avatars?.img;

    if (avatars) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.circle}</Description>
        <Preview>
            <div className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease size='xs' className='ui-m-5-h'>
                    <GetImage lazy src={img[0]} aspect='square' />
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h'>
                    <GetImage lazy src={img[1]} aspect='square' />
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <GetImage lazy src={img[2]} aspect='square' />
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h'>
                    <GetImage lazy src={img[3]} aspect='square' />
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.round}</Description>
        <Preview>
            <div className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-round-1st'>
                <Avatar noease size='xs' className='ui-m-5-h'>
                    <GetImage lazy src={img[2]} aspect='square' />
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h'>
                    <GetImage lazy src={img[3]} aspect='square' />
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <GetImage lazy src={img[4]} aspect='square' />
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h'>
                    <GetImage lazy src={img[5]} aspect='square' />
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.noImg}</Description>
        <Preview>
            <div className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease size='xs' className='ui-m-5-h'>
                    <span>{text?.ph4}</span>
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h'>
                    <span>{text?.ph3}</span>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <span>{text?.ph2}</span>
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h'>
                    <span>{text?.ph1}</span>
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.icon}</Description>
        <Preview>
            <div className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-round-1st'>
                <Avatar noease size='xs' className='ui-m-5-h'>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h'>
                    <SvgIcon as='js' src={IconFire} />
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <SvgIcon as='js' src={IconTrees} />
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h'>
                    <SvgIcon as='js' src={IconStore} />
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.theme}</Description>
        <Preview>
            <div className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease size='xs' className='ui-m-5-h ui-fill-dark-100 ui-theme-yellow'>
                    <span>{text?.ph4}</span>
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h ui-fill-dark-100 ui-theme-yellow'>
                    <span>{text?.ph3}</span>
                </Avatar>
                <Avatar noease className='ui-m-5-h ui-fill-dark-100 ui-theme-redPurple'>
                    <span>{text?.ph2}</span>
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h ui-fill-dark-100 ui-theme-redPurple'>
                    <span>{text?.ph1}</span>
                </Avatar>

                <Spacer size={10} />

                <Avatar noease size='xs' className='ui-m-5-h ui-fill-dark-100 ui-theme-purple'>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h ui-fill-dark-100 ui-theme-purple'>
                    <SvgIcon as='js' src={IconFire} />
                </Avatar>
                <Avatar noease className='ui-m-5-h ui-fill-dark-100 ui-theme-purpleBlue'>
                    <SvgIcon as='js' src={IconTrees} />
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h ui-fill-dark-100 ui-theme-purpleBlue'>
                    <SvgIcon as='js' src={IconStore} />
                </Avatar>
            </div>
        </Preview>

        <Description>{desc?.url}</Description>
        <Preview>
            <div className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease className='ui-m-5-h'>
                    <a href='#'>
                        <span>{text?.ph1}</span>
                    </a>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <a href='#'>
                        <GetImage lazy src={img[2]} aspect='square' />
                    </a>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <a href='#'>
                        <span>{text?.ph3}</span>
                    </a>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <a href='#'>
                        <GetImage lazy src={img[5]} aspect='square' />
                    </a>
                </Avatar>
            </div>
        </Preview>

        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Description>{desc?.group}</Description>
        <Preview>
            <Avatar.Holder className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purple'>
                    <SvgIcon as='js' src={IconUser} />
                </Avatar>
                <Avatar noease>
                    <span>{text?.ph1}</span>
                </Avatar>
                <Avatar noease>
                    <GetImage lazy src={img[2]} aspect='square' />
                </Avatar>
                <Avatar noease>
                    <GetImage lazy src={img[3]} aspect='square' />
                </Avatar>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purpleBlue'>
                    <span>{text?.ph4}</span>
                </Avatar>
                <Avatar noease>
                    <GetImage lazy src={img[5]} aspect='square' />
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.count}</Description>
        <Preview>
            <Avatar.Holder className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-p-5 ui-circle ui-circle-1st ui-border'>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purple'>
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
                        <GetImage lazy src={img[3]} aspect='square' />
                    </a>
                </Avatar>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purpleBlue'>
                    <a href='#'>
                        <span>{text?.ph4}</span>
                    </a>
                </Avatar>
                <Avatar noease>
                    <a href='#'>
                        <GetImage lazy src={img[5]} aspect='square' />
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
            <Avatar.Holder className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-p-5 ui-circle ui-circle-1st ui-border ui-fill-dark-100 ui-theme-purpleBlue'>
                <Avatar noease>
                    <span>{text?.ph1}</span>
                </Avatar>
                <Avatar noease>
                    <GetImage lazy src={img[1]} aspect='square' />
                </Avatar>
                <Avatar noease>
                    <GetImage lazy src={img[3]} aspect='square' />
                </Avatar>
                <Avatar noease className='ui-fill-dark-100 ui-theme-redPurple'>
                    <span>{text?.ph2}</span>
                </Avatar>
                <Avatar noease>
                    <GetImage lazy src={img[4]} aspect='square' />
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
            <Avatar.Holder>
                <span className='ui-m-30-r ui-inline-block'>
                    {text?.refPrefix}
                </span>
                <span className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-p-5 ui-circle ui-circle-1st'>
                    <Avatar size='sm' title={text?.name1} data={{ 'tooltip': 't' }} className='ui-border ui-border-lg ui-stroke ui-theme-yellow'>
                      <GetImage lazy src={img[5]} aspect='square' />
                    </Avatar>
                    <Avatar size='sm' title={text?.name2} data={{ 'tooltip': 't' }} className='ui-border ui-border-lg ui-stroke ui-theme-orangeRed'>
                        <GetImage lazy src={img[2]} aspect='square' />
                    </Avatar>
                    <Avatar size='sm' title={text?.name3} data={{ 'tooltip': 't' }} className='ui-border ui-border-lg ui-stroke ui-theme-green'>
                        <GetImage lazy src={img[0]} aspect='square' />
                    </Avatar>
                </span>
                <span className='ui-m-10-l ui-inline-block'>
                    {text?.refSuffix}
                </span>
            </Avatar.Holder>

            <Spacer size={20} />

            <p className='ui-p-15-h'>
                <span className='ui-text ui-theme-yellow'>{text?.ref1}</span>{' '}
                <span className='ui-text ui-theme-orangeRed'>{text?.ref2}</span>{' '}
                <span className='ui-text ui-theme-green'>{text?.ref3}</span>
            </p>
        </Preview>
        </>
    );
}
