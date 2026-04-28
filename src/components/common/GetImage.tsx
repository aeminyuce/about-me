import * as React from 'react';

// misc
import type { GetImageProps } from '../../models/Page';

export default function (props: GetImageProps) {
    const { fetchPriority, src, alt, aspect, lazy, fluid, className, style } = props;

    // classes
    const setClassName = className ? `${className}` : '';
    const setAspect = aspect ? ` ui-aspect-${aspect}` : '';
    const setFluid = fluid ? ' ui-img-fluid' : '';

    let classes: string | undefined =  setClassName + setAspect + setFluid;
    if (classes === '') { classes = undefined; }

    // attrs
    const setLazy = lazy ? 'lazy' : undefined;

    return <img fetchPriority={fetchPriority} src={`/images/${src}`} alt={alt} loading={setLazy} className={classes} style={style} />
}