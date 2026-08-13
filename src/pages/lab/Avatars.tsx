import React from 'react';
import Avatar from '@ui/Avatar';
import Button from '@ui/Button';
import Code from '@ui/Code';
import Heading from '@ui/Heading';
import Image from '@ui/Image';
import Item from '@ui/Item';
import Spacer from '@ui/Spacer';
import SvgIcon from '@ui/SvgIcon';
import Tooltip from '@ui/Tooltip';

// misc
import { useStoreContext } from '@stores/StoreContext';
import { headings } from '@helpers/Lab';
import Description from '@components/common/Description';
import Preview from '@components/common/Preview';
import BreadcrumbsWrapper from '@components/lab/BreadcrumbsWrapper';

// assets
import { IconUser } from '@icon/general/user';
import { IconTrees } from '@icon/general/trees';
import { IconFire } from '@icon/general/fire';
import { IconStore } from '@icon/commerce/store';

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

        <Code className='ui-round-t'>
            <Code.Comment>/* with image */</Code.Comment>
            <Code.Lines>
{`<Avatar size='sm'>
    <Image lazy src='avatar.jpg' aspect='square' />
</Avatar>
`}
            </Code.Lines>
            <Code.Comment>/* with text */</Code.Comment>
            <Code.Lines>
{`<Avatar size='lg'>
    <Item as='span'>ABC</Item>
</Avatar>`}
            </Code.Lines>
        </Code>
        <Code.Panel info='tsx' className='ui-highlight ui-m-1-t ui-round-b' />

        <Description>{desc?.circle}</Description>
        <Preview>
            <Item as='div' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease size='xs' className='ui-m-5-h'>
                    <Image lazy src={img[0]} aspect='square' />
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h'>
                    <Image lazy src={img[1]} aspect='square' />
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <Image lazy src={img[2]} aspect='square' />
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h'>
                    <Image lazy src={img[3]} aspect='square' />
                </Avatar>
            </Item>

            <Spacer size={15} />

            <Item as='div' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-ease-2nd-layout ui-squircle-2nd'>
                <Item as='span'>
                    <Avatar noease size='xs' className='ui-m-5-h'>
                        <Image lazy src={img[0]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease size='sm' className='ui-m-5-h'>
                        <Image lazy src={img[1]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease className='ui-m-5-h'>
                        <Image lazy src={img[2]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease size='lg' className='ui-m-5-h'>
                        <Image lazy src={img[3]} aspect='square' />
                    </Avatar>
                </Item>
            </Item>
        </Preview>

        <Description>{desc?.round}</Description>
        <Preview>
            <Item as='div' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-round-1st'>
                <Avatar noease size='xs' className='ui-m-5-h'>
                    <Image lazy src={img[2]} aspect='square' />
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h'>
                    <Image lazy src={img[3]} aspect='square' />
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <Image lazy src={img[4]} aspect='square' />
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h'>
                    <Image lazy src={img[5]} aspect='square' />
                </Avatar>
            </Item>
        </Preview>

        <Description>{desc?.noImg}</Description>
        <Preview>
            <Item as='div' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease size='xs' className='ui-m-5-h'>
                    <Item as='span'>{text?.ph4}</Item>
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h'>
                    <Item as='span'>{text?.ph3}</Item>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <Item as='span'>{text?.ph2}</Item>
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h'>
                    <Item as='span'>{text?.ph1}</Item>
                </Avatar>
            </Item>

            <Spacer size={15} />

            <Item as='div' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-ease-2nd-layout ui-squircle-2nd'>
                <Item as='span'>
                    <Avatar noease size='xs' className='ui-m-5-h'>
                        <Item as='span'>{text?.ph4}</Item>
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease size='sm' className='ui-m-5-h'>
                        <Item as='span'>{text?.ph3}</Item>
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease className='ui-m-5-h'>
                        <Item as='span'>{text?.ph2}</Item>
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease size='lg' className='ui-m-5-h'>
                        <Item as='span'>{text?.ph1}</Item>
                    </Avatar>
                </Item>
            </Item>
        </Preview>

        <Description>{desc?.icon}</Description>
        <Preview>
            <Item as='div' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-round-1st'>
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
            </Item>
        </Preview>

        <Description>{desc?.theme}</Description>
        <Preview>
            <Item as='div' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease size='xs' className='ui-m-5-h ui-fill-dark-100 ui-theme-yellow'>
                    <Item as='span'>{text?.ph4}</Item>
                </Avatar>
                <Avatar noease size='sm' className='ui-m-5-h ui-fill-dark-100 ui-theme-yellow'>
                    <Item as='span'>{text?.ph3}</Item>
                </Avatar>
                <Avatar noease className='ui-m-5-h ui-fill-dark-100 ui-theme-redPurple'>
                    <Item as='span'>{text?.ph2}</Item>
                </Avatar>
                <Avatar noease size='lg' className='ui-m-5-h ui-fill-dark-100 ui-theme-redPurple'>
                    <Item as='span'>{text?.ph1}</Item>
                </Avatar>
            </Item>

            <Spacer size={15} />

            <Item as='div' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-ease-2nd-layout ui-squircle-2nd'>
                <Item as='span'>
                    <Avatar noease size='xs' className='ui-m-5-h ui-fill-dark-100 ui-theme-purple'>
                        <SvgIcon as='js' src={IconUser} />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease size='sm' className='ui-m-5-h ui-fill-dark-100 ui-theme-purple'>
                        <SvgIcon as='js' src={IconFire} />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease className='ui-m-5-h ui-fill-dark-100 ui-theme-purpleBlue'>
                        <SvgIcon as='js' src={IconTrees} />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease size='lg' className='ui-m-5-h ui-fill-dark-100 ui-theme-purpleBlue'>
                        <SvgIcon as='js' src={IconStore} />
                    </Avatar>
                </Item>
            </Item>
        </Preview>

        <Description>{desc?.url}</Description>
        <Preview>
            <Item as='div' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-circle-1st'>
                <Avatar noease className='ui-m-5-h'>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.ph1}</Item>
                    </Button>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <Button nostyle href='#'>
                        <Image lazy src={img[2]} aspect='square' />
                    </Button>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.ph3}</Item>
                    </Button>
                </Avatar>
                <Avatar noease className='ui-m-5-h'>
                    <Button nostyle href='#'>
                        <Image lazy src={img[5]} aspect='square' />
                    </Button>
                </Avatar>
            </Item>
        </Preview>

        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Code className='ui-round-t'>
            <Code.Lines>
{`<Avatar.Holder size='sm'>
    <Avatar>
        <Image lazy src='avatar.jpg' aspect='square' />
    </Avatar>
    <Avatar>
        <Item as='span'>ABC</Item>
    </Avatar>
</Avatar.Holder>`}
            </Code.Lines>
        </Code>
        <Code.Panel info='tsx' className='ui-highlight ui-m-1-t ui-round-b' />

        <Description>{desc?.group}</Description>
        <Preview>
            <Avatar.Holder size='sm' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-ease-2nd-layout ui-squircle-2nd'>
                <Item as='span'>
                    <Avatar noease className='ui-fill-dark-100 ui-theme-purple'>
                        <SvgIcon as='js' src={IconUser} />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Item as='span'>{text?.ph1}</Item>
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Image lazy src={img[2]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Image lazy src={img[3]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease className='ui-fill-dark-100 ui-theme-purpleBlue'>
                        <Item as='span'>{text?.ph4}</Item>
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Image lazy src={img[5]} aspect='square' />
                    </Avatar>
                </Item>
            </Avatar.Holder>

            <Spacer size={15} />

            <Avatar.Holder className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-ease-2nd-layout ui-squircle-2nd'>
                <Item as='span'>
                    <Avatar noease className='ui-fill-dark-100 ui-theme-purple'>
                        <SvgIcon as='js' src={IconUser} />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Item as='span'>{text?.ph1}</Item>
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Image lazy src={img[2]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Image lazy src={img[3]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease className='ui-fill-dark-100 ui-theme-purpleBlue'>
                        <Item as='span'>{text?.ph4}</Item>
                    </Avatar>
                </Item>
                <Item as='span'>
                    <Avatar noease>
                        <Image lazy src={img[5]} aspect='square' />
                    </Avatar>
                </Item>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.count}</Description>
        <Preview>
            <Avatar.Holder size='sm' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-p-5 ui-circle ui-circle-1st ui-border'>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purple'>
                    <Button nostyle href='#'>
                        <SvgIcon as='js' src={IconUser} />
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.ph1}</Item>
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Image lazy src={img[3]} aspect='square' />
                    </Button>
                </Avatar>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purpleBlue'>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.ph4}</Item>
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Image lazy src={img[5]} aspect='square' />
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.count1}</Item>
                    </Button>
                </Avatar>
            </Avatar.Holder>

            <Spacer size={15} />

            <Avatar.Holder className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-p-5 ui-circle ui-circle-1st ui-border'>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purple'>
                    <Button nostyle href='#'>
                        <SvgIcon as='js' src={IconUser} />
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.ph1}</Item>
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Image lazy src={img[3]} aspect='square' />
                    </Button>
                </Avatar>
                <Avatar noease className='ui-fill-dark-100 ui-theme-purpleBlue'>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.ph4}</Item>
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Image lazy src={img[5]} aspect='square' />
                    </Button>
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.count1}</Item>
                    </Button>
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.groupTheme}</Description>
        <Preview>
            <Avatar.Holder className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-p-5 ui-circle ui-circle-1st ui-border ui-fill-dark-100 ui-theme-purpleBlue'>
                <Avatar noease>
                    <Item as='span'>{text?.ph1}</Item>
                </Avatar>
                <Avatar noease>
                    <Image lazy src={img[1]} aspect='square' />
                </Avatar>
                <Avatar noease>
                    <Image lazy src={img[3]} aspect='square' />
                </Avatar>
                <Avatar noease className='ui-fill-dark-100 ui-theme-redPurple'>
                    <Item as='span'>{text?.ph2}</Item>
                </Avatar>
                <Avatar noease>
                    <Image lazy src={img[4]} aspect='square' />
                </Avatar>
                <Avatar noease>
                    <Button nostyle href='#'>
                        <Item as='span'>{text?.count2}</Item>
                    </Button>
                </Avatar>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.ref}</Description>
        <Preview>
            <Avatar.Holder>
                <Item as='span'  className='ui-m-30-r ui-inline-block'>
                    {text?.refPrefix}
                </Item>
                <Item as='span'  className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-ease-1st-layout ui-p-5 ui-circle ui-circle-1st'>
                    <Tooltip id='name1Tooltip'>{text?.name1}</Tooltip>
                    <Avatar size='sm' data={{ 'tooltip': 't', 'id': 'name1Tooltip' }} className='ui-border ui-border-lg ui-stroke ui-theme-yellow'>
                      <Image lazy src={img[5]} aspect='square' />
                    </Avatar>

                    <Tooltip id='name2Tooltip'>{text?.name2}</Tooltip>
                    <Avatar size='sm' data={{ 'tooltip': 't', 'id': 'name2Tooltip' }} className='ui-border ui-border-lg ui-stroke ui-theme-orangeRed'>
                        <Image lazy src={img[2]} aspect='square' />
                    </Avatar>

                    <Tooltip id='name3Tooltip'>{text?.name3}</Tooltip>
                    <Avatar size='sm' data={{ 'tooltip': 't', 'id': 'name3Tooltip' }} className='ui-border ui-border-lg ui-stroke ui-theme-green'>
                        <Image lazy src={img[0]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span'  className='ui-m-10-l ui-inline-block'>
                    {text?.refSuffix}
                </Item>
            </Avatar.Holder>

            <Spacer size={20} />

            <Item as='p' className='ui-p-15-h'>
                <Item as='span'  className='ui-text ui-theme-yellow'>{text?.ref1}</Item>{' '}
                <Item as='span'  className='ui-text ui-theme-orangeRed'>{text?.ref2}</Item>{' '}
                <Item as='span'  className='ui-text ui-theme-green'>{text?.ref3}</Item>
            </Item>
        </Preview>
        </>
    )
}
