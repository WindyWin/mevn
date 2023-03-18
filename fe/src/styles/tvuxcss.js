const behaviors = [
  ['disable', {'pointer-events': 'none', opacity: 0.5}],
  ['clickable', {cursor: 'pointer'}],
  ['button', {
    border: '1px solid #ddd',
    'border-radius': '6px',
    cursor: 'pointer',
    'padding-left': '1em',
    'padding-right': '1em',
    'padding-top': '0.5em',
    'padding-bottom': '0.5em'
  }],
  ['input', {height: '30px', 'padding-left': '0.5em', 'padding-right': '0.5em'}],
  ['select', {height: '30px', 'min-width': '60px'}],
]

/*https://material.io/resources/color*/
const colors = [
  [/^c:(.*?)$/, ([, c]) => ({color: c})],
  [/^bc:(.*?)$/, ([, bc]) => ({'background-color': bc})],

  ['c-r-0', {color: '#ffebee'}],
  ['c-r-1', {color: '#ffcdd2'}],
  ['c-r-2', {color: '#ef9a9a'}],
  ['c-r-3', {color: '#e57373'}],
  ['c-r-4', {color: '#ef5350'}],
  ['c-r-5', {color: '#f44336'}],
  ['c-r-6', {color: '#e53935'}],
  ['c-r-7', {color: '#d32f2f'}],
  ['c-r-8', {color: '#c62828'}],
  ['c-r-9', {color: '#b71c1c'}],

  ['c-p-0', {color: '#fce4ec'}],
  ['c-p-1', {color: '#f8bbd0'}],
  ['c-p-2', {color: '#f48fb1'}],
  ['c-p-3', {color: '#f06292'}],
  ['c-p-4', {color: '#ec407a'}],
  ['c-p-5', {color: '#e91e63'}],
  ['c-p-6', {color: '#d81b60'}],
  ['c-p-7', {color: '#c2185b'}],
  ['c-p-8', {color: '#ad1457'}],
  ['c-p-9', {color: '#880e4f'}],

  ['c-pp-0', {color: '#f3e5f5'}],
  ['c-pp-1', {color: '#e1bee7'}],
  ['c-pp-2', {color: '#ce93d8'}],
  ['c-pp-3', {color: '#ba68c8'}],
  ['c-pp-4', {color: '#ab47bc'}],
  ['c-pp-5', {color: '#9c27b0'}],
  ['c-pp-6', {color: '#8e24aa'}],
  ['c-pp-7', {color: '#7b1fa2'}],
  ['c-pp-8', {color: '#6a1b9a'}],
  ['c-pp-9', {color: '#4a148c'}],

  ['c-dpp-0', {color: '#ede7f6'}],
  ['c-dpp-1', {color: '#d1c4e9'}],
  ['c-dpp-2', {color: '#b39ddb'}],
  ['c-dpp-3', {color: '#9575cd'}],
  ['c-dpp-4', {color: '#7e57c2'}],
  ['c-dpp-5', {color: '#673ab7'}],
  ['c-dpp-6', {color: '#5e35b1'}],
  ['c-dpp-7', {color: '#512da8'}],
  ['c-dpp-8', {color: '#4527a0'}],
  ['c-dpp-9', {color: '#311b92'}],

  ['c-i-0', {color: '#e8eaf6'}],
  ['c-i-1', {color: '#c5cae9'}],
  ['c-i-2', {color: '#9fa8da'}],
  ['c-i-3', {color: '#7986cb'}],
  ['c-i-4', {color: '#5c6bc0'}],
  ['c-i-5', {color: '#3f51b5'}],
  ['c-i-6', {color: '#3949ab'}],
  ['c-i-7', {color: '#303f9f'}],
  ['c-i-8', {color: '#283593'}],
  ['c-i-9', {color: '#1a237e'}],

  ['c-b-0', {color: '#e3f2fd'}],
  ['c-b-1', {color: '#bbdefb'}],
  ['c-b-2', {color: '#90caf9'}],
  ['c-b-3', {color: '#64b5f6'}],
  ['c-b-4', {color: '#42a5f5'}],
  ['c-b-5', {color: '#2196f3'}],
  ['c-b-6', {color: '#1e88e5'}],
  ['c-b-7', {color: '#1976d2'}],
  ['c-b-8', {color: '#1565c0'}],
  ['c-b-9', {color: '#0d47a1'}],

  ['c-lb-0', {color: '#e1f5fe'}],
  ['c-lb-1', {color: '#b3e5fc'}],
  ['c-lb-2', {color: '#81d4fa'}],
  ['c-lb-3', {color: '#4fc3f7'}],
  ['c-lb-4', {color: '#29b6f6'}],
  ['c-lb-5', {color: '#03a9f4'}],
  ['c-lb-6', {color: '#039be5'}],
  ['c-lb-7', {color: '#0288d1'}],
  ['c-lb-8', {color: '#0277bd'}],
  ['c-lb-9', {color: '#01579b'}],

  ['c-gre-0', {color: '#e8f5e9'}],
  ['c-gre-1', {color: '#c8e6c9'}],
  ['c-gre-2', {color: '#a5d6a7'}],
  ['c-gre-3', {color: '#81c784'}],
  ['c-gre-4', {color: '#66bb6a'}],
  ['c-gre-5', {color: '#66bb6a'}],
  ['c-gre-6', {color: '#43a047'}],
  ['c-gre-7', {color: '#388e3c'}],
  ['c-gre-8', {color: '#2e7d32'}],
  ['c-gre-9', {color: '#1b5e20'}],

  ['c-gray-0', {color: '#fafafa'}],
  ['c-gray-1', {color: '#f5f5f5'}],
  ['c-gray-2', {color: '#eeeeee'}],
  ['c-gray-3', {color: '#e0e0e0'}],
  ['c-gray-4', {color: '#bdbdbd'}],
  ['c-gray-5', {color: '#9e9e9e'}],
  ['c-gray-6', {color: '#757575'}],
  ['c-gray-7', {color: '#616161'}],
  ['c-gray-8', {color: '#424242'}],
  ['c-gray-9', {color: '#212121'}],

  ['bc-r-0', {'background-color': '#ffebee'}],
  ['bc-r-1', {'background-color': '#ffcdd2'}],
  ['bc-r-2', {'background-color': '#ef9a9a'}],
  ['bc-r-3', {'background-color': '#e57373'}],
  ['bc-r-4', {'background-color': '#ef5350'}],
  ['bc-r-5', {'background-color': '#f44336'}],
  ['bc-r-6', {'background-color': '#e53935'}],
  ['bc-r-7', {'background-color': '#d32f2f'}],
  ['bc-r-8', {'background-color': '#c62828'}],
  ['bc-r-9', {'background-color': '#b71c1c'}],

  ['bc-p-0', {'background-color': '#fce4ec'}],
  ['bc-p-1', {'background-color': '#f8bbd0'}],
  ['bc-p-2', {'background-color': '#f48fb1'}],
  ['bc-p-3', {'background-color': '#f06292'}],
  ['bc-p-4', {'background-color': '#ec407a'}],
  ['bc-p-5', {'background-color': '#e91e63'}],
  ['bc-p-6', {'background-color': '#d81b60'}],
  ['bc-p-7', {'background-color': '#c2185b'}],
  ['bc-p-8', {'background-color': '#ad1457'}],
  ['bc-p-9', {'background-color': '#880e4f'}],

  ['bc-pp-0', {'background-color': '#f3e5f5'}],
  ['bc-pp-1', {'background-color': '#e1bee7'}],
  ['bc-pp-2', {'background-color': '#ce93d8'}],
  ['bc-pp-3', {'background-color': '#ba68c8'}],
  ['bc-pp-4', {'background-color': '#ab47bc'}],
  ['bc-pp-5', {'background-color': '#9c27b0'}],
  ['bc-pp-6', {'background-color': '#8e24aa'}],
  ['bc-pp-7', {'background-color': '#7b1fa2'}],
  ['bc-pp-8', {'background-color': '#6a1b9a'}],
  ['bc-pp-9', {'background-color': '#4a148c'}],

  ['bc-dpp-0', {'background-color': '#ede7f6'}],
  ['bc-dpp-1', {'background-color': '#d1c4e9'}],
  ['bc-dpp-2', {'background-color': '#b39ddb'}],
  ['bc-dpp-3', {'background-color': '#9575cd'}],
  ['bc-dpp-4', {'background-color': '#7e57c2'}],
  ['bc-dpp-5', {'background-color': '#673ab7'}],
  ['bc-dpp-6', {'background-color': '#5e35b1'}],
  ['bc-dpp-7', {'background-color': '#512da8'}],
  ['bc-dpp-8', {'background-color': '#4527a0'}],
  ['bc-dpp-9', {'background-color': '#311b92'}],

  ['bc-i-0', {'background-color': '#e8eaf6'}],
  ['bc-i-1', {'background-color': '#c5cae9'}],
  ['bc-i-2', {'background-color': '#9fa8da'}],
  ['bc-i-3', {'background-color': '#7986cb'}],
  ['bc-i-4', {'background-color': '#5c6bc0'}],
  ['bc-i-5', {'background-color': '#3f51b5'}],
  ['bc-i-6', {'background-color': '#3949ab'}],
  ['bc-i-7', {'background-color': '#303f9f'}],
  ['bc-i-8', {'background-color': '#283593'}],
  ['bc-i-9', {'background-color': '#1a237e'}],

  ['bc-b-0', {'background-color': '#e3f2fd'}],
  ['bc-b-1', {'background-color': '#bbdefb'}],
  ['bc-b-2', {'background-color': '#90caf9'}],
  ['bc-b-3', {'background-color': '#64b5f6'}],
  ['bc-b-4', {'background-color': '#42a5f5'}],
  ['bc-b-5', {'background-color': '#2196f3'}],
  ['bc-b-6', {'background-color': '#1e88e5'}],
  ['bc-b-7', {'background-color': '#1976d2'}],
  ['bc-b-8', {'background-color': '#1565c0'}],
  ['bc-b-9', {'background-color': '#0d47a1'}],

  ['bc-lb-0', {'background-color': '#e1f5fe'}],
  ['bc-lb-1', {'background-color': '#b3e5fc'}],
  ['bc-lb-2', {'background-color': '#81d4fa'}],
  ['bc-lb-3', {'background-color': '#4fc3f7'}],
  ['bc-lb-4', {'background-color': '#29b6f6'}],
  ['bc-lb-5', {'background-color': '#03a9f4'}],
  ['bc-lb-6', {'background-color': '#039be5'}],
  ['bc-lb-7', {'background-color': '#0288d1'}],
  ['bc-lb-8', {'background-color': '#0277bd'}],
  ['bc-lb-9', {'background-color': '#01579b'}],

  ['bc-gre-0', {'background-color': '#e8f5e9'}],
  ['bc-gre-1', {'background-color': '#c8e6c9'}],
  ['bc-gre-2', {'background-color': '#a5d6a7'}],
  ['bc-gre-3', {'background-color': '#81c784'}],
  ['bc-gre-4', {'background-color': '#66bb6a'}],
  ['bc-gre-5', {'background-color': '#66bb6a'}],
  ['bc-gre-6', {'background-color': '#43a047'}],
  ['bc-gre-7', {'background-color': '#388e3c'}],
  ['bc-gre-8', {'background-color': '#2e7d32'}],
  ['bc-gre-9', {'background-color': '#1b5e20'}],

  ['bc-gray-0', {'background-color': '#fafafa'}],
  ['bc-gray-1', {'background-color': '#f5f5f5'}],
  ['bc-gray-2', {'background-color': '#eeeeee'}],
  ['bc-gray-3', {'background-color': '#e0e0e0'}],
  ['bc-gray-4', {'background-color': '#bdbdbd'}],
  ['bc-gray-5', {'background-color': '#9e9e9e'}],
  ['bc-gray-6', {'background-color': '#757575'}],
  ['bc-gray-7', {'background-color': '#616161'}],
  ['bc-gray-8', {'background-color': '#424242'}],
  ['bc-gray-9', {'background-color': '#212121'}],

  ['bc-gray-0-5', {'background-color': '#fafafa8f'}],
  ['bc-gray-1-5', {'background-color': '#f5f5f58f'}],
  ['bc-gray-2-5', {'background-color': '#eeeeee8f'}],
  ['bc-gray-3-5', {'background-color': '#e0e0e08f'}],
  ['bc-gray-4-5', {'background-color': '#bdbdbd8f'}],
  ['bc-gray-5-5', {'background-color': '#9e9e9e8f'}],
  ['bc-gray-6-5', {'background-color': '#7575758f'}],
  ['bc-gray-7-5', {'background-color': '#6161618f'}],
  ['bc-gray-8-5', {'background-color': '#4242428f'}],
  ['bc-gray-9-5', {'background-color': '#2121218f'}],

  ['bc-black', {'background-color': '#000'}],
  ['bc-white', {'background-color': '#fff'}],
]

