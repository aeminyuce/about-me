import * as React from 'react';

// misc
import type { GetImageProps } from '../../models/Page';

export default function (props: GetImageProps) {
    const { src, alt, aspect, className, style } = props;

    // classes
    const setClassName = className ? `${className}` : '';
    const setAspect = aspect ? ` ui-aspect-${aspect}` : '';

    let classes: string | undefined =  setClassName + setAspect;
    if (classes === '') { classes = undefined; }

    return <img src={`/images/${src}`} alt={alt} className={classes} style={style} />
}