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
        } else if (formData.donation !== null && !/^\s*-?\d+(\.\d{1,2})?\s*$/.test(formData.donation)) {
          errors.push('Donation cannot contain fractional cents');
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
