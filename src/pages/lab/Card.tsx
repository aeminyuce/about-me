import * as React from 'react';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Image from 'uilab/react/Image';
import ListGroup from 'uilab/react/ListGroup';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings } from '../../helpers/Lab';

// assets
import { IconTrees } from 'uilab-icons/react/general/trees';
import { IconTrophyStar } from 'uilab-icons/react/general/trophy-star';
import { IconChef } from 'uilab-icons/react/kitchen/chef';
import { IconPlate } from 'uilab-icons/react/kitchen/plate';
import { IconCup } from 'uilab-icons/react/kitchen/cup';
import { IconCoffee } from 'uilab-icons/react/kitchen/coffee';
import { IconForkKnife } from 'uilab-icons/react/kitchen/fork-knife';
import { IconMitten } from 'uilab-icons/react/kitchen/mitten';
import { IconTicket } from 'uilab-icons/react/commerce/ticket';
import { IconStore } from 'uilab-icons/react/commerce/store';

export default function () {
    const { api } = useStoreContext();
    const title = headings('card');

    const card = api?.lab?.card;
    const desc = card?.desc;
    const text = card?.text;
    const img = card?.img;

    if (card) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.examples}</Description>
        <Preview>
            <Grid.Static fluid='lg'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Card className='ui-round ui-shadow-lg'>
                            <Card.Side className='ui-p-30'>
                                <Heading as='h2' className='ui-align-l'>{text?.forestTitle}</Heading>
                                <p className='ui-font-18 ui-font-light ui-font-readable ui-align-l'>{text?.forest}</p>
                            </Card.Side>
                            <Card.Side className='ui-set-relative'>
                                <Image fluid src={img[0]} aspect='landscape' className='ui-round-b' />
                                <div className='ui-p-30 ui-round ui-set-absolute ui-set-c ui-bg-blur'>
                                    <p className='ui-color-white ui-font-18 ui-m-20-b'>
                                        <SvgIcon as='js' src={IconTrees} size='xxl' />
                                        <Spacer size={15} />
                                        {text?.forestImg}
                                    </p>
                                    <Button block='sm' className='ui-round ui-theme-greenYellow ui-fill-dark-100'>
                                        {text?.forestMore}
                                    </Button>
                                </div>
                            </Card.Side>
                        </Card>
                    </Grid.Col>
                </Grid.Row>

                <Grid.Col size={420} className='ui-p-10 ui-round-1st ui-theme-orangeRed'>
                    <Card className='ui-align-l ui-shadow-lg'>
                        <Card.Side className='ui-set-relative'>
                            <span className='ui-color-white ui-p-10-v ui-p-20-h ui-m-30 ui-round ui-set-absolute ui-set-b ui-bg-blur'>
                                <SvgIcon as='js' src={IconTrophyStar} size='lg' r={10} />
                                {text?.raceWinner}
                            </span>
                            <Image fluid src={img[1]} aspect='landscape' className='ui-round-t' />
                        </Card.Side>
                        <Card.Side className='ui-p-10-h ui-p-15-v'>
                            <Heading as='h4'>{text?.raceTitle}</Heading>
                            <p className='ui-color-black-50'>{text?.race}</p>
                        </Card.Side>
                        <Card.Side>
                            <ListGroup>
                                <ListGroup.List>
                                    <ListGroup.Item>
                                        <a href='#'>{text?.raceUrl1}</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a href='#'>{text?.raceUrl2}</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <a href='#'>{text?.raceUrl3}</a>
                                    </ListGroup.Item>
                                </ListGroup.List>
                            </ListGroup>
                        </Card.Side>
                        <Card.Side className='ui-p-10'>
                            <Button block='all' className='ui-round ui-fill-dark-100'>
                                {text?.raceMore}
                            </Button>
                        </Card.Side>
                    </Card>

                    <Card className='ui-p-10 ui-shadow-lg'>
                        <Card.Side className='ui-color-black-50 ui-m-10-b ui-theme-yellow ui-text'>
                            {text?.food}
                        </Card.Side>
                        <Card.Side>
                            <Button.Wrapper type='holder' as='div' ease='1st' className='ui-m-1-b ui-round-t-1st ui-block-2nd ui-icons-no-opacity'>
                                <Button noease multi className='ui-p-10-v'>
                                    <SvgIcon as='js' src={IconChef} b={5} className='ui-m-auto' />
                                    {text?.foodBtn1}
                                </Button>
                                <Button noease multi className='ui-p-10-v'>
                                    <SvgIcon as='js' src={IconPlate} b={5} className='ui-m-auto' />
                                    {text?.foodBtn2}
                                </Button>
                                <Button noease multi className='ui-p-10-v'>
                                    <SvgIcon as='js' src={IconCup} b={5} className='ui-m-auto' />
                                    {text?.foodBtn3}
                                </Button>
                            </Button.Wrapper>
                            <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-b-1st ui-block-2nd ui-icons-no-opacity'>
                                <Button noease multi className='ui-p-10-v'>
                                    <SvgIcon as='js' src={IconCoffee} b={5} className='ui-m-auto' />
                                    {text?.foodBtn4}
                                </Button>
                                <Button noease multi className='ui-p-10-v'>
                                    <SvgIcon as='js' src={IconForkKnife} b={5} className='ui-m-auto' />
                                    {text?.foodBtn5}
                                </Button>
                                <Button noease multi className='ui-p-10-v'>
                                    <SvgIcon as='js' src={IconMitten} b={5} className='ui-m-auto' />
                                    {text?.foodBtn6}
                                </Button>
                            </Button.Wrapper>
                        </Card.Side>
                    </Card>
                </Grid.Col>
            </Grid.Static>
        </Preview>

        <Description>{desc?.sides}</Description>
        <Preview>
            <Grid.Row className='ui-align-l'>
                <Grid.Col lg={3} size={6}>
                    <Card className='ui-round ui-shadow'>
                        <Card.Side className='ui-p-15'>
                            <Heading as='h4'>{text?.ticketTitle1}</Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15-h'>
                            {text?.ticket1}
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            <Heading as='h4'>{text?.ticketTitle2}</Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15-h'>
                            {text?.ticket2}
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            <a href='#' className='ui-link ui-font-underline'>{text?.ticketUrl}</a>
                        </Card.Side>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} size={6}>
                    <Card className='ui-round ui-shadow ui-theme-gray'>
                        <Card.Side className='ui-p-15'>
                            <Heading as='h4'>{text?.ticketTitle1}</Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-fill-light-100'>
                            {text?.ticket1}
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            <Heading as='h4'>{text?.ticketTitle2}</Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-fill-light-100'>
                            {text?.ticket2}
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            <a href='#' className='ui-link ui-font-underline'>{text?.ticketUrl}</a>
                        </Card.Side>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} size={6}>
                    <Card className='ui-round ui-shadow ui-theme-yellowOrange'>
                        <Card.Side className='ui-p-15 ui-fill-light-100 ui-text'>
                            <Heading as='h4'>
                                <SvgIcon as='js' src={IconTicket} />
                                {text?.ticketTitle1}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-fill-light-200'>
                            {text?.ticket1}
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-fill-light-100 ui-text'>
                            <Heading as='h4'>
                                <SvgIcon as='js' src={IconStore} />
                                {text?.ticketTitle2}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-fill-light-200'>
                            {text?.ticket2}
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-fill-light-100'>
                            <a href='#' className='ui-link ui-font-underline'>{text?.ticketUrl}</a>
                        </Card.Side>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} size={6}>
                    <Card className='ui-round ui-shadow ui-theme-yellowOrange'>
                        <Card.Side className='ui-p-15 ui-border-b'>
                            <Heading as='h4'>
                                <SvgIcon as='js' src={IconTicket} className='ui-text' />
                                {text?.ticketTitle1}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            {text?.ticket1}
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-border-v'>
                            <Heading as='h4'>
                                <SvgIcon as='js' src={IconStore} className='ui-text' />
                                {text?.ticketTitle2}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            {text?.ticket2}
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-border-t'>
                            <Button block='all' className='ui-round ui-fill-dark-100'>
                                {text?.ticketUrl}
                            </Button>
                        </Card.Side>
                    </Card>
                </Grid.Col>
            </Grid.Row>
        </Preview>
        </>
    );
}
