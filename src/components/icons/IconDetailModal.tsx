import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Modal, { modalOpen } from 'uilab/react/Modal';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { IconDetailsProps } from '../../models/Icons';
import { addCirclesToPaths, togglePoints, getSvgPathSize, copyIconPath } from '../../helpers/Icons';

export const showIconDetail = () => {
    modalOpen({
        source: '#iconDetailModal',
        size: 'md',
        callbackBefore: () => {

            // clear previously created circles first
            const modal = document.getElementById('iconDetailModal');
            const icon = modal?.querySelector('.icon-detail');

            const circles = icon?.querySelectorAll('circle');
            circles?.forEach(el => el.remove());

            // clear hide points selection
            icon?.classList.remove('hide-points');

            const btn = modal?.querySelector('.toggle-points');
            btn?.removeAttribute('name');

            // add new circles and returns paths count
            const pathsCount = addCirclesToPaths('.icon-detail');

            const count = modal?.querySelector('.paths-count');
            if (count) count.textContent = String(pathsCount) ?? null;

            // get svg path size in kb
            const size = modal?.querySelector('.icon-size');
            if (size) size.textContent = getSvgPathSize(icon) ?? null;

            // get svg canvas size
            const viewBoxParts = icon?.getAttribute('viewBox')?.split(' ');
            const viewBox = viewBoxParts ? viewBoxParts[viewBoxParts.length - 1] : undefined;

            const canvas = modal?.querySelector('.icon-canvas');
            if (canvas && viewBox) canvas.textContent = `${viewBox}x${viewBox}`;

        }
    });
};

export default function (props: IconDetailsProps) {
    const { name, category, list } = props;

    return (
        <Modal as='div' id='iconDetailModal'>
            <Modal.Container className='ui-p-30'>
                <Grid.Static fluid='sm'>
                    <Grid.Row gap='no'>
                        <Grid.Col size={12}>
                            <SvgIcon as='sprite' src={list} symbolId={name} opacity='no' className='icon-detail ui-img-fluid' />
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Col size={400} order={{ when: 'sm', pos: 'first' }} className='ui-p-30 ui-no-p-r ui-sm-no-p-l ui-sm-no-p-t'>

                        <Heading as='h2'>SVG Icon Details</Heading>

                        <Grid.Row as='dl' fluid='no' hGap='no' vGap='md' className='ui-font-16 ui-m-30-v'>
                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Icon name</Grid.Col>
                            <Grid.Col as='dd' size={6}>{name}</Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Category name</Grid.Col>
                            <Grid.Col as='dd' size={6}>{category}</Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Points count</Grid.Col>
                            <Grid.Col as='dd' size={6}>
                                <span className='paths-count'></span> points
                            </Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>File size</Grid.Col>
                            <Grid.Col as='dd' size={6}>
                                <span className='icon-size'></span>kb
                            </Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Canvas size</Grid.Col>
                            <Grid.Col as='dd' size={6}>
                                <span className='icon-canvas'></span>px
                            </Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Designed with</Grid.Col>
                            <Grid.Col as='dd' size={6}>Figma</Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Optimized wih</Grid.Col>
                            <Grid.Col as='dd' size={6}>SVGO</Grid.Col>
                        </Grid.Row>

                        <Button.Wrapper type='holder' as='div' ease='1st' className='ui-round-1st ui-theme-purpleBlue'>
                            <Button noease onClick={(e: any) => togglePoints(e.target)} className='toggle-points ui-fill-dark-100'>
                                Toggle points
                            </Button>
                            <Button noease onClick={() => copyIconPath(name, category)} className='ui-fill-dark-100'>
                                Copy source
                            </Button>
                        </Button.Wrapper>

                    </Grid.Col>
                </Grid.Static>
            </Modal.Container>
        </Modal>
    )
}