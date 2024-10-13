import React, { useState } from 'react';
import { useBackgroundAnimation } from '../../hooks/use-zoom-rotation';

const OnboardingStep = ({
  title,
  content,
  onNext,
  onPrevious,
  showPrevious,
  showNext,
  children,
}) => (
  <div className="flex flex-col p-12 items-center justify-center bg-gray-50 w-1/3 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    {!children && (
      <>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-lg mb-8">{content}</div>
      </>
    )}
    {children}
    <div className="flex justify-between w-full px-4">
      {showPrevious && (
        <button
          onClick={onPrevious}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      )}
      {showNext && (
        <button
          onClick={onNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      )}
    </div>
  </div>
);

const OnboardingFlow = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [flowType, setFlowType] = useState(null);
  const { scale, rotation } = useBackgroundAnimation();

  const newAccountSteps = [
    {
      title: 'Create New Account',
      content: <p>
        Enter your email and password to create a new account.
      </p>,
    },
    {
      title: 'Choose Your Preferences',
      content: <p>
        Select your preferred themes and notification settings.
      </p>,
    },
    {
      title: 'Account Created',
      content: <p>
        Congratulations! Your account has been created successfully.
      </p>,
    },
  ];

  const loginSteps = [
    {
      title: 'Welcome Back',
      content: <p>
        Enter your email and password to log in to your account.
      </p>,
    },
    {
      title: 'Account Verified',
      content: <p>Your account has been verified. Welcome back!</p>,
    },
  ];

  const handleNext = () => {
    if (flowType === 'newAccount' && step < newAccountSteps.length - 1) {
      setStep(step + 1);
    } else if (flowType === 'login' && step < loginSteps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    setFlowType(null);
    setStep(0);
  };

  const selectFlow = (type) => {
    setFlowType(type);
    setStep(0);
  };

  const currentSteps = flowType === 'newAccount' ? newAccountSteps : loginSteps;

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(/public/blue.png)',
          transformOrigin: 'center center',
          transform: `scale(${scale}) rotate(${rotation}deg)`,
        }}
      ></div>
      {!flowType ? (
        <OnboardingStep
          onNext={() => {}}
          onPrevious={() => {}}
          showPrevious={false}
          showNext={false}
        >
          <div className="flex flex-col justify-center">
            <button
              onClick={() => selectFlow('newAccount')}
              className="bg-blue-500 text-white px-6 py-2 mb-2 rounded hover:bg-blue-600"
            >
              Create New Account
            </button>
            <button
              onClick={() => selectFlow('login')}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Login
            </button>
          </div>
        </OnboardingStep>
      ) : (
        <OnboardingStep
          title={currentSteps[step].title}
          content={currentSteps[step].content}
          onNext={handleNext}
          onPrevious={handlePrevious}
          showPrevious={true}
          showNext={true}
        />
      )}
    </div>
  );
};

export default OnboardingFlow;
