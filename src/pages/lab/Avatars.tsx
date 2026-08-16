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
import ShowCode from '@components/lab/ShowCode';

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

        <ShowCode id='variants' />
        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.circle}</Description>
        <Preview>
            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-circle-1st'>
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
            </Avatar.Holder>

            <Spacer size={15} />

            <Avatar.Holder ease='2nd' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-squircle-2nd'>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='xs'>
                        <Image lazy src={img[0]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='sm'>
                        <Image lazy src={img[1]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease>
                        <Image lazy src={img[2]} aspect='square' />
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='lg'>
                        <Image lazy src={img[3]} aspect='square' />
                    </Avatar>
                </Item>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.round}</Description>
        <Preview>
            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-round-1st'>
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
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.noImg}</Description>
        <Preview>
            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-circle-1st'>
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
            </Avatar.Holder>

            <Spacer size={15} />

            <Avatar.Holder ease='2nd' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-squircle-2nd'>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='xs'>
                        <Item as='span'>{text?.ph4}</Item>
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='sm'>
                        <Item as='span'>{text?.ph3}</Item>
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease>
                        <Item as='span'>{text?.ph2}</Item>
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='lg'>
                        <Item as='span'>{text?.ph1}</Item>
                    </Avatar>
                </Item>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.icon}</Description>
        <Preview>
            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-round-1st'>
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
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.theme}</Description>
        <Preview>
            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-circle-1st'>
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
            </Avatar.Holder>

            <Spacer size={15} />

            <Avatar.Holder ease='2nd' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-squircle-2nd'>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='xs' className='ui-fill-dark-100 ui-theme-purple'>
                        <SvgIcon as='js' src={IconUser} />
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='sm' className='ui-fill-dark-100 ui-theme-purple'>
                        <SvgIcon as='js' src={IconFire} />
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease className='ui-fill-dark-100 ui-theme-purpleBlue'>
                        <SvgIcon as='js' src={IconTrees} />
                    </Avatar>
                </Item>
                <Item as='span' className='ui-m-5-h'>
                    <Avatar noease size='lg' className='ui-fill-dark-100 ui-theme-purpleBlue'>
                        <SvgIcon as='js' src={IconStore} />
                    </Avatar>
                </Item>
            </Avatar.Holder>
        </Preview>

        <Description>{desc?.url}</Description>
        <Preview>
            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-circle-1st'>
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
            </Avatar.Holder>
        </Preview>

        <Code lines type='react' id='variants' className='ui-round-t'>
{`// with image
<Avatar size='xs' className='ui-round'>
    <Image lazy src='avatar.jpg' aspect='square' />
</Avatar>

// with icon
<Avatar size='sm' className='ui-circle'>
    <SvgIcon as='js' src={IconUser} />
</Avatar>

// with placeholder text
<Avatar size='lg' className='ui-squircle'>
    <Item as='span'>ABC</Item>
</Avatar>

// size     : lg | sm | xs`}
        </Code>
        <Code.Panel info='tsx' className='ui-m-1-t ui-round-b' />

        <Spacer size={30} className='ui-m-30-v' />

        <ShowCode id='groups' />
        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Description>{desc?.group}</Description>
        <Preview>
            <Avatar.Holder ease='2nd' size='sm' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-squircle-2nd'>
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

            <Avatar.Holder ease='2nd' className='ui-hover-scale-more-2nd ui-squircle-hover-shadow-1st ui-ease-1st-filter ui-squircle-2nd'>
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
            <Avatar.Holder ease='1st' size='sm' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-p-5 ui-circle ui-circle-1st ui-border'>
                <Avatar noease>
                    <Button nostyle href='#' className='ui-fill-dark-100 ui-theme-purple'>
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
                <Avatar noease>
                    <Button nostyle href='#' className='ui-fill-dark-100 ui-theme-purpleBlue'>
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

            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-p-5 ui-circle ui-circle-1st ui-border'>
                <Avatar noease>
                    <Button nostyle href='#' className='ui-fill-dark-100 ui-theme-purple'>
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
                <Avatar noease>
                    <Button nostyle href='#' className='ui-fill-dark-100 ui-theme-purpleBlue'>
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
            <Avatar.Holder ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-p-5 ui-circle ui-circle-1st ui-border ui-fill-dark-100 ui-theme-purpleBlue'>
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
            <Item as='span'  className='ui-m-30-r ui-inline-block'>
                {text?.refPrefix}
            </Item>
            <Avatar.Holder as='span' ease='1st' className='ui-hover-scale-more-1st ui-hover-shadow-1st ui-p-5 ui-circle ui-circle-1st'>
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
            </Avatar.Holder>
            <Item as='span'  className='ui-m-10-l ui-inline-block'>
                {text?.refSuffix}
            </Item>

            <Spacer size={20} />

            <Item as='p' className='ui-p-15-h'>
                <Item as='span'  className='ui-text ui-theme-yellow'>{text?.ref1}</Item>{' '}
                <Item as='span'  className='ui-text ui-theme-orangeRed'>{text?.ref2}</Item>{' '}
                <Item as='span'  className='ui-text ui-theme-green'>{text?.ref3}</Item>
            </Item>
        </Preview>

        <Code lines type='react' id='groups' className='ui-round-t'>
{`<Avatar.Holder as='span' ease='1st' size='sm' classname='ui-circle-1st'>
    // with image
    <Avatar noease>
        <Image lazy src='avatar.jpg' aspect='square' />
    </Avatar>

    // with placeholder text
    <Avatar noease>
        <Item as='span'>ABC</Item>
    </Avatar>

    // with icon
    <Avatar noease>
        <SvgIcon as='js' src={IconUser} />
    </Avatar>

    // with show more url
    <Avatar noease>
        <Button nostyle href='#show-more'>
            <Item as='span'>+27</Item>
        </Button>
    </Avatar>
</Avatar.Holder>

// as       : div | span
// ease     : 1st | 2nd
// noease   : used when holder has ease`}
        </Code>
        <Code.Panel info='tsx' className='ui-m-1-t ui-round-b' />
        </>
    )
}
