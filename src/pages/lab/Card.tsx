import * as React from 'react';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Image from 'uilab/react/Image';
import ListGroup from 'uilab/react/ListGroup';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';
import { headings } from '../../helpers/Lab';

// assets
import { IconTrees } from 'uilab-icons/react/general/trees';
import { IconCoffee } from 'uilab-icons/react/kitchen/coffee';
import { IconForkKnife } from 'uilab-icons/react/kitchen/fork-knife';
import { IconMitten } from 'uilab-icons/react/kitchen/mitten';
import { IconTrophyStar } from 'uilab-icons/react/general/trophy-star';

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
            <Grid.Static fluid='lg' className='ui-align-l'>
                <Grid.Row>
                    <Grid.Col size={12}>
                        <Card className='ui-round ui-shadow-lg'>
                            <Card.Side className='ui-p-30'>
                                <Heading as='h2'>{text?.forestTitle}</Heading>
                                <p className='ui-font-18 ui-font-light ui-font-readable ui-align-justify'>{text?.forest}</p>
                            </Card.Side>
                            <Card.Side>
                                <Image fluid src={img[3]} aspect='landscape' className='ui-round-b' />
                                <div className='ui-m-30 ui-set-absolute ui-set-b ui-set-l'>
                                    <p className='ui-color-white ui-font-18'>
                                        <SvgIcon as='js' src={IconTrees} size='xxl'r={10} />
                                        {text?.forestImg}
                                    </p>
                                    <Button block='sm' className='ui-m-15-t ui-round ui-theme-greenYellow ui-fill-dark-100'>
                                        {text?.forestMore}
                                    </Button>
                                </div>
                            </Card.Side>
                        </Card>
                    </Grid.Col>
                </Grid.Row>

                <Grid.Col size={420} className='ui-p-10 ui-round-1st ui-theme-orangeRed'>
                    <Card className='ui-shadow-lg'>
                        <Card.Side className='ui-set-relative'>
                            <span className='ui-p-15 ui-set-absolute'>
                                <SvgIcon as='js' src={IconTrophyStar} size='lg' r={5} />
                                {text?.raceWinner}
                            </span>
                            <Image fluid src={img[5]} aspect='landscape' className='ui-round-t' />
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

                    <Card className='ui-p-10'>
                        <Card.Side className='ui-color-black-50 ui-m-10-b'>
                            {text?.food}
                        </Card.Side>
                        <Card.Side>
                            <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st ui-block-2nd ui-icons-lg ui-icons-no-opacity'>
                                <Button noease multi className='ui-p-20-v'>
                                    <SvgIcon as='js' src={IconCoffee} b={5} className='ui-m-auto' />
                                    {text?.foodBtn1}
                                </Button>
                                <Button noease multi className='ui-p-20-v'>
                                    <SvgIcon as='js' src={IconForkKnife} b={5} className='ui-m-auto' />
                                    {text?.foodBtn2}
                                </Button>
                                <Button noease multi className='ui-p-20-v'>
                                    <SvgIcon as='js' src={IconMitten} b={5} className='ui-m-auto' />
                                    {text?.foodBtn3}
                                </Button>
                            </Button.Wrapper>
                        </Card.Side>
                    </Card>
                </Grid.Col>
            </Grid.Static>
        </Preview>
        </>
    );
}
