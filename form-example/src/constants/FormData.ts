import SignUpFormStep from '../components/SignUpFormStep.vue';
import SelectInterestsFormStep from '../components/SelectInterestsFormStep.vue';
import SubscriptionFormStep from '../components/SubscriptionFormStep.vue';
import type { FormSubmitData } from '../types/FormSubmitData.d';

class FormData {

  static steps = [
    {
      name: 'sign-up',
      title: 'Sign Up',
      form: SignUpFormStep,
      validator: (formData: FormSubmitData) => {
        const errors = [];
        if (formData.name == '') {
          errors.push('Name is required');
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.push('Invalid email address');
        }
        return errors;
      },
    },
    {
      name: 'select-interests',
      title: 'Select Interests',
      form: SelectInterestsFormStep,
      validator: (formData: FormSubmitData) => {
        const errors = [];
        if (formData.interests.length === 0) {
          errors.push('At least one interest selection is required');
        }
        return errors;
      },
    },
    {
      name: 'subscription',
      title: 'Subscription',
      form: SubscriptionFormStep,
      validator: (formData: FormSubmitData) => {
        const errors = [];
        if (formData.donation !== '' && formData.donation < 0) {
          errors.push('Donation cannot be negative');
        } else if (formData.donation !== null && formData.donation * 100 % 1 !== 0) {
          errors.push('Donation cannot contain fractional cents');
        }
        if (formData.frequency === '') {
          errors.push('Frequency is required');
        } else if (formData.frequency !== null && (formData.frequency <= 0 || formData.frequency >= 10)) {
          errors.push('Frequency must be between 0 and 10');
        } else if (formData.frequency !== null && formData.frequency % 1 !== 0) {
          errors.push('Frequency must be a whole number');
        }
        return errors;
      },
    },
  ];

  static getRoutes(): any[] {
    return this.steps.map((step, stepIdx: number) => ({
      path: `/${step.name}`,
      name: step.name,
      component: () => import('../views/FormStep.vue'),
      props: {
        title: step.title,
        stepIdx,
        form: step.form,
        validator: step.validator,
      },
    }));
  }
}

export default FormData;