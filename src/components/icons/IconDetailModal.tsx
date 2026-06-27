import * as React from 'react';
import Button from 'uilab/react/Button';
import Grid from 'uilab/react/Grid';
import Heading from 'uilab/react/Heading';
import Modal, { modalOpen } from 'uilab/react/Modal';
import SvgIcon from 'uilab/react/SvgIcon';

// misc
import type { IconDetailsProps } from '../../models/Icons';
import { addCirclesToPaths, getSvgPathSize, copyIconPath } from '../../helpers/Icons';

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

            // add new circles and returns paths count
            const pathsCount = addCirclesToPaths('.icon-detail');

            const count = modal?.querySelector('.paths-count');
            if (count) count.textContent = String(pathsCount) ?? null;

            // get svg path size in kb
            const size = modal?.querySelector('.icon-size');
            if (size) size.textContent = getSvgPathSize(icon) ?? null;

        }
    });
};

export default function (props: IconDetailsProps) {
    const { name, category, list, spin } = props;

    return (
        <Modal as='div' id='iconDetailModal'>
            <Modal.Container className='ui-p-30 ui-sm-no-p'>
                <Grid.Static fluid='sm'>
                    <Grid.Row>
                        <Grid.Col size={12}>
                            <SvgIcon as='sprite' src={list} symbolId={name} opacity='no' animate={spin} className='icon-detail ui-img-fluid' />
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Col size={400} order={{ when: 'sm', pos: 'first' }} className='ui-p-30 ui-no-p-r'>

                        <Heading as='h2'>SVG Icon Details</Heading>

                        <Grid.Row as='dl' fluid='no' hGap='no' vGap='md' className='ui-font-16 ui-m-30-v'>
                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Icon name</Grid.Col>
                            <Grid.Col as='dd' size={6}>{name}</Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Category name</Grid.Col>
                            <Grid.Col as='dd' size={6}>{category}</Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Paths count</Grid.Col>
                            <Grid.Col as='dd' size={6}>
                                <span className='paths-count'></span> points
                            </Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>File size</Grid.Col>
                            <Grid.Col as='dd' size={6}>
                                <span className='icon-size'></span> kb
                            </Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Designed with</Grid.Col>
                            <Grid.Col as='dd' size={6}>Figma</Grid.Col>

                            <Grid.Col as='dt' size={6} className='ui-color-black-50'>Optimized with</Grid.Col>
                            <Grid.Col as='dd' size={6}>SVGO</Grid.Col>
                        </Grid.Row>

                        <Button onClick={() => copyIconPath(name, category)} className='ui-round ui-theme-purpleBlue ui-fill-dark-100'>
                            Copy icon source
                        </Button>

                    </Grid.Col>
                </Grid.Static>
            </Modal.Container>
        </Modal>
    )
}