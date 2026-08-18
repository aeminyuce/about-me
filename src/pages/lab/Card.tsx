import React from 'react';
import Button from '@ui/Button';
import Card from '@ui/Card';
import Code from '@ui/Code';
import Grid from '@ui/Grid';
import Heading from '@ui/Heading';
import Image from '@ui/Image';
import Item from '@ui/Item';
import ListGroup from '@ui/ListGroup';
import Spacer from '@ui/Spacer';
import SvgIcon from '@ui/SvgIcon';

// misc
import { useStoreContext } from '@stores/StoreContext';
import { headings } from '@helpers/Lab';
import Description from '@components/common/Description';
import Preview from '@components/common/Preview';
import BreadcrumbsWrapper from '@components/lab/BreadcrumbsWrapper';
import ShowCode from '@components/lab/ShowCode';

// assets
import { IconTrees } from '@icon/general/trees';
import { IconTrophyStar } from '@icon/general/trophy-star';
import { IconChef } from '@icon/kitchen/chef';
import { IconPlate } from '@icon/kitchen/plate';
import { IconCup } from '@icon/kitchen/cup';
import { IconCoffee } from '@icon/kitchen/coffee';
import { IconForkKnife } from '@icon/kitchen/fork-knife';
import { IconMitten } from '@icon/kitchen/mitten';
import { IconTicket } from '@icon/commerce/ticket';
import { IconStore } from '@icon/commerce/store';
import { IconAlertCircle } from '@icon/general/alert-circle';
import { IconAlertShield } from '@icon/general/alert-shield';
import { IconRemoveShield } from '@icon/general/remove-shield';
import { IconCheckBadge } from '@icon/general/check-badge';

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

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[0]} className='ui-align-l'>
                            {title?.h3[0]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='examples' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.examples}</Description>
        <Preview>
            <Grid.Static fluid='lg'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Card className='ui-round ui-shadow-lg'>
                            <Card.Side className='ui-p-30'>
                                <Heading as='h2' className='ui-align-l'>{text?.forestTitle}</Heading>
                                <Item as='p' className='ui-font-18 ui-font-light ui-font-readable ui-align-l'>{text?.forest}</Item>
                            </Card.Side>
                            <Card.Side className='ui-set-relative ui-theme-greenYellow'>
                                <Image lazy fluid='all' src={img[0]} aspect='landscape' className='ui-round-b' />
                                <Item as='div' className='ui-p-20 ui-round-more ui-set-absolute ui-set-c ui-fill-light-100 ui-bg-blur'>
                                    <Item as='p' className='ui-color-white ui-font-18 ui-m-15-b'>
                                        <SvgIcon as='js' src={IconTrees} size='xl' />
                                        <Spacer size={5} />
                                        {text?.forestImg}
                                    </Item>
                                    <Button block='sm' className='ui-round ui-fill-dark-100'>
                                        {text?.forestMore}
                                    </Button>
                                </Item>
                            </Card.Side>
                        </Card>
                    </Grid.Col>
                </Grid.Row>

                <Grid.Col size={420} className='ui-p-10 ui-round-1st ui-shadow-lg-1st ui-theme-orangeRed'>
                    <Card className='ui-align-l'>
                        <Card.Side className='ui-set-relative'>
                            <Item as='span' className='ui-color-white ui-p-10-v ui-p-20-h ui-m-30 ui-round ui-set-absolute ui-set-b ui-fill-light-200 ui-bg-blur'>
                                <SvgIcon as='js' src={IconTrophyStar} size='lg' r={10} />
                                {text?.raceWinner}
                            </Item>
                            <Image lazy fluid='all' src={img[1]} aspect='landscape' className='ui-round-t' />
                        </Card.Side>
                        <Card.Side className='ui-p-10-h ui-p-15-v'>
                            <Heading as='h4'>{text?.raceTitle}</Heading>
                            <Item as='p' className='ui-color-black-50'>{text?.race}</Item>
                        </Card.Side>
                        <Card.Side>
                            <ListGroup>
                                <ListGroup.List>
                                    <ListGroup.Item>
                                        <Button nostyle href='#'>{text?.raceUrl1}</Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button nostyle href='#'>{text?.raceUrl2}</Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button nostyle href='#'>{text?.raceUrl3}</Button>
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

                    <Card className='ui-p-10'>
                        <Card.Side className='ui-m-10-b'>
                            {text?.food}
                        </Card.Side>
                        <Card.Side className='ui-icons-no-opacity'>
                            <Button.Wrapper type='holder' as='div' ease='1st' className='ui-m-1-b ui-round-t-1st ui-block-2nd'>
                                <Button noease multi className='ui-p-10'>
                                    <SvgIcon as='js' src={IconChef} b={5} className='ui-m-auto ui-text' />
                                    {text?.foodBtn1}
                                </Button>
                                <Button noease multi className='ui-p-10'>
                                    <SvgIcon as='js' src={IconPlate} b={5} className='ui-m-auto ui-text' />
                                    {text?.foodBtn2}
                                </Button>
                                <Button noease multi className='ui-p-10'>
                                    <SvgIcon as='js' src={IconCup} b={5} className='ui-m-auto ui-text' />
                                    {text?.foodBtn3}
                                </Button>
                            </Button.Wrapper>
                            <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-b-1st ui-block-2nd'>
                                <Button noease multi className='ui-p-10'>
                                    <SvgIcon as='js' src={IconCoffee} b={5} className='ui-m-auto ui-text' />
                                    {text?.foodBtn4}
                                </Button>
                                <Button noease multi className='ui-p-10'>
                                    <SvgIcon as='js' src={IconForkKnife} b={5} className='ui-m-auto ui-text' />
                                    {text?.foodBtn5}
                                </Button>
                                <Button noease multi className='ui-p-10'>
                                    <SvgIcon as='js' src={IconMitten} b={5} className='ui-m-auto ui-text' />
                                    {text?.foodBtn6}
                                </Button>
                            </Button.Wrapper>
                        </Card.Side>
                    </Card>
                </Grid.Col>
            </Grid.Static>
        </Preview>

        <Code lines type='js' id='examples' className='ui-round-t'>
        {`code example`}
        </Code>
        <Code.Panel info='tsx' className='ui-m-1-t ui-round-b' />

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[1]} className='ui-align-l'>
                            {title?.h3[1]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='sides' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.sides}</Description>
        <Preview>
            <Grid.Row className='ui-align-l ui-round-2nd ui-shadow-2nd'>
                <Grid.Col lg={3} size={6}>
                    <Card className='ui-theme-yellowOrange'>
                        <Card.Side className='ui-p-15 ui-border-b ui-border-light'>
                            <Heading as='h4'>
                                <SvgIcon as='js' src={IconTicket} className='ui-text' />
                                {text?.ticketTitle1}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            {text?.ticket1}
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-border-v ui-border-light'>
                            <Heading as='h4'>
                                <SvgIcon as='js' src={IconStore} className='ui-text' />
                                {text?.ticketTitle2}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            {text?.ticket2}
                        </Card.Side>
                        <Card.Side className='ui-align-c ui-p-15 ui-border-t ui-border-light'>
                            <Button block='all' className='ui-round ui-fill-dark-100'>
                                {text?.ticketUrl}
                            </Button>
                        </Card.Side>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} size={6}>
                    <Card className='ui-theme-gray'>
                        <Card.Side className='ui-p-15 ui-fill-light-100'>
                            <Heading as='h4' className='ui-theme-yellowOrange ui-text'>
                                <SvgIcon as='js' src={IconTicket} />
                                {text?.ticketTitle1}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            {text?.ticket1}
                        </Card.Side>
                        <Card.Side className='ui-p-15 ui-fill-light-100'>
                            <Heading as='h4' className='ui-theme-yellowOrange ui-text'>
                                <SvgIcon as='js' src={IconStore} />
                                {text?.ticketTitle2}
                            </Heading>
                        </Card.Side>
                        <Card.Side className='ui-p-15'>
                            {text?.ticket2}
                        </Card.Side>
                        <Card.Side className='ui-align-c ui-p-15 ui-fill-light-100'>
                            <Button nostyle href='#' className='ui-link ui-font-underline'>{text?.ticketUrl}</Button>
                        </Card.Side>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} size={6}>
                    <Card className='ui-theme-gray'>
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
                        <Card.Side className='ui-align-c ui-p-15'>
                            <Button nostyle href='#' className='ui-link ui-font-underline'>{text?.ticketUrl}</Button>
                        </Card.Side>
                    </Card>
                </Grid.Col>
                <Grid.Col lg={3} size={6}>
                    <Card>
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
                        <Card.Side className='ui-align-c ui-p-15'>
                            <Button nostyle href='#' className='ui-link ui-font-underline'>{text?.ticketUrl}</Button>
                        </Card.Side>
                    </Card>
                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Code lines type='js' id='sides' className='ui-round-t'>
        {`code example`}
        </Code>
        <Code.Panel info='tsx' className='ui-m-1-t ui-round-b' />

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[2]} className='ui-align-l'>
                            {title?.h3[2]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='grids' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.grids}</Description>
        <Preview>
            <Grid.Row className='ui-round-2nd ui-shadow-lg-2nd'>
                <Grid.Col lg={6} size={12}>

                    <Card className='ui-align-l'>
                        <Card.Side className='ui-p-15 ui-border-b ui-border-light'>
                            <Heading as='h4'>{text?.week}</Heading>
                        </Card.Side>
                        <Card.Side>
                            <Grid.Static fluid='sm'>
                                <Grid.Col size={190} className='ui-no-p'>
                                    <Image lazy fluid='all' src={img[2]} aspect='portrait' className='ui-hide-sm ui-round-l ui-no-round-tl' />
                                    <Image lazy fluid='all' src={img[2]} aspect='landscape' className='ui-shown-sm' />
                                </Grid.Col>
                                <Grid.Row gap='lg'>
                                    <Grid.Col size={12}>
                                        <Heading as='h3'>{text?.museumTitle}</Heading>
                                        <Item as='p' className='ui-font-readable ui-m-20-b'>{text?.museum}</Item>
                                        <Button.Wrapper as='span' ease='1st' className='ui-circle-1st'>
                                            <Button noease as='span' size='xs' className='ui-p-10-h ui-m-5-r'>{text?.museumHash1}</Button>
                                            <Button noease as='span' size='xs' className='ui-p-10-h'>{text?.museumHash2}</Button>
                                        </Button.Wrapper>
                                    </Grid.Col>
                                </Grid.Row>
                            </Grid.Static>
                        </Card.Side>
                    </Card>

                </Grid.Col>
                <Grid.Col lg={6} size={12}>

                    <Card>
                        <Grid.Row fluid='no' gap='xxs'>
                            <Grid.Col size={4}>
                                <Image lazy fluid='all' src={img[3]} aspect='square' className='ui-round-l ui-no-round-bl' />
                            </Grid.Col>
                            <Grid.Col size={4}>
                                <Image lazy fluid='all' src={img[4]} aspect='square' className='ui-no-round' />
                            </Grid.Col>
                            <Grid.Col size={4}>
                                <Image lazy fluid='all' src={img[5]} aspect='square' className='ui-round-r ui-no-round-br' />
                            </Grid.Col>
                        </Grid.Row>
                        <Grid.Row fluid='sm' gap='lg' className='ui-color-black-50 ui-font-readable ui-align-l'>
                            <Grid.Col size={6}>{text?.travel1}</Grid.Col>
                            <Grid.Col size={6} className='ui-sm-no-p-t'>{text?.travel2}</Grid.Col>
                        </Grid.Row>
                    </Card>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Code lines type='js' id='grids' className='ui-round-t'>
        {`code example`}
        </Code>
        <Code.Panel info='tsx' className='ui-m-1-t ui-round-b' />

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[3]} className='ui-align-l'>
                            {title?.h3[3]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='alerts' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.alerts}</Description>
        <Preview className='ui-align-l ui-round-1st'>

            <Card closable className='ui-shadow'>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <Item as='span' className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconAlertCircle} size='lg' animate='wiggle' />
                        </Item>
                    </Grid.Col>
                    <Grid.Row gap='lg'>
                        <Grid.Col size={12} className='ui-p-25-v ui-no-p-l'>{text?.info}</Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>

            <Card closable className='ui-theme-greenYellow ui-fill-light-200'>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <Item as='span' className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconCheckBadge} size='lg' animate='pop' className='ui-text' />
                        </Item>
                    </Grid.Col>
                    <Grid.Row gap='lg'>
                        <Grid.Col size={12} className='ui-p-25-v ui-no-p-l'>{text?.success}</Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>

            <Card closable className='ui-theme-yellowOrange ui-fill-light-200'>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <Item as='span' className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconAlertShield} size='lg' animate='pop' className='ui-text' />
                        </Item>
                    </Grid.Col>
                    <Grid.Row gap='lg'>
                        <Grid.Col size={12} className='ui-p-15-v ui-no-p-l'>{text?.warning}</Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>

            <Card closable className='ui-theme-red ui-fill-light-200'>
                <Grid.Static fluid='no'>
                    <Grid.Col size={72} className='ui-set-relative'>
                        <Item as='span' className='ui-set-absolute ui-set-c'>
                            <SvgIcon as='js' src={IconRemoveShield} size='lg' animate='elastic' className='ui-text' />
                        </Item>
                    </Grid.Col>
                    <Grid.Row gap='lg'>
                        <Grid.Col size={12} className='ui-p-25-v ui-no-p-l'>{text?.danger}</Grid.Col>
                    </Grid.Row>
                </Grid.Static>
            </Card>

        </Preview>

        <Code lines type='js' id='alerts' className='ui-round-t'>
        {`code example`}
        </Code>
        <Code.Panel info='tsx' className='ui-m-1-t ui-round-b' />

        <Spacer size={30} className='ui-m-30-v' />

        <Grid.Row>
            <Grid.Static fluid='no'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Heading as='h3' id={title?.hash[4]} className='ui-align-l'>
                            {title?.h3[4]}
                        </Heading>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Col size={42}>
                    <ShowCode id='messages' />
                </Grid.Col>
            </Grid.Static>
        </Grid.Row>

        <Description>{desc?.messages}</Description>
        <Preview>
            <Grid.Row className='ui-align-l ui-round-2nd'>
                <Grid.Col size={6} className='ui-shadow-1st'>

                    <Card type='success' closable className='ui-p-15'>
                        <Heading as='h4'>{text?.successTitle}</Heading>
                        <Item as='p' className='ui-text-readable'>{text?.success}</Item>
                    </Card>

                    <Card type='warning' closable className='ui-p-15'>
                        <Heading as='h4'>{text?.warningTitle}</Heading>
                        <Item as='p' className='ui-text-readable'>{text?.warning}</Item>
                    </Card>

                    <Card type='danger' closable className='ui-p-15'>
                        <Heading as='h4'>{text?.dangerTitle}</Heading>
                        <Item as='p' className='ui-text-readable'>{text?.danger}</Item>
                    </Card>

                </Grid.Col>
                <Grid.Col size={6}>

                    <Card type='success' closable className='ui-p-15 ui-theme-green ui-fill-light-100'>
                        <Heading as='h4'>{text?.successTitle}</Heading>
                        <Item as='p' className='ui-text-readable'>{text?.success}</Item>
                    </Card>

                    <Card type='warning' closable className='ui-p-15 ui-theme-yellow ui-fill-light-100'>
                        <Heading as='h4'>{text?.warningTitle}</Heading>
                        <Item as='p' className='ui-text-readable'>{text?.warning}</Item>
                    </Card>

                    <Card type='danger' closable className='ui-p-15 ui-theme-red ui-fill-light-100'>
                        <Heading as='h4'>{text?.dangerTitle}</Heading>
                        <Item as='p' className='ui-text-readable'>{text?.danger}</Item>
                    </Card>

                </Grid.Col>
            </Grid.Row>
        </Preview>

        <Code lines type='js' id='messages' className='ui-round-t'>
        {`code example`}
        </Code>
        <Code.Panel info='tsx' className='ui-m-1-t ui-round-b' />

        <Spacer size={30} className='ui-m-30-v' />
        </>
    )
}
