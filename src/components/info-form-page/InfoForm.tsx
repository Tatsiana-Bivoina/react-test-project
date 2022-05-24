import { FormCardsContainer } from './form-cards-container/FormCardsContainer';
import { FormContainer } from './form-container/FormContainer';
import './info-form.scss';

export const InfoForm = () => {
  return (
    <section data-testid="form-section" className="info-form-section">
      <div className="wrapper">
        <FormContainer />
        <FormCardsContainer />
      </div>
    </section>
  );
};
