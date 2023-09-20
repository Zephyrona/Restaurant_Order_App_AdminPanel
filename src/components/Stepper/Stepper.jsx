import { useState, useEffect } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function StepperForWaiter() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [isStatus, setIsStatus] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  useEffect(() => {
    const waiter = false;
    const chef = true;
    const admin = true;

    if (waiter) {
      setIsStatus(false);
    } else if (chef || admin) {
      setIsStatus(true);
    } else {
      setIsStatus(false);
    }
  }, []);


  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        lineClassName="bg-text-grey"
        activeLineClassName="bg-primary"
      >
        <Step
          onClick={() => setActiveStep(0)}
          className="relative"
          activeClassName="text-white bg-primary"
          completedClassName="text-white bg-primary"
        >
          {activeStep === 0 ? (
            <Icon icon="carbon:checkmark" className="h-5 w-5" />
          ) : (
            <Icon icon="material-symbols:order-play" className="h-5 w-5" />
          )}
          <div className="absolute -bottom-[3rem] w-max text-center">
            <Typography
              variant="h6"
              className={activeStep === 0 ? "text-primary" : "text-text-grey"}
            >
              Order accepted
            </Typography>
          </div>
        </Step>
        <Step
          onClick={() => setActiveStep(1)}
          activeClassName="text-white bg-primary"
          completedClassName="text-white bg-primary"
        >
          {activeStep === 1 ? (
            <Icon icon="carbon:checkmark" className="h-5 w-5" />
          ) : (
            <Icon icon="ph:knife" className="h-5 w-5" />
          )}
          <div className="absolute -bottom-[3rem] w-max text-center">
            <Typography
              variant="h6"
              className={activeStep === 1 ? "text-primary" : "text-text-grey"}
            >
              Order prepared
            </Typography>
          </div>
        </Step>
        <Step
          onClick={() => setActiveStep(2)}
          activeClassName="text-white bg-primary"
          completedClassName="text-white bg-primary"
        >
          {activeStep === 2 ? (
            <Icon icon="carbon:checkmark" className="h-5 w-5" />
          ) : (
            <Icon icon="icon-park-outline:cook" className="h-5 w-5" />
          )}
          <div className="absolute -bottom-[3rem] w-max text-center">
            <Typography
              variant="h6"
              className={activeStep === 2 ? "text-primary" : "text-text-grey"}
            >
              Order cooked
            </Typography>
          </div>
        </Step>
        <Step
          onClick={() => setActiveStep(3)}
          activeClassName="text-white bg-primary"
          completedClassName="text-white bg-primary"
        >
          {activeStep === 3 ? (
            <Icon icon="carbon:checkmark" className="h-5 w-5" />
          ) : (
            <Icon icon="grommet-icons:compliance" className="h-5 w-5" />
          )}
          <div className="absolute -bottom-[3rem] w-max text-center">
            <Typography
              variant="h6"
              className={activeStep === 3 ? "text-primary" : "text-text-grey"}
            >
              Order completed
            </Typography>
          </div>
        </Step>
      </Stepper>
      <div className="mt-20 flex justify-between items-center">
        {isStatus && (
          <>
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Typography variant="h6" className="text-text-grey">
              {activeStep + 1} of 4
            </Typography>
            <div className="flex flex-row gap-[10px]">
              <Icon
                icon="carbon:checkmark"
                className={`h-5 w-5 ${
                  activeStep === 3 ? "text-primary" : "text-text-grey"
                }`}
              />
              <Typography
                variant="h6"
                className={activeStep === 3 ? "text-primary" : "text-text-grey"}
              >
                Order completed
              </Typography>
            </div>
            <Button onClick={handleNext} disabled={isLastStep}>
              Next
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
