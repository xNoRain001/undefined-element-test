import UTabs from './u-tabs'
import UInput from "./u-input"
import USlider from "./u-slider"
import UDialog from "./u-dialog"
import URating from "./u-rating"
import UTooltip from "./u-tooltip"
// import USplitter from "./u-splitter"
import UExpansion from "./u-expansion"
import UScrollArea from "./u-scroll-area"

const codeMap: { 
  [propName: string]: { 
    [propName: string]: { 
      template?: string, 
      script?: string, 
      style?: string 
    } 
  } 
} = {
  '/u-tabs': UTabs,
  '/u-input': UInput,
  '/u-slider': USlider,
  '/u-dialog': UDialog,
  '/u-rating': URating,
  '/u-tooltip': UTooltip,
  // '/u-splitter': USplitter,
  '/u-expansion': UExpansion,
  '/u-scroll-area': UScrollArea
}

export default codeMap
