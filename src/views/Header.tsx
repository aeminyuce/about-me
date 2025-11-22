import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import HeaderSticky from 'uilab/react/HeaderSticky';
import Modal from 'uilab/react/Modal';
import Sidebar from 'uilab/react/Sidebar';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { HeaderLinksProps, SocialLinksProps } from '../utils/Models';
import { ShowGetInTouch } from '../utils/Helpers';
import { useStoreContext } from '../states/StoreContext';

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

    return headerData && (
        <HeaderSticky className='ui-container' dataClasses='ui-shadow'>
            <Grid.Row fluid='no'>
                <Grid.Col size={9} md={3} sm={3} xs={3}>

                    <ToggleHeaderSidebar />
                    {headerData?.headerLinks && <HeaderLinks />}

                </Grid.Col>
                <Grid.Col size={3} md={9} sm={9} xs={9} className='ui-align-r ui-icons-no-opacity'>

                    {headerData?.socialLinks && <SocialLinks />}
                    <ToggleDarkMode />

                </Grid.Col>
            </Grid.Row>

            {headerData?.getInTouch && <GetInTouchModal />}
            {headerData?.sidebarTitle && <HeaderSidebar />}
        </HeaderSticky>
    );
}

const ToggleHeaderSidebar = () => {
    return (
        <Button square ghost title='Toggle Nav' className='ui-sidebar-show-l ui-round ui-visible-md'>
            <SvgIcon as='js' src={IconBarsLeft} opacity='no' />
        </Button>
    )
}

const HeaderLinks = () => {
    const { apiResponse } = useStoreContext();

    return (
        <span className='ui-hidden-md'>
            <span className='ui-ease-1st-btn ui-sidebar-add-l'>

                {apiResponse?.header?.headerLinks.map((item: HeaderLinksProps) => {
                    const isModal = item.modal ? () => ShowGetInTouch() : null;

                    return (
                        <Button key={item.name} ghost noease to={item.to} onClick={isModal} className='ui-m-2-r ui-round'>
                            {item.name}
                        </Button>
                    )
                })}

            </span>
        </span>
    )
}

const SocialLinks = () => {
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

const ToggleDarkMode = () => {
    return (
        <Button square ghost title='Toggle Dark Mode' className='ui-darkmode-toggle ui-round ui-m-5-l'>
            <SvgIcon as='js' src={IconMoon} opacity='half' className='ui-visible-dark' />
            <SvgIcon as='js' src={IconSun} opacity='half' className='ui-visible-light' />
        </Button>
    )
}


const GetInTouchModal = () => {
    const { apiResponse } = useStoreContext();
    const getInTouch = apiResponse?.header?.getInTouch;

    const qrCodeImage = getInTouch?.qrCodeImage;
    const title = getInTouch?.title;

    const messageStart = getInTouch?.messageStart;
    const messageHighlight = getInTouch?.messageHighlight;
    const messageEnd = getInTouch?.messageEnd;

    return (
        <Modal as='div' className='getInTouchModal'>
            <Modal.Container>
                <Grid.Static fluid='no'>
                    <Grid.Col size={133} className='ui-p-10'>
                        {qrCodeImage &&
                            <img src={qrCodeImage} className='ui-img-fluid' />
                        }
                    </Grid.Col>
                    <Grid.Row>
                        <Grid.Col size={12}>
                            {title &&
                                <strong className='ui-font-24'>{title}</strong>
                            }

                            {(messageStart || messageHighlight || messageEnd) &&
                                <p className='ui-font-16 ui-font-condensed ui-m-10-t'>
                                    {messageStart}
                                    <strong>{messageHighlight}</strong>
                                    {messageEnd}
                                </p>
                            }
                        </Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Modal.Container>
        </Modal>
    )
}

const HeaderSidebar = () => {
    const { apiResponse } = useStoreContext();
    const sidebarTitle = apiResponse?.header?.sidebarTitle;

    return (
        <Sidebar pos='l' className='ui-round'>
            <Sidebar.Title className='ui-sidebar-title ui-border-b ui-border-light'>
                <Button square ghost title='Close' className='ui-sidebar-close ui-round'>
                    <SvgIcon as='js' src={IconAngleLeft} />
                </Button>
                {sidebarTitle &&
                    <h3 className='ui-h3 ui-font-bold ui-align-l ui-m-10-t'>{sidebarTitle}</h3>
                }
            </Sidebar.Title>
            <Sidebar.Content className='ui-scroll-v ui-align-c' />
        </Sidebar>
    )
}