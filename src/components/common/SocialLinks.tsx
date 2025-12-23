import * as React from 'react';
import Button from 'uilab/react/Button';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { SocialLinksProps } from '../../models/Header';
import { useStoreContext } from '../../states/StoreContext';

// assets
import { IconDribbble } from 'uilab-icons/react/social/dribbble';
import { IconGithub } from 'uilab-icons/react/social/github';
import { IconLinkedin } from 'uilab-icons/react/social/linkedin';

export default function () {
    const { apiResponse } = useStoreContext();

    const socialIcons = {
        github: IconGithub,
        dribbble: IconDribbble,
        linkedin: IconLinkedin,
    };

    return (
        <span className='ui-ease-1st-btn'>

            {apiResponse?.header?.socialLinks.map((item: SocialLinksProps) => (
                <Button key={item.title} square ghost noease title={item.title} href={item.url} className='ui-round' target='_blank' rel='nofollow'>
                    <SvgIcon as='js' src={socialIcons[item.icon as string]} />
                </Button>
            ))}

        </span>
    )
}