import { BoxStyled } from '@/shared/components';
import { Route, Routes } from 'react-router-dom';
import { Cart, Home, NotFound, Success } from '@/domain/pages';

const AppBody = () => {
  return (
    <BoxStyled $backgroundColorName="secondary" className="outlet-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BoxStyled>
  );
};

export default AppBody;
