import SignUpFormStep from '../components/SignUpFormStep.vue';
import SelectInterestsFormStep from '../components/SelectInterestsFormStep.vue';

class FormData {

  static steps = [
    {
      name: 'sign-up',
      title: 'Sign Up',
      form: SignUpFormStep,
      validator: (formData) => {
        const errors = [];
        if (formData.name == '') {
          errors.push('Name is required');
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.push('Email is malformed');
        }
        return errors;
      },
    },
    {
      name: 'select-interests',
      title: 'Select Interests',
      form: SelectInterestsFormStep,
      validator: (formData) => {
        const errors = [];
        if (formData.interests.length === 0) {
          errors.push('Select at least one interest');
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
