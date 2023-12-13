import className from 'classnames';
import {Cabin, PT_Serif} from "next/font/google";
const serif = PT_Serif({weight: '400', subsets: ['latin']});
const cabin = Cabin({weight: '400', subsets: ['latin']})

export const handleFont = (style: string, def:boolean = true) => className(def ? cabin.className : serif.className, style);