const layouts = [
  /* sizing */
  [/^h-(\d+)px/, ([, d]) => ({height: `${d}px`})],
  [/^w-(\d+)px/, ([, d]) => ({width: `${d}px`})],

  ['h-50', {height: '100%'}],
  ['h-100', {height: '100%'}],
  ['h-100vh', {height: '100vh'}],
  ['w-50', {width: '50%'}],
  ['w-100', {width: '100%'}],
  ['w-100vw', {width: '100vw'}],

  /* overflow */
  ['ovf-h', {overflow: 'hidden'}],
  ['ovf-x-s', {'overflow-x': 'scroll'}],
  ['ovf-x-h', {'overflow-x': 'hidden'}],
  ['ovf-y-s', {'overflow-y': 'scroll'}],
  ['ovf-y-h', {'overflow-y': 'hidden'}],
  ['hide-scroll-bar', {'-ms-overflow-style': 'none', /* IE and Edge */ 'scrollbar-width': 'none'  /* Firefox */}],
  ['hide-scroll-bar::-webkit-scrollbar', {display: 'none'}], /* Hide scrollbar for Chrome, Safari and Opera */

  /* flex */
  ['fr', {display: 'flex'}],
  ['fc', {display: 'flex', 'flex-direction': 'column'}],
  ['fw-w', {'flex-wrap': 'wrap'}],
  [/^fg-(\d+)$/, ([, d]) => ({gap: `${d / 2}em`})],
  [/^f(\d+)$/, ([, d]) => ({flex: d})],
  ['ai-bl', {'align-items': 'baseline'}],
  ['ai-c', {'align-items': 'center'}],
  ['ai-f', {'align-items': 'flex-end'}],
  ['ai-s', {'align-items': 'flex-start'}],
  ['jc-c', {'justify-content': 'center'}],
  ['jc-sa', {'justify-content': 'space-around'}],
  ['jc-sb', {'justify-content': 'space-between'}],
  ['jc-se', {'justify-content': 'space-evenly'}],
  ['jc-fe', {'justify-content': 'flex-end'}],
  ['jc-fs', {'justify-content': 'flex-start'}],
  ['jc-n', {'justify-content': 'normal'}],
  ['jc-r', {'justify-content': 'revert'}],

  /* grid */
  ['grid', {display: 'grid'}],
  [/^gtc-(\d+)-(\d+)$/, ([, d1, d2]) => ({'grid-template-columns': `${d1} ${d2}`})],
  [/^gtc-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3]) => ({'grid-template-columns': `${d1} ${d2} ${d3}`})],
  [/^gtc-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3, d4]) => ({'grid-template-columns': `${d1} ${d2} ${d3} ${d4}`})],
  [/^gtc-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3, d4, d5]) => ({'grid-template-columns': `${d1} ${d2} ${d3} ${d4} ${d5}`})],
  [/^gtc-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3, d4, d5, d6]) => ({'grid-template-columns': `${d1} ${d2} ${d3} ${d4} ${d5} ${d6}`})],
  [/^gtr-(\d+)-(\d+)$/, ([, d1, d2]) => ({'grid-template-rows': `${d1} ${d2}`})],
  [/^gtr-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3]) => ({'grid-template-rows': `${d1} ${d2} ${d3}`})],
  [/^gtr-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3, d4]) => ({'grid-template-rows': `${d1} ${d2} ${d3} ${d4}`})],
  [/^gtr-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3, d4, d5]) => ({'grid-template-rows': `${d1} ${d2} ${d3} ${d4} ${d5}`})],
  [/^gtr-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, d1, d2, d3, d4, d5, d6]) => ({'grid-template-rows': `${d1} ${d2} ${d3} ${d4} ${d5} ${d6}`})],
]

