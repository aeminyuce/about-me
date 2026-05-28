import * as React from 'react';
import Button from 'uilab/react/Button';
import Card from 'uilab/react/Card';
import Carousel from 'uilab/react/Carousel';
import Heading from 'uilab/react/Heading';
import Image from 'uilab/react/Image';
import Grid from 'uilab/react/Grid';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../../stores/StoreContext';

// assets
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export default function() {
    const { themeA, api } = useStoreContext();
    const travel = api?.home_featured?.travel;

    return (
        <Card className={`home-travel ui-p-5 ui-round ui-shadow ${themeA}`}>
            <Carousel col={1} slide={5000}>
                <Carousel.Slider className='ui-ease-slow'>

                    <Carousel.Content animate={150}>
                        <Grid.Static fluid='sm'>
                            <Grid.Col size={455} className='ui-p-10'>

                                <Grid.Row fluid='no' gap='xs' className='ui-ease-2nd-layout ui-ease-2nd-slow ui-ease-2nd-in-out'>
                                    <Grid.Col size={6}>
                                        <Image lazy fluid src={travel?.img1} aspect='landscape' className='ui-round-l ui-no-round-bl ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={6}>
                                        <Image lazy fluid src={travel?.img2} aspect='landscape' className='ui-round-r ui-no-round-br ui-bring-front' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.img3} aspect='landscape' className='ui-round-l ui-no-round-tl ui-bring-l' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.img4} aspect='landscape' className='ui-bring-b' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.img5} aspect='landscape' className='ui-round-r ui-no-round-tr ui-bring-r' />
                                    </Grid.Col>
                                </Grid.Row>

                            </Grid.Col>
                            <Grid.Row fluid='xs'>
                                <Grid.Col size={12}>

                                    <div className='ui-bring-r ui-ease-layout ui-ease-slow'>
                                        <div className='ui-align-l ui-xs-align-c ui-p-10-t'>
                                            <Heading as='h3'>{travel?.titleA}</Heading>
                                            <p className='ui-color-black-50 ui-font-16 ui-font-readable ui-line-clamp-6 ui-m-30-b'>
                                                {travel?.textA}
                                            </p>
                                            <Button fluid='xs' className='ui-circle ui-fill-dark-100'>{travel?.textMore}</Button>
                                        </div>
                                    </div>

                                </Grid.Col>
                            </Grid.Row>
                        </Grid.Static>
                    </Carousel.Content>

                    <Carousel.Content animate={150}>
                        <Grid.Static fluid='sm'>
                            <Grid.Col size={455} className='ui-p-10'>

                                <Grid.Row fluid='no' gap='xs' className='ui-ease-2nd-layout ui-ease-2nd-slow ui-ease-2nd-in-out'>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.avatar1} aspect='square' className='ui-round-l ui-no-round-bl ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.avatar2} aspect='square' className='ui-bring-front' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.avatar3} aspect='square' className='ui-round-r ui-no-round-br ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.avatar4} aspect='square' className='ui-round-l ui-no-round-tl ui-bring-front' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.avatar5} aspect='square' className='ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid src={travel?.avatar6} aspect='square' className='ui-round-r ui-no-round-tr ui-bring-front' />
                                    </Grid.Col>
                                </Grid.Row>

                            </Grid.Col>
                            <Grid.Row fluid='xs'>
                                <Grid.Col size={12}>

                                    <div className='ui-bring-r ui-ease-layout ui-ease-slow'>
                                        <div className='ui-align-l ui-xs-align-c ui-p-10-t'>
                                            <Heading as='h3'>{travel?.titleB}</Heading>
                                            <p className='ui-color-black-50 ui-font-16 ui-font-readable ui-line-clamp-6 ui-m-30-b'>
                                                {travel?.textB}
                                            </p>
                                            <Button fluid='xs' className='ui-circle ui-fill-dark-100'>{travel?.textMore}</Button>
                                        </div>
                                    </div>

                                </Grid.Col>
                            </Grid.Row>
                        </Grid.Static>
                    </Carousel.Content>

                </Carousel.Slider>
                <Carousel.Nav className='ui-m-10-b'>
                    <Button ghost square className='ui-carousel-prev ui-circle'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <Carousel.Dots />
                    <Button ghost square className='ui-carousel-next ui-circle'>
                        <SvgIcon as='js' src={IconAngleRight} />
                    </Button>
                </Carousel.Nav>
            </Carousel>
        </Card>
    )
}