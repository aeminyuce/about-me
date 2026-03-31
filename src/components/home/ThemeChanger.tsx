import * as React from 'react';
import Button from 'uilab/react/Button';
import Dropdown from 'uilab/react/Dropdown';

// misc
import type { ThemeListProps } from '../../models/Home';
import { useStoreContext } from '../../stores/StoreContext';

export default function (props: any) {
    const { themeA, setThemeA, themeB, setThemeB, api } = useStoreContext();

    const { type } = props;
    const typeA = type === 'a';

    const theme = typeA ? themeA : themeB;
    const round = typeA ? 'ui-round-l' : 'ui-m-1-l ui-round-r';
    const setTheme = (set: string) => typeA ? setThemeA(set) : setThemeB(set);

    const themeList = api?.home?.nav?.themeList;

    return (
        <Dropdown align='l'>
            <Button noease className={`ui-p-10-h ${round}`}>
                <span className={`ui-block ui-circle ${theme} ui-fill-dark-100`} />
            </Button>
            <Dropdown.Menu className='ui-inline-block-2nd ui-round ui-circle-2nd ui-shadow-lg ui-cursor-pointer'>

                {themeList.map((item: ThemeListProps) => (
                    <Dropdown.Item key={item.name} onClick={() => setTheme(item.theme)}>
                        <span className={`ui-m-10-r ${item.theme} ui-fill-dark-100`} />
                        {item.name}
                    </Dropdown.Item>
                ))}

            </Dropdown.Menu>
        </Dropdown>
    )
}
