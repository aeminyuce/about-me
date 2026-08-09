import React from 'react';
import Button from '@ui/Button';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';
import type { SocialLinksProps } from '@models/Page';

// assets
import { IconDribbble } from '@icon/social/dribbble';
import { IconGithub } from '@icon/social/github';
import { IconLinkedin } from '@icon/social/linkedin';
import { IconX } from '@icon/social/x';

export default function () {
    const { api } = useStoreContext();

    const socialIcons: any = {
        github: IconGithub,
        dribbble: IconDribbble,
        linkedin: IconLinkedin,
        x: IconX,
    }

    return (
        <Button.Wrapper as='span' ease='1st' className='ui-align-c ui-round-1st'>

            {api?.header?.socialLinks?.map((item: SocialLinksProps) => (
                <Button key={item.title} square ghost noease title={item.title} href={item.url} target='_blank' rel='nofollow'>
                    <SvgIcon as='js' src={socialIcons[item.icon as string]} />
                </Button>
            ))}

        </Button.Wrapper>
    )
}