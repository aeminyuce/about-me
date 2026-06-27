import Alerts from 'uilab/react/Alerts';

// copy to clipboard (new api)
export const copyToClipboard = async (text: string): Promise<void> => {
    if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error("Clipboard API requires a secure context");
    }

    if (window.ClipboardItem) {
        const item = new ClipboardItem({
            "text/plain": new Blob([text], { type: "text/plain" })
        });
        await navigator.clipboard.write([item]);
        return;
    }

    await navigator.clipboard.writeText(text);
};


// copy icon name
export const copyIconPath = (text: string | undefined, category: string | undefined) => {
    if (!text || !category) return;

    const getCategory = category.toLowerCase();
    const capitalizeText = text
        .split('-')
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join('');

    const getText = `import { Icon${capitalizeText} } from 'uilab-icons/react/${getCategory}/${text}';`;

    copyToClipboard(getText)
        .then(() => {
            Alerts.Message({
                msg: `<b>Icon source copied!</b><br>${getText}`,
                theme: 'success',
            });
        })
        .catch((err) => {
            Alerts.Message({
                msg: `<b>Failed to copy ${getText}!</b><br>${err}`,
                theme: 'danger',
            });
        });
}

// calculate UTF‑8 byte size of an SVG path's `d` attribute
export const getSvgPathSize = (svg: any) => {
    if (!(svg instanceof SVGElement)) return;

    const paths = [...svg.querySelectorAll('path')];
    let totalKB = 0;

    paths.map(path => {
        const d = path.getAttribute('d') || '';
        const bytes = new TextEncoder().encode(d).length;
        const kb = bytes / 1000;

        totalKB += kb;
    });

    return totalKB.toFixed(2);
}

// add circle elements by icon path points
export const addCirclesToPaths = (svgSelector: any) => {
    let pathsCount = 0;

    const svgs = document.querySelectorAll(svgSelector);
    svgs?.forEach(svg => {
        const paths = svg.querySelectorAll('path');
        paths?.forEach((path: any) => {

            const d = path.getAttribute('d');
            if (!d) return;

            // tokenize commands and numbers
            const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g);
            if (!tokens) return;

            const coords = [];
            let i = 0;

            let currentX = 0;
            let currentY = 0;
            let startX = 0;
            let startY = 0;
            let cmd = null;

            while (i < tokens.length) {

                const tok = tokens[i];
                if (/^[a-zA-Z]$/.test(tok)) {
                    cmd = tok;
                    i++;

                    if (cmd === 'Z' || cmd === 'z') {
                        currentX = startX;
                        currentY = startY;
                        coords.push(currentX, currentY);
                    }
                    continue;
                }

                if (!cmd) {
                    i++;
                    continue;
                }

                const absolute = cmd === cmd.toUpperCase();
                const takeNums = (n: number) => {
                    const out = [];

                    for (let k = 0; k < n && i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i]); k++, i++) {
                        out.push(tokens[i]);
                    }

                    return out;
                };

                const addPoint = (x: any, y: any) => {
                    x = parseFloat(x);
                    y = parseFloat(y);

                    if (!absolute) {
                        x += currentX;
                        y += currentY;
                    }

                    currentX = x;
                    currentY = y;

                    coords.push(x, y);
                };

                if (cmd === 'M' || cmd === 'm') {
                    const pair = takeNums(2);
                    if (pair.length < 2) break;

                    let x = parseFloat(pair[0]);
                    let y = parseFloat(pair[1]);

                    if (!absolute) {
                        x += currentX;
                        y += currentY;
                    }

                    currentX = x;
                    currentY = y;
                    startX = x;
                    startY = y;

                    coords.push(x, y);

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const extraPair = takeNums(2);
                        if (extraPair.length !== 2) break;
                        addPoint(extraPair[0], extraPair[1]);
                    }

                } else if (cmd === 'L' || cmd === 'l' || cmd === 'T' || cmd === 't') {

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const pair = takeNums(2);
                        if (pair.length !== 2) break;
                        addPoint(pair[0], pair[1]);
                    }

                } else if (cmd === 'H' || cmd === 'h') {

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const nums = takeNums(1);
                        if (nums.length !== 1) break;

                        let x = parseFloat(nums[0]);
                        if (!absolute) x += currentX;

                        currentX = x;
                        coords.push(x, currentY);
                    }

                } else if (cmd === 'V' || cmd === 'v') {

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const nums = takeNums(1);
                        if (nums.length !== 1) break;

                        let y = parseFloat(nums[0]);
                        if (!absolute) y += currentY;

                        currentY = y;
                        coords.push(currentX, y);
                    }

                } else if (cmd === 'C' || cmd === 'c') {

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const set = takeNums(6);
                        if (set.length !== 6) break;

                        addPoint(set[4], set[5]);
                    }

                } else if (cmd === 'S' || cmd === 's' || cmd === 'Q' || cmd === 'q') {

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const set = takeNums(4);
                        if (set.length !== 4) break;

                        addPoint(set[2], set[3]);
                    }

                } else if (cmd === 'A' || cmd === 'a') {

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const set = takeNums(7);
                        if (set.length !== 7) break;

                        addPoint(set[5], set[6]);
                    }

                } else {

                    while (i < tokens.length && !/^[a-zA-Z]$/.test(tokens[i])) {
                        const pair = takeNums(2);
                        if (pair.length !== 2) break;

                        addPoint(pair[0], pair[1]);
                    }

                }

            }

            if (!coords) return;

            // group into [x,y] pairs
            for (let i = 0; i < coords.length; i += 2) {
                const cx = String(coords[i]);
                const cy = String(coords[i + 1]);

                if (cy === undefined) continue;

                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

                circle.setAttribute('cx', cx);
                circle.setAttribute('cy', cy);
                circle.setAttribute('r', '0.95%');
                circle.setAttribute('fill', 'hsl(0, 0%, 100%)');
                circle.setAttribute('stroke', 'hsl(204.6, 100%, 51.2%)');
                circle.setAttribute('stroke-width', '0.45%');

                svg.appendChild(circle);

                pathsCount++;
            }

        });
    });

    return pathsCount;
}