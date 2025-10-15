import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import HeaderSticky from 'uilab/react/HeaderSticky';
import Modal from 'uilab/react/Modal';
import Sidebar from 'uilab/react/Sidebar';
import SvgIcon from 'uilab/react/SvgIcon';

// utils
import type { HeaderLinksProps, SocialLinksProps } from '../utils/Models';
import { ShowGetInTouch } from '../utils/Helpers';
import { useStoreContext } from './StoreContext';

// assets
import { IconDribbble } from 'uilab-icons/react/social/dribbble';
import { IconGithub } from 'uilab-icons/react/social/github';
import { IconLinkedin } from 'uilab-icons/react/social/linkedin';
import { IconBarsLeft } from 'uilab-icons/react/general/bars-left';
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconSun } from 'uilab-icons/react/weather/sun';
import { IconMoon } from 'uilab-icons/react/weather/moon';

export default function () {
    const { apiResponse } = useStoreContext();

    const headerData = apiResponse?.header;
    const getInTouchData = headerData?.getInTouch;

    const socialIcons = {
        github: IconGithub,
        dribbble: IconDribbble,
        linkedin: IconLinkedin,
    };

    return (
        <HeaderSticky className='ui-container' dataClasses='ui-shadow'>
            <Grid.Row fluid='no'>
                <Grid.Col size={9} md={3} sm={3} xs={3}>
                    {/* toggle header sidebar */}
                    <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-round ui-visible-md'>
                        <SvgIcon as='js' src={IconBarsLeft} opacity='no' />
                    </Button>

                    {/* header links */}
                    <span className='ui-hidden-md'>
                        <span className='ui-ease-1st-btn ui-sidebar-add-l'>

                            {headerData?.headerLinks.map((item: HeaderLinksProps) => {
                                const isModal = item.modal ? () => ShowGetInTouch() : null;

                                return (
                                    <Button key={item.name} ghost noease to={item.to} onClick={isModal} className='ui-m-2-r ui-round'>
                                        {item.name}
                                    </Button>
                                )
                            })}

                        </span>
                    </span>
                </Grid.Col>
                <Grid.Col size={3} md={9} sm={9} xs={9} className='ui-align-r ui-icons-no-opacity'>
                    {/* social links */}
                    <span className="ui-ease-1st-btn">

                        {headerData?.socialLinks.map((item: SocialLinksProps) => (
                            <Button key={item.title} square ghost noease title={item.title} href={item.url} className='ui-round' target='_blank' rel='nofollow'>
                                <SvgIcon as='js' src={socialIcons[item.icon as string]} />
                            </Button>
                        ))}

                    </span>

                    {/* toggle dark mode */}
                    <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-round ui-m-5-l'>
                        <SvgIcon as='js' src={IconMoon} opacity='half' className='ui-visible-dark' />
                        <SvgIcon as='js' src={IconSun} opacity='half' className='ui-visible-light' />
                    </Button>
                </Grid.Col>
            </Grid.Row>

            {/* get in touch modal */}
            <Modal as='div' className='getInTouchModal'>
                <Modal.Container className='ui-p-10'>
                    <Grid.Container as='div'>
                        <Grid.Row fluid='no'>
                            <Grid.Col size={4}>
                                <img src={getInTouchData?.qrCodeImage} className='ui-img-fluid' />
                            </Grid.Col>
                            <Grid.Col size={8}>
                                <strong className="ui-font-24">{getInTouchData?.title}</strong>
                                <p className='ui-font-16 ui-font-condensed ui-m-10-t'>
                                    {getInTouchData?.messageStart}
                                    <strong>{getInTouchData?.messageHighlight}</strong>
                                    {getInTouchData?.messageEnd}
                                </p>
                            </Grid.Col>
                        </Grid.Row>
                    </Grid.Container>
                </Modal.Container>
            </Modal>

            {/* header sidebar */}
            <Sidebar pos='l' className='ui-round'>
                <Sidebar.Title className='ui-sidebar-title ui-border-b ui-border-light'>
                    <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <h3 className='ui-h3 ui-font-bold ui-align-l ui-m-10-t'>{headerData?.sidebarTitle}</h3>
                </Sidebar.Title>
                <Sidebar.Content className='ui-scroll-v ui-align-c' />
            </Sidebar>
        </HeaderSticky>
    );
}
