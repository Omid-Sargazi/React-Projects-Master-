// Problem3-MultiStepForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const stepSchemas = [
  yup.object({
    firstName: yup.string().required('نام الزامی است').min(2, 'حداقل ۲ کاراکتر'),
    lastName: yup.string().required('نام خانوادگی الزامی است'),
    email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
    phone: yup.string().matches(/^[0-9]{11}$/, 'شماره موبایل معتبر نیست')
  }),
  yup.object({
    address: yup.string().required('آدرس الزامی است').min(10, 'آدرس کامل وارد کنید'),
    city: yup.string().required('شهر الزامی است'),
    postalCode: yup.string().matches(/^[0-9]{10}$/, 'کد پستی ۱۰ رقم است')
  }),
  yup.object({
    username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل ۴ کاراکتر'),
    password: yup.string().required('رمز عبور الزامی است').min(8, 'حداقل ۸ کاراکتر'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'رمز عبور مطابقت ندارد')
  })
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(stepSchemas[step - 1]),
    defaultValues: formData
  });

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const onSubmit = (data) => {
    const finalData = { ...formData, ...data };
    console.log('Final form data:', finalData);
    // Submit to API
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="form-step">
            <h3>اطلاعات شخصی</h3>
            <input {...register('firstName')} placeholder="نام" />
            {errors.firstName && <span>{errors.firstName.message}</span>}
            
            <input {...register('lastName')} placeholder="نام خانوادگی" />
            {errors.lastName && <span>{errors.lastName.message}</span>}
            
            <input {...register('email')} placeholder="ایمیل" type="email" />
            {errors.email && <span>{errors.email.message}</span>}
            
            <input {...register('phone')} placeholder="شماره موبایل" />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>
        );
      
      case 2:
        return (
          <div className="form-step">
            <h3>آدرس</h3>
            <textarea {...register('address')} placeholder="آدرس کامل" />
            {errors.address && <span>{errors.address.message}</span>}
            
            <input {...register('city')} placeholder="شهر" />
            {errors.city && <span>{errors.city.message}</span>}
            
            <input {...register('postalCode')} placeholder="کد پستی" />
            {errors.postalCode && <span>{errors.postalCode.message}</span>}
          </div>
        );
      
      case 3:
        return (
          <div className="form-step">
            <h3>تنظیمات حساب</h3>
            <input {...register('username')} placeholder="نام کاربری" />
            {errors.username && <span>{errors.username.message}</span>}
            
            <input {...register('password')} type="password" placeholder="رمز عبور" />
            {errors.password && <span>{errors.password.message}</span>}
            
            <input {...register('confirmPassword')} type="password" placeholder="تکرار رمز عبور" />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      <div className="progress-bar">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStep()}
        
        <div className="form-navigation">
          {step > 1 && (
            <button type="button" onClick={prevStep}>قبلی</button>
          )}
          
          {step < 3 ? (
            <button type="button" onClick={nextStep}>بعدی</button>
          ) : (
            <button type="submit">ثبت‌نام</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;