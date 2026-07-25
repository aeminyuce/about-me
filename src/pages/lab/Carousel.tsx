import React from 'react';
import Button from 'uilab/react/Button';
import Carousel from 'uilab/react/Carousel';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Image from 'uilab/react/Image';
import Spacer from 'uilab/react/Spacer';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import { useStoreContext } from '../../stores/StoreContext';
import { headings } from '../../helpers/Lab';
import Description from '../../components/common/Description';
import Preview from '../../components/common/Preview';
import BreadcrumbsWrapper from '../../components/lab/BreadcrumbsWrapper';

// assets
import { IconAngleLeft } from 'uilab-icons/react/general/angle-left';
import { IconAngleRight } from 'uilab-icons/react/general/angle-right';

export default function () {
    const { api } = useStoreContext();
    const title = headings('carousel');

    const carousel = api?.lab?.carousel;
    const desc = carousel?.desc;
    const text = carousel?.text;
    const img = carousel?.img;

    if (carousel) return (
        <>
        <BreadcrumbsWrapper>{title?.h1}</BreadcrumbsWrapper>
        <Heading as='h1'>{title?.h1}</Heading>

        <Heading as='h3' id={title?.hash[0]}>
            {title?.h3[0]}
        </Heading>

        <Description>{desc?.html}</Description>
        <Preview>
            <Carousel col={1}>
                <Carousel.Slider>

                    <Carousel.Content>
                        <Grid.Static fluid='lg'>
                            <Grid.Col size={425} className='ui-p-10'>

                                <Grid.Row fluid='no' gap='xs'>
                                    <Grid.Col size={6}>
                                        <Image lazy fluid='all' src={img[14]} aspect='landscape' className='ui-round-l ui-no-round-bl' />
                                    </Grid.Col>
                                    <Grid.Col size={6}>
                                        <Image lazy fluid='all' src={img[10]} aspect='landscape' className='ui-round-r ui-no-round-br' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[7]} aspect='landscape' className='ui-round-l ui-no-round-tl' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[8]} aspect='landscape' className='ui-no-round' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[6]} aspect='landscape' className='ui-round-r ui-no-round-tr' />
                                    </Grid.Col>
                                </Grid.Row>

                            </Grid.Col>
                            <Grid.Row fluid='sm'>
                                <Grid.Col size={12}>

                                    <div className='ui-align-l ui-xs-align-c ui-p-10-t'>
                                        <Heading as='h3'>{text?.travelTitle}</Heading>
                                        <p className='ui-color-black-50 ui-font-16 ui-font-readable ui-m-25-b'>
                                            {text?.travelText1}
                                            <Spacer size={10} />
                                            {text?.travelText1}
                                        </p>
                                        <Button fluid='xs' className='ui-circle'>{text?.more}</Button>
                                    </div>

                                </Grid.Col>
                            </Grid.Row>
                        </Grid.Static>
                    </Carousel.Content>

                    <Carousel.Content>
                        <Grid.Static fluid='lg'>
                            <Grid.Col size={425} className='ui-p-10'>

                                <Grid.Row fluid='no' gap='xs'>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[1]} aspect='square' className='ui-round-l ui-no-round-bl' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[2]} aspect='square' className='ui-no-round' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[3]} aspect='square' className='ui-round-rui-no-round-br' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[4]} aspect='square' className='ui-round-l ui-no-round-tl' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[5]} aspect='square' className='ui-no-round' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[6]} aspect='square' className='ui-round-r ui-no-round-tr' />
                                    </Grid.Col>
                                </Grid.Row>

                            </Grid.Col>
                            <Grid.Row fluid='sm'>
                                <Grid.Col size={12}>

                                    <div className='ui-align-l ui-xs-align-c ui-p-10-t'>
                                        <Heading as='h3'>{text?.friendsTitle}</Heading>
                                        <p className='ui-color-black-50 ui-font-16 ui-font-readable ui-m-25-b'>
                                            {text?.friendsText1}
                                            <Spacer size={10} />
                                            {text?.friendsText2}
                                        </p>
                                        <Button fluid='xs' className='ui-circle'>{text?.more}</Button>
                                    </div>

                                </Grid.Col>
                            </Grid.Row>
                        </Grid.Static>
                    </Carousel.Content>

                </Carousel.Slider>
                <Carousel.Nav>
                    <Button ghost square className='ui-carousel-prev ui-circle'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <Carousel.Dots />
                    <Button ghost square className='ui-carousel-next ui-circle'>
                        <SvgIcon as='js' src={IconAngleRight} />
                    </Button>
                </Carousel.Nav>
            </Carousel>
        </Preview>

        <Description>{desc?.htmlAnimate}</Description>
        <Preview>
            <Carousel col={1} slide={5000}>
                <Carousel.Slider className='ui-ease-slow'>

                    <Carousel.Content animate={150}>
                        <Grid.Static fluid='lg'>
                            <Grid.Col size={425} className='ui-p-10'>

                                <Grid.Row fluid='no' gap='xs' className='ui-ease-2nd-layout ui-ease-2nd-slow ui-ease-2nd-in-out'>
                                    <Grid.Col size={6}>
                                        <Image lazy fluid='all' src={img[14]} aspect='landscape' className='ui-round-l ui-no-round-bl ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={6}>
                                        <Image lazy fluid='all' src={img[10]} aspect='landscape' className='ui-round-r ui-no-round-br ui-bring-front' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[7]} aspect='landscape' className='ui-round-l ui-no-round-tl ui-bring-l' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[8]} aspect='landscape' className='ui-no-round ui-bring-b' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[6]} aspect='landscape' className='ui-round-l ui-no-round-tr ui-bring-r' />
                                    </Grid.Col>
                                </Grid.Row>

                            </Grid.Col>
                            <Grid.Row fluid='sm'>
                                <Grid.Col size={12}>

                                    <div className='ui-bring-r ui-ease-layout ui-ease-slow'>
                                        <div className='ui-align-l ui-xs-align-c ui-p-10-t'>
                                            <Heading as='h3'>{text?.travelTitle}</Heading>
                                            <p className='ui-color-black-50 ui-font-16 ui-font-readable ui-m-25-b'>
                                                {text?.travelText1}
                                                <Spacer size={10} />
                                                {text?.travelText1}
                                            </p>
                                            <Button fluid='xs' className='ui-circle'>{text?.more}</Button>
                                        </div>
                                    </div>

                                </Grid.Col>
                            </Grid.Row>
                        </Grid.Static>
                    </Carousel.Content>

                    <Carousel.Content animate={150}>
                        <Grid.Static fluid='lg'>
                            <Grid.Col size={425} className='ui-p-10'>

                                <Grid.Row fluid='no' gap='xs' className='ui-ease-2nd-layout ui-ease-2nd-slow ui-ease-2nd-in-out'>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[1]} aspect='square' className='ui-round-l ui-no-round-bl ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[2]} aspect='square' className='ui-no-round ui-bring-front' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[3]} aspect='square' className='ui-round-r ui-no-round-br ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[4]} aspect='square' className='ui-round-l ui-no-round-tl ui-bring-front' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[5]} aspect='square' className='ui-no-round ui-bring-back' />
                                    </Grid.Col>
                                    <Grid.Col size={4}>
                                        <Image lazy fluid='all' src={img[6]} aspect='square' className='ui-round-r ui-no-round-tr ui-bring-front' />
                                    </Grid.Col>
                                </Grid.Row>

                            </Grid.Col>
                            <Grid.Row fluid='sm'>
                                <Grid.Col size={12}>

                                    <div className='ui-bring-r ui-ease-layout ui-ease-slow'>
                                        <div className='ui-align-l ui-xs-align-c ui-p-10-t'>
                                            <Heading as='h3'>{text?.friendsTitle}</Heading>
                                            <p className='ui-color-black-50 ui-font-16 ui-font-readable ui-m-25-b'>
                                                {text?.friendsText1}
                                                <Spacer size={10} />
                                                {text?.friendsText2}
                                            </p>
                                            <Button fluid='xs' className='ui-circle'>{text?.more}</Button>
                                        </div>
                                    </div>

                                </Grid.Col>
                            </Grid.Row>
                        </Grid.Static>
                    </Carousel.Content>

                </Carousel.Slider>
                <Carousel.Nav>
                    <Button ghost square className='ui-carousel-prev ui-circle'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <Carousel.Dots />
                    <Button ghost square className='ui-carousel-next ui-circle'>
                        <SvgIcon as='js' src={IconAngleRight} />
                    </Button>
                </Carousel.Nav>
            </Carousel>
        </Preview>

        <Heading as='h3' id={title?.hash[1]}>
            {title?.h3[1]}
        </Heading>

        <Description>{desc?.img}</Description>
        <Preview>
            <Carousel col={8} md={4} sm={3} xs={1} slide={2000}>
                <Carousel.Slider className='ui-ease-slow'>

                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[6]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[7]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[8]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[9]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[10]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[11]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[12]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[13]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[14]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[15]} aspect='landscape' />
                    </Carousel.Content>
                     <Carousel.Content>
                        <Image lazy fluid='all' src={img[6]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[7]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[8]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[9]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[10]} aspect='landscape' />
                    </Carousel.Content>

                </Carousel.Slider>
                <Carousel.Nav>
                    <Button ghost square className='ui-carousel-prev ui-circle'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <Carousel.Dots />
                    <Button ghost square className='ui-carousel-next ui-circle'>
                        <SvgIcon as='js' src={IconAngleRight} />
                    </Button>
                </Carousel.Nav>
            </Carousel>
        </Preview>

        <Description>{desc?.imgHalf}</Description>
        <Preview>
            <Carousel half col={4} md={3} sm={2} xs={2}>
                <Carousel.Slider>

                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[14]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[7]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[8]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[7]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[9]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[10]} aspect='landscape' />
                    </Carousel.Content>
                    <Carousel.Content>
                        <Image lazy fluid='all' src={img[11]} aspect='landscape' />
                    </Carousel.Content>

                </Carousel.Slider>
                <Carousel.Nav>
                    <Button ghost square className='ui-carousel-prev ui-circle'>
                        <SvgIcon as='js' src={IconAngleLeft} />
                    </Button>
                    <Carousel.Dots />
                    <Button ghost square className='ui-carousel-next ui-circle'>
                        <SvgIcon as='js' src={IconAngleRight} />
                    </Button>
                </Carousel.Nav>
            </Carousel>
        </Preview>
        </>
    )
}