const borderRadius = [
  [/^br-(\d+)px$/, ([, d]) => ({'border-radius': `${d}px`})],
  [/^br-(\d+)$/, ([, d]) => ({'border-radius': `${d / 2}em`})],
  [/^br-(\d+)pt$/, ([, pt]) => ({'border-radius': `${pt}%`})],
]

const position = [
  ['abs', {position: 'absolute'}],
  ['fix', {position: 'fixed'}],
  ['rel', {position: 'relative'}],
  ['sta', {position: 'static'}],
  ['sti', {position: 'sticky'}],
  [/^top-(\d+)/, ([, d]) => ({top: `${d}px`})],
  [/^left-(\d+)/, ([, d]) => ({top: `${d}px`})],
  [/^bottom-(\d+)/, ([, d]) => ({top: `${d}px`})],
  [/^right-(\d+)/, ([, d]) => ({top: `${d}px`})],
]

const spacing = [
  [/^pt-(\d+)$/, ([, d]) => ({'padding-top': `${d / 2}em`})],
  [/^pl-(\d+)$/, ([, d]) => ({'padding-left': `${d / 2}em`})],
  [/^pb-(\d+)$/, ([, d]) => ({'padding-bottom': `${d / 2}em`})],
  [/^pr-(\d+)$/, ([, d]) => ({'padding-right': `${d / 2}em`})],
  [/^px-(\d+)$/, ([, d]) => ({'padding-left': `${d / 2}em`, 'padding-right': `${d / 2}em`})],
  [/^py-(\d+)$/, ([, d]) => ({'padding-top': `${d / 2}em`, 'padding-bottom': `${d / 2}em`})],

  [/^mt-(\d+)$/, ([, d]) => ({'margin-top': `${d / 2}em`})],
  [/^ml-(\d+)$/, ([, d]) => ({'margin-left': `${d / 2}em`})],
  [/^mb-(\d+)$/, ([, d]) => ({'margin-bottom': `${d / 2}em`})],
  [/^mr-(\d+)$/, ([, d]) => ({'margin-right': `${d / 2}em`})],
  [/^mx-(\d+)$/, ([, d]) => ({'margin-left': `${d / 2}em`, 'margin-right': `${d / 2}em`})],
  [/^my-(\d+)$/, ([, d]) => ({'margin-left': `${d / 2}em`, 'margin-right': `${d / 2}em`})],
  ['mx-a', {margin: '0 auto'}],
]

const text = [
  ['t-t--u', {'text-transform': 'uppercase'}],
  ['t-t--c', {'text-transform': 'capitalize'}],
  ['t-t--l', {'text-transform': 'lowercase'}],
  ['ta-l', {'text-align': 'left'}],
  ['ta-r', {'text-align': 'right'}],
  ['ta-c', {'text-align': 'center'}],
  [/^fw-(\d)/, ([_, d]) => ({'font-weight': `${d}00`})],
  ['fs-s', {'font-size': '0.85em'}],
  ['fs-m', {'font-size': '1em'}],
  ['fs-l', {'font-size': '1.15em'}],
  [/^fs-(\d+)px$/, ([, d]) => ({'font-size': `${d}px`})],
  [/^fs-(\d+)em$/, ([, d]) => ({'font-size': `${d}em`})],
  [/^fs-(\d+)rem$/, ([, d]) => ({'font-size': `${d}rem`})],
]

const layering = [
  [/^z-index-(\d+)$/, ([, d]) => ({'z-index': d})]
]

export default [
  ...behaviors,
  ...colors,
  ...layouts,
  ...borderRadius,
  ...position,
  ...spacing,
  ...text,
  ...layering
]