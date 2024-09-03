// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { ThemeProvider } from 'styled-components';
// import BoxStyled from './BoxStyled';
// import { defaultTheme } from '@/theme';

// describe('BoxStyled component', () => {
//   test('renders with various styling and positioning properties', () => {
//     const { container } = render(
//       <ThemeProvider theme={defaultTheme}>
//         <BoxStyled
//           top={10}
//           left={20}
//           right={30}
//           bottom={40}
//           border="1px solid"
//           borderTop="2px dashed"
//           borderLeft="3px dotted"
//           borderRight="4px double"
//           borderBottom="5px groove"
//           isStretched={false}
//           flex={2}
//           alignItems="center"
//           isFlexWrapping={true}
//           minWidth="100px"
//           maxWidth="200px"
//           minHeight="50px"
//           maxHeight="100px"
//           verticalBreakPoint={768}
//           justifyContent="flex-end"
//           flexDirection="column"
//           borderStyle="dashed"
//           borderWidth="3px"
//           borderRadius="8px"
//           minHeight="100px"
//           paddingTop="10px"
//           paddingLeft="20px"
//           paddingRight="30px"
//           paddingBottom="40px"
//           marginTop="10px"
//           marginLeft="20px"
//           marginRight="30px"
//           marginBottom="40px"
//           borderColorName="primary"
//           backgroundColorName="gray1"
//           cursor="pointer"
//           overflow="hidden"
//         />
//       </ThemeProvider>
//     );

//     const boxElement = container.firstChild as HTMLElement;

//     expect(boxElement).toHaveStyle({
//       top: '10px',
//       left: '20px',
//       right: '30px',
//       bottom: '40px',
//       border: '1px solid',
//       borderTop: '2px dashed',
//       borderLeft: '3px dotted',
//       borderRight: '4px double',
//       borderBottom: '5px groove',
//       borderStyle: 'dashed',
//       borderWidth: '3px',
//       borderRadius: '8px',
//       minWidth: '100px',
//       maxWidth: '200px',
//       minHeight: '100px',
//       maxHeight: '100px',
//       flex: 'none', // Because isStretched is false
//       alignItems: 'center',
//       flexWrap: 'wrap',
//       justifyContent: 'flex-end',
//       flexDirection: 'column',
//       overflow: 'hidden',
//       paddingTop: '10px',
//       paddingLeft: '20px',
//       paddingRight: '30px',
//       paddingBottom: '40px',
//       marginTop: '10px',
//       marginLeft: '20px',
//       marginRight: '30px',
//       marginBottom: '40px',
//       borderColor: defaultTheme.colors.primary,
//       backgroundColor: defaultTheme.colors.gray1,
//       cursor: 'pointer',
//       display: 'flex' // isVisible is true by default
//     });

//     // Check media query for verticalBreakPoint
//     expect(boxElement).toHaveStyle(`
//       @media(max-width: 768px) {
//         flexDirection: 'column';
//       }
//     `);
//   });
// });
